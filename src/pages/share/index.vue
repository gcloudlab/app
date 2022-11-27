<template>
  <div class="share-detail mt-10 flex justify-center items-start w-full">
    <n-thing class="shadow rounded p-4" style="width: 50vw; min-width: 320px; max-width: 550px">
      <template #avatar>
        <n-skeleton v-if="fetching" width="34px" height="34px" />
        <n-avatar v-else :src="share_detail.avatar" :fallback-src="defaultAvatar" />
      </template>
      <template #header>
        <n-skeleton v-if="fetching" text width="60%" />
        <span v-else>
          来自 <span class="text-primary">{{ share_detail.owner || '匿名用户' }}</span> 的分享
        </span>
      </template>
      <template #header-extra>
        <n-tooltip trigger="hover">
          <template #trigger>
            <n-button secondary type="primary" size="small" @click="handleCopyLink">
              <template #icon>
                <CopyOutline />
              </template>
            </n-button>
          </template>
          点击复制分享链接
        </n-tooltip>
      </template>
      <template #description>
        {{ transformDate(share_detail.updated_at) }}
      </template>
      <n-skeleton v-if="fetching" text width="100%" :repeat="3" />
      <div v-else>
        <n-p>{{ copy_info }}</n-p>
        <n-p v-if="share_detail.desc !== ''" class="p-3 bg-gray-100 SmileySans">
          留言：{{ share_detail.desc }}
        </n-p>
      </div>
      <template #footer>
        <n-skeleton v-if="fetching" text width="70%" />
        <div class="flex items-center" v-else>
          <n-button type="primary" size="tiny" quaternary>
            <template #icon>
              <n-icon>
                <EyeOutline />
              </n-icon>
            </template>
            {{ share_detail.click_num }}
          </n-button>
          <n-divider vertical />
          {{ transformSize(share_detail.size) }}
          <n-divider vertical />
          <div v-if="rest_expired_time > 0">
            将在<span class="text-warning"> <n-countdown :duration="rest_expired_time" /> </span
            >小时后失效
          </div>
          <div v-else-if="share_detail.expired_time === -1">永久</div>
          <div v-else class="text-error">分享已失效</div>
        </div>
      </template>
      <template #action>
        <div
          v-if="
            (rest_expired_time > 0 || share_detail.expired_time === -1) &&
            share_detail.owner !== authStore.auth?.name
          "
        >
          <n-popover
            :show="showFolderTree"
            placement="top"
            trigger="manual"
            @clickoutside="showFolderTree = false"
          >
            <template #trigger>
              <n-button-group>
                <n-button type="primary" size="small" @click="handleOpenSaveFolder">
                  保存{{ moveFileInfo.name ? `到${moveFileInfo.name}` : '' }}
                </n-button>
                <n-button
                  v-if="moveFileInfo.name !== ''"
                  :disabled="moveFileInfo.name === ''"
                  size="small"
                  @click="handleSaveFile"
                >
                  确认
                </n-button>
              </n-button-group>
            </template>
            <FolderTree
              v-if="origin_folders.length > 0"
              :data="origin_folders"
              :node-props="nodeProps"
            />
            <div v-else class="text-xs text-center">
              {{ authStore.sign_status ? '请先新建文件夹' : '未登陆' }}
            </div>
          </n-popover>
          <!-- <n-button size="small"> 预览 </n-button>
          <n-button size="small"> 下载 </n-button> -->
        </div>
      </template>
    </n-thing>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, reactive, defineAsyncComponent, watch } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useShare } from '@/hooks/useShare';
import { useFiles } from '@/hooks/useFiles';
import { useAuth } from '@/hooks/useAuthentication';
import defaultAvatar from '@/assets/logo.png';
import useClipboard from 'vue-clipboard3';
import {
  NThing,
  NSkeleton,
  NButton,
  NButtonGroup,
  NAvatar,
  NCountdown,
  NDivider,
  NTooltip,
  NP,
  NIcon,
  NPopover,
  TreeOption,
} from 'naive-ui';
import { CopyOutline, EyeOutline } from '@vicons/ionicons5';
import { transformSecondsToHours, transformDate, dateFromNow } from '@/utils/date';
import { onSuccess, onError, onWarning } from '@/utils/messages';
import { transformSize } from '@/utils/transform-size';
const FolderTree = defineAsyncComponent(() => import('@/components/folder-tree/index.vue'));

const router = useRouter();
const { authStore } = useAuth();
const { shareStore, onGetShareDetailByIndentity, onSaveShareBasic } = useShare();
const { fileStore, onGetFileList } = useFiles();
const { toClipboard } = useClipboard();
const current_share_file_id = ref(router.currentRoute.value.params.id as string);
const showFolderTree = ref(false);
const moveFileInfo = reactive({
  repository_identity: '',
  parent_id: -1,
  name: '',
});

onMounted(async () => {
  if (current_share_file_id.value) {
    onGetShareDetailByIndentity(current_share_file_id.value);
  }
});

const rest_expired_time = computed(() =>
  current_share_file_id.value
    ? (shareStore.share_detail.expired_time -
        dateFromNow(shareStore.share_detail.updated_at, 'seconds')) *
      1000
    : 0
);

const copy_info = computed(
  () =>
    `我在GCloud云盘分享了文件「${
      shareStore.share_detail.name
    }」，访问链接 https://gcloud.website/#/s/${
      shareStore.share_detail.identity
    } 即可获取文件，有效期${transformSecondsToHours(shareStore.share_detail.expired_time)}。`
);

const handleCopyLink = () => {
  try {
    toClipboard(copy_info.value).then(() => {
      onSuccess('复制成功');
    });
  } catch (error) {
    onError('出错了');
  }
};

const handleOpenSaveFolder = () => {
  showFolderTree.value = true;
};

const handleSaveFile = async () => {
  if (!authStore.sign_status) {
    onWarning('请先登录');
    return;
  }
  await onSaveShareBasic(moveFileInfo).then(() => {
    moveFileInfo.parent_id = -1;
    moveFileInfo.repository_identity = '';
    moveFileInfo.name = '';
  });
};

const nodeProps = ({ option }: { option: TreeOption }) => {
  return {
    onClick() {
      if (option.type === '文件夹' && option.identity !== 'public') {
        moveFileInfo.parent_id = option.id as number;
        moveFileInfo.repository_identity = shareStore.share_detail.repository_identity;
        moveFileInfo.name = option.name as string;
      }
    },
  };
};

watch(
  () => shareStore.share_detail,
  async () => {
    if (
      shareStore.share_detail &&
      authStore.auth &&
      shareStore.share_detail.owner !== authStore.auth?.name
    ) {
      await onGetFileList();
    }
  }
);

const { share_detail, fetching } = storeToRefs(shareStore);
const { origin_folders } = storeToRefs(fileStore);
</script>

<style lang="scss" scoped>
.share-detail {
  height: calc(100vh - 84px);
}
</style>

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
        <n-p v-if="share_detail.desc !== ''" class="p-3 bg-gray-100">
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
            将在<span class="text-warning" v-if="share_detail.expired_time > 0">
              <n-countdown :duration="rest_expired_time" /> </span
            >小时后失效
          </div>
          <div v-else class="text-error">已失效</div>
        </div>
      </template>
      <template #action>
        <n-button size="small"> 保存 </n-button>
        <n-button size="small"> 预览 </n-button>
        <n-button size="small"> 下载 </n-button>
      </template>
    </n-thing>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useShareOutsideStore } from '@/store/modules/share';
import { useShare } from '@/hooks/useShare';
import defaultAvatar from '@/assets/logo.png';
import useClipboard from 'vue-clipboard3';
import {
  NThing,
  NSkeleton,
  NButton,
  NAvatar,
  NCountdown,
  NDivider,
  NTooltip,
  NP,
  NIcon,
} from 'naive-ui';
import { CopyOutline, EyeOutline } from '@vicons/ionicons5';
import { transformSecondsToHours, transformDate, dateFromNow } from '@/utils/date';
import { onSuccess, onError } from '@/utils/messages';
import { transformSize } from '@/utils/transform-size';

const router = useRouter();
const shareStore = useShareOutsideStore();
const { onGetShareDetailByIndentity } = useShare();
const { toClipboard } = useClipboard();
const current_share_file_id = ref(router.currentRoute.value.params.id as string);

onMounted(() => {
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
    }」，复制此段信息并访问链接 https://gcloud.website/#/s/${
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

const { share_detail, fetching } = storeToRefs(shareStore);
</script>

<style lang="scss" scoped>
.share-detail {
  height: calc(100vh - 84px);
}
</style>

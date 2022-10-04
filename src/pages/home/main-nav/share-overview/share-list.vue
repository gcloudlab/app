<template>
  <div class="share-list">
    <n-list hoverable clickable>
      <n-list-item v-for="share_detail in data" :key="share_detail.identity">
        <n-thing title="热门分享" content-style="margin-top: 10px;">
          <template #avatar>
            <n-avatar :src="share_detail.avatar" :fallback-src="defaultAvatar" />
          </template>
          <template #header>
            <div class="text-sm truncate">
              <span class="text-secondary">{{ share_detail.owner || '匿名用户' }}</span>
              <span class=""> 分享了{{ share_detail.name }}</span>
            </div>
          </template>
          <template #header-extra>
            <n-tooltip trigger="hover">
              <template #trigger>
                <n-button
                  quaternary
                  type="primary"
                  size="tiny"
                  @click="router.push(`/s/${share_detail.identity}`)"
                >
                  <template #icon>
                    <LinkOutline />
                  </template>
                </n-button>
              </template>
              查看详情
            </n-tooltip>
          </template>
          <template #description>
            <div class="text-xs flex items-center">
              <n-button type="primary" size="tiny" quaternary>
                <template #icon>
                  <EyeOutline />
                </template>
                {{ share_detail.click_num }}
              </n-button>
              <n-divider vertical />
              {{ transformSize(share_detail.size) }}
              <n-divider vertical />
              {{ transformDate(share_detail.updated_at) }}
              <div v-if="share_detail.desc !== ''">
                <n-divider vertical />
                <n-popover trigger="click">
                  <template #trigger>
                    <n-button size="tiny" quaternary>留言</n-button>
                  </template>
                  <n-p class="animate__animated animate__fadeIn faster">
                    {{ share_detail.desc }}
                  </n-p>
                </n-popover>
              </div>
            </div>
          </template>
        </n-thing>
      </n-list-item>
    </n-list>
  </div>
</template>

<script setup lang="ts">
import { PropType, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { ShareDetailItem } from '@/models/share';
import { transformDate } from '@/utils/date';
import { transformSize } from '@/utils/transform-size';
import {
  NList,
  NListItem,
  NThing,
  NTooltip,
  NButton,
  NP,
  NAvatar,
  NDivider,
  NPopover,
} from 'naive-ui';
import defaultAvatar from '@/assets/logo.png';
import { EyeOutline, LinkOutline } from '@vicons/ionicons5';

const props = defineProps({
  data: {
    type: Object as PropType<ShareDetailItem[]>,
    required: true,
  },
});
const router = useRouter();

toRefs(props);
</script>

<style lang="scss">
.share-list {
  .n-list {
    background-color: transparent;
  }
  .n-list .n-list-item {
    padding: 5px 5px 4px 5px;
  }
  .n-thing .n-thing-main .n-thing-header .n-thing-header__title {
    width: 80%;
  }
}
</style>

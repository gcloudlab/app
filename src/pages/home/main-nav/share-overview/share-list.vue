<template>
  <div class="share-list">
    <n-list hoverable clickable>
      <n-list-item v-for="share_detail in data">
        <n-thing title="热门分享" content-style="margin-top: 10px;">
          <template #avatar>
            <n-avatar :src="share_detail.avatar" :fallback-src="defaultAvatar" />
          </template>
          <template #header>
            <div class="truncate text-sm w-full">
              <div class="w-2/3">
                <span class="text-secondary">{{ share_detail.owner || '匿名用户' }}</span>
                分享了 {{ share_detail.name }}
              </div>
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
              {{ transformDate(share_detail.updated_at) }}
              <n-divider vertical />
              {{ transformSize(share_detail.size) }}
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
import { NList, NListItem, NThing, NTooltip, NButton, NP, NAvatar, NDivider } from 'naive-ui';
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
  .n-list .n-list-item {
    padding: 5px 5px 0px 5px;
  }
}
</style>

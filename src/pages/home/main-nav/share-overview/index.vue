<template>
  <div class="share-overview">
    <n-h5
      prefix="bar"
      class="text-primary bg-header shadow-sm rounded p-2 top-0 mb-0"
      style="position: sticky"
    >
      热门分享
    </n-h5>
    <n-scrollbar style="height: calc(100vh - 243px)">
      <div class="px-3 pt-2 animate__animated animate__fadeIn faster">
        <div v-if="popular_share_list && popular_share_list.length > 0">
          <ShareList :data="popular_share_list" />
        </div>
        <div v-else-if="fetching" class="p-1">
          <n-skeleton class="mb-2" height="35px" :repeat="8" :sharp="false" />
        </div>
        <Empty v-else description="空空如也" />
      </div>
    </n-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useShare } from '@/hooks/useShare';
import { NSkeleton, NScrollbar, NH5 } from 'naive-ui';
const ShareList = defineAsyncComponent(() => import('./share-list.vue'));
const Empty = defineAsyncComponent(() => import('@/components/commons/empty/index.vue'));

const { shareStore, onGetPopularShareList } = useShare();

onMounted(async () => {
  await onGetPopularShareList();
});

const { fetching, popular_share_list } = storeToRefs(shareStore);
</script>

<style lang="scss" scoped></style>

<template>
  <div class="shadow">
    <n-h5 prefix="bar" class="text-primary top-0" style="position: sticky">热门分享</n-h5>
    <n-scrollbar style="height: calc(100vh - 243px)">
      <div v-if="popular_share_list && popular_share_list.length > 0">
        <ShareList :data="popular_share_list" />
      </div>
      <div v-else-if="fetching" class="p-4">
        <n-skeleton class="mb-1" height="35px" :repeat="6" :sharp="false" />
      </div>
      <Empty v-else description="空空如也" />
    </n-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useShareOutsideStore } from '@/store/modules/share';
import { useShare } from '@/hooks/useShare';
import { NSkeleton, NScrollbar, NH5 } from 'naive-ui';
const ShareList = defineAsyncComponent(() => import('./share-list.vue'));
const Empty = defineAsyncComponent(() => import('@/components/commons/empty/index.vue'));

const shareStore = useShareOutsideStore();
const { onGetPopularShareList } = useShare();

onMounted(async () => {
  await onGetPopularShareList();
});

const { fetching, popular_share_list } = storeToRefs(shareStore);
</script>

<style lang="scss" scoped></style>

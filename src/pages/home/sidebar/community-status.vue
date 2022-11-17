<template>
  <n-divider class="text-sm m-0" title-placement="left"> 😎 社区状况 </n-divider>
  <div v-if="globalStore.register_count !== -1 || !globalStore.fetching" class="pb-2">
    <div class="analysize px-3 pb-2 text-sm flex justify-start items-center">
      <div class="flex-none">活跃用户：</div>
      <div class="text-primary">
        <n-number-animation :from="0" :to="globalStore.register_count" />
      </div>
      &nbsp;位
    </div>
    <div class="analysize px-3 pb-2 text-sm flex justify-start items-center">
      <div class="flex-none">累计分享：</div>
      <div class="text-primary"><n-number-animation :from="0" :to="globalStore.share_count" /></div>
      &nbsp;次
    </div>
    <div class="analysize px-3 pb-2 text-sm flex justify-start items-center">
      <div class="flex-none">浏览分享：</div>
      <div class="text-primary"><n-number-animation :from="0" :to="globalStore.click_num" /></div>
      &nbsp;次
    </div>
  </div>
  <div v-else class="px-3 pb-2">
    <n-skeleton text :repeat="3" :sharp="false" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { NDivider, NSkeleton, NNumberAnimation } from 'naive-ui';
import { useGlobal } from '@/hooks/useGlobal';

const { globalStore, useRegisterCount, useShareStatistics } = useGlobal();

onMounted(() => {
  useRegisterCount();
  useShareStatistics();
});
</script>

<style lang="scss" scoped></style>

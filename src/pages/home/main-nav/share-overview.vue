<template>
  <div class="shadow">
    <n-h4 prefix="bar" class="text-primary top-0" style="position: sticky">热门分享</n-h4>
    <n-scrollbar style="height: calc(100vh - 245px)">
      <div v-if="0"></div>
      <div v-else-if="0" class="p-4">
        <n-skeleton class="mb-1" height="20px" :repeat="10" :sharp="false" />
      </div>
      <Empty v-else description="敬请期待" />
    </n-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { NSkeleton, NScrollbar, NH4 } from 'naive-ui';
const Empty = defineAsyncComponent(() => import('@/components/commons/empty/index.vue'));
</script>

<style lang="scss" scoped></style>

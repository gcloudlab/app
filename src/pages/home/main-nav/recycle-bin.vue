<template>
  <n-scrollbar style="max-height: calc(100vh - 234px)">
    <n-h4 prefix="bar" class="text-primary">回收站</n-h4>
    <div v-if="deleted_files.length > 0"></div>
    <div v-else-if="fetching" class="p-4">
      <n-skeleton class="mb-1" height="20px" :repeat="10" :sharp="false" />
    </div>
    <Empty v-else description="空空如也" />
  </n-scrollbar>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useFileOutsideStore } from '@/store/modules/file';
import { NSkeleton, NScrollbar, NH4 } from 'naive-ui';
const Empty = defineAsyncComponent(() => import('@/components/commons/empty/index.vue'));

const fileStore = useFileOutsideStore();

const { deleted_files, fetching } = storeToRefs(fileStore);
</script>

<style lang="scss" scoped></style>

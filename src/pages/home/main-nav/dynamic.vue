<template>
  <n-h5 prefix="bar" class="text-primary top-0" style="position: sticky">动态</n-h5>
  <n-scrollbar style="height: 100%">
    <div v-if="0"></div>
    <div v-else-if="fetching" class="p-4">
      <n-skeleton class="mb-1" height="20px" :repeat="5" :sharp="false" />
    </div>
    <!-- <Empty v-else description="敬请期待" /> -->
    <img v-else class="w-full" :src="CTRL" alt="jntm" />
  </n-scrollbar>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useFileOutsideStore } from '@/store/modules/file';
import { NSkeleton, NScrollbar, NH5 } from 'naive-ui';
import CTRL from '@/assets/ctrl.gif';
// const Empty = defineAsyncComponent(() => import('@/components/commons/empty/index.vue'));

const fileStore = useFileOutsideStore();

const { deleted_files, fetching } = storeToRefs(fileStore);
</script>

<style lang="scss" scoped></style>

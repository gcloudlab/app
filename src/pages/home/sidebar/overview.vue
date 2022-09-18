<template>
  <div class="overview">
    <n-divider class="text-sm m-0" title-placement="left"> 🤖 总览 </n-divider>
    <div
      v-if="files_count !== -1 || !fetching"
      class="pb-2 animate__animated animate__fadeIn faster"
    >
      <ProgressView
        label="私有存储"
        :percentage="Number((files_size / 10485760).toFixed(2))"
        :from="0"
        :to="Number(transformSize(files_size).slice(0, transformSize(files_size).length - 2))"
        :precision="1"
      >
        {{ transformSize(files_size).slice(-2) }}
      </ProgressView>
      <ProgressView
        label="公共存储"
        :percentage="Number((public_size / 10485760).toFixed(2))"
        :from="0"
        :to="Number(transformSize(public_size).slice(0, transformSize(public_size).length - 2))"
        :precision="1"
      >
        {{ transformSize(public_size).slice(-2) }}
      </ProgressView>
      <ProgressView label="私有文件" :percentage="files_count" :from="0" :to="files_count" />
    </div>
    <div v-else class="px-3 pb-2">
      <n-skeleton text :repeat="2" :sharp="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFileOutsideStore } from '@/store/modules/file';
import { NDivider, NProgress, NSkeleton, NNumberAnimation, useThemeVars } from 'naive-ui';
import { transformSize } from '@/utils/transform-size';
import ProgressView from '@/components/progress-view/index.vue';

const fileStore = useFileOutsideStore();
const themeVars = useThemeVars();
// console.log(themeVars.value.primaryColor);

const { files_count, public_count, files_size, public_size, fetching } = storeToRefs(fileStore);
</script>

<style lang="scss">
.overview {
  .n-progress.n-progress--line {
    max-width: 120px;
  }
}
</style>

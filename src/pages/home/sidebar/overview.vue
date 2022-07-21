<template>
  <div class="overview">
    <n-divider class="text-sm m-0" title-placement="left"> 总览 </n-divider>
    <div v-if="files_count !== -1" class="pb-2">
      <div class="analysize px-3 text-sm flex justify-start items-center">
        <div class="flex-none">存储：</div>
        <n-progress
          class="w-12"
          type="line"
          :stroke-width="6"
          indicator-placement="inside"
          :color="themeVars.errorColor"
          :indicator-text-color="themeVars.infoColor"
          :rail-color="themeVars.primaryColor"
          :percentage="Number((files_size / 2 / 10 ** 6).toFixed(2))"
          processing
        />
        <div class="pl-2">
          <n-number-animation
            :from="0"
            :to="Number(transformSize(files_size).slice(0, transformSize(files_size).length - 2))"
            :precision="1"
          />
        </div>
        {{ transformSize(files_size).slice(-2) }}
      </div>
      <div class="analysize text-sm p-3 flex justify-start items-center">
        <div class="flex-none">文件：</div>
        <n-progress
          type="line"
          :stroke-width="6"
          indicator-placement="inside"
          :color="themeVars.errorColor"
          :percentage="files_count / 10"
          :rail-color="themeVars.primaryColor"
          processing
        />
        <div class="pl-2"><n-number-animation :from="0" :to="files_count" /></div>
      </div>
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

const fileStore = useFileOutsideStore();
const themeVars = useThemeVars();
// console.log(themeVars.value.primaryColor);

const { files_count, files_size } = storeToRefs(fileStore);
</script>

<style lang="scss">
.overview {
  .n-progress.n-progress--line {
    max-width: 120px;
  }
}
</style>

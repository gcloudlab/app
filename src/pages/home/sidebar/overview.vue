<template>
  <div class="overview">
    <n-divider class="text-sm m-0" title-placement="left"> 🤖 用户总览 </n-divider>
    <div
      v-if="files_count !== -1 || !fetching"
      class="pb-2 animate__animated animate__fadeIn faster SmileySans"
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
        label="公区存储"
        :percentage="Number((owner_public_files_size / 10485760).toFixed(2))"
        :from="0"
        :to="
          Number(
            transformSize(owner_public_files_size).slice(
              0,
              transformSize(owner_public_files_size).length - 2
            )
          )
        "
        :precision="1"
      >
        {{ transformSize(owner_public_files_size).slice(-2) }}
      </ProgressView>
      <ProgressView label="私有文件" :percentage="files_count" :from="0" :to="files_count" />
      <ProgressView
        label="公区文件"
        :percentage="owner_public_files.length"
        :from="0"
        :to="owner_public_files.length"
      />
    </div>
    <div v-else class="px-3 pb-2">
      <n-skeleton text :repeat="4" :sharp="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFiles } from '@/hooks/useFiles';
import { NDivider, NSkeleton } from 'naive-ui';
import { transformSize } from '@/utils/transform-size';
import ProgressView from '@/components/progress-view/index.vue';

const { fileStore } = useFiles();

const { files_count, owner_public_files, owner_public_files_size, files_size, fetching } =
  storeToRefs(fileStore);
</script>

<style lang="scss">
.overview {
  .n-progress.n-progress--line {
    max-width: 120px;
  }
}
</style>

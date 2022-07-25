<template>
  <div class="main-nav">
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-3 gap-3">
      <div
        :class="[
          ...boardClasses,
          'row-span-2',
          'flex flex-col justify-between bg-gradient-to-t from-green-100',
        ]"
      >
        <DragUpload class="w-full" action="" />
      </div>
      <Vue3Lottie class="robot w-48 sm:w-48 md:w-56" :animationData="RobotJson" />
      <div :class="[...boardClasses, 'row-span-2']">去分享</div>
      <div :class="[...boardClasses]">hhh</div>
      <div :class="[...boardClasses]" />
      <div :class="[...boardClasses, 'col-span-3 flex']">
        <Attention />
        <AttentionInter />
        <AttentionInter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import DragUpload from '@/components/upload/drag-upload.vue';
import Attention from './attention.vue';
import AttentionInter from './attention-inter.vue';
import RobotJson from '@/assets/lotties/robot.json';
import { useFileOutsideStore } from '@/store/modules/file';

const fileStore = useFileOutsideStore();

const boardClasses = ['rounded', 'shadow'];

const { upload_files } = storeToRefs(fileStore);
</script>

<style lang="scss" scoped>
/* .robot {
 
} */
</style>

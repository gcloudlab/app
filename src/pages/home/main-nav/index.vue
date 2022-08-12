<template>
  <div class="main-nav">
    <div class="flex flex-wrap grid-cols-2 sm:grid-cols-2 m-3 gap-1">
      <div
        :class="[
          ...boardClasses,
          'flex items-center flex-1 bg-gradient-to-t from-green-100 col-auto',
        ]"
      >
        <TriggerUpload class="w-full h-full shadow-sm" title="立即上传" />
        <Vue3Lottie class="robot h-3/4 w-1/4" :animationData="RobotJson" />
      </div>
      <div :class="[...boardClasses, 'h-56 w-full  bg-gradient-to-b from-green-100 ']">
        我的分享
      </div>
      <div :class="[...boardClasses]">
        <AttentionInter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import RobotJson from '@/assets/lotties/robot.json';
import { useFileOutsideStore } from '@/store/modules/file';
import TriggerUpload from '@/components/upload/trigger-upload.vue';
import AttentionInter from './attention-inter.vue';

const fileStore = useFileOutsideStore();

const boardClasses = ['rounded', 'shadow', 'hover:shadow-md', 'transition-all', 'duration-200'];

const { upload_files } = storeToRefs(fileStore);
</script>

<style lang="scss" scoped>
/* .robot {
 
} */
</style>

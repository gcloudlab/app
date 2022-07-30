<template>
  <div class="main-nav">
    <div class="flex flex-wrap grid-cols-2 sm:grid-cols-2 m-3 gap-2">
      <div :class="[...boardClasses, 'flex-1  bg-gradient-to-t from-green-100 col-auto']">
        <DragUpload class="" title="立即上传" />
      </div>
      <Vue3Lottie class="robot w-48 md:w-56" :animationData="RobotJson" />
      <div :class="[...boardClasses, 'h-28 w-full']">去分享去分享去分享</div>
      <div :class="[...boardClasses]">去分享1111</div>
      <div :class="[...boardClasses]">去分享2</div>
      <div :class="[...boardClasses, 'h-28 flex-grow']">hello</div>
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
import DragUpload from '@/components/upload/trigger-upload.vue';
import AttentionInter from './attention-inter.vue';

const fileStore = useFileOutsideStore();

const boardClasses = ['rounded', 'shadow', 'hover:shadow-md', 'transition-all', 'duration-200'];

const { upload_files } = storeToRefs(fileStore);
</script>

<style lang="scss" scoped>
/* .robot {
 
} */
</style>

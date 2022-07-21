<template>
  <div class="attention">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-3 gap-3">
      <div :class="[...boardClasses, 'row-span-2']">
        <DragUpload class="w-full h-48" />
      </div>
      <Vue3Lottie class="robot w-48 sm:w-48 md:w-56" :animationData="RobotJson" />
      <div :class="[...boardClasses, 'row-span-2']">去分享</div>
      <div :class="[...boardClasses, 'h-36']">去社区</div>
      <div :class="[...boardClasses, 'h-36', 'col-span-3']">Tips</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DragUpload from '@/components/upload/drag-upload.vue';
import RobotJson from '@/assets/lotties/robot.json';

const boardClasses = ['bg-gray-100', 'rounded', 'shadow'];
</script>

<style lang="scss" scoped>
/* .robot {
 
} */
</style>

<template>
  <div class="main-nav">
    <div class="flex flex-wrap grid-cols-2 sm:grid-cols-2 mx-2 mt-2 gap-1">
      <div
        :class="[
          ...boardClasses,
          'flex items-center flex-1 col-auto transition-all duration-200 ease-in-out',
        ]"
      >
        <TriggerUpload class="w-full h-full shadow-sm" title="单击上传" />
        <Vue3Lottie
          class="robot w-1/5 bg-gradient-to-t from-green-100"
          :animation-data="RobotJson"
        />
      </div>
      <div class="flex other w-full mb-2" :class="boardClasses">
        <ShareOverview class="flex-1 p-3" />
        <Other class="flex-1 p-3" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { storeToRefs } from 'pinia';
// import { useFileOutsideStore } from '@/store/modules/file';
import RobotJson from '@/assets/lotties/robot.json';
import TriggerUpload from '@/components/upload/trigger-upload.vue';
import ShareOverview from './share-overview/index.vue';
import Other from './other.vue';

// const fileStore = useFileOutsideStore();

const boardClasses = ['rounded'];
</script>

<style lang="scss">
.main-nav {
  .n-h {
    font-size: 14px;
  }
}
</style>

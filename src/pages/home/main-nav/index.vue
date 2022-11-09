<template>
  <div class="main-nav">
    <div class="flex flex-wrap grid-cols-2 sm:grid-cols-2 mx-2 mt-2 gap-1">
      <div
        :class="[
          ...boardClasses,
          'upload-bar flex items-center flex-1 col-auto transition-all duration-200 ease-in-out',
        ]"
      >
        <TriggerUpload class="w-full h-full shadow-sm" title="单击上传" />
        <Vue3Lottie
          v-if="!isMobile()"
          class="robot w-1/5 bg-gradient-to-t from-green-100"
          :animation-data="RobotJson"
        />
      </div>
      <div
        class="flex other w-full mt-1 mb-2 bg-tertiary"
        :class="[...boardClasses, isMobile() ? 'flex-col h-96' : '']"
      >
        <ShareOverview class="flex-1 shadow-sm" />
        <Other class="flex-1 shadow-sm" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isMobile } from '@/utils/is-mobile';
import RobotJson from '@/assets/lotties/robot.json';
import TriggerUpload from '@/components/upload/trigger-upload.vue';
import ShareOverview from './share-overview/index.vue';
import Other from './other.vue';

const boardClasses = ['rounded'];
</script>

<style lang="scss">
.main-nav {
  .n-h {
    font-size: 14px;
    font-weight: 600;
  }
}
</style>

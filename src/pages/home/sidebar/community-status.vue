<template>
  <n-divider class="text-sm m-0" title-placement="left"> 社区 </n-divider>
  <div v-if="false" class="pb-2">
    <div class="analysize px-3 text-sm flex justify-start items-center"></div>
  </div>
  <div v-else class="px-3 pb-2">
    <n-skeleton text :repeat="2" :sharp="false" />
  </div>
</template>

<script setup lang="ts">
import { NDivider, NSkeleton } from 'naive-ui';
</script>

<style lang="scss" scoped></style>

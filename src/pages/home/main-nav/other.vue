<template>
  <div class="flex flex-col shadow" style="height: calc(100vh - 193px)">
    <Dynamic />
    <RecycleBin />
  </div>
</template>

<script setup lang="ts">
import RecycleBin from './recycle-bin.vue';
import Dynamic from './dynamic.vue';
import { NDivider } from 'naive-ui';
</script>

<style lang="scss" scoped></style>

<template>
  <div class="flex flex-col shadow" style="max-height: calc(100vh - 245px)">
    <Dynamic />
    <RecycleBin />
  </div>
</template>

<script setup lang="ts">
import RecycleBin from './recycle-bin.vue';
import Dynamic from './dynamic.vue';
</script>

<style lang="scss" scoped></style>

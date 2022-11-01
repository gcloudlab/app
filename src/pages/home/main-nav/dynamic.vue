<template>
  <n-h5
    prefix="bar"
    class="text-primary bg-header shadow-sm rounded p-2 top-0 mb-0"
    style="position: sticky"
  >
    云盘动态
  </n-h5>
  <n-scrollbar style="height: 100%">
    <div id="dynamic-bar" class="dynamic-bar px-4 pt-3 animate__animated animate__fadeIn faster">
      <UpdateLog />
    </div>
  </n-scrollbar>
</template>

<script setup lang="ts">
import { NScrollbar, NH5 } from 'naive-ui';
import UpdateLog from '@/components/update-log/index.vue';
</script>

<style lang="scss" scoped></style>

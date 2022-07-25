<template>
  <div class="layout">
    <Header />
    <n-scrollbar style="max-height: calc(100vh - 57px)">
      <router-view />
    </n-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { useAuth } from '@/hooks';
import { useFiles } from '@/hooks/useFiles';
import Header from './header.vue';
import { NScrollbar } from 'naive-ui';

const { onGetFileList } = useFiles();
const { onGetUserDetailAndCheckAuth } = useAuth();
onBeforeRouteLeave(leaveGuard => {
  if (leaveGuard.path !== '/sign') {
    onGetUserDetailAndCheckAuth();
  }
});
onMounted(async () => {
  onGetUserDetailAndCheckAuth();
  await onGetFileList();
});
</script>

<style lang="scss" scoped></style>

<template>
  <div class="layout">
    <Header />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { useAuth } from '@/hooks';
import { useFiles } from '@/hooks/useFiles';
import Header from './header.vue';

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

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
import Header from './header.vue';

const { onGetUserDetailAndCheckAuth } = useAuth();
onBeforeRouteLeave(leaveGuard => {
  if (leaveGuard.path !== '/sign') {
    onGetUserDetailAndCheckAuth();
  }
});
onMounted(() => {
  onGetUserDetailAndCheckAuth();
});
</script>

<style lang="scss" scoped></style>

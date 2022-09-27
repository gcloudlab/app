<template>
  <div class="layout">
    <Header />
    <n-scrollbar style="max-height: calc(100vh - 60px)">
      <router-view />
      <Footer />
    </n-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { useAuth } from '@/hooks';
import Header from './header.vue';
import Footer from './footer.vue';
import { NScrollbar } from 'naive-ui';

const { onGetUserDetailAndCheckAuth } = useAuth();
onBeforeRouteLeave(leaveGuard => {
  if (leaveGuard.path !== '/sign') {
    onGetUserDetailAndCheckAuth();
  }
});
onMounted(async () => {
  onGetUserDetailAndCheckAuth();
});
</script>

<style lang="scss" scoped></style>

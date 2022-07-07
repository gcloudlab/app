<template>
  <div>
    <n-button class="" type="primary" @click="router.push('/sign')">
      {{ sign_status ? `已登陆：${auth?.name}-${auth?.email}` : '点击登录' }}
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter, onBeforeRouteLeave } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthOutsideStore } from '@/store/modules/auth';
import { useAuth } from '@/hooks/';
import { NButton } from 'naive-ui';

const router = useRouter();
const authStore = useAuthOutsideStore();
const { onGetUserDetailAndCheckAuth } = useAuth();
onBeforeRouteLeave(leaveGuard => {
  if (leaveGuard.path !== '/sign') {
    onGetUserDetailAndCheckAuth();
  }
});
onMounted(() => {
  onGetUserDetailAndCheckAuth();
});
const { auth, sign_status } = storeToRefs(authStore);
</script>

<style lang="scss" scoped></style>

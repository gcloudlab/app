<template>
  <div class="user-info">
    <div>
      <n-text> 用户：{{ auth?.name || '未注册用户' }} </n-text> <br />
      <n-text> Email：{{ auth?.email }} </n-text>
    </div>
    <n-divider />
    <div class="sign-action">
      <n-button
        v-if="sign_status && online_status"
        type="default"
        size="small"
        @click="handleLogout"
      >
        注销
      </n-button>
      <n-button v-else type="default" size="small" @click="router.push('/sign')"> 登陆 </n-button>
      <Tips class="float-right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthOutsideStore } from '@/store/modules/auth';
import { useAuth } from '@/hooks';
import Tips from '@/components/tips/index.vue';
import { NButton, NText, NDivider } from 'naive-ui';

const router = useRouter();
const authStore = useAuthOutsideStore();
const { auth, sign_status, online_status } = storeToRefs(authStore);
const { onLogout } = useAuth();

const handleLogout = () => {
  onLogout();
  router.push('/sign');
};
</script>

<style lang="scss" scoped></style>

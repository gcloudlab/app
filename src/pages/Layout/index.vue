<template>
  <div>
    <n-button class="w-32" type="primary" @click="router.push('/sign')">
      {{ token && refresh_token ? auth?.name : '点击登录' }}
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthOutsideStore } from '../../store/modules/auth';
import { useToken } from '../../hooks/';

const router = useRouter();
const mainStore = useAuthOutsideStore();
const { auth } = storeToRefs(mainStore);
const { token, refresh_token } = useToken();
</script>

<style lang="scss" scoped></style>

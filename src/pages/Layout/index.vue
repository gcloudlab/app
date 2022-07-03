<template>
  <div>
    <Auth />
  </div>
</template>

<script setup lang="ts">
import Auth from '@/pages/Auth/index.vue';
import { storeToRefs } from 'pinia';
import { useAuthOutsideStore } from '../../store/modules/auth';
import { useToken } from '../../hooks/';

const mainStore = useAuthOutsideStore();
const { auth } = storeToRefs(mainStore);
const { token, refresh_token } = useToken();
</script>

<style lang="scss" scoped></style>

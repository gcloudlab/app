<template>
  <n-message-provider>
    <MessageApi />
  </n-message-provider>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view></router-view>
  </n-config-provider>
</template>

<script setup lang="ts">
import { themeOverrides } from '@/utils/theme';
import { NConfigProvider, NMessageProvider } from 'naive-ui';
import MessageApi from '@/components/MessageApi.vue';
</script>

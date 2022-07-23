<template>
  <n-message-provider placement="top-right" :theme-overrides="messageThemeOverrides">
    <MessageApi />
  </n-message-provider>
  <n-config-provider :theme-overrides="themeOverrides" preflight-style-disabled>
    <router-view></router-view>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, NMessageProvider } from 'naive-ui';
import MessageApi from '@/components/message-api.vue';
import { themeOverrides, messageThemeOverrides } from '@/assets/style/theme';
</script>

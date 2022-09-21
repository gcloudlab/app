<template>
  <n-message-provider :max="4" placement="top-right" :theme-overrides="messageThemeOverrides">
    <MessageApi />
  </n-message-provider>
  <n-config-provider :theme-overrides="themeOverrides" preflight-style-disabled>
    <!-- <Mobile v-if="isMobile()" /> -->
    <router-view></router-view>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, NMessageProvider } from 'naive-ui';
import { themeOverrides, messageThemeOverrides } from '@/assets/style/theme';
import MessageApi from '@/components/commons/message/message-api.vue';
// import { isMobile } from '@/utils/is-mobile';
// import Mobile from '@/components/mobile/index.vue';
</script>

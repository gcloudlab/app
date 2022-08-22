<template>
  <n-message-provider
    :max="4"
    placement="top-right"
    :theme-overrides="messageThemeOverrides"
  >
    <MessageApi />
  </n-message-provider>
  <n-config-provider :theme-overrides="themeOverrides" preflight-style-disabled>
    <Loading v-if="isLoading1" size="large" />
    <img
      v-if="!isLoading"
      class="loading"
      width="90"
      src="./assets/lotties/loading.gif"
    />
    <router-view v-else></router-view>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, NMessageProvider } from "naive-ui";
import { themeOverrides, messageThemeOverrides } from "@/assets/style/theme";
import MessageApi from "@/components/commons/message/message-api.vue";
import { watch, computed, ref } from "vue";
import Loading from "@/components/commons/loading/index.vue";

const isLoading = computed(
  () =>
    document.readyState === "interactive" || document.readyState === "complete"
); // interactive
const isLoading1 = ref(true);
watch(
  () => document.readyState,
  (val) => {
    console.log("watch--", val);
  }
);
if (
  document.readyState === "interactive" ||
  document.readyState === "complete"
) {
  isLoading1.value = false;
}
console.log(isLoading.value);
</script>

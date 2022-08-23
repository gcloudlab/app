<template>
  <div class="layout">
    <Header />
    <n-scrollbar style="max-height: calc(100vh - 60px)">
      <router-view />
    </n-scrollbar>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import { useAuth } from "@/hooks";
import { useFiles } from "@/hooks/useFiles";
import Header from "./header.vue";
import Footer from "./footer.vue";
import { NScrollbar } from "naive-ui";
// const Loading = defineAsyncComponent(() => import('@/components/commons/loading/index.vue'));

const { onGetFileList } = useFiles();
const { onGetUserDetailAndCheckAuth } = useAuth();
onBeforeRouteLeave((leaveGuard) => {
  if (leaveGuard.path !== "/sign") {
    onGetUserDetailAndCheckAuth();
  }
});
onMounted(async () => {
  onGetUserDetailAndCheckAuth();
  await onGetFileList();
});
</script>

<style lang="scss" scoped></style>

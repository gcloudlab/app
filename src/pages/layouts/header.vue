<template>
  <div class="layout-header shadow">
    <n-tabs
      class="header-tabs px-4 py-2"
      :value="(currentRoute as string)"
      type="line"
      size="medium"
      :bar-width="0"
    >
      <template #prefix>
        <n-image
          class="animate__animated animate__fadeIn faster"
          width="100"
          preview-disabled
          @click="router.push('/home')"
          :src="logoUrl"
        />
      </template>
      <n-tab
        class="cursor-pointer"
        v-for="item in tabs"
        :key="item.name"
        :name="item.name"
        @click="router.push(item.path)"
      >
        {{ item.label }}
      </n-tab>
      <template #suffix>
        <Avatar
          :src="auth?.avatar || 'default.png'"
          size="large"
          bordered
          objectFit="contain"
          :showStatus="true"
        />
      </template>
    </n-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { NTabs, NTab, NImage } from 'naive-ui';
import Avatar from '@/components/avatar/index.vue';
import { useAuthOutsideStore } from '@/store/modules/auth';
import Logo from '@/assets/gcloud.png';

const router = useRouter();
const authStore = useAuthOutsideStore();
const currentRoute = computed(() => router.currentRoute.value.name ?? 'home');

const tabs = ref([
  { name: 'home', label: '主页', path: '/home' },
  { name: 'down', label: '下载', path: '/down' },
  { name: 'share', label: '分享', path: '/share' },
  { name: 'community', label: '社区', path: '/community' },
  { name: 'picture', label: '学习资料', path: '/picture' },
]);
const logoUrl = ref(Logo);
const { auth } = storeToRefs(authStore);
</script>

<style lang="scss">
.layout-header {
  /* background: rgba(253, 243, 243, 0.299); */
  .n-tabs {
    /* background: rgba(255, 255, 255, 0); */
    backdrop-filter: saturate(150%) blur(8px);
    -webkit-backdrop-filter: saturate(150%) blur(8px);
  }
  .header-tabs {
    .n-tabs-nav.n-tabs-nav--line-type .n-tabs-nav__prefix,
    .n-tabs-nav.n-tabs-nav--line-type .n-tabs-nav__suffix,
    .n-tabs-nav.n-tabs-nav--line-type .n-tabs-nav-scroll-content {
      border-bottom: none;
    }
  }
}
</style>

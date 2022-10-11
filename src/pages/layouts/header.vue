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
          :src="logoUrl"
          @click="router.push('/home')"
        />
      </template>
      <n-tab
        v-for="item in tabs"
        :key="item.name"
        class="cursor-pointer"
        :name="item.name"
        @click="router.push(item.path)"
      >
        {{ item.label }}
      </n-tab>
      <template #suffix>
        <GlobalNotification />
        <p
          v-if="!authStore.auth?.name"
          class="mr-4 mt-3 animate-pulse cursor-pointer text-primary text-sm hover:text-secondary"
          @click="router.push('/sign')"
        >
          注册
        </p>
        <Avatar
          :src="authStore.auth?.avatar || defaultAvatar"
          size="large"
          bordered
          object-fit="contain"
          :show-status="true"
        />
      </template>
    </n-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/hooks/useAuthentication';
import { NTabs, NTab, NImage } from 'naive-ui';
import Avatar from '@/components/avatar/index.vue';
import Logo from '@/assets/gcloud.png';
import defaultAvatar from '@/assets/logo.png';
import GlobalNotification from '@/components/global-notification/index.vue';

const router = useRouter();
const { authStore } = useAuth();
const currentRoute = computed(() => router.currentRoute.value.name ?? 'home');

const tabs = ref([
  { name: 'home', label: '主页', path: '/home' },
  { name: 'community', label: '社区', path: '/community' },
  // { name: 'picture', label: '学习资料', path: '/picture' },
]);
const logoUrl = ref(Logo);
</script>

<style lang="scss">
.layout-header {
  /* background: rgba(253, 243, 243, 0.299); */
  .n-tabs {
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

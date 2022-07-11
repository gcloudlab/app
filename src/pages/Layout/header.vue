<template>
  <div class="layout-header shadow">
    <n-tabs
      class="header-tabs px-4 py-2"
      type="line"
      size="medium"
      default-value="home"
      :bar-width="0"
      :tab-style="{}"
    >
      <template #prefix>
        <transition name="fade-in">
          <n-image
            width="100"
            preview-disabled
            src="https://img-yesmore.vercel.app/gcloud/gcloud-log.png"
          />
        </transition>
      </template>
      <n-tab
        v-for="item in tabs"
        :key="item.name"
        :name="item.name"
        @click="router.push(item.path)"
      >
        {{ item.label }}
      </n-tab>
      <template #suffix>
        <Avatar src="xx.jps" size="large" bordered objectFit="cover" :showStatus="true" />
      </template>
    </n-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { NTabs, NTab, NImage } from 'naive-ui';
import Avatar from '@/components/avatar/index.vue';

const router = useRouter();
const tabs = ref([
  { name: 'home', label: '主页', path: '/home' },
  { name: 'share', label: '分享', path: '/share' },
  { name: 'community', label: '社区', path: '/community' },
]);
</script>

<style lang="scss">
.header-tabs {
  /* background: #000; */
  .n-tabs-nav.n-tabs-nav--line-type .n-tabs-nav__prefix,
  .n-tabs-nav.n-tabs-nav--line-type .n-tabs-nav__suffix,
  .n-tabs-nav.n-tabs-nav--line-type .n-tabs-nav-scroll-content {
    border-bottom: none;
  }
}
</style>

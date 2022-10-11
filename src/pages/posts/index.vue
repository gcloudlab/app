<template>
  <div class="posts m-3">帖子详情: {{ posts_detail?.title || '无' }}</div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useCommunity } from '@/hooks/useCommunity';

import { NButton } from 'naive-ui';

const { communityStore, onGetPostsDetail } = useCommunity();

onMounted(() => {
  onGetPostsDetail('cd694ac9-de89-49e1-b704-0eee9fbbf133');
  // onGetPostsList();
});

const { posts_detail } = storeToRefs(communityStore);
</script>

<style lang="scss" scoped></style>

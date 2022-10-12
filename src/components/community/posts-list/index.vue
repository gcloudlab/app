<template>
  <div class="post-list">
    <div
      v-if="
        communityStore.fetching ||
        (communityStore.posts_list && communityStore.posts_list.length > 0)
      "
    >
      <PostsItem />
    </div>
    <Empty v-else description="空空如也" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
import { useCommunity } from '@/hooks/useCommunity';
import PostsItem from './posts-item.vue';
const Empty = defineAsyncComponent(() => import('@/components/commons/empty/index.vue'));

const { communityStore } = useCommunity();
</script>

<style lang="scss" scoped></style>

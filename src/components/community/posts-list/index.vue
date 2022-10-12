<template>
  <div class="post-list">
    <div v-if="posts_list && posts_list.length > 0">
      <PostsItem />
    </div>
    <Empty v-else description="空空如也" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
import { useCommunity } from '@/hooks/useCommunity';
import { storeToRefs } from 'pinia';
import PostsItem from './posts-item.vue';
const Empty = defineAsyncComponent(() => import('@/components/commons/empty/index.vue'));

const { communityStore } = useCommunity();

const { posts_list } = storeToRefs(communityStore);
</script>

<style lang="scss" scoped></style>

<template>
  <div class="post-list">
    <div
      v-if="
        communityStore.fetching ||
        (communityStore.posts_list && communityStore.posts_list.length > 0)
      "
    >
      <PostsItem @on-update="handleUpdate" @on-delete="handleDelete" />
    </div>
    <Empty v-else description="空空如也" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
import { useCommunity } from '@/hooks/useCommunity';
import PostsItem from './posts-item.vue';
import { PostsItem as IPostsItem } from '@/models/community';
const Empty = defineAsyncComponent(() => import('@/components/commons/empty/index.vue'));

const emits = defineEmits(['onUpdate', 'onDelete']);
const { communityStore } = useCommunity();

const handleUpdate = (value: IPostsItem) => {
  emits('onUpdate', value);
};
const handleDelete = (value: IPostsItem) => {
  emits('onDelete', value);
};
</script>

<style lang="scss" scoped></style>

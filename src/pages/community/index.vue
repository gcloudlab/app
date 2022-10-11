<template>
  <div class="community m-3">
    <n-button size="small" @click="show_editor = !show_editor">发布帖子</n-button>
    <PostsEditor v-if="show_editor" @on-submit="handleSubmitPosts" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted } from 'vue';
import { useCommunity } from '@/hooks/useCommunity';
import { PostsFormItem } from '@/models/community';

import { NButton } from 'naive-ui';
const PostsEditor = defineAsyncComponent(
  () => import('@/components/community/posts-editor/index.vue')
);

const { communityStore, onCreatePosts, onGetPostsList } = useCommunity();
const show_editor = ref(false);

const handleSubmitPosts = async (value: PostsFormItem) => {
  console.log(value);
  await onCreatePosts(value);
};

onMounted(() => {
  // onGetPostsList();
});
</script>

<style lang="scss" scoped>
.community {
  height: calc(100vh - 60px);
}
</style>

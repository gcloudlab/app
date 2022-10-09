<template>
  <div class="community m-3">
    <n-button size="small" @click="show_editor = !show_editor">发布帖子</n-button>
    <PostsEditor v-if="show_editor" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
import { NButton } from 'naive-ui';
const PostsEditor = defineAsyncComponent(
  () => import('@/components/community/posts-editor/index.vue')
);

const show_editor = ref(false);
</script>

<style lang="scss" scoped>
.community {
  height: calc(100vh - 60px);
}
</style>

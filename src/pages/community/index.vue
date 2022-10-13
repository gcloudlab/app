<template>
  <div
    class="community-layout px-8 py-5 bg-header flex items-start justify-center"
    :class="[isMobile() ? 'flex-col' : '']"
  >
    <div class="posts-main shadow w-full flex-1">
      <PostsEditor class="post mb-10" v-if="show_editor" @on-submit="handleSubmitPosts" />
      <PostsList class="animate__animated animate__fadeIn faster" />
    </div>
    <div
      class="sider shadow rounded animate__animated animate__fadeIn faster"
      :class="[isMobile() ? 'w-full mt-3' : 'ml-5']"
    >
      <div class="flex flex-row items-center justif-center m-3">
        <n-icon size="25" class="text-gray-500"><PaperPlane /></n-icon>
        <n-button
          :disabled="!authStore.auth?.name"
          quaternary
          size="small"
          @click="show_editor = !show_editor"
        >
          {{ authStore.auth?.name ? (show_editor ? '取消创作' : '创作新帖子') : '登陆后发帖' }}
        </n-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted } from 'vue';
import { useAuth } from '@/hooks/useAuthentication';
import { useCommunity } from '@/hooks/useCommunity';
import { PostsFormItem } from '@/models/community';
import { isMobile } from '@/utils/is-mobile';
import { NButton, NIcon } from 'naive-ui';
import PostsList from '@/components/community/posts-list/index.vue';
import { PaperPlane } from '@vicons/ionicons5';
const PostsEditor = defineAsyncComponent(
  () => import('@/components/community/posts-editor/index.vue')
);

const { onCreatePosts, onGetPostsList } = useCommunity();
const { authStore } = useAuth();
const show_editor = ref(false);

const handleSubmitPosts = async (value: PostsFormItem) => {
  // console.log(value);
  // await onCreatePosts(value);
};

onMounted(async () => {
  await onGetPostsList();
});
</script>

<style lang="scss" scoped>
.community-layout,
.sider {
  height: calc(100vh - 100px);
}
</style>

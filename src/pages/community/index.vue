<template>
  <div
    class="community-layout flex items-start justify-center"
    :class="[isMobile() ? 'flex-col px-4 py-3' : 'px-8 py-6']"
  >
    <div class="posts-main bg-header shadow w-full flex-1">
      <n-scrollbar style="max-height: calc(100vh - 110px)">
        <PostsEditor
          class="post mb-10"
          v-if="show_editor"
          :data="update_data"
          :show-mention="false"
          @on-submit="handleSubmitPosts"
          @on-update="handleUpdatePosts"
          @on-cancel="show_editor = false"
        />
        <PostsList
          class="animate__animated animate__fadeIn faster"
          @on-update="handleOpenUpdate"
          @on-delete="handleDeletePosts"
        />
      </n-scrollbar>
    </div>
    <div
      class="sider text-sm bg-header shadow rounded animate__animated animate__fadeIn faster"
      :class="[isMobile() ? 'w-full mt-3' : 'ml-5']"
    >
      <n-scrollbar style="max-height: calc(100vh - 110px)">
        <div class="m-3">
          <n-h5 prefix="bar" class="rounded text-sm"> G社简介 </n-h5>
          <Introduction />
        </div>
        <n-divider />
        <div class="flex flex-row items-center justif-center m-3">
          <n-icon size="25" class="text-gray-500"><PaperPlane /></n-icon>
          <n-button
            :disabled="!authStore.auth?.name"
            quaternary
            size="small"
            @click="handleNewPosts"
          >
            {{ authStore.auth?.name ? (show_editor ? '取消创作' : '创作新帖子') : '登陆后发帖' }}
          </n-button>
        </div>
        <n-divider />
        <n-h5 prefix="bar" class="m-3 rounded text-sm">
          <span class="text-primary">0</span> 条未读提醒
        </n-h5>
        <n-divider />
        <div class="hot-list m-3">
          <n-h5 prefix="bar" class="rounded text-sm"> 今日热议 </n-h5>
          <div v-if="hot_posts">
            <div
              class="mb-1 text-primary hover:underline cursor-pointer text-sm"
              v-for="posts in hot_posts"
              @click="router.push(`/p/${posts.identity}`)"
            >
              {{ posts.title }}
            </div>
          </div>
          <p v-else>快来抢沙发吧~</p>
        </div>
      </n-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/hooks/useAuthentication';
import { useCommunity } from '@/hooks/useCommunity';
import { isMobile } from '@/utils/is-mobile';
import type { PostsFormItem, PostsItem } from '@/models/community';
import _ from 'lodash';
import { dateFromNow } from '@/utils/date';
import { NButton, NIcon, NScrollbar, NH5, NDivider } from 'naive-ui';
import { PaperPlane } from '@vicons/ionicons5';
import PostsList from '@/components/community/posts-list/index.vue';
import Introduction from './introduction/index.vue';
const PostsEditor = defineAsyncComponent(
  () => import('@/components/community/posts-editor/index.vue')
);

const router = useRouter();
const { authStore } = useAuth();
const { communityStore, onCreatePosts, onGetPostsList, onUpdatePosts, onDeletePosts } =
  useCommunity();

const show_editor = ref(false);
const update_data = ref<PostsItem | null>(null);

const hot_posts = computed(() =>
  _.sortBy(communityStore.posts_list, item => -item.click_num)
    .filter(i => dateFromNow(i.updated_at) <= 3)
    .slice(0, 3)
);

const handleSubmitPosts = async (value: PostsFormItem) => {
  // console.log(value);
  await onCreatePosts(value);
  show_editor.value = false;
};
const handleUpdatePosts = async (value: PostsItem) => {
  // console.log(value);
  await onUpdatePosts(value);
  show_editor.value = false;
};

const handleDeletePosts = async (value: PostsItem) => {
  await onDeletePosts(value.identity);
};

const handleNewPosts = () => {
  update_data.value = null;
  show_editor.value = !show_editor.value;
};

const handleOpenUpdate = (value: PostsItem) => {
  update_data.value = value;
  show_editor.value = true;
  document.querySelector('.posts-main .n-scrollbar-content')?.scrollIntoView();
};

onMounted(async () => {
  await onGetPostsList();
});
</script>

<style lang="scss" scoped>
.community-layout {
  .sider {
    min-width: 240px;
  }
}
</style>

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
          :show-owner-data="show_owner_data"
          @on-update="handleOpenUpdate"
          @on-delete="handleDeletePosts"
        />
      </n-scrollbar>
    </div>
    <div
      class="sider text-sm animate__animated animate__fadeIn faster"
      :class="[isMobile() ? 'w-full mt-3' : 'w-24 ml-5']"
    >
      <n-scrollbar style="max-height: calc(100vh - 109px)">
        <div class="bg-header shadow rounded py-2 mb-4">
          <div class="m-3">
            <n-h5 prefix="bar" class="rounded text-sm"> G社是啥捏 </n-h5>
            <Introduction />
          </div>
          <n-divider />
          <div class="m-3">
            <div class="flex flex-row items-center justif-center">
              <n-icon size="20" class="text-primary"><PaperPlane /></n-icon>
              <n-button
                :disabled="!authStore.sign_status"
                quaternary
                size="small"
                @click="handleNewPosts"
              >
                {{
                  authStore.sign_status ? (show_editor ? '取消创作' : '创作新帖子') : '登陆后发帖'
                }}
              </n-button>
            </div>
            <div class="mt-2">
              <n-button
                :disabled="!authStore.sign_status"
                quaternary
                size="tiny"
                @click="show_owner_data = !show_owner_data"
              >
                {{
                  !show_owner_data ? `查看我的创作 (${owner_posts.length || 0})` : `查看所有创作`
                }}
              </n-button>
            </div>
          </div>

          <!-- <n-divider />
          <n-h5 prefix="bar" class="m-3 rounded text-sm">
            <span class="text-primary">0</span> 条未读提醒
          </n-h5> -->
        </div>

        <div class="bg-header shadow rounded py-2 mb-1">
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

          <n-divider />
          <div class="tongji m-3">
            <div>所有创作: {{ communityStore.posts_list.length || 0 }} 篇</div>
            <div>总点击量: {{ communityStore.posts_views || 0 }} 次</div>
            <div>总留言量: {{ communityStore.posts_comment || 0 }} 条</div>
          </div>
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
const show_owner_data = ref(false);

const hot_posts = computed(() => {
  const sort_list = _.sortBy(communityStore.posts_list, item => -item.click_num);
  const last_n_day = (n: number) =>
    sort_list.filter(i => dateFromNow(i.updated_at) <= n).slice(0, 5);
  const last_three_day_list = last_n_day(3);
  const last_seven_day_list = last_n_day(7);

  if (last_seven_day_list.length === 0) {
    return sort_list.slice(0, 5);
  } else if (last_three_day_list.length < 5) {
    return [
      ...last_three_day_list,
      ...last_seven_day_list.filter(
        item => !last_three_day_list.find(i => i.identity === item.identity)
      ),
    ].sort((a, b) => b.click_num - a.click_num);
  }
  return last_three_day_list;
});

const owner_posts = computed(() =>
  communityStore.posts_list.filter(i => i.owner === authStore.auth?.name)
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
  onScrollToTop();
};

const handleOpenUpdate = (value: PostsItem) => {
  update_data.value = value;
  show_editor.value = true;
  onScrollToTop();
};

const onScrollToTop = () => {
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

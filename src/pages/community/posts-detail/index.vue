<template>
  <div class="posts-container" :class="[isMobile() ? ' mx-4 my-3' : 'mx-8 my-6']">
    <div class="shadow-md bg-header mb-5">
      <div class="head p-4 flex items-center justify-start">
        <n-button tertiary @click="router.back()"> 返回 </n-button>
        <div class="title mx-2">
          <n-skeleton v-if="communityStore.fetching_detail" text width="60%" />
          <div class="title-info" v-else>
            <span class="text-bolder text-lg text-primary">{{
              communityStore.posts_detail?.title || 'nb'
            }}</span>
          </div>
        </div>
        <div class="avatar ml-auto">
          <n-skeleton v-if="communityStore.fetching_detail" width="40px" height="40px" />
          <n-avatar
            v-else
            size="large"
            :src="communityStore.posts_detail?.avatar"
            :fallback-src="defaultAvatar"
          />
        </div>
      </div>
      <n-divider v-if="communityStore.posts_detail?.content !== ''" title-placement="center"
        ><span class="text-gray-400 text-sm SmileySans">🍥 正文</span>
      </n-divider>
      <div class="content mt-4 p-4" v-if="communityStore.posts_detail?.content !== ''">
        <div v-if="communityStore.fetching_detail">
          <n-skeleton class="mb-2" height="25px" :repeat="6" />
        </div>
        <v-md-preview
          v-else-if="communityStore.posts_detail && !communityStore.fetching_detail"
          :text="communityStore.posts_detail.content"
        />
      </div>
      <div class="info bg-gray-100 flex items-center justify-between">
        <div class="action">
          <n-button-group size="small">
            <n-button color="#009a9d" quaternary @click="handleLike"
              >👍{{ communityStore.posts_detail?.ilike }}</n-button
            >
            <n-button quaternary @click="handleDislike">👎</n-button>
            <n-button quaternary @click="handleCollect">❤️ 加入收藏</n-button>
          </n-button-group>
        </div>
        <div class="count">
          <n-button-group size="small">
            <n-button class="text-gray-400" quaternary>
              {{ communityStore.posts_detail?.click_num }}次点击
            </n-button>
            <n-button class="text-gray-400" quaternary>
              {{ communityStore.posts_detail?.collection }}收藏
            </n-button>
          </n-button-group>
        </div>
      </div>
    </div>

    <div class="comment shadow bg-header p-4">
      <div class="head flex justify-between text-sm">
        <span class="text-gray-400"
          >{{ communityStore.posts_detail_comment?.length || 0 }}条回复
        </span>
        <div>
          <span class="text-gray-400 mr-3">{{
            transformDateTime(communityStore.posts_detail?.updated_at!)
          }}</span>
          <template v-if="communityStore.posts_detail?.tags">
            <n-tag
              v-for="(item, index) in communityStore.posts_detail?.tags?.split(',')"
              :key="index"
              class="mr-1"
              size="small"
              :bordered="false"
              :color="{ textColor: '#999999' }"
            >
              {{ item }}
            </n-tag>
          </template>
          <span v-else class="text-gray-400">无标签</span>
        </div>
      </div>
      <div class="comment-list">
        <PostsCommentList
          @on-reply="onSetReplyInfo"
          @on-delete="handleDeleteComment"
          @on-update="handleOpenUpdate"
        />
      </div>
      <div class="editor" :class="[is_focus ? 'reply-box-sticky' : '']">
        <PostsEditor
          class="mt-5 mb-10"
          :reply="current_reply_user_name_comment"
          mode="comment"
          :show-title="false"
          :show-mention="false"
          :show-tag="false"
          @focusin="onFocusIn"
          @focusout="onFocusOut"
          @on-submit-comment="handleSubmitComment"
          @on-update-comment="handleUpdateComment"
          @on-cancel-reply="handleCancelReply"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useCommunity } from '@/hooks/useCommunity';
import { isMobile } from '@/utils/is-mobile';
import { transformDateTime } from '@/utils/date';
import { NButton, NButtonGroup, NSkeleton, NAvatar, NTag, NDivider } from 'naive-ui';
import defaultAvatar from '@/assets/logo.png';
import { PostsCommentFormItem, PostsFormItem, PostsCommentItem } from '@/models/community';
import PostsCommentList from '@/components/community/posts-comment/index.vue';
const PostsEditor = defineAsyncComponent(
  () => import('@/components/community/posts-editor/index.vue')
);

const router = useRouter();
const {
  communityStore,
  onGetPostsDetail,
  onCreatePostsComment,
  onGetPostsComment,
  onDeletePostsComment,
  onCreatePostsFeedback,
} = useCommunity();

const current_posts_id = ref(router.currentRoute.value.params.id as string);
const current_reply_user_comment = ref<string | null>(null);
const current_reply_user_name_comment = ref<string | null>(null);
const update_data = ref<PostsCommentItem | null>(null);
const is_focus = ref(false);

onMounted(() => {
  if (current_posts_id.value) {
    onGetPostsDetail(current_posts_id.value).then(() => {
      if (communityStore.posts_detail?.title) {
        window.document.title = `${communityStore.posts_detail.title} | G社 `;
      }
    });
    onGetPostsComment(current_posts_id.value);
  }
});

onUnmounted(() => {
  window.document.title = 'GCloud 云盘';
});

const handleSubmitComment = (value: PostsFormItem) => {
  const comment_form_data: PostsCommentFormItem = {
    posts_identity: current_posts_id.value,
    reply_identity: current_reply_user_comment.value,
    content: value.content,
    mention: value.mention,
    reply_name: current_reply_user_name_comment.value,
  };
  onCreatePostsComment(comment_form_data);
  handleCancelReply();
  // console.log(value, communityStore.posts_detail);
};
const handleUpdateComment = (value: PostsCommentFormItem) => {
  // handleCancelReply()
  // console.log(value);
};

const handleOpenUpdate = (value: PostsCommentItem) => {
  // console.log(value);
  update_data.value = value;
};
const handleDeleteComment = (value: PostsCommentItem) => {
  onDeletePostsComment(value.identity, value.posts_identity);
};

const onSetReplyInfo = (value: { owner_identity: string; owner: string }) => {
  current_reply_user_comment.value = value.owner_identity;
  current_reply_user_name_comment.value = value.owner;
  // console.log(value);
};

const handleCancelReply = () => {
  current_reply_user_comment.value = null;
  current_reply_user_name_comment.value = null;
};

const handleLike = async () => {
  await onCreatePostsFeedback({ posts_identity: current_posts_id.value, type: 'ilike' });
};
const handleDislike = async () => {
  await onCreatePostsFeedback({ posts_identity: current_posts_id.value, type: 'dislike' });
};
const handleCollect = async () => {
  await onCreatePostsFeedback({ posts_identity: current_posts_id.value, type: 'collect' });
};

const onFocusIn = () => {
  is_focus.value = true;
};
const onFocusOut = () => {
  is_focus.value = false;
};
</script>

<style lang="scss">
.posts-container {
  .content .github-markdown-body {
    padding: 0;
  }
}
.reply-box-sticky {
  position: sticky;
  bottom: -2px;
  top: -2px;
  transition: all 0.5s ease-in-out;
}
</style>

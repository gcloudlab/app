<template>
  <div>
    <div v-for="(comment, index) in communityStore.posts_detail_comment" :key="comment.identity">
      <n-divider />
      <n-thing>
        <template #avatar>
          <n-skeleton v-if="communityStore.fetching_comment" width="34px" height="34px" />
          <n-avatar v-else :src="comment.avatar" size="large" :fallback-src="defaultAvatar" />
        </template>
        <template #header>
          <n-skeleton v-if="communityStore.fetching_comment" text width="60%" />
          <div v-else class="flex items-center text-xs">
            <div class="name">
              <span class="mr-2">
                <span class="font-bold text-gray-500">
                  {{ comment.owner || '匿名用户' }}
                  {{ `${authStore.auth?.name === comment.owner ? '(我)' : ''}` }}</span
                >
                <span
                  v-if="communityStore.posts_detail?.owner === comment.owner"
                  class="ml-1 px-1 bg-gray-100 text-primary text-xs rounded"
                >
                  OP
                </span>
              </span>
              <span v-if="comment.reply_name" class="mr-3">
                回复 <span class="text-primary">@{{ comment.reply_name }}</span>
              </span>
            </div>
            <n-skeleton
              v-if="communityStore.fetching_comment && !comment.updated_at"
              text
              width="50px"
            />
            <div v-else class="date mr-2 text-gray-400">
              {{ comment_date_from_now(comment.updated_at) }}
            </div>
            <n-button
              v-if="comment.owner !== authStore.auth?.name"
              class="text-gray-500"
              quaternary
              size="tiny"
              @click="handleReply(comment.owner_identity, comment.owner)"
              >回复</n-button
            >
          </div>
        </template>
        <template #header-extra>
          <div class="flex items-center">
            <n-button-group v-if="authStore.auth?.name === comment.owner">
              <!-- <n-button class="text-gray-400" quaternary size="tiny" @click="onUpdate(comment)">
              <template #icon> <Edit32Filled /></template>
            </n-button> -->
              <n-popconfirm
                @positive-click="onDelete(comment)"
                negative-text="取消"
                positive-text="删除"
              >
                <template #trigger>
                  <n-button class="text-gray-400" quaternary size="tiny" @click="">
                    <template #icon> <TrashOutline /></template>
                  </n-button>
                </template>
                你确定？
              </n-popconfirm>
            </n-button-group>
            <n-button class="ml-3" circle secondary size="tiny"> {{ index + 1 }} </n-button>
          </div>
        </template>
        <template #description>
          <div class="mt-2 comment-item-detail">
            <n-skeleton v-if="communityStore.fetching_comment" text width="60%" />
            <div v-else>
              <v-md-preview :text="comment.content" />
            </div>
          </div>
        </template>
      </n-thing>
    </div>
    <n-pagination
      class="m-3"
      v-model:page="current_page"
      :page-count="1"
      :page-size="page_size"
      size="small"
      :on-update:page="handleChangePage"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCommunity } from '@/hooks/useCommunity';
import { useAuth } from '@/hooks/useAuthentication';
import { dateFromNow } from '@/utils/date';
import {
  NThing,
  NSkeleton,
  NPagination,
  NAvatar,
  NButton,
  NButtonGroup,
  NPopconfirm,
  NDivider,
} from 'naive-ui';
// import { Edit32Filled } from '@vicons/fluent';
import { TrashOutline } from '@vicons/ionicons5';
import defaultAvatar from '@/assets/logo.png';
import { PostsCommentItem } from '@/models/community';

const emits = defineEmits(['onReply', 'onUpdate', 'onDelete']);
const { authStore } = useAuth();
const { communityStore } = useCommunity();
const current_page = ref(1);
const page_size = ref(10);

const comment_date_from_now = (date: string) => {
  const temp_from_now_secs = dateFromNow(date, 'seconds');
  const temp_from_now_mins = dateFromNow(date, 'minutes');
  const temp_from_now_hours = dateFromNow(date, 'hours');
  const temp_from_now_days = dateFromNow(date, 'days');
  if (temp_from_now_secs < 60) {
    return temp_from_now_secs + ' 秒前';
  } else if (temp_from_now_mins < 60) {
    return temp_from_now_mins + ' 分钟前';
  } else if (temp_from_now_hours < 24) {
    return temp_from_now_hours + ' 小时前';
  } else {
    return temp_from_now_days + ' 天前';
  }
};

const handleReply = (owner_identity: string, owner: string) => {
  emits('onReply', { owner_identity, owner });
};

const onUpdate = (comment: PostsCommentItem) => {
  emits('onUpdate', comment);
};
const onDelete = (comment: PostsCommentItem) => {
  emits('onDelete', comment);
};

const handleChangePage = (page: number) => {
  console.log(page);
  current_page.value = page;
};
</script>

<style lang="scss">
.comment-item-detail {
  .github-markdown-body {
    padding: 0;
  }
}
</style>

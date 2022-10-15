<template>
  <div class="posts-container bg-header shadow" :class="[isMobile() ? ' mx-4 my-3' : 'mx-8 my-6']">
    <div class="head p-4 flex items-center justify-start">
      <n-button quaternary @click="router.back()"> 返回 </n-button>
      <div class="title ml-2">
        <n-skeleton v-if="communityStore.fetching_detail" text width="60%" />
        <div class="title-info" v-else>
          <span class="text-bolder text-lg text-primary">{{
            communityStore.posts_detail?.title || 'nb'
          }}</span>
        </div>
      </div>
      <div class="avatar ml-auto">
        <n-skeleton v-if="communityStore.fetching_detail" width="40px" height="40px" />
        <n-avatar v-else :src="communityStore.posts_detail?.avatar" :fallback-src="defaultAvatar" />
      </div>
    </div>
    <n-divider v-if="communityStore.posts_detail?.content !== ''" title-placement="center"
      ><span class="text-gray-400 text-sm">🍥 正文</span>
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
    <n-divider />
    <div class="info flex items-center justify-between">
      <div class="action">
        <n-button-group size="small">
          <n-button quaternary>👍{{ communityStore.posts_detail?.like }}</n-button>
          <n-button quaternary>👎</n-button>
          <n-button quaternary>❤️ 加入收藏</n-button>
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
    <n-divider />
    <div class="comment p-4">
      <div class="head flex justify-between">
        <span class="text-gray-400">{{ 0 }}条回复</span>
        <div>
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
        </div>
      </div>
      <div class="comment-detail"></div>
      <div class="editor">
        <PostsEditor
          class="mt-5 mb-10"
          v-if="true"
          mode="comment"
          :show-title="false"
          :show-mention="false"
          :show-tag="false"
          @on-submit-comment="handleSubmitComment"
          @on-update-comment="handleUpdateComment"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useCommunity } from '@/hooks/useCommunity';
import { isMobile } from '@/utils/is-mobile';
import { onWarning } from '@/utils/messages';
import { NButton, NButtonGroup, NSkeleton, NAvatar, NTag, NDivider } from 'naive-ui';
import defaultAvatar from '@/assets/logo.png';
const PostsEditor = defineAsyncComponent(
  () => import('@/components/community/posts-editor/index.vue')
);

const router = useRouter();
const { communityStore, onGetPostsDetail } = useCommunity();

const current_posts_id = ref(router.currentRoute.value.params.id as string);

onMounted(() => {
  if (current_posts_id.value) {
    onGetPostsDetail(current_posts_id.value).then(() => {
      if (communityStore.posts_detail?.title) {
        window.document.title = `G社 | ${communityStore.posts_detail.title}`;
      }
    });
  }
});

const handleSubmitComment = () => {
  onWarning('暂不支持');
};
const handleUpdateComment = () => {};
</script>

<style lang="scss">
.posts-container {
  .content .github-markdown-body {
    padding: 0;
  }
}
</style>

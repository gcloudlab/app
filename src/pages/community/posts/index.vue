<template>
  <div class="posts-detail m-3">帖子详情: {{ posts_detail?.title || '无' }}</div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCommunity } from '@/hooks/useCommunity';
import { NButton } from 'naive-ui';

const router = useRouter();
const { communityStore, onGetPostsDetail } = useCommunity();

const current_posts_id = ref(router.currentRoute.value.params.id as string);

onMounted(() => {
  if (current_posts_id.value) {
    onGetPostsDetail(current_posts_id.value).then(() => {
      if (communityStore.posts_detail.title) {
        window.document.title = `G社 | ${communityStore.posts_detail.title}`;
      }
    });
  }
});

const { posts_detail } = storeToRefs(communityStore);
</script>

<style lang="scss" scoped></style>

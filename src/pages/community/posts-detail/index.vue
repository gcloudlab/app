<template>
  <div class="posts-detail m-3">
    {{ communityStore.posts_detail?.title || '无' }}
    <v-md-preview v-if="communityStore.posts_detail" :text="communityStore.posts_detail.content" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCommunity } from '@/hooks/useCommunity';
import { NButton } from 'naive-ui';

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
</script>

<style lang="scss" scoped></style>

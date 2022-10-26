<template>
  <div class="post-list">
    <div
      v-if="
        communityStore.fetching ||
        (communityStore.posts_list && communityStore.posts_list.length > 0)
      "
    >
      <PostsItem
        :show-owner-data="showOwnerData"
        @on-update="handleUpdate"
        @on-delete="handleDelete"
      />
      <n-pagination
        class="m-3"
        v-model:page="current_page"
        :page-count="1"
        :page-size="page_size"
        size="small"
        :on-update:page="handleChangePage"
      />
    </div>
    <Empty v-else description="空空如也" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
import { useCommunity } from '@/hooks/useCommunity';
import PostsItem from './posts-item.vue';
import { PostsItem as IPostsItem } from '@/models/community';
import { NPagination } from 'naive-ui';
const Empty = defineAsyncComponent(() => import('@/components/commons/empty/index.vue'));

const props = defineProps({
  showOwnerData: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(['onUpdate', 'onDelete']);
const { communityStore } = useCommunity();

const current_page = ref(1);
const page_size = ref(8);

const handleUpdate = (value: IPostsItem) => {
  emits('onUpdate', value);
};
const handleDelete = (value: IPostsItem) => {
  emits('onDelete', value);
};

const handleChangePage = (page: number) => {
  console.log(page);
  current_page.value = page;
};
</script>

<style lang="scss" scoped></style>

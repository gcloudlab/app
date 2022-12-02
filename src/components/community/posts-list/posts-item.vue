<template>
  <n-thing
    v-for="posts in communityStore.posts_list_changable"
    :key="posts.identity"
    class="shadow-sm rounded p-4 hover:shadow"
  >
    <template #avatar>
      <n-skeleton v-if="communityStore.fetching" width="34px" height="34px" />
      <n-avatar v-else :src="posts.avatar" :fallback-src="defaultAvatar" />
    </template>
    <template #header>
      <n-skeleton v-if="communityStore.fetching" text width="60%" />
      <div v-else class="flex items-center">
        <div
          class="posts-title cursor-pointer bolder hover:text-secondary"
          @click="router.push(`/p/${posts.identity}`)"
        >
          {{ posts.title || '标题' }}
        </div>
        <n-button-group v-if="authStore.auth?.name === posts.owner" class="ml-1">
          <n-button class="text-gray-400" quaternary size="tiny" @click="onUpdate(posts)">
            <template #icon> <Edit32Filled /></template>
          </n-button>
          <n-popconfirm @positive-click="onDelete(posts)" negative-text="取消" positive-text="删除">
            <template #trigger>
              <n-button class="text-gray-400" quaternary size="tiny" @click="">
                <template #icon> <TrashOutline /></template>
              </n-button>
            </template>
            你确定？
          </n-popconfirm>
        </n-button-group>
      </div>
    </template>
    <template #header-extra v-if="posts.reply_num > 0">
      <div class="flex items-center">
        <n-button secondary round size="tiny"> {{ posts.reply_num }} </n-button>
      </div>
    </template>
    <template #description>
      <n-skeleton v-if="communityStore.fetching" text width="60%" />
      <template v-else>
        <div class="flex items-center">
          <template v-if="posts.tags">
            <n-tag
              v-for="(item, index) in posts.tags?.split(',')"
              :key="index"
              class="mr-1"
              size="small"
              :bordered="false"
              :color="{ textColor: '#999999' }"
            >
              {{ item }}
            </n-tag>
          </template>

          <span class="ml-1 text-xs font-bold" style="color: #778087">
            {{ posts.owner || '未知用户' }}
          </span>
          <span class="ml-2 text-gray-400 text-xs">{{ transformDate(posts.updated_at) }}</span>
          <n-divider vertical />
          <n-button type="primary" size="tiny" quaternary>
            <template #icon>
              <EyeOutline />
            </template>
            <span class="SmileySans text-xs">{{ posts.click_num }}</span>
          </n-button>
        </div>
      </template>
    </template>
  </n-thing>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import { useCommunity } from '@/hooks/useCommunity';
import { useAuth } from '@/hooks/useAuthentication';
import { transformDate } from '@/utils/date';
import {
  NThing,
  NSkeleton,
  NAvatar,
  NButton,
  NTag,
  NDivider,
  NButtonGroup,
  NPopconfirm,
} from 'naive-ui';
import defaultAvatar from '@/assets/logo.png';
import { Edit32Filled } from '@vicons/fluent';
import { EyeOutline, TrashOutline } from '@vicons/ionicons5';
import { PostsItem } from '@/models/community';

const props = defineProps({
  showOwnerData: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(['onUpdate', 'onDelete']);
const router = useRouter();
const { communityStore } = useCommunity();
const { authStore } = useAuth();

watch(
  () => props.showOwnerData,
  () => {
    communityStore.posts_list_changable = props.showOwnerData
      ? communityStore.posts_list.filter(i => i.owner === authStore.auth?.name)
      : communityStore.posts_list;
  }
);

const onUpdate = (posts: PostsItem) => {
  emits('onUpdate', posts);
};
const onDelete = (posts: PostsItem) => {
  emits('onDelete', posts);
};
</script>

<style lang="scss" scoped>
.posts-title {
  color: #778087;
  transition: color 0.3s;
}
</style>

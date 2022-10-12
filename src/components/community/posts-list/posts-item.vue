<template>
  <n-thing
    v-for="posts in posts_list"
    :key="posts.identity"
    class="shadow-sm rounded p-4 hover:shadow"
  >
    <template #avatar>
      <n-skeleton v-if="fetching" width="34px" height="34px" />
      <n-avatar v-else :src="posts.avatar" :fallback-src="defaultAvatar" />
    </template>
    <template #header>
      <n-skeleton v-if="fetching" text width="60%" />
      <span v-else>
        <span
          class="text-primary cursor-pointer bolder hover:text-secondary"
          @click="router.push(`/p/${posts.identity}`)"
        >
          {{ posts.title || '标题' }}
        </span>
      </span>
    </template>
    <template #header-extra>
      <n-button secondary round type="primary" size="tiny"> 0 </n-button>
    </template>
    <template #description>
      <n-tag
        v-for="(item, index) in posts.tags?.split(',')"
        :key="index"
        class="mr-1 cursor-pointer"
        size="small"
        :bordered="false"
        :color="{ textColor: '#999999' }"
      >
        {{ item }}
      </n-tag>
      <span class="ml-1 text-xs font-bold" style="color: #778087">
        {{ posts.owner || '未知用户' }}
      </span>
      <span class="ml-2 text-gray-400 text-xs">{{ transformDate(posts.updated_at) }}</span>
    </template>
  </n-thing>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCommunity } from '@/hooks/useCommunity';
import { storeToRefs } from 'pinia';
import { transformDate } from '@/utils/date';
import { NThing, NSkeleton, NAvatar, NButton, NTag } from 'naive-ui';
import defaultAvatar from '@/assets/logo.png';

const router = useRouter();
const { communityStore } = useCommunity();

const { posts_list, fetching } = storeToRefs(communityStore);
</script>

<style lang="scss" scoped></style>

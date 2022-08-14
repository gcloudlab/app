<template>
  <div class="user-info">
    <div class="user">
      <h3>
        {{ getTimeState() }}, <span class="text-primary">{{ auth?.name || 'Guest' }}</span>
      </h3>
      <p class="text-xs">{{ auth?.email }}</p>
      <n-button class="mr-3" tertiary type="primary" size="small" @click="handleEditUserInfo">
        编辑
      </n-button>
      <n-button tertiary type="primary" size="small" @click="handleChangeAvatar">
        换个头像
      </n-button>
    </div>
    <n-divider />
    <div class="action">
      <p class="hover:text-primary transition-color duration-200 cursor-pointer">👻 我的分享</p>
      <p class="hover:text-primary transition-color duration-200 cursor-pointer">😍 我的下载</p>
      <p class="hover:text-primary transition-color duration-200 cursor-pointer">🎯 我的收藏</p>
      <p class="hover:text-primary transition-color duration-200 cursor-pointer">🤮 回收站</p>
    </div>
    <n-divider />
    <div class="sign-action">
      <n-button
        v-if="sign_status && online_status"
        type="default"
        size="small"
        @click="handleLogout"
      >
        注销
      </n-button>
      <n-button v-else type="default" size="small" @click="router.push('/sign')"> 登陆 </n-button>
      <Tips class="float-right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthOutsideStore } from '@/store/modules/auth';
import { useAuth } from '@/hooks';
import Tips from '@/components/tips/index.vue';
import { NButton, NDivider } from 'naive-ui';
import { getTimeState } from '@/utils/date';
import randomAvatar from '@/utils/random-avatar';
import { onInfo } from '@/utils/messages';

const router = useRouter();
const authStore = useAuthOutsideStore();
const { auth, sign_status, online_status } = storeToRefs(authStore);
const { onLogout, onChangeAvatar } = useAuth();

const handleLogout = () => {
  onLogout();
  router.push('/sign');
};
const handleChangeAvatar = () => {
  onChangeAvatar(randomAvatar());
};
const handleEditUserInfo = () => {
  onInfo('暂不支持');
};
</script>

<style lang="scss" scoped></style>

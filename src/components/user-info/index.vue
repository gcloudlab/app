<template>
  <div id="user-info" class="user-info">
    <div class="user">
      <h3>
        {{ getTimeState() }},
        <span class="text-primary">{{ auth?.name || '游客' }}</span>
      </h3>
      <div class="flex items-center mb-2">
        <div class="text-xs">
          {{ auth?.email || '注册即赠1G容量～' }}
        </div>

        <div v-if="auth?.registration_days" class="text-xs">
          <n-divider vertical />已加入{{ auth?.registration_days }}天
        </div>
      </div>

      <div class="flex">
        <EditUser :data="auth!" />
        <n-button tertiary type="primary" size="small" @click="handleChangeAvatar">
          换个头像
        </n-button>
      </div>
    </div>
    <n-divider />
    <div class="action">
      <p class="hover:text-primary transition-color duration-200 cursor-pointer">👻 我的分享</p>
      <p class="hover:text-primary transition-color duration-200 cursor-pointer">😍 我的下载</p>
      <p class="hover:text-primary transition-color duration-200 cursor-pointer">🎯 我的收藏</p>
      <p class="hover:text-primary transition-color duration-200 cursor-pointer">🤮 回收站</p>
    </div>
    <n-divider />
    <div class="flex justify-between">
      <n-button tertiary type="primary" size="small" @click="onInfo('开发中～')">
        使用手册
      </n-button>
      <Tips />
      <UpdateLog />
    </div>
    <p class="text-primary text-center">
      𝑾𝒆 𝒐𝒑𝒆𝒏
      <a href="https://github.com/gcloudlab/app" target="_blank" class="text-secondary">𝒔𝒐𝒖𝒓𝒄𝒆</a> -
      𝑮𝑪𝒍𝒐𝒖𝒅 开源团队
    </p>

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
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthOutsideStore } from '@/store/modules/auth';
import { useAuth } from '@/hooks';
import Tips from '@/components/tips/index.vue';
import { NButton, NDivider } from 'naive-ui';
import { getTimeState } from '@/utils/date';
import { onInfo } from '@/utils/messages';
import randomAvatar from '@/utils/random-avatar';
import EditUser from './edit-user.vue';
const UpdateLog = defineAsyncComponent(() => import('@/components/update-log/index.vue'));

const router = useRouter();
const authStore = useAuthOutsideStore();
const { auth, sign_status, online_status } = storeToRefs(authStore);
const { onLogout, onChangeAvatar, onUpdateUserInfo } = useAuth();

const handleLogout = () => {
  onLogout();
  router.push('/sign');
};
const handleChangeAvatar = async () => {
  const avatar_url = randomAvatar();
  onChangeAvatar(avatar_url);
  await onUpdateUserInfo({ avatar: avatar_url });
};
</script>

<style lang="scss" scoped></style>

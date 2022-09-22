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

      <div class="flex justify-between">
        <EditUser :data="auth!" @on-close="handleCloseEdit" />
        <n-button tertiary type="primary" size="small" @click="handleChangeAvatar">
          换个头像
        </n-button>
        <UpdateLog />
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
    <div class="sign-action flex">
      <n-button
        v-if="sign_status && online_status"
        type="default"
        size="small"
        @click="handleLogout"
      >
        <template #icon>
          <n-icon><LogOutIcon /></n-icon>
        </template>
        注销
      </n-button>
      <n-button v-else type="default" size="small" @click="router.push('/sign')"
        ><template #icon>
          <n-icon><LogInIcon /></n-icon>
        </template>
        登陆
      </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthOutsideStore } from '@/store/modules/auth';
import { useAuth } from '@/hooks';
import { NButton, NDivider, NIcon } from 'naive-ui';
import { getTimeState } from '@/utils/date';
import randomAvatar from '@/utils/random-avatar';
import EditUser from './edit-user.vue';
import { LogOutOutline as LogOutIcon, LogInOutline as LogInIcon } from '@vicons/ionicons5';
const UpdateLog = defineAsyncComponent(() => import('@/components/update-log/index.vue'));

const emits = defineEmits(['onCloseEdit']);
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
const handleCloseEdit = () => {
  emits('onCloseEdit', false);
};
</script>

<style lang="scss" scoped></style>

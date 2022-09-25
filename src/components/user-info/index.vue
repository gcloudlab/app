<template>
  <div id="user-info" class="user-info">
    <div class="user">
      <h3>
        {{ getTimeState() }},
        <span class="text-primary">{{ authStore.auth?.name || '游客' }}</span>
      </h3>
      <div class="flex items-center mb-2">
        <div class="text-xs">
          {{ authStore.auth?.email || '注册即赠1G容量～' }}
        </div>

        <div class="text-xs">
          <n-divider vertical />已加入{{ authStore.auth?.registration_days || 0 }}天
        </div>
      </div>

      <div v-if="authStore.auth?.capacity" class="text-xs mb-2">
        我的空间：{{ transformSize(authStore.auth.capacity) }}
        <n-button type="primary" quaternary size="tiny" @click="onInfo('规划中~')">扩容</n-button>
      </div>

      <div class="flex justify-between">
        <EditUser v-if="authStore.auth" :data="authStore.auth" @on-close="handleCloseEdit" />
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
import { transformSize } from '@/utils/transform-size';
import EditUser from './edit-user.vue';
import { LogOutOutline as LogOutIcon, LogInOutline as LogInIcon } from '@vicons/ionicons5';
import { onInfo } from '@/utils/messages';
const UpdateLog = defineAsyncComponent(() => import('@/components/update-log/index.vue'));

const emits = defineEmits(['onCloseEdit']);
const router = useRouter();
const authStore = useAuthOutsideStore();
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

const { auth, sign_status, online_status } = storeToRefs(authStore);
</script>

<style lang="scss" scoped></style>

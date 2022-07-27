<template>
  <div class="avatar">
    <n-popover trigger="click" v-bind="$attrs" :show-arrow="false">
      <template #trigger>
        <n-badge :show="showStatus" dot :type="status">
          <n-avatar
            class="animate__animated animate__fadeIn faster"
            :src="src"
            :size="size"
            :fallback-src="defaultAvatar"
            :lazy="lazy"
            :bordered="bordered"
            :object-fit="objectFit"
            :color="color"
            :round="round"
            :style="{ borderRadius: '5px' }"
          />
        </n-badge>
      </template>
      <template #header>
        <n-text> 用户：{{ auth?.name || '未注册用户' }} </n-text> <br />
        <n-text> Email：{{ auth?.email }} </n-text>
        <!-- <Button type="success"></Button> -->
      </template>
      <div class="sign">
        <n-button v-if="sign_status && online_status" type="default" @click="handleLogout">
          注销
        </n-button>
        <n-button v-else type="default" @click="router.push('/sign')"> 登陆 </n-button>
      </div>
      <!-- <template #footer> footer </template> -->
    </n-popover>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs, ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthOutsideStore } from '@/store/modules/auth';
import { NAvatar, NPopover, NBadge, NButton, NText } from 'naive-ui';
import defaultLogo from '@/assets/logo.png';
import { useAuth } from '@/hooks';

export interface AvatarProps {
  src: string;
  size?: 'small' | 'medium' | 'large' | number;
  color?: string;
  lazy?: boolean;
  fallbackSrc?: string;
  bordered?: boolean;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  round?: boolean;
  animate?: string;
  showStatus?: boolean;
}

const router = useRouter();
const authStore = useAuthOutsideStore();
const { auth, sign_status, online_status } = storeToRefs(authStore);
const { onLogout } = useAuth();

const defaultAvatar = ref(defaultLogo);
const props = withDefaults(defineProps<AvatarProps>(), {
  animate: '',
  size: 'medium',
  color: 'whitesmoke',
  lazy: false,
  // fallbackSrc: defaultAvatar.value,
  bordered: true,
  objectFit: 'cover',
  round: false,
  showStatus: false,
});

const status = computed(() => {
  if (sign_status?.value && online_status?.value) {
    return 'success';
  }
  return 'warning';
});

const handleLogout = () => {
  onLogout();
  router.push('/sign');
};

toRefs(props);
</script>

<style lang="scss" scoped></style>

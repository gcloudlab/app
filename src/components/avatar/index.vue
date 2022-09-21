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
      <template #header> </template>
      <UserInfo class="user w-60" />
    </n-popover>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs, ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthOutsideStore } from '@/store/modules/auth';
import { NAvatar, NPopover, NBadge } from 'naive-ui';
import defaultLogo from '@/assets/logo.png';
import { useAuth } from '@/hooks';
import UserInfo from '@/components/user-info/index.vue';

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

<style lang="scss">
.avatar {
  .n-badge.n-badge--dot .n-badge-sup {
    left: 40px;
    top: 36px;
  }
}
</style>

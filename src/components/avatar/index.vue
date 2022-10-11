<template>
  <div class="avatar">
    <n-popover trigger="manual" :show="showPopover" v-bind="$attrs" :show-arrow="false">
      <template #trigger>
        <n-badge :show="showStatus" dot :type="status" @click="showPopover = !showPopover">
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
      <UserInfo
        class="user w-60"
        @on-close-edit="showPopover = false"
        @on-close-share="showPopover = false"
      />
    </n-popover>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuth } from '@/hooks/useAuthentication';
import { NAvatar, NPopover, NBadge } from 'naive-ui';
import defaultLogo from '@/assets/logo.png';
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

const { authStore } = useAuth();
const { sign_status, online_status } = storeToRefs(authStore);

const defaultAvatar = ref(defaultLogo);
const showPopover = ref(false);
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

<template>
  <div class="notification">
    <n-popover :show="show" :show-arrow="false" placement="bottom-end" trigger="manual">
      <template #trigger>
        <n-badge :dot="unread_count > 0" :processingt="unread_count > 0">
          <n-icon
            class="mr-4 mt-1 text-primary cursor-pointer hover:text-gray-500"
            :component="Alert20Regular"
            size="23"
            @click="show = !show"
          />
        </n-badge>
      </template>
      <div>
        <HowToUse @click="handleSelect('How_TO_Use_GCloud')" @onClose="show = false" />
        <JoinUs @click="handleSelect('Join_Us')" @onClose="show = false" />
      </div>
    </n-popover>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useGlobalOutsideStore } from '@/store/modules/global';
import { NBadge, NIcon, NPopover } from 'naive-ui';
import { Alert20Regular } from '@vicons/fluent';
import HowToUse from '@/components/global-notification/how-to-use.vue';
import JoinUs from '@/components/global-notification/join-us.vue';
import { useNotification } from '@/hooks/useGlobal';

const globalStore = useGlobalOutsideStore();
const unread_count = ref(0);
const show = ref(false);

// const notifications_list = computed(() => {
//   if (globalStore.notifications) {
//     return globalStore.notifications.map(item => {
//       if (globalStore.has_read_notifications.includes(item.key)) {
//         return { ...item, has_read: true };
//       }
//       // 未读
//       unread_count.value++;
//       return { ...item }; // Why not "return item" directly?
//     });
//   }
//   return [];
// });

const handleSelect = (key: string) => {
  if (key) {
    useNotification('SET', key);
  }
};

const getUnreadCount = () => {
  unread_count.value = 0;
  globalStore.notifications &&
    globalStore.notifications.map(item => {
      if (!globalStore.has_read_notifications.includes(item.key)) {
        unread_count.value++;
      }
    });
};

onMounted(() => {
  getUnreadCount();
});

watch(
  () => globalStore.has_read_notifications,
  () => {
    getUnreadCount();
  }
);
</script>

<style lang="scss">
.notification {
  .n-badge .n-badge-sup {
    left: 18px;
    top: 4px;
  }
}
</style>

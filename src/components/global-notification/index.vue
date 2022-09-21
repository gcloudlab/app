<template>
  <div class="notification">
    <n-dropdown
      trigger="click"
      placement="bottom-end"
      :options="notifications_list"
      @select="handleSelect"
    >
      <n-badge :dot="unread_count > 0" :processingt="unread_count > 0">
        <n-icon
          class="mr-5 mt-2 text-primary cursor-pointer hover:text-gray-500"
          :component="Alert20Regular"
          size="23"
        />
      </n-badge>
    </n-dropdown>
    <HowToUse :show="showGcloud" />
    <JoinUs :show="showJoinUs" @afterClose="() => (showJoinUs = false)" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useGlobalOutsideStore } from '@/store/modules/global';
import { NBadge, NIcon, NDropdown, DropdownOption } from 'naive-ui';
import { Alert20Regular } from '@vicons/fluent';
import { useNotification } from '@/hooks/useGlobal';
import HowToUse from './how-to-use.vue';
import JoinUs from './join-us.vue';

const globalStore = useGlobalOutsideStore();
const showGcloud = ref(false);
const showJoinUs = ref(false);
const unread_count = ref(0);

const notifications_list = computed(() => {
  return globalStore.notifications.map(item => {
    if (globalStore.has_read_notifications.includes(item.key)) {
      return { ...item, has_read: true };
    }
    // 未读
    unread_count.value++;
    return { ...item }; // Why not "return item" directly?
  });
});

const handleSelect = (key: string | number, option: DropdownOption) => {
  if (key) {
    useNotification('SET', key as string);
  }
  if (key === 'How_TO_Use_GCloud') {
    showGcloud.value = !showGcloud.value;
  } else {
    showJoinUs.value = !showJoinUs.value;
  }
};
</script>

<style lang="scss">
.notification {
  .n-badge .n-badge-sup {
    left: 18px;
    top: 7px;
  }
}
</style>

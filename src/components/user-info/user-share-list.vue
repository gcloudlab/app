<template>
  <Drawer class="edit-user" v-model:show="show" :on-after-leave="handleClose" width="60%">
    <template #trigger>
      <n-button type="default" quaternary size="small" @click="handleOpen"> 👻 分享记录 </n-button>
    </template>
    <template #header> 我的分享 {{ share_list ? `(${share_list.length})` : '' }}</template>
    <n-scrollbar style="height: calc(100vh - 100px)">
      <n-list hoverable clickable :show-divider="false">
        <n-list-item v-for="share_detail in share_list" :key="share_detail.identity">
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-button
                text
                type="primary"
                size="small"
                @click="handleClickShareDetail(share_detail.identity)"
              >
                {{ share_detail.name }}
              </n-button>
            </template>
            查看详情
          </n-tooltip>
          <span class="float-right">
            {{ transformDate(share_detail.updated_at) }} -
            {{ transformSecondsToHours(share_detail.expired_time) }}
          </span>
        </n-list-item>
      </n-list>
    </n-scrollbar>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useShare } from '@/hooks/useShare';
import { transformDate, transformSecondsToHours } from '@/utils/date';
import { NButton, NList, NListItem, NScrollbar, NTooltip } from 'naive-ui';
import Drawer from '@/components/commons/drawer/index.vue';

const emits = defineEmits(['onClose']);
const router = useRouter();
const { shareStore, onGetUserShareList } = useShare();
const show = ref(false);

const handleClickShareDetail = (id: string) => {
  if (id) {
    handleClose();
    router.push(`/s/${id}`);
  }
};

const handleOpen = () => {
  onGetUserShareList();
  show.value = true;
};

const handleClose = () => {
  emits('onClose', false);
};

const { share_list } = storeToRefs(shareStore);
</script>

<style lang="scss">
.edit-user.n-drawer {
  .n-drawer-content .n-drawer-body-content-wrapper {
    padding: 16px 24px !important;
  }
}
</style>

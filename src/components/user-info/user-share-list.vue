<template>
  <Drawer class="edit-user" v-model:show="show" :on-after-leave="handleClose" width="60%">
    <template #trigger>
      <n-button type="default" quaternary size="small" @click="handleOpen"> 👻 分享记录 </n-button>
    </template>
    <template #header> 我的历史分享</template>
    <n-scrollbar style="height: calc(100vh - 100px)">
      <n-list hoverable clickable>
        <n-list-item v-for="share_detail in share_list" :key="share_detail.identity">
          <span>
            {{ share_detail.name }}
          </span>
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-button
                quaternary
                type="primary"
                size="tiny"
                @click="handleClickShareDetail(share_detail.identity)"
              >
                <template #icon>
                  <LinkOutline />
                </template>
              </n-button>
            </template>
            查看详情
          </n-tooltip>
          <span class="float-right">
            {{ transformDate(share_detail.updated_at) }}
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
import { useShareOutsideStore } from '@/store/modules/share';
import { transformDate } from '@/utils/date';
import { NButton, NList, NListItem, NScrollbar, NTooltip } from 'naive-ui';
import Drawer from '@/components/commons/drawer/index.vue';
import { LinkOutline } from '@vicons/ionicons5';

const emits = defineEmits(['onClose']);
const router = useRouter();
const shareStore = useShareOutsideStore();
const { onGetUserShareList } = useShare();
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

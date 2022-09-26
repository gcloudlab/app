<template>
  <div>{{}}</div>
</template>

<script setup lang="ts">
import { ref, onMounted, h } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useShareOutsideStore } from '@/store/modules/share';
import { useShare } from '@/hooks/useShare';
import { onSuccess } from '@/utils/messages';
import { MessageRenderMessage, NCard, NA } from 'naive-ui';

const router = useRouter();
const shareStore = useShareOutsideStore();
const { onGetShareDetailByIndentity } = useShare();
const current_share_file_id = ref(router.currentRoute.value.params.id as string);

onMounted(async () => {
  if (current_share_file_id.value) {
    await onGetShareDetailByIndentity(current_share_file_id.value);
  }
  onSuccess('分享', {
    showIcon: false,
    closable: true,
    duration: 5000,
    keepAliveOnHover: true,
    render: renderMessage,
  });
});

const renderMessage: MessageRenderMessage = props => {
  const { type } = props;

  return h(
    NCard,
    {
      title: '分享',
      // bordered: false,
      size: 'small',
      closable: true,
    },
    h('div', { onClick: () => router.push('/xxx') }, '查看分享链接')
  );
};

const {} = storeToRefs(shareStore);
</script>

<style lang="scss" module></style>

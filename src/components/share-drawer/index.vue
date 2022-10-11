<template>
  <Drawer class="share-drawer" v-model:show="show" width="60%">
    <template #trigger>
      <n-button type="success" size="small" @click="handleOpenShare">
        <template #icon>
          <n-icon><ShareSocial /></n-icon>
        </template>
      </n-button>
    </template>
    <template #header> 正在分享{{ file.name }}</template>
    <div>
      <div class="flex items-center text-sm">
        <n-tag type="info"> {{ file.type }} </n-tag>
        <p class="mx-2">{{ file.name }}</p>
        <p>{{ transformSize(file.size) }}</p>
      </div>
      <ShareForm class="mt-3" :identity="file.identity" @on-success="handleSuccessCreate" />
    </div>
  </Drawer>
</template>

<script setup lang="ts">
import { PropType, ref, toRefs, defineAsyncComponent, h, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useShare } from '@/hooks/useShare';
import { FileListData } from '@/models/file';
import { NButton, NTag, NIcon, MessageRenderMessage, NCard, NA, MessageReactive } from 'naive-ui';
import { transformSize } from '@/utils/transform-size';
import { ShareSocial } from '@vicons/ionicons5';
import ShareForm from './share-form.vue';
import { onInfo, onSuccess, onError } from '@/utils/messages';
import useClipboard from 'vue-clipboard3';

const Drawer = defineAsyncComponent(() => import('@/components/commons/drawer/index.vue'));

const props = defineProps({
  file: {
    type: Object as PropType<FileListData>,
    required: true,
  },
});
const router = useRouter();
const { shareStore } = useShare();
const { toClipboard } = useClipboard();

const show = ref(false);
let messageReactive: MessageReactive | null = null;

const handleOpenShare = () => {
  // console.log(props.file);
  if (
    props.file.type === '文件夹' ||
    props.file.identity === 'default' ||
    props.file.identity === 'public'
  ) {
    onInfo(`无法分享${props.file.name}`);
    return;
  }
  show.value = true;
};

const handleSuccessCreate = (v: boolean) => {
  if (v) {
    show.value = false;
    if (!messageReactive) {
      messageReactive = onSuccess('分享', {
        closable: true,
        duration: 7000,
        keepAliveOnHover: true,
        render: renderMessage,
      });
    }
  }
};

const renderMessage: MessageRenderMessage = props => {
  return h(
    NCard,
    {
      title: '分享成功',
      size: 'small',
      closable: true,
      onClose: () => removeMessage(),
    },
    {
      default: () =>
        h('div', null, [
          h('div', { class: 'text-sm p-2 mb-2 bg-gray-100' }, '分享链接已复制到剪切板'),
          h(
            NA,
            {
              class: 'text-primary hover:text-secondary',
              onVnodeMounted: async () => {
                if (shareStore.current_sharing_file_identity !== '') {
                  await toClipboard(
                    `https://gcloud.website/#/s/${shareStore.current_sharing_file_identity}`
                  );
                }
              },
              onClick: () => {
                if (shareStore.current_sharing_file_identity !== '') {
                  router.push(`/s/${shareStore.current_sharing_file_identity}`);
                } else {
                  onError('未知错误');
                }
              },
            },
            { default: () => '查看分享详情' }
          ),
        ]),
    }
  );
};

const removeMessage = () => {
  if (messageReactive) {
    messageReactive.destroy();
    messageReactive = null;
  }
};

onBeforeUnmount(removeMessage);

toRefs(props);
</script>

<style lang="scss">
.share-drawer {
  .n-drawer-body-content-wrapper {
    padding: 16px 24px !important;
  }
}
</style>

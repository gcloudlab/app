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
import { PropType, ref, toRefs, defineAsyncComponent } from 'vue';
import { FileListData } from '@/models/file';
import { NButton, NTag, NIcon } from 'naive-ui';
import { transformSize } from '@/utils/transform-size';
import { ShareSocial } from '@vicons/ionicons5';
import ShareForm from './share-form.vue';
import { onInfo } from '@/utils/messages';
import { onSuccess } from '../../utils/messages';
const Drawer = defineAsyncComponent(() => import('@/components/commons/drawer/index.vue'));

const props = defineProps({
  file: {
    type: Object as PropType<FileListData>,
    required: true,
  },
});
const show = ref(false);

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
  }
};

toRefs(props);
</script>

<style lang="scss">
.share-drawer {
  .n-drawer-body-content-wrapper {
    padding: 16px 24px !important;
  }
}
</style>

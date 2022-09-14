<template>
  <div class="create-folder">
    <Modal
      trigger-content="新建"
      modal-title="新建文件夹"
      positive-text="创建"
      negative-text="取消"
      @positive-click="onPositiveClick"
      @negative-click="onNegativeClick"
    >
      <n-input
        v-model:value="folderName"
        placeholder="请输入文件夹名称"
        @keyup.enter="onPositiveClick"
      />
      <p class="mt-3 ml-1">
        在
        <span class="font-bold">{{ folder?.name === '默认文件夹' ? '根目录' : folder?.name }}</span>
        中新建文件夹
      </p>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, toRefs, defineAsyncComponent } from 'vue';
import { NInput } from 'naive-ui';
import { useFiles } from '@/hooks/useFiles';
import { SelectBaseOption } from 'naive-ui/es/select/src/interface';
import { onWarning } from '@/utils/messages';

const Modal = defineAsyncComponent(() => import('@/components/commons/modal/index.vue'));

const props = defineProps({
  folder: {
    type: Object as PropType<SelectBaseOption>,
    required: true,
  },
});
const { onCreateFolder } = useFiles();
const showModal = ref(false);
const folderName = ref('');
const onNegativeClick = () => {
  showModal.value = false;
};
const onPositiveClick = () => {
  if (folderName.value !== '') {
    onCreateFolder({
      name: folderName.value,
      parent_id: props.folder!.id as number,
    });
    showModal.value = false;
  } else {
    onWarning('文件夹名为空');
  }
};

toRefs(props);
</script>

<style lang="scss"></style>

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
import { PropType, ref, toRefs, defineAsyncComponent, watch } from 'vue';
import { NInput } from 'naive-ui';
import { useFiles } from '@/hooks/useFiles';
import { SelectBaseOption } from 'naive-ui/es/select/src/interface';
import { onWarning } from '@/utils/messages';
import { UploadTargetType } from '@/models/file';

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
const upload_target = ref<UploadTargetType>('private');

const onNegativeClick = () => {
  showModal.value = false;
};

const onPositiveClick = () => {
  if (folderName.value !== '') {
    onCreateFolder(
      {
        name: folderName.value,
        parent_id: props.folder!.id as number,
      },
      props.folder.target as UploadTargetType
    ).then(() => {
      folderName.value = '';
      showModal.value = false;
    });
  } else {
    onWarning('文件夹名不能为空');
  }
};

watch(
  () => props.folder.name,
  () => {
    if (props.folder.name === '公共文件夹') {
      upload_target.value = 'public';
    } else {
      upload_target.value = 'private';
    }
  }
);

toRefs(props);
</script>

<style lang="scss"></style>

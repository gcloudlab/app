<template>
  <div class="create-folder">
    <n-button quaternary type="primary" size="small" @click="showModal = true"> 新建 </n-button>
    <n-modal
      v-model:show="showModal"
      :mask-closable="false"
      preset="dialog"
      title="新建文件夹"
      :show-icon="false"
      positive-text="创建"
      negative-text="取消"
      :positive-button-props="{ type: 'primary' }"
      @positive-click="onPositiveClick"
      @negative-click="onNegativeClick"
    >
      <n-input
        v-model:value="folderName"
        placeholder="请输入文件夹名称"
        @keyup.enter="onPositiveClick"
      />
      <p class="mt-3 ml-1">
        在 <span class="font-bold">{{ folder?.label }}</span>
        中新建文件夹
      </p>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, toRefs } from 'vue';
import { NInput, NModal, NButton } from 'naive-ui';
import { useFiles } from '@/hooks/useFiles';
import { SelectBaseOption } from 'naive-ui/es/select/src/interface';

const props = defineProps({
  folder: {
    type: Object as PropType<SelectBaseOption>,
    require: true,
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
    console.log(folderName.value);
    onCreateFolder({ name: folderName.value, parent_id: props.folder!.value as number });
    showModal.value = false;
  }
};

toRefs(props);
</script>

<style lang="scss">
.n-modal-mask {
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}
</style>

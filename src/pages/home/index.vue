<template>
  <div class="home">
    <n-tree
      block-line
      :data="user_files"
      key-field="identity"
      label-field="name"
      children-field="children"
      :checkable="true"
      expand-on-click
      selectable
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { NTree } from 'naive-ui';
import { useFileOutsideStore } from '@/store/modules/file';
import { useFiles } from '@/hooks/useFiles';

const fileStore = useFileOutsideStore();
const { onGetFileList } = useFiles();

onMounted(async () => {
  await onGetFileList();
  console.log(fileStore.get_user_files);
  console.log(fileStore.get_files_count);
});

const { files_count, user_files } = storeToRefs(fileStore);
</script>

<style lang="scss" scoped></style>

<template>
  <div class="home flex">
    <div class="file-tree-bar w-48 md:w-56">
      <FileList />
    </div>
    <div>1</div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFileOutsideStore } from '@/store/modules/file';
import FileList from './file-list.vue';

const fileStore = useFileOutsideStore();

const { files_count, user_files } = storeToRefs(fileStore);
</script>

<style lang="scss" scoped>
.file-tree-bar {
  /* min-height: 90vh; */
  background: rgba(210, 210, 210, 0.324);
}
</style>

<template>
  <n-breadcrumb>
    <n-breadcrumb-item
      class="SmileySans"
      v-for="folder in routes"
      :key="folder.id"
      @click="handleClickFolder(folder)"
    >
      {{ folder.name }}
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script setup lang="ts">
import { PropType, toRefs } from 'vue';
import { useFiles } from '@/hooks/useFiles';
import { FileListData } from '@/models/file';
import { NBreadcrumb, NBreadcrumbItem } from 'naive-ui';

const props = defineProps({
  routes: {
    type: Array as PropType<FileListData[]>,
    default: [{ name: '主菜单' }],
  },
});
const { onJumpToFolder, onRemoveFromFolderRoutes } = useFiles();

const handleClickFolder = (folder: FileListData) => {
  // console.log('--click folder', folder.name);
  if (folder.name === '主菜单') {
    onRemoveFromFolderRoutes();
  }
  onJumpToFolder(folder);
};

toRefs(props);
</script>

<style lang="scss">
.n-breadcrumb-item .n-breadcrumb-item__link,
.n-breadcrumb-item .n-breadcrumb-item__separator {
  height: 20px;
  line-height: 24px;
}
</style>

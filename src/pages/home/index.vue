<template>
  <div class="home flex">
    <div class="file-tree-bar w-48 md:w-60 animate__animated animate__fadeIn faster">
      <FileMenu @selectedKeys="handleSelectedKeys" @expandedKeys="handleExpandedKeys" />
      <Overview />
      <OnlineUsers />
    </div>
    <div class="main-container shadow-inner w-screen z-10">
      <div class="main-nav flex items-center ml-2">
        <Button class="mr-3 px-3" @click="handleBackToPreFolder" size="small">
          <ChevronBack class="w-4" />
        </Button>
        <FileFolderRoute :routes="folder_routes" />
        <div class="ml-auto">
          {{ folder_routes.at(-1)!.size === -1 ? `已使用容量：${transformSize(files_size)}` : `文件夹大小：${transformSize(folder_routes.at(-1)!.size)}` }}
        </div>
      </div>
      <FileList
        v-if="fileViewType === 'list'"
        :values="folder_routes.at(-1)"
        @expandedKeys="handleExpandedKeys"
      />
      <FileGraphical
        v-else-if="fileViewType === 'graphical'"
        :values="folder_routes.at(-1)"
        @expandedKeys="handleExpandedKeys"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useFileOutsideStore } from '@/store/modules/file';
import { useFiles } from '@/hooks/useFiles';
import { TreeOption } from 'naive-ui';
import FileMenu from './file-menu.vue';
import Overview from './overview.vue';
import OnlineUsers from './community-status.vue';
import FileList from './file-list.vue';
import FileGraphical from './file-graphical.vue';
import FileFolderRoute from './file-folder-route.vue';
import { FileListData } from '@/models/file';
import Button from '@/components/button/index.vue';
import { ChevronBack } from '@vicons/ionicons5';
import { transformSize } from '@/utils/transform-size';

const fileStore = useFileOutsideStore();
const { onAddToFolderRoutes, onRemoveFromFolderRoutes, onJumpToFile } = useFiles();
const expendMenuValue = ref<TreeOption | FileListData>();
const fileViewType = ref<'list' | 'graphical'>('graphical');

const handleSelectedKeys = (value: FileListData) => {
  // console.log('---selected key', value);
  onJumpToFile(value);
};
const handleExpandedKeys = (value: TreeOption | FileListData) => {
  // console.log('---expand key', value);
  onAddToFolderRoutes(value as FileListData);
  expendMenuValue.value = value; // useless
};
const handleBackToPreFolder = () => {
  onRemoveFromFolderRoutes();
};

const { folder_routes, files_size } = storeToRefs(fileStore);
</script>

<style lang="scss" scoped>
.file-tree-bar,
.main-container {
  min-height: calc(100vh - 57px);
}
.main-container {
  background: rgb(255, 255, 255);
}
</style>

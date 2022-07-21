<template>
  <div class="home flex">
    <!-- sider -->
    <div class="file-tree-bar w-48 md:w-60 animate__animated animate__fadeIn faster">
      <n-scrollbar style="max-height: calc(100vh - 57px)">
        <FileMenu @selectedKeys="handleSelectedKeys" @expandedKeys="handleExpandedKeys" />
        <Overview />
        <OnlineUsers />
      </n-scrollbar>
    </div>
    <!-- main -->
    <div class="main-container shadow-inner w-screen z-10">
      <div class="main-nav bg-gray-100 flex items-center shadow" v-if="folder_routes.length > 1">
        <Button class="px-3" @click="handleBackToPreFolder" size="small">
          <ChevronBack class="w-4" />
        </Button>
        <n-button class="mr-3 px-1" size="small" @click="handleChangeViewType">
          <template #icon>
            <AppsSharp v-if="fileViewType === 'list'" />
            <Menu v-else />
          </template>
        </n-button>
        <FileFolderRoute :routes="folder_routes" />
        <n-tag :bordered="false" size="small" type="warning">
          共{{ folder_routes.at(-1)!.size === -1 ? `${transformSize(files_size)}` : `${transformSize(folder_routes.at(-1)!.size)}` }}
        </n-tag>
        <n-button class="ml-auto px-3" size="small">下载</n-button>
      </div>
      <div class="main-bar flex">
        <div class="main-files-bar flex-auto">
          <n-scrollbar style="max-height: calc(100vh - 57px)">
            <FileList
              v-if="fileViewType === 'list' && folder_routes.length > 1"
              :values="folder_routes.at(-1)"
              @expandedKeys="handleExpandedKeys"
            />
            <FileGraphical
              v-else-if="fileViewType === 'graphical' && folder_routes.length > 1"
              :values="folder_routes.at(-1)"
              @selectedKeys="handleSelectedKeys"
              @expandedKeys="handleExpandedKeys"
            />
            <Attention v-if="folder_routes.length === 1" />
          </n-scrollbar>
        </div>
        <FileDetail
          v-show="currentClickedFile && folder_routes.length > 1"
          class="flex-none"
          :file="currentClickedFile"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useFileOutsideStore } from '@/store/modules/file';
import { useFiles } from '@/hooks/useFiles';
import { TreeOption, NTag, NButton, NScrollbar } from 'naive-ui';
import FileMenu from './sidebar/file-menu.vue';
import Overview from './sidebar/overview.vue';
import OnlineUsers from './sidebar/community-status.vue';
import FileList from './container/file-list.vue';
import FileGraphical from './container/file-graphical.vue';
import FileDetail from './container/file-detail.vue';
import FileFolderRoute from './container/file-folder-route.vue';
import { FileListData } from '@/models/file';
import Button from '@/components/button/index.vue';
import { ChevronBack, AppsSharp, Menu } from '@vicons/ionicons5';
import { transformSize } from '@/utils/transform-size';
import Attention from './main-nav/index.vue';

const fileStore = useFileOutsideStore();
const { onAddToFolderRoutes, onRemoveFromFolderRoutes, onJumpToFile } = useFiles();
const expendMenuValue = ref<TreeOption | FileListData>();
const fileViewType = ref<'list' | 'graphical'>('graphical');
const currentClickedFile = ref<FileListData>();

const handleSelectedKeys = (value: FileListData) => {
  // console.log('---selected key', value);
  if (value) {
    onJumpToFile(value);
    currentClickedFile.value = value;
  }
};
const handleExpandedKeys = (value: TreeOption | FileListData) => {
  // console.log('---expand key', value);
  if (value) {
    onAddToFolderRoutes(value as FileListData);
    expendMenuValue.value = value; // useless
    currentClickedFile.value = value as FileListData;
  }
};
const handleBackToPreFolder = () => {
  onRemoveFromFolderRoutes();
};
const handleChangeViewType = () => {
  fileViewType.value = fileViewType.value === 'list' ? 'graphical' : 'list';
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
  .main-bar {
    .main-files-bar {
      min-width: 200px;
    }
  }
}
</style>

<template>
  <div class="home flex">
    <!-- sider -->
    <div class="file-tree-bar w-48 md:w-60 animate__animated animate__fadeIn faster">
      <n-scrollbar style="max-height: calc(100vh - 57px)">
        <FileMenu
          @selectedKeys="handleSelectedKeys"
          @expandedKeys="handleExpandedKeys"
          @checkedKeys="handleCheckedKeys"
          @delete="handleDelete"
        />
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
        <n-button class="px-1" size="small" @click="handleChangeViewType">
          <template #icon>
            <AppsSharp v-if="fileViewType === 'list'" />
            <Menu v-else />
          </template>
        </n-button>
        <n-button class="px-1" size="small" @click="onGetFileList">
          <template #icon>
            <Refresh />
          </template>
        </n-button>
        <n-button
          class="mr-3 px-2 text-xs"
          size="small"
          :type="currentCheckedFiles.length > 0 ? 'primary' : 'default'"
        >
          下载
        </n-button>
        <FileFolderRoute :routes="folder_routes" />
        <n-tag :bordered="false" size="small" type="info">
          共{{ folder_routes.at(-1)!.size === -1 ? `${transformSize(files_size)}` : `${transformSize(folder_routes.at(-1)!.size)}` }}
        </n-tag>
      </div>
      <div class="main-bar flex">
        <div class="main-files-bar flex-auto">
          <n-scrollbar style="max-height: calc(100vh - 57px)">
            <FileList
              v-if="fileViewType === 'list' && folder_routes.length > 1"
              :values="folder_routes.at(-1)"
              @selectedKeys="handleSelectedKeys"
              @expandedKeys="handleExpandedKeys"
            />
            <FileGraphical
              v-else-if="fileViewType === 'graphical' && folder_routes.length > 1"
              :values="folder_routes.at(-1)"
              @selectedKeys="handleSelectedKeys"
              @expandedKeys="handleExpandedKeys"
            />
            <MainNav v-if="folder_routes.length === 1" />
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
import { ref, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useFileOutsideStore } from '@/store/modules/file';
import { useFiles } from '@/hooks/useFiles';
import { FileListData } from '@/models/file';
import { transformSize } from '@/utils/transform-size';
import { TreeOption, NTag, NButton, NScrollbar } from 'naive-ui';
import { ChevronBack, AppsSharp, Menu, Refresh } from '@vicons/ionicons5';
import MainNav from './main-nav/index.vue';
const FileMenu = defineAsyncComponent(() => import('./sidebar/file-menu.vue'));
const Overview = defineAsyncComponent(() => import('./sidebar/overview.vue'));
const OnlineUsers = defineAsyncComponent(() => import('./sidebar/community-status.vue'));
const FileList = defineAsyncComponent(() => import('./container/file-list.vue'));
const FileGraphical = defineAsyncComponent(() => import('./container/file-graphical.vue'));
const FileDetail = defineAsyncComponent(() => import('./container/file-detail.vue'));
const FileFolderRoute = defineAsyncComponent(() => import('./container/file-folder-route.vue'));
const Button = defineAsyncComponent(() => import('@/components/commons/button/index.vue'));

const fileStore = useFileOutsideStore();
const { onGetFileList, onAddToFolderRoutes, onRemoveFromFolderRoutes, onJumpToFile, onDeleteFile } =
  useFiles();
const expendMenuValue = ref<TreeOption | FileListData>();
const fileViewType = ref<'list' | 'graphical'>('graphical');
const currentClickedFile = ref<FileListData>();
const currentCheckedFiles = ref<FileListData[]>([]);

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
const handleCheckedKeys = (value: FileListData[]) => {
  currentCheckedFiles.value = value;
};
const handleDelete = (value: boolean) => {
  if (value && currentCheckedFiles.value.length > 0) {
    onDeleteFile(currentCheckedFiles.value);
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

<template>
  <div class="home flex" :class="[isMobile() ? 'flex-col-reverse' : '']">
    <!-- sider -->
    <div
      class="file-tree-bar animate__animated animate__fadeIn faster"
      :class="[isMobile() ? 'w-full' : 'w-60']"
    >
      <n-scrollbar style="max-height: calc(100vh - 60px)">
        <FileMenu
          @selectedKeys="handleSelectedKeys"
          @expandedKeys="handleExpandedKeys"
          @checkedKeys="handleCheckedKeys"
          @delete="handleDelete"
        />
        <OnlineUsers />
        <Overview />
      </n-scrollbar>
    </div>
    <!-- main -->
    <div class="main-container shadow-inner w-screen z-10">
      <!-- tool bar -->
      <div v-if="folder_routes.length > 1" class="main-nav bg-gray-100 flex items-center shadow">
        <Button class="px-3" size="small" @click="handleBackToPreFolder">
          <ChevronBack class="w-4" />
        </Button>
        <n-button class="px-1" size="small" @click="handleChangeViewType">
          <template #icon>
            <AppsSharp v-if="fileViewType === 'list'" />
            <Menu v-else />
          </template>
        </n-button>
        <n-button class="px-1 mr-3" size="small" @click="onGetFileList">
          <template #icon>
            <Refresh />
          </template>
        </n-button>
        <!-- <n-button
          class="mr-3 px-2 text-xs"
          size="small"
          :type="currentCheckedFiles.length > 0 ? 'primary' : 'default'"
        >
          下载
        </n-button> -->
        <FileFolderRoute :routes="folder_routes" />
        <n-tag :bordered="false" size="small" type="info">
          共{{
            folder_routes.at(-1)?.name === '公共文件夹'
              ? `${transformSize(public_size)}`
              : folder_routes.at(-1)!.size === -1
              ? `${transformSize(files_size)}`
              : `${transformSize(folder_routes.at(-1)!.size)}`
          }}
          ({{ folder_routes.at(-1)?.children?.length }})
        </n-tag>
      </div>
      <!-- file detail -->
      <div class="main-bar flex">
        <div class="main-files-bar flex-auto">
          <n-scrollbar style="height: calc(100vh - 60px)">
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
          v-show="currentClickedFile && folder_routes.length > 1 && !isMobile()"
          class="flex-none"
          :file="currentClickedFile"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useFiles } from '@/hooks/useFiles';
import { FileListData } from '@/models/file';
import { transformSize } from '@/utils/transform-size';
import { TreeOption, NTag, NButton, NScrollbar } from 'naive-ui';
import { ChevronBack, AppsSharp, Menu, Refresh } from '@vicons/ionicons5';
import MainNav from './main-nav/index.vue';
import { isMobile } from '@/utils/is-mobile';

const FileMenu = defineAsyncComponent(() => import('./sidebar/file-menu.vue'));
const Overview = defineAsyncComponent(() => import('./sidebar/overview.vue'));
const OnlineUsers = defineAsyncComponent(() => import('./sidebar/community-status.vue'));
const FileList = defineAsyncComponent(() => import('./file-container/file-list.vue'));
const FileGraphical = defineAsyncComponent(() => import('./file-container/file-graphical.vue'));
const FileDetail = defineAsyncComponent(() => import('./file-container/file-detail.vue'));
const FileFolderRoute = defineAsyncComponent(
  () => import('./file-container/file-folder-route.vue')
);
const Button = defineAsyncComponent(() => import('@/components/commons/button/index.vue'));

const {
  fileStore,
  onGetFileList,
  onAddToFolderRoutes,
  onRemoveFromFolderRoutes,
  onJumpToFile,
  onDeleteFile,
} = useFiles();
const expendMenuValue = ref<TreeOption | FileListData>();
const fileViewType = ref<'list' | 'graphical'>('graphical');
const currentClickedFile = ref<FileListData>();
const currentCheckedFiles = ref<FileListData[]>([]);

onMounted(async () => {
  await onGetFileList();
});

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

const { folder_routes, files_size, public_size } = storeToRefs(fileStore);
</script>

<style lang="scss" scoped>
.file-tree-bar,
.main-container {
  height: calc(100vh - 60px);
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

<template>
  <div class="home flex">
    <div class="file-tree-bar w-48 md:w-60 animate__animated animate__fadeIn faster">
      <FileMenu @selectedKeys="handleSelectedKeys" @expandedKeys="handleExpandedKeys" />
      <Overview />
      <OnlineUsers />
    </div>
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
          {{ folder_routes.at(-1)!.size === -1 ? `${transformSize(files_size)}` : `${transformSize(folder_routes.at(-1)!.size)}` }}
        </n-tag>
      </div>
      <div class="main-bar flex">
        <div class="main-files-bar flex-auto">
          <FileList
            v-if="fileViewType === 'list'"
            :values="folder_routes.at(-1)"
            @expandedKeys="handleExpandedKeys"
          />
          <FileGraphical
            v-else-if="fileViewType === 'graphical'"
            :values="folder_routes.at(-1)"
            @selectedKeys="handleSelectedKeys"
            @expandedKeys="handleExpandedKeys"
          />
          <Vue3Lottie v-if="folder_routes.length === 1" :animationData="EmojiJson" :height="200" />
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
import { TreeOption, NTag, NButton } from 'naive-ui';
import FileMenu from './file-menu.vue';
import Overview from './overview.vue';
import OnlineUsers from './community-status.vue';
import FileList from './file-list.vue';
import FileGraphical from './file-graphical.vue';
import FileDetail from './file-detail.vue';
import FileFolderRoute from './file-folder-route.vue';
import { FileListData } from '@/models/file';
import Button from '@/components/button/index.vue';
import { ChevronBack, AppsSharp, Menu } from '@vicons/ionicons5';
import { transformSize } from '@/utils/transform-size';
import EmojiJson from '@/assets/lotties/emoji.json';

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

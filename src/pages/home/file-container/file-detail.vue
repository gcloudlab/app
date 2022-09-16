<template>
  <div class="file-detail w-52 rounded">
    <n-scrollbar style="max-height: calc(100vh - 60px)">
      <n-card
        class="leading-4"
        hoverable
        :bordered="false"
        content-style="background-color: #008f8f; border-radius: 5px;color: white;"
        @click="handleSelect(file)"
      >
        <n-image
          v-if="file.type === '图片'"
          class="shadow-md rounded"
          width="160"
          :src="file.path"
          fallback-src="./src/assets/logo.png"
        />
        <VideoPlayground v-else-if="file.type === '视频文件'" :data="file" :src="file.path" />
        <audio
          v-else-if="file.type === '音频文件'"
          class="shadow-md rounded"
          style="width: 160px; height: 30px"
          :src="file.path"
          controls
        />
        <div class="absolute hidden">
          <n-skeleton width="160px" height="83px" :repeat="1" :sharp="false" />
        </div>

        <div class="flex justify-start items-center flex-wrap mt-2">
          <n-icon
            v-if="file.icon !== 'media'"
            class="mr-2 text-gray-100 cursor-pointer"
            :component="(file?.icon as FileIconType)?.icon"
            size="20"
          />
          <span>{{ file.name }}</span>
        </div>
        <p>文件大小：{{ transformSize(file.size) }}</p>
        <p v-show="file.isFolder">文件数量：{{ file.children?.length }}</p>
        <p>文件类型：{{ file.type }}</p>
        <p v-show="file.updated_at">修改日期：{{ file.updated_at }}</p>
        <div class="flex">
          <n-button
            class="w-1/2"
            type="primary"
            circle
            size="small"
            @click.prevent="handleDownload(file)"
          >
            下载
          </n-button>
          <ShareDrawer :file="file" class="ml-2 w-1/2" />
        </div>
        <div class="mt-2">
          <n-popover
            :show="showFolderTree"
            placement="bottom"
            trigger="manual"
            @clickoutside="showFolderTree = false"
          >
            <template #trigger>
              <n-button
                class="w-full"
                type="info"
                circle
                size="small"
                @click="handleMoveFile(file)"
              >
                移动到
              </n-button>
            </template>
            <FolderTree
              v-if="origin_folders.length > 0"
              :data="origin_folders"
              :node-props="nodeProps"
            />
            <div v-else class="text-xs text-center">请先新建文件夹</div>
          </n-popover>
          <n-button
            class="mt-2 w-full"
            type="warning"
            circle
            size="small"
            @click="handleDeleteFile"
          >
            删除
          </n-button>
        </div>
      </n-card>
      <DragUpload class="w-full h-48" />
    </n-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, PropType, ref, toRefs, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useFileOutsideStore } from '@/store/modules/file';
import { useFiles } from '@/hooks/useFiles';
import {
  NCard,
  NImage,
  NScrollbar,
  NButton,
  TreeOption,
  NPopover,
  NSkeleton,
  NIcon,
} from 'naive-ui';
import { FileIconType, FileListData } from '@/models/file';
import { transformSize } from '@/utils/transform-size';
import { Folder, DocumentOutline, FileTraySharp } from '@vicons/ionicons5';
import downloadByUrl from '@/utils/download-by-url';
import { onInfo } from '@/utils/messages';
import DragUpload from '@/components/upload/trigger-upload.vue';
import ShareDrawer from '@/components/share-drawer/index.vue';
const ShowOrEdit = defineAsyncComponent(() => import('./file-edit.vue'));
const FolderTree = defineAsyncComponent(() => import('@/components/folder-tree/index.vue'));
const VideoPlayground = defineAsyncComponent(() => import('@/components/video/index.vue'));

const props = defineProps({
  file: {
    type: Object as PropType<FileListData>,
    required: true,
    default: {},
  },
});
const fileStore = useFileOutsideStore();
const { onDeleteFile, onUpdateFileName, onMoveFile } = useFiles();
const currentFileRef = ref<FileListData | null>(null);
const showFolderTree = ref(false);
const moveFileInfo = reactive({
  identity: '',
  parent_identity: '',
  file: {} as FileListData,
});
const mediaType = ['文件夹', '图片', '音频文件', '视频文件', '压缩文件'];

const handleSelect = (file: FileListData) => {
  currentFileRef.value = file;
};
const handleUpdateName = (v: string) => {
  if (
    currentFileRef.value &&
    v &&
    v !== currentFileRef.value.name &&
    currentFileRef.value.identity
  ) {
    currentFileRef.value.name = v;
    onUpdateFileName({
      identity: currentFileRef.value.identity,
      name: v,
    });
  }
};
const handleDeleteFile = () => {
  onDeleteFile([props.file]);
};
const handleDownload = (file: FileListData) => {
  if (file.type !== '文件夹') {
    downloadByUrl(file);
  } else {
    onInfo('开发中~');
  }
};
const handleShare = (file: FileListData) => {
  onInfo('开发中~');
  // if (file.type !== "文件夹") {
  //   console.log("分享文件", file);
  // } else {
  //   console.log("分享文件夹");
  // }
};

const handleMoveFile = (file: FileListData) => {
  showFolderTree.value = true;
  moveFileInfo.identity = file.identity;
  moveFileInfo.file = file;
};
const nodeProps = ({ option }: { option: TreeOption }) => {
  return {
    async onDblclick() {
      moveFileInfo.parent_identity = option.identity as string;
      showFolderTree.value = false;
      if (moveFileInfo.parent_identity && moveFileInfo.identity && option.isFolder) {
        await onMoveFile(moveFileInfo);
      }
    },
  };
};

const { origin_folders } = storeToRefs(fileStore);
toRefs(props);
</script>

<style lang="scss" scoped>
.file-detail {
  min-height: calc(100vh - 85px);
}
</style>

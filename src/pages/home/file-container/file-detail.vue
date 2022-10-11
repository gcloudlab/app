<template>
  <div class="file-detail w-52 rounded">
    <n-scrollbar style="max-height: calc(100vh - 60px)">
      <n-card
        class="leading-4"
        content-style="background-color: #008b83; border-radius: 3px;color: white;"
        @click="handleSelect(file)"
      >
        <!-- media preview -->
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

        <!-- file info -->
        <div class="flex justify-start items-center flex-nowrap mt-2">
          <n-icon
            v-if="file.icon !== 'media'"
            class="mr-2 text-gray-100 cursor-pointer"
            :component="(file?.icon as FileIconType)?.icon"
            size="20"
          />
          <span>{{ file.name }}</span>
        </div>
        <p>文件大小：{{ transformSize(file.size) }}</p>
        <p v-show="file.type === '文件夹'">文件数量：{{ file.children?.length }}</p>
        <p>文件类型：{{ file.type }}</p>
        <p v-show="file?.owner">所属用户：{{ file.owner }}</p>
        <p v-show="file.updated_at">更新日期：{{ file.updated_at }}</p>
        <!-- Btn action -->
        <div class="flex justify-center w-full">
          <PreviewDrawer :file="file" />
          <ShareDrawer v-if="file.target === 'private'" class="flex-2" :file="file" />
          <n-button
            class="flex-1"
            type="primary"
            size="small"
            @click.prevent="handleDownload(file)"
          >
            <template #icon>
              <n-icon><CloudDownloadOutline /></n-icon>
            </template>
          </n-button>
        </div>
        <n-button-group
          v-show="!file.owner || file.owner === auth?.name || auth?.name === 'Juicee'"
          class="w-full"
          vertical
        >
          <n-popover
            v-if="!file.owner"
            :show="showFolderTree"
            placement="left"
            trigger="manual"
            @clickoutside="showFolderTree = false"
          >
            <template #trigger>
              <n-button type="info" size="small" @click="handleMoveFile(file)">
                <template #icon>
                  <n-icon><TableMoveAbove20Regular /></n-icon>
                </template>
                移动
              </n-button>
            </template>
            <FolderTree
              v-if="origin_folders.length > 0"
              :data="origin_folders"
              :node-props="nodeProps"
            />
            <div v-else class="text-xs text-center">请先新建文件夹</div>
          </n-popover>
          <n-button type="error" size="small" @click="handleDeleteFile">
            <template #icon>
              <n-icon><TrashOutline /></n-icon>
            </template>
            删除
          </n-button>
        </n-button-group>
      </n-card>
      <DragUpload class="w-full h-48" placement="top" />
    </n-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, PropType, ref, toRefs, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useFiles } from '@/hooks/useFiles';
import { useAuth } from '@/hooks/useAuthentication';
import {
  NCard,
  NImage,
  NScrollbar,
  NButton,
  NButtonGroup,
  TreeOption,
  NPopover,
  NSkeleton,
  NIcon,
} from 'naive-ui';
import { FileIconType, FileListData } from '@/models/file';
import { transformSize } from '@/utils/transform-size';
import downloadByUrl from '@/utils/download-by-url';
import { onInfo } from '@/utils/messages';
import DragUpload from '@/components/upload/trigger-upload.vue';
import ShareDrawer from '@/components/share-drawer/index.vue';
import PreviewDrawer from '@/components/preview-drawer/index.vue';
import { CloudDownloadOutline, TrashOutline } from '@vicons/ionicons5';
import { TableMoveAbove20Regular } from '@vicons/fluent';
const FolderTree = defineAsyncComponent(() => import('@/components/folder-tree/index.vue'));
const VideoPlayground = defineAsyncComponent(() => import('@/components/video/index.vue'));

const props = defineProps({
  file: {
    type: Object as PropType<FileListData>,
    required: true,
    default: {},
  },
});
const { authStore } = useAuth();
const { fileStore, onDeleteFile, onMoveFile } = useFiles();
const currentFileRef = ref<FileListData | null>(null);
const showFolderTree = ref(false);
const moveFileInfo = reactive({
  identity: '',
  parent_identity: '',
  file: {} as FileListData,
});

const handleSelect = (file: FileListData) => {
  currentFileRef.value = file;
};

const handleDeleteFile = () => {
  onDeleteFile([props.file], props.file.target);
};

const handleDownload = (file: FileListData) => {
  if (file.type !== '文件夹') {
    downloadByUrl(file);
  } else {
    onInfo('暂不支持批量下载~');
  }
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
      if (moveFileInfo.parent_identity && moveFileInfo.identity && option.type === '文件夹') {
        await onMoveFile(moveFileInfo);
      }
    },
  };
};

// const handleUpdateName = (v: string) => {
//   if (
//     currentFileRef.value &&
//     v &&
//     v !== currentFileRef.value.name &&
//     currentFileRef.value.identity
//   ) {
//     currentFileRef.value.name = v;
//     onUpdateFileName({
//       identity: currentFileRef.value.identity,
//       name: v,
//     });
//   }
// };

const { origin_folders } = storeToRefs(fileStore);
const { auth } = storeToRefs(authStore);
toRefs(props);
</script>

<style lang="scss" scoped>
/* .file-detail {
  min-height: calc(100vh - 88px);
} */
</style>

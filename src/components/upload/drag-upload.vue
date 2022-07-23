<template>
  <div class="drag-upload">
    <n-upload
      v-model:file-list="upload_files"
      ref="upload"
      multiple
      abstract
      directory-dnd
      show-download-button
      :action="action"
      :max="max"
      @update:file-list="handleFileListChange"
      :on-remove="handleRemoveUploadFile"
      :on-error="handleUploadError"
      :on-finish="handleUploadFinish"
      @change="handleUploadChange"
    >
      <n-upload-trigger #="{ handleClick }" abstract>
        <div
          @click="handleClick"
          class="flex flex-col justify-center items-center p-1 text-center hover:bg-gray-300 cursor-pointer transition-all duration-150"
        >
          <CloudUploadOutline class="animate-pulse w-9 text-gray-500 mt-2" />
          <p depth="1" class="my-1">{{ title }}</p>
          <n-p depth="3" style="margin: 8px 0 0 0"> {{ description }} </n-p>
        </div>
      </n-upload-trigger>
      <!-- download list -->
      <n-collapse class="upload-list" accordion>
        <!-- 上传列表 -->
        <n-collapse-item name="1" :arrow="false">
          <template #header-extra>
            <div class="flex items-center mr-3">
              <svg v-if="upload_files.length > 0" class="animate-ping w-2 h-2 text-green-800">
                <CloudUploadOutline />
              </svg>
              <span class="text-green-600 mx-2">
                {{ upload_files.length }}
              </span>
              <n-button v-if="upload_files.length > 0" @click="handleClearUploadFile" size="small">
                清空
              </n-button>
            </div>
          </template>
          <template #header>
            <div class="">
              <span>上传列表</span>
            </div>
          </template>
          <n-scrollbar class="h-54">
            <n-upload-file-list />
          </n-scrollbar>
        </n-collapse-item>
        <!-- 下载列表 -->
        <n-collapse-item name="2" :arrow="false">
          <template #header-extra>
            <div class="flex items-center mr-3">
              <svg v-if="upload_files.length > 0" class="animate-ping w-2 h-2 text-green-800">
                <CloudUploadOutline />
              </svg>
              <span class="text-green-600 mx-2">
                {{ upload_files.length }}
              </span>
              <n-button v-if="upload_files.length > 0" @click="handleClearUploadFile" size="small">
                清空
              </n-button>
            </div>
          </template>
          <template #header>
            <div class="">
              <span>下载列表</span>
            </div>
          </template>
        </n-collapse-item>
      </n-collapse>
    </n-upload>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { storeToRefs } from 'pinia';
import {
  NUpload,
  NUploadTrigger,
  NP,
  NScrollbar,
  NCollapse,
  NCollapseItem,
  UploadFileInfo,
  NUploadFileList,
  UploadInst,
  NButton,
} from 'naive-ui';
import { useFiles } from '@/hooks/useFiles';
import { CloudUploadOutline } from '@vicons/ionicons5';
import { useFileOutsideStore } from '@/store/modules/file';
import { onError, onWarning } from '@/utils/messages';

const props = defineProps({
  action: {
    type: String,
    default: '',
    require: true,
  },
  max: {
    type: Number,
    default: 10,
  },
  title: {
    type: String,
    default: '点击上传',
  },
  description: {
    type: String,
    default: '',
  },
});
const fileStore = useFileOutsideStore();
const { onUploadFiles, onRemoveUploadFile } = useFiles();
const uploadRef = ref<UploadInst | null>(null);
const fileList = ref<UploadFileInfo[]>([]);

const handleUploadChange = (data: { fileList: UploadFileInfo[]; file: UploadFileInfo }) => {
  fileList.value = data.fileList;
  onUploadFiles(data.file);
};
const handleRemoveUploadFile = (data: { fileList: UploadFileInfo[]; file: UploadFileInfo }) => {
  onRemoveUploadFile(data.file);
  return data.file;
};
const handleUploadError = (options: { file: UploadFileInfo; event?: ProgressEvent }) => {
  onError(`上传失败：${options.file.name}`);
  return options.file;
};
const handleUploadFinish = (options: { file: UploadFileInfo; event?: ProgressEvent }) => {
  onWarning(`上传完成：${options.file.name}`);
  return options.file;
};
const handleClearUploadFile = () => {
  uploadRef.value?.clear();
  onRemoveUploadFile();
};
const handleFileListChange = () => {
  // console.log('是的，file-list 的值变了');
};

const { upload_files } = storeToRefs(fileStore);
toRefs(props);
</script>

<style lang="scss">
.drag-upload {
  .n-collapse .n-collapse-item .n-collapse-item__header {
    padding: 6px;
    border-bottom: 1px dashed #ccc;
    border-radius: 4px;
    transition: background 0.2s;
    &:hover {
      background-color: #fafafa;
    }
  }
  .n-collapse .n-collapse-item {
    margin-top: 0;
  }
  .n-collapse .n-collapse-item .n-collapse-item__content-wrapper .n-collapse-item__content-inner {
    padding: 0;
  }
  .n-upload-file-list .n-upload-file .n-upload-file-info {
    padding: 0;
  }
}
</style>

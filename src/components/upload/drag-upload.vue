<template>
  <div class="drag-upload">
    <n-upload
      v-model:file-list="upload_files"
      ref="upload"
      action="/api/file/upload"
      :headers="headers"
      multiple
      abstract
      directory-dnd
      show-download-button
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
          <p depth="2" class="my-1">{{ title }}</p>
          <n-p depth="3" style="margin: 8px 0 0 0"> {{ description }} </n-p>
        </div>
      </n-upload-trigger>
      <!-- download list -->
      <n-collapse class="upload-list" accordion>
        <n-popselect
          v-if="folder_routes.length === 1"
          v-model:value="uploadFolderName"
          :options="origin_folders"
          size="medium"
          scrollable
          trigger="click"
          :on-update:value="handleUpdateUploadFolder"
        >
          <n-button quaternary type="primary" size="small" class="w-full">
            上传到：{{ uploadFolderName }}
          </n-button>
        </n-popselect>

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
  NPopselect,
  UploadCustomRequestOptions,
} from 'naive-ui';
import { useFiles } from '@/hooks/useFiles';
import { CloudUploadOutline } from '@vicons/ionicons5';
import { useFileOutsideStore } from '@/store/modules/file';
import { onError, onSuccess, onWarning } from '@/utils/messages';
import type { FileListData } from '@/models/file';
import { SelectBaseOption } from 'naive-ui/es/select/src/interface';
import { useStorage } from '@/utils/use-storage';

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
    default: '选择文件上传',
  },
  description: {
    type: String,
    default: '',
  },
});
const fileStore = useFileOutsideStore();
const { onAddUploadFiles, onRemoveUploadFile, onUploadFile } = useFiles();
const uploadRef = ref<UploadInst | null>(null);
const fileList = ref<UploadFileInfo[]>([]);
const uploadFolder = ref<SelectBaseOption>({
  value: 0,
  label: '未分类',
});
const uploadFolderName = ref<string>('未分类');
const headers = {
  Authorization: useStorage('token'),
};

const handleUpdateUploadFolder = (value: number, option: SelectBaseOption) => {
  uploadFolderName.value = option.label as string;
  uploadFolder.value = fileStore.get_origin_folders.filter(item => item.value === value)[0];
};
const handleUploadChange = (data: { fileList: UploadFileInfo[]; file: UploadFileInfo }) => {
  fileList.value = data.fileList;
  onAddUploadFiles(data.file);
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
  if ((event?.currentTarget as XMLHttpRequest).status === 200) {
    onSuccess(`上传完成：${options.file.name}`);
    let res = JSON.parse((event?.currentTarget as XMLHttpRequest).response);
    console.log(options, res);
  }
  return options.file;
};
const handleClearUploadFile = () => {
  uploadRef.value?.clear();
  onRemoveUploadFile();
};
const handleFileListChange = () => {
  // console.log('是的，file-list 的值变了');
};
// const customRequest = ({
//   file,
//   headers,
//   onFinish,
//   onError,
//   onProgress,
// }: UploadCustomRequestOptions) => {
//   let formData = new FormData();
//   formData.append(file.name, file.file as File);
//   console.log('---file', file, formData.get(file.name), headers);

//   onUploadFile({
//     body: formData.get(file.name),
//     onUploadProgress: ({ percent }: any) => {
//       onProgress({ percent: Math.ceil(percent) });
//     },
//   })
//     .then(res => {
//       console.log('---upload res', res);
//       onFinish();
//     })
//     .catch(err => {
//       console.log('---upload err', err);
//       onError();
//     });
// };

const { upload_files, folder_routes, origin_folders } = storeToRefs(fileStore);
toRefs(props);
</script>

<style lang="scss">
.drag-upload {
  .n-collapse .n-collapse-item .n-collapse-item__header {
    padding: 6px;

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

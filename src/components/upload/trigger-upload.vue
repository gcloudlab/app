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
      :onRemove="handleRemoveUploadFile"
      :onError="handleUploadError"
      :onFinish="handleUploadFinish"
      @change="handleUploadChange"
    >
      <n-upload-trigger #="{ handleClick }" abstract>
        <div
          @click="handleClick"
          class="flex flex-col justify-center items-center p-1 text-center hover:bg-green-100 cursor-pointer transition-all duration-150"
        >
          <CloudUploadOutline class="animate-pulse w-9 text-gray-500 mt-3" />
          <p depth="2" class="my-1 text-sm">{{ title }}</p>
          <n-p depth="3" style="margin: 8px 0 0 0"> {{ description }} </n-p>
        </div>
      </n-upload-trigger>

      <n-collapse class="upload-list" accordion>
        <div class="flex justify-between">
          <n-popselect
            v-model:value="uploadFolder.value"
            :options="origin_folders"
            size="medium"
            scrollable
            trigger="click"
            :on-update:value="handleUpdateUploadFolder"
          >
            <template #empty> 未创建文件夹 </template>
            <n-button quaternary type="primary" size="small" class="">
              文件夹：{{ uploadFolder.label }}
            </n-button>
          </n-popselect>
          <CreateFolder :folder="uploadFolder" />
        </div>
        <!-- 上传列表 -->
        <n-collapse-item v-if="upload_files.length > 0" name="1" :arrow="false">
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
        <!-- <n-collapse-item name="2" :arrow="false">
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
        </n-collapse-item> -->
      </n-collapse>
    </n-upload>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, defineAsyncComponent } from 'vue';
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
} from 'naive-ui';
import { useFiles } from '@/hooks/useFiles';
import { CloudUploadOutline } from '@vicons/ionicons5';
import { useFileOutsideStore } from '@/store/modules/file';
import { onError } from '@/utils/messages';
import { SelectBaseOption } from 'naive-ui/es/select/src/interface';
import { useStorage } from '@/utils/use-storage';
import { FileInfo } from 'naive-ui/es/upload/src/interface';
const CreateFolder = defineAsyncComponent(() => import('@/components/create-folder/index.vue'));

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
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  currentFolder: {
    type: Object,
  },
});
const fileStore = useFileOutsideStore();
const { onAddUploadFiles, onRemoveUploadFile, onUploadFilesToUser } = useFiles();
const uploadRef = ref<UploadInst | null>(null);
const fileList = ref<UploadFileInfo[]>([]);
const uploadFolder = ref<SelectBaseOption>({
  value: props.currentFolder?.value ?? 0,
  label: props.currentFolder?.label ?? '未分类',
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
const handleUploadFinish = (options: { file: FileInfo; event?: ProgressEvent }) => {
  if ((event?.currentTarget as XMLHttpRequest).status === 200) {
    // onSuccess(`上传完成：${options.file.name}`);
    const res = JSON.parse((event?.currentTarget as XMLHttpRequest).response);
    if (res.msg === 'success') {
      onUploadFilesToUser({
        repositoryIdentity: res.identity,
        parentId: uploadFolder.value.value as number,
        ext: res.ext,
        name: res.name,
      });
    }
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
      background-color: #00b0b381;
    }
  }
  .n-collapse .n-collapse-item {
    margin-top: 0;
    border: none;
  }
  .n-collapse .n-collapse-item .n-collapse-item__content-wrapper .n-collapse-item__content-inner {
    padding: 0;
  }
  .n-upload-file-list .n-upload-file .n-upload-file-info {
    padding: 0;
  }
  .n-upload-file-list
    .n-upload-file.n-upload-file--error-status
    .n-upload-file-info
    .n-upload-file-info__name {
    span {
      width: 83%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
</style>

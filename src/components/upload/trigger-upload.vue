<template>
  <div class="drag-upload flex flex-col justify-center">
    <n-upload
      ref="upload"
      v-model:file-list="upload_files"
      :action="uploadAction"
      :headers="headers"
      multiple
      abstract
      directory-dnd
      show-download-button
      :max="max"
      :on-remove="handleRemoveUploadFile"
      :on-error="handleUploadError"
      :on-finish="handleUploadFinish"
      @update:file-list="handleFileListChange"
      @change="handleUploadChange"
      @before-upload="handleBeforeUpload"
    >
      <n-upload-trigger #="{ handleClick }" abstract>
        <div
          class="w-full flex flex-col justify-center items-center text-center bg-gradient-to-t from-green-100 hover:bg-green-100 cursor-pointer transition-all duration-150"
          :class="[upload_files.length <= 0 ? 'h-5/6' : '']"
          @click="handleClick"
        >
          <CloudUploadOutline class="animate-pulse w-9 text-gray-500 mt-3" />
          <p depth="2" class="my-1 text-sm">{{ title }}</p>
          <n-p depth="3" style="margin: 8px 0 0 0"> {{ description }} </n-p>
        </div>
      </n-upload-trigger>
      <div class="flex justify-between flex-none bg-green-100">
        <n-popselect v-model:value="uploadFolder.value" size="medium" scrollable trigger="hover">
          <template #empty>
            <span class="text-xs text-primary">
              {{ origin_folders.length === 0 ? '建议新建文件夹' : '单文件上传限制10MB' }}</span
            >
          </template>
          <template #action>
            <FolderTree
              v-if="origin_folders.length > 0"
              :data="origin_folders"
              :node-props="nodeProps"
            />
            <div v-else class="text-xs text-center">右侧新建文件夹</div>
          </template>
          <n-button quaternary type="primary" size="small">
            上传到：{{ uploadFolder.name }}
          </n-button>
        </n-popselect>
        <CreateFolder class="float-right" :folder="uploadFolder" />
      </div>
      <n-collapse class="upload-list" accordion>
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
              <n-button v-if="upload_files.length > 0" size="small" @click="handleClearUploadFile">
                清空
              </n-button>
            </div>
          </template>
          <template #header>
            <div>
              <span class="text-gray-500">上传列表</span>
            </div>
          </template>
          <n-scrollbar style="max-height: 95px" class="h-54">
            <n-upload-file-list />
          </n-scrollbar>
        </n-collapse-item>
        <!-- 下载列表 -->
        <n-collapse-item v-if="upload_files.length > 0" name="2" :arrow="false">
          <template #header-extra>
            <div class="flex items-center mr-3"></div>
          </template>
          <template #header>
            <div class="">
              <span class="text-gray-500">下载列表</span>
            </div>
          </template>
        </n-collapse-item>
      </n-collapse>
    </n-upload>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, defineAsyncComponent, h } from 'vue';
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
  TreeOption,
} from 'naive-ui';
import { useFiles } from '@/hooks/useFiles';
import { CloudUploadOutline } from '@vicons/ionicons5';
import { useFileOutsideStore } from '@/store/modules/file';
import { useAuthOutsideStore } from '@/store/modules/auth';
import { onError, onWarning } from '@/utils/messages';
import { SelectBaseOption } from 'naive-ui/es/select/src/interface';
import { useStorage } from '@/utils/use-storage';
import { FileInfo } from 'naive-ui/es/upload/src/interface';
import { Max_Size_Per_Upload, One_GB } from '@/constants';
const CreateFolder = defineAsyncComponent(() => import('@/components/create-folder/index.vue'));
const FolderTree = defineAsyncComponent(() => import('@/components/folder-tree/index.vue'));

const props = defineProps({
  action: {
    type: String,
    default: '',
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
const authStore = useAuthOutsideStore();
const { total_size, onAddUploadFiles, onRemoveUploadFile, onUploadFilesToUser } = useFiles();
const uploadRef = ref<UploadInst | null>(null);
const fileList = ref<UploadFileInfo[]>([]);
const uploadFolder = ref<SelectBaseOption>({
  id: props.currentFolder?.value ?? 0,
  name: props.currentFolder?.label ?? '默认文件夹',
});
const uploadAction = ref('https://gcloud.aoau.top/file/upload');
const headers = {
  Authorization: useStorage('token'),
};

// const handleUpdateUploadFolder = (value: number, option: SelectBaseOption) => {
//   uploadFolderName.value = option.label as string;
//   uploadFolder.value = fileStore.get_origin_folders.filter(item => item.value === value)[0];
// };
const handleUploadChange = (data: { fileList: UploadFileInfo[]; file: UploadFileInfo }) => {
  fileList.value = data.fileList;
  onAddUploadFiles(data.file);
};
const handleRemoveUploadFile = (data: { fileList: UploadFileInfo[]; file: UploadFileInfo }) => {
  onRemoveUploadFile(data.file);
  return data.file;
};
const handleBeforeUpload = (data: { file: UploadFileInfo; fileList: UploadFileInfo[] }) => {
  console.log(data.file.file?.size);
  if (data.file.file && data.file.file?.size > Max_Size_Per_Upload) {
    onWarning('单文件上传限制10M及以内');
    return false;
  }
  if (total_size >= Number(authStore.auth?.capacity) ?? One_GB) {
    onWarning('嘿，你的空间不够了');
    return false;
  }
  return true;
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
        parentId: uploadFolder.value.id as number,
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
const nodeProps = ({ option }: { option: TreeOption }) => {
  return {
    onClick() {
      if (option.path === '') {
        uploadFolder.value = option;
      }
    },
  };
};

const { upload_files, origin_folders } = storeToRefs(fileStore);
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

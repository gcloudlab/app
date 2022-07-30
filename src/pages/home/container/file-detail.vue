<template>
  <div class="file-detail w-52 shadow rounded">
    <n-scrollbar style="max-height: calc(100vh - 57px)">
      <n-card
        class="leading-7"
        hoverable
        :bordered="false"
        content-style="background-color: #00b0b3; border-radius: 5px;color: white;"
        @click="handleSelect(file)"
      >
        <n-image
          v-if="file.type === '图片'"
          class="w-52 shadow-md rounded"
          :src="file.path"
          fallback-src="./src/assets/logo.png"
        />
        <DocumentTextOutline v-else-if="!file.isFolder" class="w-12 text-gray-100" />
        <Folder v-else class="w-12 text-yellow-500" />
        <div class="flex justify-start items-center">
          <div>名称：</div>
          <ShowOrEdit
            v-if="file.type === '文件夹'"
            class="inline-block flex-1"
            :value="file.name"
            :onUpdateValue="handleUpdateName"
          />
          <span v-else>{{ file.name }}</span>
        </div>
        <p>文件大小：{{ transformSize(file.size) }}</p>
        <p v-show="file.isFolder">文件数量：{{ file.children?.length }}</p>
        <p>文件类型：{{ file.type }}</p>
        <p v-show="file.updated_at">修改日期：{{ file.updated_at }}</p>
        <p v-if="!file.isFolder">
          文件链接：<a class="hover:text-gray-200" :href="file.path" target="_blank">点击下载</a>
        </p>
        <p v-else>链接：<a class="hover:text-gray-200">下载文件夹</a></p>
        <!-- <n-button
          class="w-full mt-1"
          strong
          type="warning"
          size="small"
          @click="handleUpdateName"
        >
          重命名
        </n-button> -->
        <n-button class="w-full mt-1" strong type="error" size="small" @click="handleDeleteFile">
          删除
        </n-button>
      </n-card>
      <DragUpload class="w-full h-48" />
    </n-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, PropType, ref, toRefs } from 'vue';
// import { storeToRefs } from 'pinia';
// import { useFileOutsideStore } from '@/store/modules/file';
import { useFiles } from '@/hooks/useFiles';
import { NCard, NImage, NScrollbar, NButton } from 'naive-ui';
import { FileListData } from '@/models/file';
import { transformSize } from '@/utils/transform-size';
import { Folder, DocumentTextOutline } from '@vicons/ionicons5';
import DragUpload from '@/components/upload/trigger-upload.vue';
const ShowOrEdit = defineAsyncComponent(() => import('./file-edit.vue'));

const props = defineProps({
  file: {
    type: Object as PropType<FileListData>,
    required: true,
    default: {},
  },
});
// const fileStore = useFileOutsideStore();
const { onDeleteFile, onUpdateFileName } = useFiles();
const currentFileRef = ref<FileListData | null>(null);

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

// const { folder_routes } = storeToRefs(fileStore);
toRefs(props);
</script>

<style lang="scss" scoped>
.file-detail {
  min-height: calc(100vh - 85px);
}
</style>

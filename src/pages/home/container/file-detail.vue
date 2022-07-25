<template>
  <div class="file-detail w-52 shadow rounded">
    <n-scrollbar style="max-height: calc(100vh - 57px)">
      <n-card
        hoverable
        :bordered="false"
        content-style="background-color: #00b0b3; border-radius: 5px;color: white;"
      >
        <n-image
          v-if="file.type === '图片'"
          class="w-52 shadow-md rounded"
          :src="file.path"
          fallback-src="./src/assets/logo.png"
        />
        <DocumentTextOutline v-else-if="!file.isFolder" class="w-12 text-gray-100" />
        <Folder v-else class="w-12 text-yellow-500" />
        <p>文件(夹)名：{{ file.name }}</p>
        <p>文件大小：{{ transformSize(file.size) }}</p>
        <p v-show="file.isFolder">文件数量：{{ file.children?.length }}</p>
        <p>文件类型：{{ file.type }}</p>
        <p v-show="file.updated_at">修改日期：{{ file.updated_at }}</p>
        <p v-if="!file.isFolder">
          文件链接：<a class="hover:text-gray-200" :href="file.path" target="_blank">点击下载</a>
        </p>
        <p v-else>链接：<a class="hover:text-gray-200">下载文件夹</a></p>
      </n-card>
      <DragUpload class="w-full h-48" :title="`上传到「${folder_routes.at(-1)?.name}」`" />
    </n-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { PropType, toRefs } from 'vue';
import { storeToRefs } from 'pinia';
import { useFileOutsideStore } from '@/store/modules/file';
import { NCard, NImage, NScrollbar } from 'naive-ui';
import DragUpload from '@/components/upload/drag-upload.vue';
import { FileListData } from '@/models/file';
import { transformSize } from '@/utils/transform-size';
import { Folder, DocumentTextOutline } from '@vicons/ionicons5';

const props = defineProps({
  file: {
    type: Object as PropType<FileListData>,
    default: {},
  },
});
const fileStore = useFileOutsideStore();
const { folder_routes } = storeToRefs(fileStore);
toRefs(props);
</script>

<style lang="scss" scoped>
.file-detail {
  min-height: calc(100vh - 85px);
}
</style>

<template>
  <div class="file-graphical m-3">
    <div class="file-warpper flex flex-wrap justify-start animate__animated animate__fadeIn faster">
      <div
        v-for="file in values.children"
        :key="file.id"
        class="flex flex-col justify-end items-center w-14 mx-4"
      >
        <Folder
          v-if="file?.type === '文件夹'"
          class="w-10 text-yellow-500"
          @click="handleExpandedKeys(file)"
        />
        <div v-else-if="file?.type === '图片'" @click="handleSelectedKeys(file)">
          <n-image
            class="w-12 shadow-md rounded"
            lazy
            :src="file.path"
            object-fit="contain"
            preview-disabled
            fallback-src="./src/assets/logo.png"
            :intersection-observer-options="{
              root: '#image-scroll-container',
            }"
          >
            <template #placeholder>
              <n-skeleton width="100%" height="100%" :sharp="false" />
            </template>
          </n-image>
        </div>
        <DocumentTextOutline v-else class="w-10 text-gray-400" @click="handleSelectedKeys(file)" />
        <n-tooltip
          :show-arrow="false"
          placement="bottom"
          trigger="hover"
          :style="{ backgroundColor: 'white', color: 'black' }"
        >
          <template #trigger>
            <p class="truncate w-14 mt-1 text-center text-xs">{{ file.name }}</p>
          </template>
          {{ file.name }}
        </n-tooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, toRefs } from 'vue';
import { NImage, NSkeleton, NTooltip } from 'naive-ui';
import { FileListData } from '@/models/file';
import { Folder, DocumentTextOutline } from '@vicons/ionicons5';
// import Loading from '@/components/loading/index.vue';

const props = defineProps({
  values: {
    type: Object as PropType<FileListData>,
    required: true,
    default: {},
  },
});
const emits = defineEmits(['selectedKeys', 'expandedKeys']);

const handleSelectedKeys = (file: FileListData) => {
  emits('selectedKeys', file);
};
const handleExpandedKeys = (file: FileListData) => {
  emits('expandedKeys', file);
};

toRefs(props);
</script>

<style lang="scss" scoped></style>

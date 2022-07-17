<template>
  <div class="file-graphical m-3">
    <div class="file-warpper grid grid-cols-4 md:grid-cols-8">
      <div v-for="file in values.children" :key="file.id">
        <Folder v-if="file?.type === '文件夹'" class="w-10" />
        <div v-else-if="file?.type === '图片'">
          <n-image
            class="w-10 h-10 shadow rounded"
            lazy
            :src="file.path"
            object-fit="contain"
            fallback-src="./src/assets/logo.png"
            :intersection-observer-options="{
              root: '#image-scroll-container',
            }"
          >
            <template #placeholder>
              <div><Loading /></div>
            </template>
          </n-image>
        </div>
        <FileTray v-else class="w-10" />
        <p class="truncate w-14 text-center">{{ file.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, toRefs } from 'vue';
import { NImage } from 'naive-ui';
import { FileListData } from '@/models/file';
import { Folder, FileTray } from '@vicons/ionicons5';
import Loading from '@/components/loading/index.vue';

const props = defineProps({
  values: {
    type: Object as PropType<FileListData>,
    required: true,
    default: {},
  },
});
const emits = defineEmits(['expandedKeys']);

toRefs(props);
</script>

<style lang="scss" scoped></style>

<template>
  <div class="file-graphical">
    <div
      class="file-warpper mt-3 flex flex-wrap justify-start animate__animated animate__fadeIn faster"
    >
      <div
        v-for="file in values.children"
        :key="file.id"
        class="flex flex-col justify-end items-center w-16 mx-3 mb-3 hover:bg-gray-100 hover:shadow hover:rounded-lg"
      >
        <Folder
          v-if="file?.type === '文件夹'"
          class="w-10 text-yellow-500 cursor-pointer"
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
        <DocumentTextOutline
          v-else
          class="w-10 text-gray-400 cursor-pointer"
          @click="handleSelectedKeys(file)"
        />
        <n-tooltip
          :show-arrow="false"
          placement="bottom"
          trigger="hover"
          :style="{ backgroundColor: 'white', color: 'black' }"
        >
          <template #trigger>
            <p class="truncate w-16 mt-1 text-center text-xs">{{ file.name }}</p>
          </template>
          {{ file.name }}
        </n-tooltip>
      </div>
    </div>
    <DropDown
      :show="showDropdownRef"
      :position="{ x: xRef, y: yRef }"
      @select="handleSelectDropDownItem"
      @clickoutside="handleClidkOutside"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, toRefs } from 'vue';
import { NImage, NSkeleton, NTooltip } from 'naive-ui';
import { FileListData } from '@/models/file';
import { Folder, DocumentTextOutline } from '@vicons/ionicons5';
import DropDown from '@/components/drop-down/index.vue';
// import Loading from '@/components/loading/index.vue';

const props = defineProps({
  values: {
    type: Object as PropType<FileListData>,
    required: true,
    default: {},
  },
});
const emits = defineEmits(['selectedKeys', 'expandedKeys']);
const showDropdownRef = ref(false);
const xRef = ref(0);
const yRef = ref(0);

const handleSelectedKeys = (file: FileListData) => {
  emits('selectedKeys', file);
};
const handleExpandedKeys = (file: FileListData) => {
  emits('expandedKeys', file);
};
const handleSelectDropDownItem = (value: string) => {
  console.log('--drop select', value);
  showDropdownRef.value = false;
};
const handleClidkOutside = (value: boolean) => {
  showDropdownRef.value = value;
};

toRefs(props);
</script>

<style lang="scss" scoped></style>

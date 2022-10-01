<template>
  <div class="file-graphical">
    <n-alert v-if="values.name === '公共文件夹'" type="info" :show-icon="false" closable>
      🎯 公共文件夹对所有人可见(暂仅支持上传功能)。请勿上传违规内容，蟹蟹~
    </n-alert>
    <div
      v-if="values.children?.length !== 0"
      class="file-warpper mt-4 ml-3 flex flex-wrap justify-start"
    >
      <div
        v-for="file in values.children"
        :key="file.id"
        class="flex flex-col justify-end items-center w-18 px-1 mx-2 mb-5 transition-all duration-200 hover:bg-gray-100 hover:shadow hover:rounded-lg animate__animated animate__fadeIn faster"
      >
        <!-- file icon -->
        <Folder
          v-if="file?.type === '文件夹' && file.path === ''"
          class="w-10 text-primary cursor-pointer"
          @click="handleExpandedKeys(file)"
        />
        <div
          v-else-if="file?.type === '图片'"
          class="image-item-wrapper w-18 relative"
          @click="handleSelectedKeys(file)"
        >
          <n-image
            class="shadow-lg rounded"
            lazy
            :src="file.path"
            width="70"
            object-fit="cover"
            preview-disabled
            fallback-src="./src/assets/logo.png"
            :intersection-observer-options="{
              root: '#image-scroll-container',
            }"
            :on-load="handleOnLoad"
          >
            <template #placeholder>
              <div style="width: 70px; height: 46px; margin-top: -15px">
                <n-skeleton width="100%" height="100%" :sharp="false" />
              </div>
            </template>
          </n-image>
        </div>
        <video
          v-else-if="file.type === '视频文件'"
          class="shadow-md rounded"
          width="70"
          style="height: 46px"
          @click="handleSelectedKeys(file)"
        >
          <source :src="file.path" type="video/mp4" />
        </video>
        <n-icon
          v-else
          class="cursor-pointer"
          :class="(file?.icon as FileIconType)?.style"
          :component="(file?.icon as FileIconType)?.icon"
          size="40"
          @click="handleSelectedKeys(file)"
        />

        <!-- file name -->
        <n-tooltip
          :show-arrow="false"
          placement="bottom"
          trigger="hover"
          :style="{ backgroundColor: 'white', color: 'black' }"
        >
          <template #trigger>
            <p
              class="self-center truncate w-18 mt-1 text-center text-xs"
              @click="handleSelectedKeys(file)"
            >
              <ShowOrEdit truncate :value="file.name" :on-update-value="handleUpadeteName" />
            </p>
          </template>
          {{ file.name }}
        </n-tooltip>
      </div>
    </div>
    <Empty v-else description="空文件夹"> </Empty>
    <DropDown
      :show="showDropdownRef"
      :position="{ x: xRef, y: yRef }"
      @select="handleSelectDropDownItem"
      @clickoutside="handleClidkOutside"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, toRefs, defineAsyncComponent } from 'vue';
import { NImage, NSkeleton, NTooltip, NIcon, NAlert } from 'naive-ui';
import { useFiles } from '@/hooks/useFiles';
import { FileIconType, FileListData } from '@/models/file';
import { Folder } from '@vicons/ionicons5';
const DropDown = defineAsyncComponent(() => import('@/components/commons/drop-down/index.vue'));
const ShowOrEdit = defineAsyncComponent(() => import('./file-edit.vue'));
const Empty = defineAsyncComponent(() => import('@/components/commons/empty/index.vue'));

const props = defineProps({
  values: {
    type: Object as PropType<FileListData>,
    required: true,
    default: {},
  },
});
const emits = defineEmits(['selectedKeys', 'expandedKeys']);
const { onUpdateFileName } = useFiles();
const showDropdownRef = ref(false);
const xRef = ref(0);
const yRef = ref(0);
const currentFileRef = ref<FileListData | null>(null);
const isLoadingImg = ref(true);

const handleSelectedKeys = (file: FileListData) => {
  currentFileRef.value = file;
  emits('selectedKeys', file);
};
const handleExpandedKeys = (file: FileListData) => {
  emits('expandedKeys', file);
};
const handleUpadeteName = (v: string) => {
  if (
    v &&
    v !== currentFileRef.value?.name &&
    currentFileRef.value &&
    currentFileRef.value.identity
  ) {
    currentFileRef.value.name = v;
    onUpdateFileName(
      {
        identity: currentFileRef.value.identity,
        name: v,
      },
      currentFileRef.value.target
    );
  }
};
const handleSelectDropDownItem = (value: string) => {
  // console.log('--drop select', value);
  showDropdownRef.value = false;
};
const handleClidkOutside = (value: boolean) => {
  showDropdownRef.value = value;
};
const handleOnLoad = (e: Event) => {
  isLoadingImg.value = false;
};

toRefs(props);
</script>

<style lang="scss">
.file-graphical {
  .image-item-wrapper {
    max-height: 46px;
  }
  .n-alert .n-alert-body {
    padding: 5px 10px;
  }
  .n-alert .n-alert__close {
    margin: 7px;
  }
}
</style>

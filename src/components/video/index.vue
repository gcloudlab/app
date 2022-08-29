<template>
  <div class="video-playground">
    <Drawer v-model:show="show" width="100%">
      <template #trigger>
        <VideoPreview :src="_src" :data="data" @play="handlePlay" />
      </template>
      <template #header>
        {{ data.name || '未知文件' }}
      </template>
      <VideoPlayer :src="_src" />
    </Drawer>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, toRefs, watch } from 'vue';
import { FileListData } from '@/models/file';
import VideoPlayer from './video-player.vue';
import VideoPreview from '@/components/video/video-preview.vue';
import Drawer from '@/components/commons/drawer/index.vue';

const props = defineProps({
  data: {
    type: Object as PropType<FileListData>,
    required: true,
  },
  src: {
    type: String,
    default: '',
    required: true,
  },
});
const show = ref(false);
const handlePlay = (src: string, data: FileListData) => {
  show.value = true;
  // console.log("播放", src, data);
}

const _src = ref(props.src);
watch(
  () => props.src,
  val => {
    if (val) {
      _src.value = val;
    }
  }
);
toRefs(props);
</script>

<style lang="scss">
.n-drawer .n-drawer-content .n-drawer-body-content-wrapper {
  padding: 0;
}
</style>

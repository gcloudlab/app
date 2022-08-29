<template>
  <div class="video-preview">
    <video class="video shadow-md rounded" width="160" height="83">
      <source :src="src" type="video/mp4" />
      <source :src="src" type="video/mov" />
      <source :src="src" type="video/ogg" />
      <source :src="src" type="video/webm" />
      <object :data="src" width="160" height="83">
        <embed :src="src" width="160" height="83" />
      </object>
    </video>

    <div class="mask transition-color duration-300 rounded"></div>
    <Play
      class="play-icon w-10 text-primary cursor-pointer hover:text-secondary transition-color duration-300"
      @click="() => onPlay(src, data)"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType, toRefs } from 'vue';
import { Play } from '@vicons/ionicons5';
import { FileListData } from '@/models/file';

const props = defineProps({
  src: {
    type: String,
    default: '',
    required: true,
  },
  data: {
    type: Object as PropType<FileListData>,
  },
  onPlay: {
    type: Function,
    default: (src: string, data: FileListData) => {},
  },
});

toRefs(props);
</script>

<style lang="scss" scoped>
.video-preview {
  position: relative;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 83px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &:hover .mask {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .play-icon {
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    &:active {
      transform: scale(1.3);
    }
  }
}
</style>

<template>
  <div class="video-player">
    <video ref="videoPlayer" :class="[customClass]" class="video-js"></video>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, toRefs } from 'vue';
import videojs, { VideoJsPlayer } from 'video.js';
import 'video.js/dist/video-js.css';

const props = defineProps({
  src: {
    type: String,
    default: '',
    required: true,
  },
  poster: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'video/mp4',
  },
  customClass: {
    type: String,
    default: '',
  },
});
const videoPlayer = ref<string | Element | any>(null);
const myPlayer = ref<VideoJsPlayer | any>();

onMounted(() => {
  myPlayer.value = videojs(
    videoPlayer.value,
    {
      poster: props.poster,
      controls: true,
      sources: [
        {
          src: props.src,
          type: props.type,
        },
      ],
      controlBar: {
        remainingTimeDisplay: true,
      },
      playbackRates: [0.5, 1, 1.5, 1.75, 2],
    },
    () => {
      myPlayer.value?.log('play.....');
    }
  );
})

onUnmounted(() => {
  if (myPlayer.value) {
    myPlayer.value.dispose();
  }
});

toRefs(props);
</script>

<style lang="scss">
.video-js {
  width: 100%;
  height: calc(100vh - 51px);
  background-color: #00b0b3ba;
}
</style>

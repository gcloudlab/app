<template>
  <Vue3Lottie :animationData="EmptyJson" :height="sizeMap[size]" :width="sizeMap[size]" />
</template>

<script setup lang="ts">
import EmptyJson from '@/assets/lotties/empty.json';
import { ref, toRefs } from 'vue';

export type SizeType = 'small' | 'middle' | 'large';
export interface LoadingProps {
  size?: SizeType;
}
const props = withDefaults(defineProps<LoadingProps>(), {
  size: 'middle',
});
const sizeMap = ref({
  small: 136,
  middle: 148,
  large: 156,
});

toRefs(props);
</script>

<style lang="scss" scoped></style>

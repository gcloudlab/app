<template>
  <Vue3Lottie :animation-data="LoadingJson" :height="sizeMap[size]" :width="sizeMap[size]" />
</template>

<script setup lang="ts">
import LoadingJson from '@/assets/lotties/loading.json';
import { ref, toRefs } from 'vue';

export type SizeType = 'small' | 'middle' | 'large';
export interface LoadingProps {
  size?: SizeType;
}
const props = withDefaults(defineProps<LoadingProps>(), {
  size: 'middle',
});
const sizeMap = ref({
  small: 36,
  middle: 48,
  large: 56,
});

toRefs(props);
</script>

<style lang="scss" scoped></style>

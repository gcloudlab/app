<template>
  <n-empty :show-icon="false" :show-description="false">
    <template #extra>
      <Vue3Lottie :animation-data="EmptyJson" :height="sizeMap[size]" :width="sizeMap[size]" />
      <p v-if="description !== ''" class="pb-4">{{ description }}</p>
      <slot></slot>
    </template>
  </n-empty>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { NEmpty } from 'naive-ui';
import EmptyJson from '@/assets/lotties/empty.json';

export type SizeType = 'small' | 'middle' | 'large';
export interface LoadingProps {
  size?: SizeType;
  description?: string;
}
const props = withDefaults(defineProps<LoadingProps>(), {
  size: 'middle',
  description: '',
});
const sizeMap = ref({
  small: 136,
  middle: 148,
  large: 156,
});

toRefs(props);
</script>

<style lang="scss" scoped></style>

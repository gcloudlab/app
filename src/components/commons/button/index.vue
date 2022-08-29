<template>
  <n-button :v-bind="$attrs">
    <slot></slot>
  </n-button>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { NButton } from 'naive-ui';

export interface ButtonProps {
  animation?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  animation: '',
});
toRefs(props);
</script>

<style lang="scss" scoped></style>

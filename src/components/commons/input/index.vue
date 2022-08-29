<template>
  <NInput v-bind="$attrs"></NInput>
</template>

<script setup lang="ts">
import { NInput } from 'naive-ui';
import { PropType } from 'vue';

const props = defineProps({
  ref: {
    type: Object as PropType<HTMLInputElement | null>,
    default: null,
  },
});
</script>

<style lang="scss" scoped></style>

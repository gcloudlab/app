<template>
  <div class="file-list">{{ values }}</div>
</template>

<script setup lang="ts">
import { PropType, toRefs } from 'vue';
import { TreeOption } from 'naive-ui';

const props = defineProps({
  values: {
    type: Object as PropType<TreeOption>,
    default: {},
  },
});
console.log(props.values);

toRefs(props);
</script>

<style lang="scss" scoped></style>

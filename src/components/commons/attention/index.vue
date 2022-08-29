<template>
  <div class="attention text-center">
    <n-alert class="h-full" :title="title" :type="type" :show-icon="showIcon">
      <slot></slot>
    </n-alert>
  </div>
</template>

<script setup lang="ts">
import { PropType, toRefs } from 'vue';
import { NAlert } from 'naive-ui';

type AlertType = 'default' | 'error' | 'info' | 'success' | 'warning';
const props = defineProps({
  title: {
    type: String,
    default: '提醒',
  },
  type: {
    type: String as PropType<AlertType>,
    default: 'success',
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
});

toRefs(props);
</script>

<style lang="scss">
.attention {
  .n-alert .n-alert-body .n-alert-body__title {
    font-size: 14px;
  }
}
</style>

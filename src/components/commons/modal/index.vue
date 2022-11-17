<template>
  <div class="modal">
    <n-button quaternary type="primary" size="small" @click="showModal = true">
      {{ triggerContent }}
    </n-button>
    <n-modal
      v-bind="$attrs"
      v-model:show="showModal"
      :mask-closable="false"
      :preset="preset"
      :title="modalTitle"
      :show-icon="showIcon"
      :positive-button-props="{ type: 'primary' }"
      :auto-focus="true"
    >
      <slot></slot>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, toRefs } from 'vue';
import { NModal, NButton } from 'naive-ui';

const props = defineProps({
  triggerContent: {
    type: String,
    default: '打开',
  },
  modalTitle: {
    type: String,
    default: '标题',
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
  preset: {
    type: String as PropType<'dialog' | 'confirm' | 'card'>,
    default: 'dialog',
  },
});
const showModal = ref(false);

toRefs(props);
</script>

<style lang="scss" scoped></style>

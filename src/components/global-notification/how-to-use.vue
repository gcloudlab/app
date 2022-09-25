<template>
  <Drawer v-model:show="show" width="80%" :on-after-leave="handleClose">
    <template #trigger>
      <div class="text-sm p-1 cursor-pointer hover:text-primary" @click="handleOpen">
        🍀 使用说明
      </div>
    </template>
    <template #header> 如何使用GCloud云盘？</template>
    <div>
      <h2>上传须知</h2>
      <p>
        由于经费有限，单文件上传限制20Mb以内，默认总容量1G（私有存储+公区存储）。请注意遵守互联网冲浪规范，杜绝上传违规文件等内容，逮到了你跑得脱，马脑阔😠，蟹蟹您的支持。
      </p>
      <div>码字中...</div>
    </div>
  </Drawer>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
const Drawer = defineAsyncComponent(() => import('@/components/commons/drawer/index.vue'));

const emits = defineEmits(['onClose']);
const show = ref(false);

const handleOpen = () => {
  // console.log(props.file);
  show.value = true;
};
const handleClose = () => {
  emits('onClose', false);
};
</script>

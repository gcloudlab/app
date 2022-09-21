<template>
  <Drawer v-model:show="show" :on-after-leave="handleChange" width="60%">
    <template #trigger><div></div> </template>
    <template #header> 如何使用GCloud云盘？</template>
    <div>
      <h2>上传须知</h2>
      <p>
        由于经费有限，单文件上传限制20Mb以内，默认总容量1G（私人空间+公共空间）。请注意遵守互联网冲浪规范，杜绝上传违规文件等内容，逮到了你跑得脱，马脑阔😠，蟹蟹您的支持。
      </p>
      <div>...</div>
    </div>
  </Drawer>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
// import { NButton, NTag, NIcon } from 'naive-ui';
import Drawer from '@/components/commons/drawer/index.vue';
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
    default: false,
  },
});
const emits = defineEmits(['afterClose']);

const handleChange = () => {
  emits('afterClose', false);
};
// toRefs(props);
</script>

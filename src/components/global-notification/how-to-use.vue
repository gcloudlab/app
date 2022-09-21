<template>
  <Drawer v-model:show="show" width="60%">
    <template #trigger>
      <div class="text-sm px-5 py-2 hover:text-primary" @click="show = true">🍀 使用说明</div>
    </template>
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
import { defineAsyncComponent, ref } from 'vue';
import { NButton } from 'naive-ui';
const Drawer = defineAsyncComponent(() => import('@/components/commons/drawer/index.vue'));

const show = ref(false);
</script>

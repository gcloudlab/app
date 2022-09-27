<template>
  <Drawer v-model:show="show" width="80%" :on-after-leave="handleClose">
    <template #trigger>
      <div class="text-sm p-1 cursor-pointer hover:text-primary" @click="handleOpen">
        🍀 使用说明
      </div>
    </template>
    <template #header> 如何使用GCloud云盘？</template>
    <div>
      <h2>上传功能</h2>
      <p>
        注意：由于经费有限（暂不考虑升级容量套餐），单文件上传限制<strong>20Mb以内</strong>，默认总容量1G（私有存储+公区存储）。请注意遵守互联网冲浪规范，杜绝上传违规文件等内容，逮到了你跑得脱，马脑阔😠，蟹蟹您的支持。
      </p>
      <p>...</p>
      <h2>关于默认文件夹和公共文件夹</h2>
      <p>
        云盘自带两个文件夹，默认文件夹和公共文件夹,
        且<strong>在用户第一次上传文件或新建文件夹之前不会显示</strong>。默认文件夹是对未分类的用户文件进行收集处理，所有未选择上传文件夹的文件都将归类到此处；公共文件夹对所有用户可见、可上传，暂不支持修改、删除等其他操作。注意，用户上传到公共文件夹中的容量也将计算在用户总容量中，即
        <strong>用户可支配容量等于私有存储加用户公区存储容量。</strong>
      </p>
      <h2>分享功能</h2>
      <p>...</p>
      <h2>下载功能</h2>
      <p>...</p>
      <h2>预览功能</h2>
      <p>...</p>
      <h2>移动文件</h2>
      <p>...</p>
      <h2>删除文件</h2>
      <p>...</p>
      <h2>回收站</h2>
      <p>...</p>
      <h2>隐私政策</h2>
      <p>...</p>
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

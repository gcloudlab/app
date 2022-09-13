<template>
  <div>
    <n-button tertiary type="primary" size="small" @click="activate"> 更新日志 </n-button>
    <n-drawer
      v-model:show="active"
      :width="200"
      :height="300"
      :trap-focus="false"
      :block-scroll="false"
      placement="top"
      to="#user-info"
    >
      <n-drawer-content>
        <n-scrollbar style="max-height: 300px">
          <div>
            <div v-for="item in data">
              <div class="text-primary">{{ item.date }}</div>
              <div>{{ item.content }}</div>
              <n-divider />
            </div>
          </div>
        </n-scrollbar>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script setup lang="ts">
import { NScrollbar, NDrawer, NDrawerContent, NButton, NDivider } from 'naive-ui';
import { ref } from 'vue';

const active = ref(false);
const activate = () => {
  active.value = true;
};
const data = [
  {
    content: '「功能」修复已知问题；禁止选中文件夹文本',
    date: '2022-09-13',
  },
  {
    content: '「Bug」修复注册成功/失败跳转问题',
    date: '2022-09-01',
  },
  {
    content: '「功能」添加移动端访问受限提示',
    date: '2022-08-24',
  },
  {
    content: '「功能」新增加入天数显示',
    date: '2022-08-22',
  },
  {
    content: '「功能」新增Not Found页面',
    date: '2022-08-21',
  },
  {
    content: '「维护」新增日志查看; 新增视频播放功能; 修复图片预览畸变；其他...',
    date: '2022-08-20',
  },
];
</script>

<style lang="scss" scoped></style>

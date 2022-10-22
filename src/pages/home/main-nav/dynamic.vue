<template>
  <n-h5
    prefix="bar"
    class="text-primary bg-header shadow-sm rounded p-2 top-0 mb-0"
    style="position: sticky"
  >
    云盘动态
  </n-h5>
  <n-scrollbar style="height: 100%">
    <div id="dynamic-bar" class="dynamic-bar px-4 pt-3 animate__animated animate__fadeIn faster">
      <UpdateLog />
    </div>
  </n-scrollbar>
</template>

<script setup lang="ts">
import { NScrollbar, NH5 } from 'naive-ui';
import UpdateLog from '@/components/update-log/index.vue';

const data = [
  {
    content: '「新增」G社可以发贴了~',
    date: '2022-10-14',
    type: 'success',
  },
  {
    content: '「新增」用户分享历史查询',
    date: '2022-10-04',
    type: 'success',
  },
  {
    content: '「新增」现在，你可以保存别人的分享文件辣~',
    date: '2022-09-30',
    type: 'success',
  },
  {
    content: '「新增」热门分享列表',
    date: '2022-09-28',
  },
  {
    content: '「新增」分享功能；分享详情功能；分享数据统计功能',
    date: '2022-09-27',
    type: 'success',
  },
  {
    content: '「新增」添加回收站列表',
    date: '2022-09-25',
    type: 'success',
  },
  {
    content: '「重构」重构使用说明模块，添加提示按钮',
    date: '2022-09-21',
    type: 'info',
  },
  {
    content: '「功能」新增预览文件功能（文本文件预览，不支持office文件）',
    date: '2022-09-20',
    type: 'success',
  },
  {
    content: '「Bug」修复已知问题',
    date: '2022-09-19',
    type: 'error',
  },
  {
    content: '「功能」修复已知问题；禁止选中文件夹文本',
    date: '2022-09-13',
    type: 'success',
  },
  {
    content: '「Bug」修复注册成功/失败跳转问题',
    date: '2022-09-01',
    type: 'error',
  },
  {
    content: '「功能」添加移动端访问受限提示',
    date: '2022-08-24',
    type: 'success',
  },
  {
    content: '「功能」新增加入天数显示',
    date: '2022-08-22',
    type: 'success',
  },
  {
    content: '「功能」新增Not Found页面',
    date: '2022-08-21',
    type: 'success',
  },
  {
    content: '「维护」新增日志查看; 新增视频播放功能; 修复图片预览畸变；其他...',
    date: '2022-08-20',
    type: 'error',
  },
];
</script>

<style lang="scss" scoped></style>

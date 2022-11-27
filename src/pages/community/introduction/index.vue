<template>
  <div class="introduction text-gray-400 text-sm flex flex-col SmileySans">
    <n-gradient-text
      v-for="item in list"
      :gradient="{
        from: 'rgb(85, 85, 85)',
        to: 'rgb(170, 170, 170)',
      }"
    >
      <span v-html="item"></span>
    </n-gradient-text>
  </div>
</template>

<script setup lang="ts">
import { NGradientText } from 'naive-ui';

const list = [
  '如果你想<b>分享</b>，那就尽情创作',
  '如果你想<b>学习</b>，可以记录笔记',
  '如果你想<b>提问</b>，那就一起讨论',
];
</script>

<style lang="scss" scoped></style>

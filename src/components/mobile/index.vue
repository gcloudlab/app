<template>
  <div>
    <div style="text-align: center; position: absolute; top: 100px; right: 0; left: 0">
      暂不支持移动端哦～
    </div>
    <img style="width: 99vw; height: 97vh" :src="NotFoundSVG" alt="404" />
  </div>
</template>

<script setup lang="ts">
import NotFoundSVG from '@/assets/404.svg';
</script>

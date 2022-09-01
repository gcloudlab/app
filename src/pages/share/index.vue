<template>
  <div :class="style.share">开发中</div>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';

const style = useCssModule();
console.log(style);
</script>

<style lang="scss" module>
.share {
  background-color: antiquewhite;
}
</style>

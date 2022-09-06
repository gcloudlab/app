<template>
  <div :class="style.share">
    <n-tag v-model:checked="checked" :on-update:checked="handleCheck" checkable> 爱在西元前 </n-tag>
  </div>
</template>

<script setup lang="ts">
import { ref, useCssModule } from 'vue';
import { NTag } from 'naive-ui';

const checked = ref(false);
const style = useCssModule();
console.log(style);

const handleCheck = (v: boolean) => {
  console.log(v);
};
</script>

<style lang="scss" module>
.share {
  background-color: antiquewhite;
}
</style>

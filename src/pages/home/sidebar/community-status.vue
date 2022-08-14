<template>
  <n-divider class="text-sm m-0" title-placement="left"> 😎 社区 </n-divider>
  <div v-if="register_count > 0" class="pb-2">
    <div class="analysize px-3 text-sm flex justify-start items-center">
      <div class="flex-none">活跃用户：</div>
      <div><n-number-animation :from="0" :to="register_count" /></div>
    </div>
  </div>
  <div v-else class="px-3 pb-2">
    <n-skeleton text :repeat="2" :sharp="false" />
  </div>
  <n-divider />
  <About />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { NDivider, NSkeleton, NNumberAnimation } from 'naive-ui';
import { storeToRefs } from 'pinia';
import { useGlobalOutsideStore } from '@/store/modules/global';
import { useRegisterCount } from '@/hooks/useGlobal';
import About from '@/components/about/index.vue';

const globalStore = useGlobalOutsideStore();
onMounted(() => {
  useRegisterCount();
});
const { register_count } = storeToRefs(globalStore);
</script>

<style lang="scss" scoped></style>

<template>
  <Drawer v-model:show="show" :on-after-leave="handleChange" width="60%">
    <template #trigger><div></div> </template>
    <template #header> 加入我们</template>
    <div class="flex flex-col">
      <h2 class="text-primary text-center">
        𝑾𝒆 𝒐𝒑𝒆𝒏
        <a href="https://github.com/gcloudlab/app" target="_blank" class="text-secondary">𝒔𝒐𝒖𝒓𝒄𝒆</a>
      </h2>
      <div>...</div>
      <p class="text-center">𝑮𝑪𝒍𝒐𝒖𝒅 开源团队</p>
    </div>
  </Drawer>
</template>

<script setup lang="ts">
import { defineAsyncComponent, toRefs } from 'vue';
// import { NButton, NTag, NIcon } from 'naive-ui';
const Drawer = defineAsyncComponent(() => import('@/components/commons/drawer/index.vue'));
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});
const emits = defineEmits(['afterClose']);

const handleChange = () => {
  emits('afterClose', false);
};

toRefs(props);
</script>

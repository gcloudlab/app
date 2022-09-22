<template>
  <Drawer v-model:show="show" width="80%" :on-after-leave="handleClose">
    <template #trigger>
      <div class="text-sm p-1 cursor-pointer hover:text-primary" @click="show = true">
        😙 加入我们
      </div>
    </template>
    <template #header> 加入我们</template>
    <div class="flex flex-col">
      <h2 class="text-primary text-center">
        𝑾𝒆 𝒐𝒑𝒆𝒏
        <a href="https://github.com/gcloudlab/app" target="_blank" class="text-secondary">𝒔𝒐𝒖𝒓𝒄𝒆</a>
      </h2>
      <div>码字中...</div>
      <p class="text-center">𝑮𝑪𝒍𝒐𝒖𝒅 开源团队</p>
    </div>
  </Drawer>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
const Drawer = defineAsyncComponent(() => import('@/components/commons/drawer/index.vue'));

const emits = defineEmits(['onClose']);
const show = ref(false);

const handleClose = () => {
  emits('onClose', false);
};
</script>

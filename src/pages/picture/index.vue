<template>
  <div class="text-center">
    <n-image-group>
      <n-space>
        <div class="flex flex-wrap items-end">
          <n-image
            v-for="(item, index) in pictures?.photoList"
            class="animate__animated animate__fadeIn faster shadow"
            :key="index"
            width="250"
            height="300"
            :src="item"
            object-fit="contain"
            lazy
            fallback-src="./src/assets/logo.png"
          >
            <template #placeholder>
              <n-skeleton width="200" height="100%" :sharp="false" size="large" />
            </template>
          </n-image>
        </div>
      </n-space>
    </n-image-group>
  </div>
</template>

<script setup lang="ts">
import usePicture, { PictureResponse } from '@/hooks/usePicture';
import { onMounted, ref } from 'vue';
import { NImageGroup, NImage, NSpace, NSkeleton } from 'naive-ui';

const pictures = ref<PictureResponse>();
onMounted(async () => {
  pictures.value = await usePicture(8);
});
</script>

<style lang="scss" scoped></style>

<template>
  <n-scrollbar style="max-height: calc(100vh - 57px)">
    <div class="picture mt-3">
      <div class="picture-bar flex flex-wrap justify-around items-end">
        <div
          class="picture-item w-80 h-80 sm:w-80 sm:h-80 md:w-64 md:h-64 mx-0.5 mb-3"
          v-for="(item, index) in pictures?.photoList"
          :key="index"
        >
          <n-image
            class="picture-i animate__animated animate__fadeIn faster shadow-lg rounded"
            :src="item"
            object-fit="cover"
            lazy
            :fallback-src="Logo"
          >
            <template #placeholder>
              <div class="w-80 h-80 sm:w-80 sm:h-80 md:w-64 md:h-64">
                <n-skeleton width="100%" height="100%" :sharp="false" size="large" />
              </div>
            </template>
          </n-image>
        </div>
      </div>

      <Menu :page="currentPage" @onSelect="handleSelect" />
    </div>
  </n-scrollbar>
</template>

<script setup lang="ts">
import usePicture, { PictureResponse } from '@/hooks/usePicture';
import { onMounted, ref } from 'vue';
import { NImage, NSkeleton, NScrollbar } from 'naive-ui';
import Menu from './menu.vue';
import defaultLogo from '@/assets/logo.png';

const pictures = ref<PictureResponse | null>();
const currentPage = ref(1);
const Logo = ref(defaultLogo);

onMounted(async () => {
  handleGetPictures();
});
const handleGetPictures = async () => {
  pictures.value = await usePicture(currentPage.value);
};

const handleSelect = (option: any) => {
  pictures.value = null;
  currentPage.value = option.key;
  handleGetPictures();
};
</script>

<style lang="scss" scoped>
.picture {
  .picture-i {
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.01);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>

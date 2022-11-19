<template>
  <n-scrollbar style="max-height: calc(100vh - 60px)">
    <div class="picture">
      <div class="picture-bar flex flex-wrap justify-around items-end">
        <div
          v-for="(item, index) in pictures?.photoList"
          :key="index"
          class="picture-item mx-0.5 mb-0.5 mt-2"
        >
          <n-image
            class="picture-i animate__animated animate__fadeIn faster shadow-lg rounded"
            :src="item"
            :width="isMobile() ? 350 : 200"
            :height="isMobile() ? 350 : 200"
            object-fit="cover"
            lazy
            :fallback-src="Logo"
          >
            <template #placeholder>
              <div style="width: 200px; height: 200px; margin-top: -15px">
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
import { isMobile } from '@/utils/is-mobile';
import { NImage, NSkeleton, NScrollbar } from 'naive-ui';
import Menu from './menu.vue';
import defaultLogo from '@/assets/ctrl.gif';

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

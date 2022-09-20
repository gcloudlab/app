<template>
  <Drawer v-model:show="show" width="60%">
    <template #trigger>
      <n-button type="success" size="small" @click="handleOpenShare">
        <template #icon>
          <n-icon><ShareSocial /></n-icon>
        </template>
        分享享
      </n-button>
    </template>
    <template #header> 正在分享{{ file.name }}</template>
    <div class="">
      <div class="flex items-center text-sm">
        <n-tag type="info"> {{ file.type }} </n-tag>
        <p class="mx-2">{{ file.name }}</p>
        <p>{{ transformSize(file.size) }}</p>
      </div>
    </div>
  </Drawer>
</template>

<script setup lang="ts">
import { PropType, ref, toRefs, defineAsyncComponent } from 'vue';
import { FileListData } from '@/models/file';
import { NButton, NTag, NIcon } from 'naive-ui';
import { transformSize } from '@/utils/transform-size';
import { ShareSocial } from '@vicons/ionicons5';
const Drawer = defineAsyncComponent(() => import('@/components/commons/drawer/index.vue'));

const props = defineProps({
  file: {
    type: Object as PropType<FileListData>,
    required: true,
  },
});
const show = ref(false);
const handleOpenShare = () => {
  console.log(props.file);
  show.value = true;
};

toRefs(props);
</script>

<style lang="scss" scoped></style>

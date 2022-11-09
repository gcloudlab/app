<template>
  <Drawer class="preview-file" v-model:show="show" width="80%">
    <template #trigger>
      <n-button type="warning" size="small" @click="handleOpenPreview">
        <template #icon>
          <n-icon><EyeTracking20Regular /></n-icon>
        </template>
      </n-button>
    </template>
    <template #header>{{ file.name }}</template>
    <n-scrollbar v-if="!loading" style="max-height: calc(100vh - 60px)">
      <div>
        <v-md-preview v-if="file.type === 'markdown'" :text="file_preview_data"></v-md-preview>
        <!-- <div v-else-if="file.type === 'HTML'" v-html="file_preview_data"></div> -->
        <div v-else-if="['文档', '表格', '幻灯片'].includes(file.type!)">
          <iframe
            :src="`https://view.officeapps.live.com/op/view.aspx?src=${file.path}`"
            frameborder="0"
            width="100%"
            height="700px"
          ></iframe>
        </div>
        <div v-else-if="file.type === 'PDF'">暂不支持</div>
        <pre v-else>{{ file_preview_data }}</pre>
      </div>
    </n-scrollbar>
    <Loading v-else size="large" />
  </Drawer>
</template>

<script setup lang="ts">
import { PropType, ref, toRefs, defineAsyncComponent } from 'vue';
import { FileListData } from '@/models/file';
import { NButton, NIcon, NScrollbar } from 'naive-ui';
import { EyeTracking20Regular } from '@vicons/fluent';
import axios from '@/service/axios';
import Loading from '@/components/commons/loading/index.vue';
import { onInfo } from '@/utils/messages';
const Drawer = defineAsyncComponent(() => import('@/components/commons/drawer/index.vue'));

const props = defineProps({
  file: {
    type: Object as PropType<FileListData>,
    required: true,
  },
});
const show = ref(false);
const loading = ref(false);
const file_preview_data = ref<any>();
const disable_file_type = ['文件夹', '图片', '视频文件', '音频文件', '压缩文件', 'link'];

const handleOpenPreview = () => {
  // console.log(props.file);
  if (!disable_file_type.includes(props.file.type!)) {
    show.value = true;
    handlePreview();
  } else {
    onInfo('点击大图预览');
  }
};
const handlePreview = () => {
  loading.value = true;
  axios
    .get(props.file.path!, { responseType: 'blob' })
    .then(({ data }) => {
      const reader = new FileReader();
      reader.readAsText(data);
      reader.onload = function (e) {
        // console.log(reader.result);
        file_preview_data.value = reader.result;
        loading.value = false;
      };
    })
    .finally(() => {
      loading.value = false;
    });
};

toRefs(props);
</script>

<style lang="scss">
.preview-file {
  .n-drawer-body-content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f3f8f8;
    padding: 16px 24px !important;
    .lottie-animation-container {
      margin-top: -100px;
    }
  }
}
</style>

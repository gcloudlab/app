<template>
  <!-- TODO 手风琴展开下载列表 -->
  <n-scrollbar class="h-3/4">
    <n-upload multiple directory-dnd :action="action" :max="max">
      <n-upload-dragger>
        <div style="margin-bottom: 12px">
          <n-icon size="48" :depth="3">
            <CloudUploadOutline />
          </n-icon>
        </div>
        <n-text style="font-size: 15px"> {{ title }} </n-text>
        <n-p depth="3" style="margin: 8px 0 0 0"> {{ description }} </n-p>
      </n-upload-dragger>
    </n-upload>
    是v啊v
  </n-scrollbar>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { NUpload, NUploadDragger, NIcon, NText, NP, NScrollbar } from 'naive-ui';
import { CloudUploadOutline } from '@vicons/ionicons5';

const props = defineProps({
  action: {
    type: String,
    default: '',
    require: true,
  },
  max: {
    type: Number,
    default: 10,
  },
  title: {
    type: String,
    default: '此处上传',
  },
  description: {
    type: String,
    default: '经费有限，单次上传不超过50M，蟹蟹',
  },
});

toRefs(props);
</script>

<style lang="scss" scoped></style>

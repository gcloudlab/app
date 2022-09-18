<template>
  <div class="attention-group flex text-sm">
    <n-button
      class="mx-1"
      tertiary
      type="primary"
      size="small"
      @click="
        onInfo(tips, {
          closable: true,
          duration: 10000,
          keepAliveOnHover: true,
        })
      "
    >
      上传须知
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onInfo } from '@/utils/messages';
import { NButton } from 'naive-ui';

const tips = ref(
  `「上传须知」：由于经费有限，单文件上传限制20Mb以内，默认总容量1G（私人空间+公共空间）。请注意遵守互联网冲浪规范，杜绝上传违规文件等内容，逮到了你跑得脱，马脑阔😠，蟹蟹您的支持。`
);
</script>

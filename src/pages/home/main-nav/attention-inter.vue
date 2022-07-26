<template>
  <div class="attention-group flex text-sm">
    <Attention title="上传须知">
      由于经费有限，<strong>每次上传文件限制50Mb以内，默认总容量200Mb</strong>，蟹蟹您的支持。
    </Attention>
    <Attention title="和谐冲浪">
      请注意遵守互联网冲浪规范，杜绝上传违规文件等内容，逮到了你跑得脱，马脑阔。
    </Attention>
    <Attention title="关于本站">
      请注意遵守互联网冲浪规范，杜绝上传违规文件等内容，逮到了你跑得脱，马脑阔。
    </Attention>
    <Attention title="关于本站">
      请注意遵守互联网冲浪规范，杜绝上传违规文件等内容，逮到了你跑得脱，马脑阔。
    </Attention>
  </div>
</template>

<script setup lang="ts">
import Attention from '@/components/attention/index.vue';
</script>

<style lang="scss">
.attention-group {
  .n-alert .n-alert-body .n-alert-body__content {
    font-size: 12px;
  }
}
</style>

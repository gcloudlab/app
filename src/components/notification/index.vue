<template>
  <div class="notification">
    <n-badge>
      <n-icon
        class="mr-4 mt-1 text-primary cursor-pointer hover:text-gray-500"
        :component="Mail20Regular"
        size="24"
      />
    </n-badge>
  </div>
</template>

<script setup lang="ts">
import { NBadge, NIcon } from 'naive-ui';
import { Mail20Regular } from '@vicons/fluent';
</script>

<style lang="scss">
.notification {
  .n-badge .n-badge-sup {
    left: 22px;
    top: -2px;
  }
}
</style>

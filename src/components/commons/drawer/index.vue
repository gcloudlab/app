<template>
  <div>
    <slot name="trigger">
      <n-button>打开</n-button>
    </slot>
    <n-drawer v-bind="$attrs" resizable>
      <n-drawer-content closable>
        <template #header>
          <slot name="header"></slot>
        </template>
        <slot></slot>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script setup lang="ts">
import { NDrawer, NDrawerContent, NButton } from 'naive-ui';
</script>

<style lang="scss" scoped></style>

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
        <!-- <template #footer>
          <slot name="footer"></slot>
        </template> -->
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, toRefs } from "vue";
import { NDrawer, NDrawerContent, NButton } from "naive-ui";

const emits = defineEmits(["onShow"]);
const show = ref(false);
</script>

<style lang="scss" scoped></style>

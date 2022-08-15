<template>
  <n-scrollbar style="max-height: 200px">
    <n-tree
      v-bind="$attrs"
      block-line
      :data="data"
      :accordion="true"
      cascade
      key-field="identity"
      label-field="name"
      children-field="children"
      expand-on-click
      :render-switcher-icon="renderSwitcherIcon"
      :node-props="nodeProps"
    />
  </n-scrollbar>
</template>

<script setup lang="ts">
import { PropType, h, toRefs } from "vue";
import { NIcon, NTree, NScrollbar } from "naive-ui";
import { Folder } from "@vicons/ionicons5";
import { TreeNodeProps } from "naive-ui/es/tree/src/interface";

const props = defineProps({
  data: {
    type: Object as PropType<
      {
        label: string;
        value: number;
      }[]
    >,
    require: true,
  },
  nodeProps: {
    type: Function as PropType<TreeNodeProps>,
  },
});

const renderSwitcherIcon = () => h(NIcon, null, { default: () => h(Folder) });

toRefs(props);
</script>

<style lang="scss" scoped></style>

<template>
  <n-scrollbar style="max-height: 200px">
    <div class="folder-tree">
      <n-tree
        ref="tree"
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
      <Loading v-if="isLoading" class="absolute top-0 bottom-0 right-0 left-0 m-auto" />
    </div>
  </n-scrollbar>
</template>

<script setup lang="ts">
import { PropType, h, toRefs, ref, onMounted } from 'vue';
import { NIcon, NTree, NScrollbar } from 'naive-ui';
import { Folder } from '@vicons/ionicons5';
import { TreeNodeProps } from 'naive-ui/es/tree/src/interface';
import Loading from '@/components/commons/loading/index.vue';

const props = defineProps({
  data: {
    type: Object as PropType<
      {
        label: string;
        value: number;
      }[]
    >,
    required: true,
  },
  nodeProps: {
    type: Function as PropType<TreeNodeProps>,
  },
});
const tree = ref(null);
const isLoading = ref(true);
const renderSwitcherIcon = () => h(NIcon, { class: 'text-primary' }, { default: () => h(Folder) });

onMounted(() => {
  if (tree.value) {
    isLoading.value = false;
  }
});
toRefs(props);
</script>

<style lang="scss">
.folder-tree {
  .n-tree .n-tree-node-wrapper {
    padding: 0;
  }
  .n-tree .n-tree-node.n-tree-node--highlight .n-tree-node-content .n-tree-node-content__text {
    border: none;
    color: #00b0b3;
  }
  .n-tree .n-tree-node-content .n-tree-node-content__text {
    width: 130px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>

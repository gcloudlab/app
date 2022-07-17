<template>
  <div class="file-tree">
    <div class="flex">
      <n-input class="mr-0" v-model:value="pattern" size="small" placeholder="搜索文件" />
      <Button @click="isChecked = !isChecked" size="small">操作</Button>
    </div>
    <n-tree
      v-if="files_count > 0"
      class="w-52 mt-2 ml-4 tree md:w-60 overflow-y-auto overflow-x-hidden"
      block-line
      :data="user_files"
      :pattern="pattern"
      key-field="identity"
      label-field="name"
      children-field="children"
      :accordion="true"
      expand-on-click
      cascade
      :node-props="nodeProps"
      :checkable="isChecked"
      :render-switcher-icon="renderSwitcherIcon"
      :on-update:checked-keys="handleCheckedKeys"
      :on-update:expanded-keys="handleExpandedKeys"
      :on-update:selected-keys="handleSelectedKeys"
    />
    <div v-else-if="files_count === -1" class="p-4">
      <n-skeleton text :repeat="4" :sharp="false" />
    </div>
    <Empty v-else description="空空如也"> </Empty>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue';
import { storeToRefs } from 'pinia';
import { useFileOutsideStore } from '@/store/modules/file';
import { NTree, NInput, NIcon, TreeOption, NSkeleton } from 'naive-ui';
import { Folder } from '@vicons/ionicons5';
import Button from '@/components/button/index.vue';
import Empty from '@/components/empty/index.vue';

const emits = defineEmits(['checkedKeys', 'expandedKeys', 'selectedKeys']);
const fileStore = useFileOutsideStore();
const isChecked = ref(false);
const pattern = ref('');
const renderSwitcherIcon = () => h(NIcon, null, { default: () => h(Folder) });

const handleCheckedKeys = (keys: Array<string | number>, option: Array<TreeOption | null>) => {
  emits('checkedKeys', { keys, option });
};
const handleExpandedKeys = (keys: Array<string | number>, option: Array<TreeOption | null>) => {
  emits('expandedKeys', option[option.length - 1]);
};
const handleSelectedKeys = (keys: Array<string | number>, option: Array<TreeOption | null>) => {
  emits('selectedKeys', option[0]);
};
const nodeProps = ({ option }: { option: TreeOption }) => {
  return {
    // onClick() {
    //   window.$message.info('[Click] ' + option.label);
    // },
  };
};
const { files_count, user_files } = storeToRefs(fileStore);
</script>

<style lang="scss">
.file-tree {
  .tree {
    height: 180px;
  }
  .n-tree .n-tree-node.n-tree-node--highlight .n-tree-node-content .n-tree-node-content__text {
    border: none;
    color: #00b0b3;
  }
}
</style>

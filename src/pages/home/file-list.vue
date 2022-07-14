<template>
  <div class="file-tree">
    <n-input v-model:value="pattern" placeholder="搜索文件" />
    <!-- <Button @click="isChecked = !isChecked">操作</Button> -->
    <n-tree
      class="w-52 md:w-60 h-36 overflow-y-auto overflow-x-hidden"
      block-line
      :data="user_files"
      :pattern="pattern"
      key-field="identity"
      label-field="name"
      children-field="children"
      :show-irrelevant-nodes="false"
      :accordion="true"
      expand-on-click
      cascade
      :checkable="isChecked"
      :render-switcher-icon="renderSwitcherIcon"
      :on-update:checked-keys="handleCheckedKeys"
      :on-update:expanded-keys="handleExpandedKeys"
      :on-update:selected-keys="handleSelectedKeys"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue';
import { storeToRefs } from 'pinia';
import { useFileOutsideStore } from '@/store/modules/file';
import { NTree, NInput, NIcon, TreeOption } from 'naive-ui';
import Button from '@/components/button/index.vue';
import { ChevronForward } from '@vicons/ionicons5';

const fileStore = useFileOutsideStore();
const isChecked = ref(false);
const pattern = ref('');
const renderSwitcherIcon = () => h(NIcon, null, { default: () => h(ChevronForward) });

const handleCheckedKeys = (keys: Array<string | number>, option: Array<TreeOption | null>) => {
  console.log('---check key', keys, option);
};
const handleExpandedKeys = (keys: Array<string | number>, option: Array<TreeOption | null>) => {
  console.log('---expand key', keys, option);
};
const handleSelectedKeys = (keys: Array<string | number>, option: Array<TreeOption | null>) => {
  console.log('---select key', keys, option);
};

const { files_count, user_files } = storeToRefs(fileStore);
</script>

<style lang="scss">
.n-tree-node-content__text {
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
</style>

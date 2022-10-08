<template>
  <div class="file-tree">
    <div class="flex">
      <n-input v-model:value="pattern" class="mr-0" size="small" placeholder="搜索文件" />
      <Button v-if="isChecked" type="error" size="small" @click="handleDelete">删除</Button>
      <Button size="small" @click="isChecked = !isChecked">{{
        !isChecked ? '选择' : '取消'
      }}</Button>
    </div>
    <n-scrollbar class="shadow-inner bg-gradient-to-b from-green-50" style="height: 200px">
      <n-tree
        v-if="files_count > 0 && public_count > 0"
        class="mt-2 ml-1.5 tree md:w-60"
        block-line
        :data="user_files"
        :pattern="pattern"
        key-field="identity"
        label-field="name"
        children-field="children"
        accordion
        expand-on-click
        cascade
        :node-props="nodeProps"
        :checkable="isChecked"
        :render-switcher-icon="renderSwitcherIcon"
        :on-update:checked-keys="handleCheckedKeys"
        :on-update:expanded-keys="handleExpandedKeys"
        :on-update:selected-keys="handleSelectedKeys"
      />
      <div v-else-if="fetching && upload_files.length === 0" class="p-4">
        <n-skeleton text :repeat="6" :sharp="false" />
      </div>
      <Empty
        v-else
        class="animate__animated animate__fadeIn faster"
        description="快去上传文件吧~"
      />
    </n-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ref, h, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useFileOutsideStore } from '@/store/modules/file';
import { NTree, NInput, NIcon, TreeOption, NSkeleton, NScrollbar } from 'naive-ui';
import { Folder } from '@vicons/ionicons5';
import Button from '@/components/commons/button/index.vue';

export interface FileTreeOption {
  keys: Array<string | number>;
  option: Array<TreeOption | null>;
}

const Empty = defineAsyncComponent(() => import('@/components/commons/empty/index.vue'));

const emits = defineEmits(['checkedKeys', 'expandedKeys', 'selectedKeys', 'delete']);
const fileStore = useFileOutsideStore();
const isChecked = ref(false);
const pattern = ref('');
const renderSwitcherIcon = () => h(NIcon, { class: 'text-primary' }, { default: () => h(Folder) });

const handleCheckedKeys = (keys: Array<string | number>, option: Array<TreeOption | null>) => {
  emits('checkedKeys', option);
};
const handleExpandedKeys = (keys: Array<string | number>, option: Array<TreeOption | null>) => {
  emits('expandedKeys', option[option.length - 1]);
};
const handleSelectedKeys = (keys: Array<string | number>, option: Array<TreeOption | null>) => {
  emits('selectedKeys', option[0]);
};
const handleDelete = () => {
  emits('delete', true);
};
const nodeProps = ({ option }: { option: TreeOption }) => {
  return {
    // onClick() {
    //   window.$message.info('[Click] ' + option.label);
    // },
  };
};
const { files_count, public_count, user_files, fetching, upload_files } = storeToRefs(fileStore);
</script>

<style lang="scss">
.file-tree {
  .n-tree .n-tree-node-wrapper {
    padding: 0;
    width: 95%;
  }
  .n-tree .n-tree-node.n-tree-node--highlight .n-tree-node-content .n-tree-node-content__text {
    border: none;
    color: #00b0b3;
  }
  .n-tree .n-tree-node-content .n-tree-node-content__text {
    width: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>

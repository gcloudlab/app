<template>
  <div class="flex justify-between top-0" style="position: sticky">
    <n-h4 prefix="bar" class="text-primary mt-0">
      回收站 {{ deleted_files.length !== 0 ? `(${deleted_files.length})` : '' }}
    </n-h4>
    <!-- <n-button size="small" @click="onInfo('肝ing...')">撤回</n-button> -->
    <n-button size="small" @click="onInfo('肝ing...')">清空</n-button>
  </div>

  <n-scrollbar style="height: 100%">
    <div class="deleted_list" v-if="deleted_files.length > 0">
      <n-data-table
        :columns="columns"
        :data="deleted_files"
        :bordered="false"
        single-column
        :row-key="row => row.identity"
        size="small"
        @update:checked-row-keys="handleCheck"
      />
    </div>
    <div v-else-if="fetching" class="p-4">
      <n-skeleton class="mb-1" height="20px" :repeat="5" :sharp="false" />
    </div>
    <Empty v-else description="空空如也" />
  </n-scrollbar>
</template>

<script setup lang="ts">
import { defineAsyncComponent, h } from 'vue';
import { storeToRefs } from 'pinia';
import { useFileOutsideStore } from '@/store/modules/file';
import {
  NSkeleton,
  NScrollbar,
  NH4,
  NDataTable,
  DataTableColumns,
  NButton,
  DataTableRowKey,
} from 'naive-ui';
import { transformSize } from '@/utils/transform-size';
import { compareDate, transformDate } from '@/utils/date';
import { FileListData } from '@/models/file';
import { onInfo } from '@/utils/messages';
const Empty = defineAsyncComponent(() => import('@/components/commons/empty/index.vue'));

const fileStore = useFileOutsideStore();

const columns: DataTableColumns<FileListData> = [
  {
    type: 'selection',
    width: 1,
  },
  {
    title: '文件名',
    key: 'name',
    width: 5,
    ellipsis: {
      tooltip: true,
    },
  },
  {
    title: '大小',
    key: 'size',
    width: 3,
    sorter: (row1: any, row2: any) => row1.size - row2.size,
    render(row) {
      return row.path === '' ? '文件夹' : transformSize(row.size as number);
    },
  },
  {
    title: '删除日期',
    key: 'deleted_at',
    width: 3,
    defaultSortOrder: 'ascend',
    sorter: (row1: any, row2: any) => compareDate(row1.deleted_at, row2.deleted_at),
    render(row) {
      return transformDate(row.deleted_at as string);
    },
  },
];
const handleCheck = (rowKeys: DataTableRowKey[]) => {
  // console.log(rowKeys);
};

const { deleted_files, fetching } = storeToRefs(fileStore);
</script>

<style lang="scss">
.deleted_list {
  .n-data-table .n-data-table-th {
    display: none;
  }
  .n-data-table .n-data-table-td {
    border-bottom: none;
  }
  .n-data-table .n-data-table-td.n-data-table-td--hover {
    background-color: transparent;
  }
}
</style>

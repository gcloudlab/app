<template>
  <div class="flex justify-between items-center top-0" style="position: sticky">
    <n-h5 prefix="bar" class="w-full text-primary bg-header shadow-sm rounded p-2 mt-0 mb-0">
      回收站 {{ deleted_files.length !== 0 ? `(${deleted_files.length})` : '' }}
    </n-h5>
    <n-button-group class="ml-auto mt-1">
      <n-button
        v-if="checked_file_ids.length > 0"
        quaternary
        size="tiny"
        @click="onInfo('肝ing...')"
      >
        还原
      </n-button>
      <n-button
        v-if="checked_file_ids.length > 0"
        type="error"
        size="tiny"
        quaternary
        @click="onInfo('肝ing...')"
      >
        删除
      </n-button>
    </n-button-group>
  </div>

  <n-scrollbar style="height: 100%">
    <div
      class="deleted_list p-3 animate__animated animate__fadeIn faster"
      v-if="deleted_files.length > 0"
    >
      <n-data-table
        :columns="columns"
        :data="deleted_files"
        :bordered="false"
        single-column
        :row-key="row => row.identity"
        size="small"
        row-class-name="recycle-col"
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
import { defineAsyncComponent, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useFiles } from '@/hooks/useFiles';
import {
  NSkeleton,
  NScrollbar,
  NH5,
  NDataTable,
  DataTableColumns,
  NButton,
  NButtonGroup,
  DataTableRowKey,
} from 'naive-ui';
import { transformSize } from '@/utils/transform-size';
import { compareDate, transformDate } from '@/utils/date';
import { FileListData } from '@/models/file';
import { onInfo } from '@/utils/messages';
const Empty = defineAsyncComponent(() => import('@/components/commons/empty/index.vue'));

const { fileStore } = useFiles();

const checked_file_ids = ref<string[]>([]);

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
    width: 4,
    defaultSortOrder: 'ascend',
    sorter: (row1: any, row2: any) => compareDate(row2.deleted_at, row1.deleted_at),
    render(row) {
      return transformDate(row.deleted_at as string);
    },
  },
];
const handleCheck = (rowKeys: DataTableRowKey[]) => {
  checked_file_ids.value = rowKeys as string[];
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
    background-color: rgb(250, 255, 255);
  }
  .n-data-table .n-data-table-td.n-data-table-td--hover {
    background-color: transparent;
  }
  .recycle-col {
    background-color: rgb(250, 255, 255);
    font-size: 13px;
    .n-data-table-td {
      padding-top: 3px;
      padding-bottom: 3px;
    }
  }
}
</style>

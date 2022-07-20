<template>
  <div class="file-list">
    <n-data-table
      size="small"
      :columns="columns"
      :row-props="rowProps"
      :data="values.children"
      row-class-name="animate__animated animate__fadeIn faster"
      :row-key="rowKeys"
      children-key="donnot-need-children"
      :bordered="false"
      :pagination="pagination"
      :default-expand-all="true"
    >
      <template name="empty">
        <Empty description="空空如也"> </Empty>
      </template>
    </n-data-table>
    <DropDown
      :show="showDropdownRef"
      :position="{ x: xRef, y: yRef }"
      @select="handleSelectDropDownItem"
      @clickoutside="handleClidkOutside"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType, reactive, toRefs, h, VueElement, ref, nextTick } from 'vue';
import { DataTableColumns, DataTableCreateSummary, NDataTable, TreeOption } from 'naive-ui';
import { FileListData } from '@/models/file';
import { compareDate } from '@/utils/date';
import ShowOrEdit from './file-edit';
import { transformSize } from '@/utils/transform-size';
import Empty from '@/components/empty/index.vue';
import DropDown from '@/components/drop-down/index.vue';

const props = defineProps({
  values: {
    type: Object as PropType<TreeOption | FileListData>,
    default: {},
  },
});
const emits = defineEmits(['expandedKeys']);

const showDropdownRef = ref(false);
const xRef = ref(0);
const yRef = ref(0);
const pagination = reactive({
  page: 1,
  pageSize: 10,
  showSizePicker: true,
  pageSizes: [10, 15, 20],
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize;
    pagination.page = 1;
  },
});

const rowProps = (row: FileListData) => {
  return {
    style: 'cursor: pointer;',
    onClick: () => {
      if (row?.isFolder) {
        emits('expandedKeys', row);
      }
    },
    onContextmenu: (e: MouseEvent) => {
      e.preventDefault();
      showDropdownRef.value = false;
      nextTick().then(() => {
        showDropdownRef.value = true;
        xRef.value = e.clientX;
        yRef.value = e.clientY;
      });
    },
  };
};
const columns: DataTableColumns = [
  // {
  //   type: 'selection',
  //   width: 10,
  // },
  {
    title: '文件名称',
    key: 'name',
    width: 15,
    ellipsis: {
      tooltip: true,
    },
    render(row, index) {
      return h(ShowOrEdit as unknown as VueElement, {
        value: row.name,
        style: row.type === '文件夹' && { color: '#00b850', cursor: 'pointer' },
        onUpdateValue(v: any) {
          // data.value[index].name = v
          if (v && row.name !== v) {
            row.name = v;
            console.log('--update', v);
          }
        },
      });
    },
  },
  {
    title: '类型',
    key: 'type',
    width: 4,
  },
  {
    title: '大小',
    key: 'size',
    width: 4,
    sorter: (row1: any, row2: any) => row1.size - row2.size,
    render(row) {
      return transformSize(row.size as number);
    },
  },
  {
    title: '日期',
    key: 'updated_at',
    width: 5,
    defaultSortOrder: 'descend',
    sorter: (row1: any, row2: any) => compareDate(row1.updated_at, row2.updated_at),
  },
];
const rowKeys = (row: FileListData) => row.name;
const handleSelectDropDownItem = (value: string) => {
  console.log('--drop select', value);
  showDropdownRef.value = false;
};
const handleClidkOutside = (value: boolean) => {
  showDropdownRef.value = value;
};

toRefs(props);
</script>

<style lang="scss">
.file-list {
  .n-data-table .n-data-table-td.n-data-table-td--hover {
    background-color: transparent;
  }
}
</style>

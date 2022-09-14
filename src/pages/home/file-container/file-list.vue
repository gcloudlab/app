<template>
  <div class="file-list">
    <n-scrollbar style="max-height: calc(100vh - 60px)">
      <n-data-table
        size="small"
        :columns="columns"
        :row-props="rowProps"
        :data="values.children"
        :loading="!values.children"
        row-class-name="animate__animated animate__fadeIn faster"
        :row-key="rowKeys"
        children-key="donnot-need-children"
        :bordered="false"
        :pagination="false"
        :default-expand-all="true"
      >
        <template #empty>
          <Empty description="空文件夹"> </Empty>
        </template>
      </n-data-table>
    </n-scrollbar>

    <DropDown
      :show="showDropdownRef"
      :position="{ x: xRef, y: yRef }"
      @select="handleSelectDropDownItem"
      @clickoutside="handleClidkOutside"
    />
  </div>
</template>

<script setup lang="ts">
import {
  PropType,
  reactive,
  toRefs,
  h,
  VueElement,
  ref,
  nextTick,
  defineAsyncComponent,
} from 'vue';
import { DataTableColumns, NDataTable, TreeOption, NScrollbar } from 'naive-ui';
import { FileListData } from '@/models/file';
import { useFiles } from '@/hooks/useFiles';
import { compareDate } from '@/utils/date';
import { transformSize } from '@/utils/transform-size';
const Empty = defineAsyncComponent(() => import('@/components/commons/empty/index.vue'));
const DropDown = defineAsyncComponent(() => import('@/components/commons/drop-down/index.vue'));
const ShowOrEdit = defineAsyncComponent(() => import('./file-edit.vue'));

const props = defineProps({
  values: {
    type: Object as PropType<TreeOption | FileListData>,
    default: {},
  },
});
const emits = defineEmits(['expandedKeys', 'selectedKeys']);

const { onUpdateFileName } = useFiles();
const showDropdownRef = ref(false);
const xRef = ref(0);
const yRef = ref(0);
const pagination = reactive({
  page: 1,
  pageSize: 20,
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
      if (row?.type === '文件夹') {
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
  {
    title: '文件名称',
    key: 'name',
    width: 15,
    ellipsis: {
      tooltip: true,
    },
    render(row, _index) {
      return h(ShowOrEdit as unknown as VueElement, {
        value: row.name,
        class: ['ml-2 cursor-pointer', row.type === '文件夹' ? 'text-primary' : ''],
        onUpdateValue(v: string) {
          // data.value[index].name = v
          if (v && row.name !== v && row.identity) {
            row.name = v;
            onUpdateFileName({
              identity: row.identity as string,
              name: v,
            });
          }
        },
        onClick() {
          emits('selectedKeys', row);
        },
      });
    },
  },
  {
    title: '类型',
    key: 'type',
    width: 3,
  },
  {
    title: '大小',
    key: 'size',
    width: 3,
    sorter: (row1: any, row2: any) => row1.size - row2.size,
    render(row) {
      return transformSize(row.size as number);
    },
  },
  {
    title: '日期',
    key: 'updated_at',
    width: 4,
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
  .n-data-table .n-data-table-td {
    border-bottom: none;
  }
  .n-data-table .n-data-table-td.n-data-table-td--hover {
    background-color: transparent;
  }
}
</style>

<template>
  <div class="menu">
    <n-scrollbar
      v-if="showMenu"
      class="z-10 rounded shadow animate__animated animate__fadeIn faster"
      style="height: 200px"
    >
      <n-list class="">
        <n-list-item
          v-for="(item, index) in options"
          :key="index"
          class="px-2 hover:bg-gray-100"
          @click="handleSelect(item)"
        >
          {{ item.label }}
        </n-list-item>
      </n-list>
    </n-scrollbar>
    <n-button
      class="mt-2 px-2 shadow-md"
      size="large"
      type="primary"
      round
      @click="showMenu = !showMenu"
    >
      {{ pageName }}
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { toRefs, ref } from 'vue';
import { NButton, NScrollbar, NList, NListItem } from 'naive-ui';

const props = defineProps({
  page: {
    type: Number,
    default: 1,
  },
});
const emit = defineEmits(['onSelect']);

const pageName = ref('纸片1');
const showMenu = ref(false);

type OptionItem = {
  label: string;
  disabled: boolean;
  key: number;
};
const options: OptionItem[] = [
  {
    label: '纸片1',
    key: 1,
    disabled: props.page === 1,
  },
  {
    label: '纸片2',
    key: 2,
    disabled: props.page === 2,
  },
  {
    label: '纸片3',
    key: 3,
    disabled: props.page === 3,
  },
  {
    label: '写真1',
    key: 4,
    disabled: props.page === 4,
  },
  {
    label: '写真2',
    key: 5,
    disabled: props.page === 5,
  },
  {
    label: '写真3',
    key: 6,
    disabled: props.page === 6,
  },
  {
    label: '写真3',
    key: 7,
    disabled: props.page === 7,
  },
  {
    label: '写真3',
    key: 8,
    disabled: props.page === 8,
  },
  {
    label: '写真3',
    key: 9,
    disabled: props.page === 9,
  },
  {
    label: '写真3',
    key: 10,
    disabled: props.page === 10,
  },
  {
    label: '写真3',
    key: 11,
    disabled: props.page === 11,
  },
  {
    label: '写真3',
    key: 12,
    disabled: props.page === 12,
  },
  {
    label: '写真3',
    key: 13,
    disabled: props.page === 13,
  },
  {
    label: '写真3',
    key: 14,
    disabled: props.page === 14,
  },
];
const handleSelect = (value: OptionItem) => {
  emit('onSelect', value);
  pageName.value = value.label;
  showMenu.value = false;
};

toRefs(props);
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  bottom: 50px;
  right: 100px;
  z-index: 999;
  text-align: center;
  .n-dropdown-menu {
    height: 150px;
  }
}
</style>

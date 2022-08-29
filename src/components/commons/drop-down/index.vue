<template>
  <n-dropdown
    placement="bottom-start"
    trigger="manual"
    :x="position.x"
    :y="position.y"
    :options="options"
    :show="show"
    :on-clickoutside="onClickoutside"
    @select="handleSelect"
  />
</template>

<script setup lang="ts">
import { toRefs, h, PropType } from 'vue';
import { DropdownOption, NDropdown } from 'naive-ui';

type Position = {
  x: number;
  y: number;
};

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  position: {
    type: Object as PropType<Position>,
    default: () => ({}),
  },
});
const emits = defineEmits(['select', 'clickoutside']);

const options: DropdownOption[] = [
  {
    label: '编辑',
    key: 'edit',
  },
  {
    label: () => h('span', { style: { color: 'red' } }, '删除'),
    key: 'delete',
  },
];

const handleSelect = (v: string) => {
  emits('select', v);
}
const onClickoutside = () => {
  emits('clickoutside', false);
}

toRefs(props);
</script>

<style lang="scss" scoped></style>

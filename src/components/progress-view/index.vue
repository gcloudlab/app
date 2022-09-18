<template>
  <div class="analysize pl-3 pr-2 pb-2 text-sm flex justify-start items-center">
    <div class="flex-none">{{ label }}：</div>
    <n-progress
      v-bind="$attrs"
      class="w-12"
      type="line"
      :stroke-width="6"
      indicator-placement="inside"
      :color="themeVars.errorColor"
      :indicator-text-color="themeVars.infoColor"
      :rail-color="themeVars.primaryColor"
      processing
    />
    <div class="pl-2">
      <n-number-animation :from="from" :to="to" :precision="precision" />
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { NProgress, NNumberAnimation, useThemeVars } from 'naive-ui';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  from: {
    type: Number,
    default: 0,
  },
  to: {
    type: Number,
    default: 0,
  },
  precision: {
    type: Number,
    default: 0,
  },
});

const themeVars = useThemeVars();

toRefs(props);
</script>

<style lang="scss" scoped></style>

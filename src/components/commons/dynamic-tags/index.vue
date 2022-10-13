<template>
  <n-dynamic-tags v-model:value="tags" :max="3" v-bind="$attrs" size="large">
    <template #trigger="{ activate, disabled }">
      <n-button type="primary" :disabled="disabled" @click="activate()">
        <template #icon>
          <n-icon>
            <Add />
          </n-icon>
        </template>
        标签
      </n-button>
    </template>
  </n-dynamic-tags>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { NDynamicTags, NIcon, NButton } from 'naive-ui';
import Add from '@vicons/ionicons5/Add';
import { DynamicTagsOption } from 'naive-ui/es/dynamic-tags/src/interface';

const props = defineProps({
  tags: {
    type: Array as PropType<string[] | DynamicTagsOption[]>,
    // required: true,
  },
});
</script>

<style lang="scss" scoped></style>

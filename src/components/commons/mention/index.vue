<template>
  <div class="flex">
    <n-mention v-if="show_input" v-bind="$attrs" :options="mention_options" size="small" />
    <n-button size="small" :type="show_input ? 'warning' : 'default'" @click="handleChange">
      {{ show_input ? 'X' : '@' }}
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NMention, NButton } from 'naive-ui';

const emits = defineEmits(['onClear']);
const props = defineProps({
  mention: {
    type: String,
    // required: true,
  },
});

const show_input = ref(false);
const mention_options = ref([
  {
    label: 'Juicee',
    value: 'Juicee',
  },
  {
    label: 'yesmore',
    value: 'yesmore',
  },
]);

const handleChange = () => {
  if (show_input) {
    emits('onClear', true);
  }
  show_input.value = !show_input.value;
};
</script>

<style lang="scss" scoped></style>

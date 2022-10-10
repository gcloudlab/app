<template>
  <div class="editor-bar mt-1 animate__animated animate__fadeIn faster">
    <div class="w-full h-56 mr-3">
      <div class="header-bar flex items-center">
        <n-input
          v-if="showTitle"
          class="flex-1"
          v-model:value="title"
          size="small"
          placeholder="请输入标题"
        />
        <div class="flex">
          <Mention
            v-if="showTag"
            :mention="mention"
            :on-update:value="handleUpdateMention"
            @on-clear="mention = ''"
          />
          <DynamicTags class="ml-1" :tags="tags" :on-update:value="handleUpdateTags" />
        </div>
      </div>
      <v-md-editor
        v-model="content"
        :mode="editor_mode"
        :left-toolbar="left_toolbar"
        :right-toolbar="right_toolbar"
        height="100%"
        @change="handleEditing"
      ></v-md-editor>
    </div>
    <div>
      <n-button class="float-right" size="small" @click="handleSubmit">发布</n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NInput, NButton } from 'naive-ui';
import { DynamicTagsOption } from 'naive-ui/es/dynamic-tags/src/interface';
import DynamicTags from '@/components/commons/dynamic-tags/index.vue';
import Mention from '@/components/commons/mention/index.vue';

const props = defineProps({
  showTitle: {
    type: Boolean,
    default: true,
  },
  showTag: {
    type: Boolean,
    default: true,
  },
});

const editor_mode = ref('edit'); // or edit
const left_toolbar = ref('undo redo clear | emoji');
const right_toolbar = ref('preview sync-scroll fullscreen');
const title = ref('');
const tags = ref<string[] | DynamicTagsOption[]>([]);
const content = ref(
  ':innocent: 在这里编辑正文 (支持[Markdown](https://www.runoob.com/markdown/md-tutorial.html)语法)~'
);
const mention = ref('');

const handleEditing = (_text: string, _html: string) => {
  console.log(title.value, content.value);
};
const handleUpdateTags = (value: string[]) => {
  tags.value = value;
};
const handleUpdateMention = (value: string) => {
  mention.value = value;
};

const handleValidate = (): boolean => {
  return true;
};
const handleSubmit = () => {
  if (handleValidate()) {
    console.log(title.value, content.value, tags.value, mention.value);
  }
};
</script>

<style lang="scss" scoped></style>

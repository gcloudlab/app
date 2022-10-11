<template>
  <div class="editor-bar mt-1 animate__animated animate__fadeIn faster">
    <div class="w-full h-56 mr-3">
      <div class="header-bar flex items-center">
        <n-input
          v-if="showTitle"
          class="flex-1"
          v-model:value="posts_value.title"
          size="small"
          placeholder="请输入标题"
        />
        <div class="flex">
          <Mention
            v-if="showTag"
            :mention="posts_value.mention"
            :on-update:value="handleUpdateMention"
            @on-clear="posts_value.mention = ''"
          />
          <DynamicTags class="ml-1" :on-update:value="handleUpdateTags" />
        </div>
      </div>
      <v-md-editor
        v-model="posts_value.content"
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
import { ref, reactive } from 'vue';
import { NInput, NButton } from 'naive-ui';
import DynamicTags from '@/components/commons/dynamic-tags/index.vue';
import Mention from '@/components/commons/mention/index.vue';
import { PostsFormItem } from '@/models/community';
import { onWarning } from '@/utils/messages';

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
const emits = defineEmits(['onSubmit']);

const editor_mode = ref('edit'); // or edit
const left_toolbar = ref('undo redo clear | emoji');
const right_toolbar = ref('preview sync-scroll fullscreen');
const posts_value: PostsFormItem = reactive({
  title: '',
  tags: '',
  content:
    ':innocent: 在这里编辑正文 (支持[Markdown](https://www.runoob.com/markdown/md-tutorial.html)语法)~',
  mention: '',
  cover: null,
});

const handleEditing = (_text: string, _html: string) => {
  // console.log(posts_value.title, posts_value.content);
};
const handleUpdateTags = (value: string[]) => {
  posts_value.tags = value.join(',');
};
const handleUpdateMention = (value: string) => {
  posts_value.mention = value;
};

const handleValidate = (): boolean => {
  if (posts_value.title === '') {
    onWarning('缺少标题');
    return false;
  }
  return true;
};
const handleSubmit = () => {
  if (handleValidate()) {
    emits('onSubmit', posts_value);
  }
};
</script>

<style lang="scss" scoped></style>

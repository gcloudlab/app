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
            v-if="showMention"
            :default-value="posts_value.mention || '@'"
            :mention="(posts_value.mention as string)"
            :on-update:value="handleUpdateMention"
            @on-clear="posts_value.mention = ''"
          />
          <DynamicTags
            v-if="showTag"
            class="ml-1"
            :tags="posts_value.tags?.split(',')"
            :on-update:value="handleUpdateTags"
          />
        </div>
      </div>
      <v-md-editor
        class="z-10"
        v-model="posts_value.content"
        :mode="editor_mode"
        :left-toolbar="left_toolbar"
        :right-toolbar="right_toolbar"
        height="100%"
        @change="handleEditing"
      ></v-md-editor>
    </div>
    <div>
      <n-button class="float-right" size="small" type="error" @click="handleCancel">取消</n-button>
      <n-button class="float-right" size="small" @click="handleSubmit">{{
        data ? '更新' : '发布'
      }}</n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, PropType } from 'vue';
import { NInput, NButton } from 'naive-ui';
import DynamicTags from '@/components/commons/dynamic-tags/index.vue';
import Mention from '@/components/commons/mention/index.vue';
import { PostsFormItem, PostsItem } from '@/models/community';
import { onWarning } from '@/utils/messages';

const props = defineProps({
  data: {
    type: Object as PropType<PostsItem | null>,
    default: null,
  },
  showTitle: {
    type: Boolean,
    default: true,
  },
  showTag: {
    type: Boolean,
    default: true,
  },
  showMention: {
    type: Boolean,
    default: true,
  },
});
const emits = defineEmits(['onSubmit', 'onUpdate', 'onCancel']);

const editor_mode = ref('edit'); // or edit
const left_toolbar = ref('undo redo clear | emoji');
const right_toolbar = ref('sync-scroll preview');
const posts_value: PostsFormItem | null = reactive({
  title: props.data?.title ?? null,
  tags: props.data?.tags !== '' ? props.data?.tags : null,
  content:
    props.data?.content ??
    ':innocent: 在这里编辑正文~ (支持[Markdown](https://www.runoob.com/markdown/md-tutorial.html)语法，戳一下右上角的眼睛试试~)',
  mention: props.data?.mention ?? null,
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
  if (!posts_value.title) {
    onWarning('缺少标题');
    return false;
  }
  return true;
};
const handleSubmit = () => {
  if (handleValidate()) {
    if (props.data) {
      emits('onUpdate', { ...posts_value, identity: props.data.identity });
    } else {
      emits('onSubmit', posts_value);
    }
  }
};

const handleCancel = () => {
  emits('onCancel', true);
};
</script>

<style lang="scss" scoped></style>

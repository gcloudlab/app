<template>
  <div class="editor-bar mt-1 animate__animated animate__fadeIn faster">
    <div class="w-full mr-3">
      <div class="header-bar flex items-center">
        <n-input
          v-if="showTitle"
          class="flex-1"
          v-model:value="posts_value.title"
          :placeholder="
            mode === 'posts' ? '请输入标题，如果标题能够表达完整内容，则正文可以为空' : '在这里回复'
          "
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
      <div class="editor-layout h-64">
        <div v-if="reply" class="reply-info">
          <n-button-group class="z-10" size="tiny">
            <n-button type="primary" quaternary>
              {{ `@${reply}` }}
            </n-button>
            <n-button class="text-sm" tertiary @click="handleCancelReply"> 取消 </n-button>
          </n-button-group>
        </div>
        <v-md-editor
          class="z-10"
          v-model="posts_value.content"
          :mode="editor_mode"
          :toolbar="tool_bar"
          :left-toolbar="left_toolbar"
          :right-toolbar="right_toolbar"
          height="100%"
          @change="handleEditing"
        ></v-md-editor>
      </div>
    </div>
    <div>
      <n-button-group class="float-right z-10">
        <n-button v-if="mode === 'posts'" size="small" type="warning" @click="handleCancel">
          取消
        </n-button>
        <n-button size="small" type="primary" @click="handleSubmit">
          {{ data ? '更新' : mode === 'comment' ? '回复' : '发布' }}
        </n-button>
      </n-button-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, PropType, watch } from 'vue';
import { NInput, NButton, NButtonGroup } from 'naive-ui';
import DynamicTags from '@/components/commons/dynamic-tags/index.vue';
import Mention from '@/components/commons/mention/index.vue';
import { PostsFormItem, PostsItem } from '@/models/community';
import { onWarning } from '@/utils/messages';

const props = defineProps({
  mode: {
    type: String as PropType<'comment' | 'posts'>,
    default: 'posts',
  },
  reply: {
    type: String as PropType<String | null>,
    default: null,
  },
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
const emits = defineEmits([
  'onSubmit',
  'onUpdate',
  'onCancel',
  'onSubmitComment',
  'onUpdateComment',
  'onCancelReply',
]);

const editor_mode = ref('edit'); // or edit
const left_toolbar = ref('undo redo clear | emoji');
const right_toolbar = ref('preview sync-scroll ');
const tool_bar = ref({
  reply: { title: props.reply, icon: 'v-md-icon-tip' },
});
const placeholder =
  ':innocent: 在这里编辑正文~ (支持[Markdown](https://www.runoob.com/markdown/md-tutorial.html)语法，戳一下右上角的眼睛试试~)';
const posts_value: PostsFormItem | null = reactive({
  title: props.data?.title ?? null,
  tags: props.data?.tags !== '' ? props.data?.tags : null,
  content: props.data?.content ?? (props.mode === 'posts' ? placeholder : ''),
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
  if (props.mode === 'posts' && !posts_value.title && props.mode === 'posts') {
    onWarning('缺少标题');
    return false;
  }
  if (posts_value.content === '' && props.mode === 'comment') {
    onWarning('评论不能为空');
    return false;
  }
  if (posts_value.content === placeholder) {
    onWarning('试试编辑正文');
    return false;
  }

  return true;
};
const handleSubmit = () => {
  if (handleValidate()) {
    switch (props.mode) {
      case 'posts':
        if (props.data) {
          emits('onUpdate', { ...posts_value, identity: props.data.identity });
        } else {
          emits('onSubmit', posts_value);
        }
        break;
      case 'comment':
        if (props.data) {
          emits('onUpdateComment', { ...posts_value, identity: props.data.identity });
        } else {
          emits('onSubmitComment', posts_value);
        }
        posts_value.content = '';
        posts_value.title = null;
        posts_value.cover = null;
        posts_value.mention = null;
        posts_value.tags = null;
        break;
    }
  }
};

const handleCancel = () => {
  emits('onCancel', true);
};

const handleCancelReply = () => {
  emits('onCancelReply', true);
};
</script>

<style lang="scss" scoped>
.editor-layout {
  position: relative;
  .reply-info {
    position: absolute;
    left: 160px;
    top: 4%;
    transform: translateY(-4%);
  }
}
</style>

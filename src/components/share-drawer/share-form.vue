<template>
  <div class="share-form">
    <n-form ref="formRef" :model="model" :rules="rules" label-placement="left" label-width="auto">
      <n-form-item path="expired_time" label="有效期">
        <n-radio-group v-model:value="model.expired_time" name="expired_time">
          <n-radio v-for="item in expired_time_map" :value="item.value"> {{ item.label }} </n-radio>
        </n-radio-group>
      </n-form-item>
      <n-form-item path="desc" label="分享留言">
        <n-input
          v-model:value="model.desc"
          type="textarea"
          placeholder="请填写分享留言"
          @keydown.enter.prevent
        />
      </n-form-item>
    </n-form>
    <n-button class="float-right" size="small" type="primary" @click="handleValidate"
      >分享</n-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  NForm,
  NFormItem,
  NInput,
  NRadio,
  NRadioGroup,
  NButton,
  FormInst,
  FormItemRule,
  FormRules,
} from 'naive-ui';
import { onError } from '@/utils/messages';
import { CreateShareOption } from '@/models/share';
import { useShare } from '@/hooks/useShare';
import { expired_time_map } from '@/constants/expired_time';

const emits = defineEmits(['onSuccess']);
const props = defineProps({
  identity: {
    type: String,
    required: true,
  },
});

const { shareStore, onCreateShareRecord } = useShare();
const formRef = ref<FormInst | null>(null);

const model = ref<CreateShareOption>({
  desc: null,
  expired_time: null,
  user_repository_identity: props.identity || null,
});
const rules: FormRules = {
  desc: [
    {
      required: false,
      validator(rule: FormItemRule, value: string) {
        return true;
      },
      trigger: ['input', 'blur'],
    },
  ],
  expired_time: [
    {
      required: true,
      message: '请选择有效期',
    },
  ],
  user_repository_identity: [
    {
      required: true,
    },
  ],
};

const handleValidate = () => {
  formRef.value?.validate(errors => {
    if (!errors) {
      handleSubmit();
    } else {
      onError('信息不完整');
    }
  });
};

const handleSubmit = async () => {
  onCreateShareRecord(model.value).then(() => {
    if (shareStore.current_sharing_file_identity !== '') {
      emits('onSuccess', true);
      model.value.desc = null;
      model.value.expired_time = null;
      model.value.user_repository_identity = null;
    } else {
      emits('onSuccess', false);
    }
  });
};
</script>

<style lang="scss" scoped></style>

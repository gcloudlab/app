<template>
  <n-form
    class="mt-6"
    ref="formRef"
    :model="model"
    :show-label="false"
    :rules="rules"
    label-placement="left"
  >
    <n-form-item path="name" label="昵称">
      <n-input v-model:value="model.name" placeholder="请输入你的昵称" @keydown.enter.prevent />
    </n-form-item>
    <n-form-item v-if="signType === 'signup'" path="email" label="邮箱">
      <n-input
        v-model:value="model.email"
        @input="handlePasswordInput"
        placeholder="请输入邮箱"
        @keydown.enter.prevent
      />
    </n-form-item>
    <n-form-item v-if="signType === 'signup'" path="code" label="验证码">
      <n-input
        v-model:value="model.code"
        @input="handlePasswordInput"
        placeholder="请输入验证码"
        @keydown.enter.prevent
      />
      <n-button class="ml-3" type="default">发送验证码</n-button>
    </n-form-item>
    <n-form-item path="password" label="密码">
      <n-input
        v-model:value="model.password"
        type="password"
        @input="handlePasswordInput"
        placeholder="请输入密码"
        @keydown.enter.prevent
      />
    </n-form-item>
    <div class="flex justify-between">
      <button type="button" class="forms_buttons-forgot">
        {{ signType === 'signin' ? '忘记密码? 我也帮不了你' : '赶紧找个小本本把密码记住' }}
      </button>
      <n-button type="default" round class="w-20" @click="handleValidateButtonClick">
        {{ signType === 'signin' ? '登陆' : '注册' }}
      </n-button>
    </div>
  </n-form>
</template>

<script setup lang="ts">
import { PropType, ref, toRefs } from 'vue';
import {
  FormInst,
  FormItemInst,
  FormItemRule,
  FormRules,
  NInput,
  NFormItem,
  NButton,
  NCol,
  NRow,
  NForm,
} from 'naive-ui';

export interface ModelType {
  name: string | null;
  password: string | null;
  email: string | null;
  code: string | null;
}
export type SignType = 'signup' | 'signin';
export interface InfoCollectionProps {
  signType: SignType;
}

const props = defineProps({
  signType: {
    type: String as PropType<SignType>,
    required: true,
    default: 'signin',
  },
});

const formRef = ref<FormInst | null>(null);
const rPasswordFormItemRef = ref<FormItemInst | null>(null);

const model = ref<ModelType>({
  name: null,
  password: null,
  email: null,
  code: null,
});
const rules: FormRules = {
  name: [
    {
      required: true,
      trigger: ['input', 'blur'],
      validator(rule: FormItemRule, value: string) {
        if (value && value.length < 6) {
          return new Error('昵称长度至少6位');
        }
        return true;
      },
    },
  ],
  password: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (value && value.length < 6) {
          return new Error('密码长度至少6位');
        }
        return true;
      },
    },
  ],
  email: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (value && value.length < 6) {
          return new Error('请输入正确邮箱格式');
        }
        return true;
      },
    },
  ],
};

const handlePasswordInput = () => {
  if (model.value.email) {
    rPasswordFormItemRef.value?.validate({ trigger: 'password-input' });
  }
};
const handleValidateButtonClick = (e: MouseEvent) => {
  console.log(model.value);

  e.preventDefault();
  if (model.value.name && model.value.email && model.value.password && model.value.code) {
    formRef.value?.validate(errors => {
      if (!errors) {
        window.$message.success('验证成功');
      } else {
        // console.log(errors);
        window.$message.error('验证失败');
      }
    });
  } else {
    window.$message.error('请填写完整');
  }
};
toRefs(props);
</script>

<style lang="scss" scoped></style>

<template>
  <n-form class="mt-6" ref="formRef" :model="model" :rules="rules" label-placement="left">
    <n-form-item path="name" label="昵称">
      <n-input v-model:value="model.name" @keydown.enter.prevent />
    </n-form-item>
    <n-form-item path="password" label="密码">
      <n-input
        v-model:value="model.password"
        type="password"
        @input="handlePasswordInput"
        @keydown.enter.prevent
      />
    </n-form-item>

    <n-row :gutter="[0, 24]">
      <n-col :span="24">
        <div style="display: flex; justify-content: flex-end">
          <n-button
            :disabled="model.name === null"
            round
            type="primary"
            @click="handleValidateButtonClick"
          >
            验证
          </n-button>
        </div>
      </n-col>
    </n-row>
  </n-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
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

interface ModelType {
  name: string | null;
  password: string | null;
  reenteredPassword: string | null;
}

const formRef = ref<FormInst | null>(null);
const rPasswordFormItemRef = ref<FormItemInst | null>(null);

const model = ref<ModelType>({
  name: null,
  password: null,
  reenteredPassword: null,
});
const rules: FormRules = {
  name: [
    {
      required: true,
      message: '请输入昵称',
      trigger: ['input', 'blur'],
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
    },
  ],
};

const handlePasswordInput = () => {
  if (model.value.reenteredPassword) {
    rPasswordFormItemRef.value?.validate({ trigger: 'password-input' });
  }
};
const handleValidateButtonClick = (e: MouseEvent) => {
  e.preventDefault();
  formRef.value?.validate(errors => {
    if (!errors) {
      window.$message.success('验证成功');
    } else {
      console.log(errors);
      window.$message.error('验证失败');
    }
  });
};
</script>

<style lang="scss" scoped></style>

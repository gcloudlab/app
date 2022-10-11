<template>
  <n-form ref="formRef" :model="model" :show-label="false" :rules="rules" label-placement="left">
    <n-form-item v-if="signType === 'signup'" path="email" label="邮箱">
      <n-input v-model:value="model.email" placeholder="请输入邮箱" @keydown.enter.prevent />
    </n-form-item>
    <n-form-item v-if="signType === 'signup'" path="code" label="验证码">
      <n-input v-model:value="model.code" placeholder="请输入验证码" @keydown.enter.prevent />
      <n-button
        class="ml-2 w-24"
        type="primary"
        :disabled="codeLock !== 60"
        @click="handleSendCode"
      >
        <template v-if="codeLock === 60 && !isSendCode"> 获取验证码 </template>
        <template v-else-if="codeLock < 60 && !isSendCode">
          {{ `已发送 ${codeLock}s` }}
        </template>
        <Loading v-else size="small" />
      </n-button>
    </n-form-item>
    <n-form-item path="name" label="昵称">
      <n-input
        v-model:value="model.name"
        placeholder="请输入你的昵称"
        @keydown.enter.prevent
        @keyup.enter="handleValidate"
      />
    </n-form-item>
    <n-form-item path="password" label="密码">
      <n-input
        v-model:value="model.password"
        type="password"
        placeholder="请输入密码（不可修改）"
        @keydown.enter.prevent
        @keyup.enter="handleValidate"
      />
    </n-form-item>
    <div class="flex justify-between">
      <n-button quaternary type="default" class="forms_buttons-forgot" @click="handleTips">
        {{ signType === 'signin' ? '忘记密码? ' : '小贴士' }}
      </n-button>
      <n-button class="w-28" type="default" round @click="handleValidate">
        {{ signType === 'signin' ? '登陆' : '注册' }}
      </n-button>
    </div>
  </n-form>
</template>

<script setup lang="ts">
import { PropType, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { FormInst, FormRules, NInput, NFormItem, NButton, NForm } from 'naive-ui';
import { useAuth } from '@/hooks';
import { validateEmail } from '@/utils/email';
import Loading from '@/components/commons/loading/index.vue';
import { onWarning, onInfo, onError } from '@/utils/messages';
import { AuthRules } from '@/utils/rules';

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
const emits = defineEmits(['afterSignup']);

const router = useRouter();

const { authStore, onLogin, onRegister, onGetCode } = useAuth();

const formRef = ref<FormInst | null>(null);
const model = ref<ModelType>({
  name: authStore.user_auth?.name || null,
  password: null,
  email: null,
  code: null,
});
const codeLock = ref<number>(60);
const timer = ref();
const isSendCode = ref(false);

const rules: FormRules = AuthRules;

const handleValidate = () => {
  formRef.value?.validate(errors => {
    if (!errors) {
      handleSubmit();
    } else {
      onError('请正确填写');
    }
  });
};
const handleSubmit = async () => {
  if (props.signType === 'signin') {
    await handleSignin();
  } else if (props.signType === 'signup') {
    handleSignup();
  } else {
    onWarning('请填写完整');
  }
};
const handleSendCode = async () => {
  if (
    props.signType === 'signup' &&
    codeLock.value === 60 &&
    model.value.email &&
    validateEmail(model.value.email)
  ) {
    isSendCode.value = true;
    if (await onGetCode(model.value.email)) {
      timer.value = setInterval(() => {
        codeLock.value -= 1;
        if (codeLock.value <= 0) {
          clearInterval(timer.value);
          codeLock.value = 60;
          isSendCode.value = false;
        }
      }, 1000);
    }
  } else {
    isSendCode.value = false;
    onWarning('请填写有效邮箱');
  }
  isSendCode.value = false;
};
const handleSignin = async () => {
  if (model.value.name && model.value.password) {
    await onLogin({
      name: model.value.name,
      password: model.value.password,
    });
    if (authStore.user_status) {
      router.back();
    }
  }
};
const handleSignup = async () => {
  if (model.value.name && model.value.password && model.value.email && model.value.code) {
    const res = await onRegister({
      name: model.value.name,
      password: model.value.password,
      email: model.value.email,
      code: model.value.code,
    });

    if (res) {
      afterSignup();
    }
  }
};
const afterSignup = () => {
  emits('afterSignup', 'signin');
};
const handleTips = () => {
  if (props.signType === 'signin') {
    onWarning('哦豁，我也记不得');
  } else {
    onInfo('别忘记密码了嗷~');
  }
};
toRefs(props);
</script>

<style lang="scss" scoped></style>

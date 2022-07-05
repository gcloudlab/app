<template>
  <div class="auth bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
    <!-- <n-button @click="onLogout"> 退出登录 </n-button>
    <n-button @click="onGetCode('3224266014@qq.com')"> 获取验证码 </n-button>
    <n-button
      @click="
        onRegister({ name: 'wr', password: '123456', email: '3224266014@qq.com', code: '402738' })
      "
    >
      {{ token && refresh_token ? auth?.name : '点击注册' }}
    </n-button> -->

    <!-- <n-button class="w-32" @click="showModal = true">
      {{ token && refresh_token ? auth?.name : '点击登录' }}
    </n-button> -->

    <div class="auth_options-container">
      <div class="auth_options-text rounded-lg shadow-md">
        <div class="auth_options-unregistered">
          <h2 class="auth_unregistered-title">让我康康还有谁没注册😰</h2>
          <p class="auth_unregistered-text">
            Tips: 欢迎加入<strong>Web前端养老院</strong>👉982545311 ~
          </p>
          <n-button type="primary" round class="auth_unregistered-signup" @click="onChangeToSignup">
            去注册
          </n-button>
        </div>

        <div class="auth_options-registered">
          <h2 class="auth_registered-title">已有账号请移步登陆</h2>
          <p class="auth_registered-text">左拐不送。</p>
          <n-button type="primary" round class="auth_registered-login" @click="onChangeToSignin">
            去登陆
          </n-button>
        </div>
      </div>

      <div class="auth_options-forms rounded-lg" :class="{ ...formClass }" id="auth_options-forms">
        <div v-if="formStatus === 'signin'" class="auth_forms-login">
          <h1 class="text-2xl antialiased font-medium">登陆 GCloud 账号</h1>
          <InfoCollection signType="signin" />
        </div>
        <div v-else class="auth_forms-signup">
          <h1 class="text-2xl antialiased font-medium">注册 GCloud 账号</h1>
          <InfoCollection signType="signup" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthOutsideStore } from '../../store/modules/auth';
import { NButton } from 'naive-ui';
import InfoCollection from './InfoCollection.vue';
import { useAuth } from '../../hooks/';
import './index.scss';

export type FormStatus = 'signin' | 'signup';

const mainStore = useAuthOutsideStore();
const showModal = ref(false);
const formStatus = ref<FormStatus>('signin');
const formClass = ref();

let { onLogin, onLogout, onRegister, onGetCode } = useAuth();
const { token, refresh_token, auth } = storeToRefs(mainStore);

const onNegativeClick = () => {
  showModal.value = false;
};
const onPositiveClick = () => {
  onLogin({ name: 'hhh', password: '123456' });
  showModal.value = false;
};
const onChangeToSignin = () => {
  formStatus.value = 'signin';
  formClass.value = {
    bounceLeft: false,
    bounceRight: true,
  };
};
const onChangeToSignup = () => {
  formStatus.value = 'signup';
  formClass.value = {
    bounceLeft: true,
    bounceRight: false,
  };
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="user">
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

    <div class="user_options-container">
      <div class="user_options-text">
        <div class="user_options-unregistered">
          <h2 class="user_unregistered-title">Don't have an account?</h2>
          <p class="user_unregistered-text">
            Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art
            fap.
          </p>
          <button class="user_unregistered-signup" @click="onChangeToSignup" id="signup-button">
            Sign up
          </button>
        </div>

        <div class="user_options-registered">
          <h2 class="user_registered-title">Have an account?</h2>
          <p class="user_registered-text">
            Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art
            fap.
          </p>
          <button class="user_registered-login" @click="onChangeToSignin" id="login-button">
            Login
          </button>
        </div>
      </div>

      <div class="user_options-forms" :class="{ ...formClass }" id="user_options-forms">
        <div v-if="formStatus === 'signin'" class="user_forms-login">
          <h2 class="forms_title">Login</h2>
          <form class="forms_form">
            <!-- <fieldset class="forms_fieldset">
              <div class="forms_field">
                <input
                  type="email"
                  placeholder="Email"
                  class="forms_field-input"
                  required
                  autofocus
                />
              </div>
              <div class="forms_field">
                <input type="password" placeholder="Password" class="forms_field-input" required />
              </div>
            </fieldset> -->
            <InfoCollection />
            <div class="forms_buttons">
              <button type="button" class="forms_buttons-forgot">Forgot password?</button>
              <input type="submit" value="Log In" class="forms_buttons-action" />
            </div>
          </form>
        </div>
        <div v-else class="user_forms-signup">
          <h2 class="forms_title">Sign Up</h2>
          <form class="forms_form">
            <!-- <fieldset class="forms_fieldset">
              <div class="forms_field">
                <input type="text" placeholder="Full Name" class="forms_field-input" required />
              </div>
              <div class="forms_field">
                <input type="email" placeholder="Email" class="forms_field-input" required />
              </div>
              <div class="forms_field">
                <input type="password" placeholder="Password" class="forms_field-input" required />
              </div>
            </fieldset> -->
            <InfoCollection />
            <div class="forms_buttons">
              <input type="submit" value="Sign up" class="forms_buttons-action" />
            </div>
          </form>
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

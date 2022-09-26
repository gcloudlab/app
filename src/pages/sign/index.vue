<template>
  <div
    class="auth from-cyan-500 transition-all duration-300 ease-in-out"
    :class="[formStatus === 'signin' ? 'bg-gradient-to-r' : 'bg-gradient-to-l']"
  >
    <div class="auth_options-container">
      <div class="auth_options-text rounded-lg shadow-md">
        <div class="auth_options-unregistered">
          <h1 class="auth_unregistered-title font-black tracking-wide">GCloud 云盘</h1>
          <!-- <h2 class="leading-10">让我康康还有谁没注册😰</h2> -->
          <p class="auth_unregistered-text">GCloud是一款免费的、不限速的在线云盘.</p>
          <p class="auth_unregistered-text">它的优点有很多，比如这个那个还有内个...</p>
          <p class="auth_unregistered-text">
            tips: 欢迎加入<strong class="italic">Web前端养老院(QQ群)</strong>: 982545311.
          </p>

          <n-button type="warning" secondary round @click="router.back()">
            <template #icon>
              <n-icon><ArrowBackOutline /></n-icon>
            </template>
            返回
          </n-button>
          <n-button
            type="primary"
            round
            class="auth_unregistered-signup ml-3"
            @click="onChangeToSignup"
          >
            <template #icon>
              <n-icon><log-in-icon /></n-icon>
            </template>
            去注册
          </n-button>
        </div>

        <div class="auth_options-registered">
          <h1 class="auth_unregistered-title font-black tracking-wide">GCloud 云盘</h1>
          <p class="auth_registered-text">已有账号请移步登陆，左拐不送。</p>
          <n-button type="primary" round class="auth_registered-login" @click="onChangeToSignin">
            <template #icon>
              <n-icon><log-in-icon /></n-icon>
            </template>
            去登陆
          </n-button>
        </div>
      </div>

      <div
        id="auth_options-forms"
        class="auth_options-forms rounded-lg"
        style="height: 115%"
        :class="{ ...formClass }"
      >
        <div v-if="formStatus === 'signin'" class="auth_forms-login">
          <div class="flex justify-between">
            <h1 class="text-2xl antialiased font-mono font-extrabold">Sign In</h1>
            <Vue3Lottie class="mr-0 mt-2" :animation-data="SpaceJson" :height="50" :width="50" />
          </div>
          <InfoCollection sign-type="signin" />
        </div>
        <div v-else class="auth_forms-signup">
          <div class="flex justify-between">
            <h1 class="text-2xl antialiased font-mono font-extrabold">Sign Up</h1>
            <Vue3Lottie class="mr-0 mt-2" :animation-data="SpaceJson" :height="50" :width="50" />
          </div>
          <InfoCollection sign-type="signup" @afterSignup="onChangeToSignin" />
        </div>
        <div class="bg-board"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import InfoCollection from './info-collection.vue';
import { NButton, NIcon } from 'naive-ui';
import SpaceJson from '@/assets/lotties/space.json';
import './index.scss';
import { LogInOutline as LogInIcon, ArrowBackOutline } from '@vicons/ionicons5';

export type FormStatus = 'signin' | 'signup';

const router = useRouter();
const formStatus = ref<FormStatus>('signin');
const formClass = ref();

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

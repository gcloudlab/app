<template>
  <div class="auth bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
    <div class="auth_options-container">
      <div class="auth_options-text rounded-lg shadow-md">
        <div class="auth_options-unregistered">
          <h1 class="auth_unregistered-title font-black tracking-wide">GCloud 云盘</h1>
          <h2 class="leading-10">让我康康还有谁没注册😰</h2>
          <p class="auth_unregistered-text">
            tips: 欢迎加入<strong class="italic">Web前端养老院(QQ群)</strong>: 982545311.
          </p>
          <n-button type="primary" round class="auth_unregistered-signup" @click="onChangeToSignup">
            去注册
          </n-button>
          <n-button type="info" round class="ml-3" @click="router.back()">返回</n-button>
        </div>

        <div class="auth_options-registered">
          <h1 class="auth_unregistered-title font-black tracking-wide">GCloud 云盘</h1>
          <h2 class="leading-10">已有账号请移步登陆</h2>
          <p class="auth_registered-text">左拐不送。</p>
          <n-button type="primary" round class="auth_registered-login" @click="onChangeToSignin">
            去登陆
          </n-button>
        </div>
      </div>

      <div class="auth_options-forms rounded-lg" :class="{ ...formClass }" id="auth_options-forms">
        <div v-if="formStatus === 'signin'" class="auth_forms-login">
          <div class="flex justify-between">
            <h1 class="text-2xl antialiased font-medium">登陆</h1>
            <Vue3Lottie
              class="mr-0"
              style="margin-top: -10px"
              :animationData="SpaceJson"
              :height="50"
              :width="50"
            />
          </div>
          <InfoCollection signType="signin" />
        </div>
        <div v-else class="auth_forms-signup">
          <div class="flex justify-between">
            <h1 class="text-2xl antialiased font-medium">注册</h1>
            <Vue3Lottie
              class="mr-0"
              style="margin-top: -10px"
              :animationData="SpaceJson"
              :height="50"
              :width="50"
            />
          </div>
          <InfoCollection signType="signup" @afterSignup="onChangeToSignin" />
        </div>
        <div class="bg-board"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NButton } from 'naive-ui';
import InfoCollection from './info-collection.vue';
import './index.scss';

import SpaceJson from '@/assets/lotties/space.json';
import { useRouter } from 'vue-router';

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

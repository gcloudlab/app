<template>
  <div class="gcloud-auth">
    <!-- <n-button @click="onLogout"> 退出登录 </n-button>
    <n-button @click="onGetCode('3224266014@qq.com')"> 获取验证码 </n-button>
    <n-button
      @click="
        onRegister({ name: 'wr', password: '123456', email: '3224266014@qq.com', code: '402738' })
      "
    >
      {{ token && refresh_token ? auth?.name : '点击注册' }}
    </n-button> -->

    <n-button class="w-32" @click="showModal = true">
      {{ token && refresh_token ? auth?.name : '点击登录' }}
    </n-button>

    <n-modal
      v-model:show="showModal"
      :mask-closable="false"
      preset="card"
      title="登陆 GCloud"
      :style="{ width: '40vw' }"
      size="small"
      :bordered="false"
      positive-text="确认"
      negative-text="取消"
      @positive-click="onPositiveClick"
      @negative-click="onNegativeClick"
    >
      <InfoCollection />
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthOutsideStore } from '../../store/modules/auth';
import { NButton, NModal } from 'naive-ui';
import InfoCollection from './InfoCollection.vue';
import { useAuth } from '../../hooks/';

const mainStore = useAuthOutsideStore();
const showModal = ref(false);

let { onLogin, onLogout, onRegister, onGetCode } = useAuth();
const { token, refresh_token, auth } = storeToRefs(mainStore);

const onNegativeClick = () => {
  showModal.value = false;
};
const onPositiveClick = () => {
  onLogin({ name: 'hhh', password: '123456' });
  showModal.value = false;
};
</script>

<style lang="scss" scoped></style>

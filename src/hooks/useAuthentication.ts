import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthOutsideStore } from '@/store/modules/auth';
import type { UserLoginRequestProps, UserTokenType, UserRegisterRequestProps } from '@/models/auth';

const mainStore = useAuthOutsideStore();

export const useAuth = () => {
  let token = ref<UserTokenType>();
  let error = ref<Error | null>(null);

  const onLogin = async (loginInfo: UserLoginRequestProps | null) => {
    if (loginInfo) await mainStore.onLoginAction(loginInfo);
  };

  const onLogout = () => {
    mainStore.onLogoutAction();
  };

  const onRegister = (registerInfo: UserRegisterRequestProps | null) => {
    if (registerInfo) mainStore.onRegisterAction(registerInfo);
  };
  const onGetCode = async (email: string) => {
    if (email) return await mainStore.onMailCodeAction(email);
  };
  const onGetUserDetailAndCheckAuth = async () => {
    if (await mainStore.onGetUserDetailByTokenAction()) {
      return true;
    }
    return false;
  };

  return { token, onLogin, onLogout, onRegister, onGetCode, onGetUserDetailAndCheckAuth, error };
};

export const useToken = () => {
  const { token, refresh_token } = storeToRefs(mainStore);
  // const local_token = localStorage.getItem('token');
  return {
    token,
    refresh_token,
  };
};

import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthOutsideStore } from '@/store/modules/auth';
import { UserLoginRequestProps, UserTokenType, UserRegisterRequestProps } from '@/models/auth';

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

  const onRegister = async (registerInfo: UserRegisterRequestProps | null) => {
    if (registerInfo) await mainStore.onRegisterAction(registerInfo);
  };
  const onGetCode = (email: string) => {
    if (email) mainStore.onMailCodeAction(email);
  };

  return { token, onLogin, onLogout, onRegister, onGetCode, error };
};

export const useToken = () => {
  const { token, refresh_token } = storeToRefs(mainStore);
  // const local_token = localStorage.getItem('token');
  return {
    token,
    refresh_token,
  };
};

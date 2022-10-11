import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthOutsideStore } from '@/store/modules/auth';
import type {
  UserLoginRequestProps,
  UserTokenType,
  UserRegisterRequestProps,
  UpdateUserInfoOptions,
} from '@/models/auth';

const authStore = useAuthOutsideStore();

export const useAuth = () => {
  const token = ref<UserTokenType>();
  const error = ref<Error | null>(null);

  const onLogin = async (loginInfo: UserLoginRequestProps | null) => {
    if (loginInfo) {
      await authStore.onLoginAction(loginInfo);
    }
  };

  const onLogout = () => {
    authStore.onLogoutAction();
  };

  const onRegister = async (registerInfo: UserRegisterRequestProps | null) => {
    if (registerInfo) {
      return await authStore.onRegisterAction(registerInfo);
    }
    return false;
  };
  const onGetCode = async (email: string) => {
    if (email) {
      return await authStore.onMailCodeAction(email);
    }
  };
  const onGetUserDetailAndCheckAuth = async () => {
    return await authStore.onGetUserDetailByTokenAction();
  };
  const onChangeAvatar = (url: string) => {
    authStore.onChangeAvatarAction(url);
  };
  const onUpdateUserInfo = async (option: UpdateUserInfoOptions) => {
    await authStore.onUpdateUserInfoAction(option);
  };

  return {
    authStore,
    token,
    onLogin,
    onLogout,
    onRegister,
    onGetCode,
    onGetUserDetailAndCheckAuth,
    onChangeAvatar,
    onUpdateUserInfo,
    error,
  };
};

export const useToken = () => {
  const { token, refresh_token } = storeToRefs(authStore);
  // const local_token = localStorage.getItem('token');
  return {
    token,
    refresh_token,
  };
};

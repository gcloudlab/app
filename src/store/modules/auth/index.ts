import { defineStore } from 'pinia';
import piniaStore from '@/store';
import { userLoginService, userRegisterService, sendMailCodeService } from '@/service/api/auth';
import { UserLoginRequestProps, UserRegisterRequestProps, UserInfo } from '@/models/auth';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    auth: null as UserInfo | null,
    token: localStorage.getItem('token') || '',
    refresh_token: '',
    code: '',
  }),

  getters: {
    user_auth: state => state.auth,
    user_token: state => state.token,
    user_refresh_token: state => state.refresh_token,
  },
  actions: {
    async onLoginAction(loginInfo: UserLoginRequestProps) {
      try {
        let res = await userLoginService(loginInfo);
        if (res.status === 200) {
          this.token = res.data.token;
          this.refresh_token = res.data.refresh_token;
          this.auth = {
            name: loginInfo.name,
            password: loginInfo.password,
          };
        }
      } catch (error) {
        throw new Error('登录失败');
      }
    },
    onLogoutAction() {
      this.token = '';
      this.refresh_token = '';
      this.auth = null;
      localStorage.clear();
    },
    async onRegisterAction(registerInfo: UserRegisterRequestProps) {
      try {
        let res = await userRegisterService(registerInfo);
        if (res.status === 200) {
          this.auth = {
            name: registerInfo.name,
            password: registerInfo.password,
            email: registerInfo.email,
          };
        }
      } catch (error) {
        throw new Error('注册失败');
      }
    },
    async onMailCodeAction(email: string) {
      try {
        await sendMailCodeService(email);
      } catch (error) {
        throw new Error('邮箱验证码发送失败');
      }
    },
    // TODO userDeail
    // refresh_token
  },
});

export function useAuthOutsideStore() {
  return useAuthStore(piniaStore);
}

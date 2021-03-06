import { defineStore } from 'pinia';
import piniaStore from '@/store';
import {
  userLoginService,
  userRegisterService,
  sendMailCodeService,
  RefreshAuthService,
  getUserDetailByTokenService,
} from '@/service/api/auth';
import { UserLoginRequestProps, UserRegisterRequestProps, UserDetail } from '@/models/auth';
import { useStorage } from '@/utils/use-storage';
import { onError, onSuccess, onWarning, onInfo } from '@/utils/messages';

const initialState = {
  // auth: useStorage('user'),
  token: useStorage('token'),
  refresh_token: useStorage('refresh_token'),
};

export interface AuthState {
  auth?: UserDetail | null;
  token?: string | null;
  refresh_token?: string | null;
  code?: string;
  sign_status?: boolean;
  online_status?: boolean;
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: () =>
    ({
      auth: {
        avatar: 'https://avatars.githubusercontent.com/u/89140804?v=4',
      },
      token: initialState.token || '',
      refresh_token: initialState.refresh_token || '',
      code: '',
      sign_status: false,
      online_status: false,
    } as AuthState),
  getters: {
    user_auth: state => state.auth,
    user_token: state => state.token,
    user_refresh_token: state => state.refresh_token,
    user_status: state => state.sign_status,
    user_online: state => state.online_status,
  },
  actions: {
    async onLoginAction(loginInfo: UserLoginRequestProps) {
      try {
        let res = await userLoginService(loginInfo);
        if (res.status === 200 && res.data.msg === '用户登录成功') {
          this.token = res.data.token;
          this.refresh_token = res.data.refresh_token;
          await this.onGetUserDetailByTokenAction();
          useStorage('refresh_token', this.refresh_token);
        } else if (res.data.msg === '用户名或密码错误') {
          this.sign_status = false;
          onError('不要让我知道你忘记密码了');
        }
      } catch (error) {
        this.sign_status = false;
        onError();
      }
    },
    onLogoutAction() {
      delete this.token;
      delete this.refresh_token;
      delete this.auth;
      this.sign_status = false;
      this.online_status = false;
      localStorage.clear();
    },
    onRegisterAction(registerInfo: UserRegisterRequestProps) {
      try {
        userRegisterService(registerInfo).then(async res => {
          if (res.data.msg === '注册成功') {
            this.auth = {
              ...this.auth,
              name: registerInfo.name,
              email: registerInfo.email,
            };
            onSuccess('注册成功');
          } else if (res.data.msg === '无效验证码') {
            onError('无效验证码');
          } else if (res.data.msg === '验证码错误') {
            onError('验证码错误');
          } else if (res.data.msg === '用户名已存在') {
            onError('用户名已存在');
          }
        });
      } catch (error) {
        onError('出错了，再试一次');
      }
    },
    async onMailCodeAction(email: string) {
      try {
        const res = await sendMailCodeService(email);
        if (res.data.msg === 'registered') {
          onError('邮箱已注册');
          return false;
        } else {
          onInfo('请注意查收邮箱');
          return true;
        }
      } catch (error) {
        this.sign_status = false;
        onError('获取验证码失败');
      }
    },
    async onRefreshTokenAction() {
      await RefreshAuthService();
    },
    async onGetUserDetailByTokenAction() {
      try {
        const res = await getUserDetailByTokenService();
        if (res.data.msg === 'success') {
          this.auth = {
            ...this.auth,
            name: res.data.name,
            email: res.data.email,
            identity: res.data.identity,
            // avatar: res.data.avatar,
          };
          this.sign_status = true;
          this.online_status = true;
          return true;
        } else if (res.data.msg === 'not found') {
          onWarning('找不到用户');
          localStorage.removeItem('token');
          localStorage.removeItem('sign_status');
          this.sign_status = false;
          this.online_status = false;
        }
        return false;
      } catch (error) {
        localStorage.removeItem('sign_status');
        this.sign_status = false;
        this.online_status = false;
        // onWarning('请重新登陆');
        // onError('出错了');
      }
    },
  },
});

export function useAuthOutsideStore() {
  return useAuthStore(piniaStore);
}

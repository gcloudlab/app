import { defineStore } from 'pinia';
import piniaStore from '@/store';
import { userLoginService, userRegisterService, sendMailCodeService } from '@/service/api/auth';
import { UserLoginRequestProps, UserRegisterRequestProps, UserInfo } from '@/models/auth';
import { useStorage } from '@/utils/useStorage';

const userStorage = useStorage('user');
const token = useStorage('token');
const refresh_token = useStorage('refresh_token');

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    auth: userStorage || null,
    token: token || '',
    refresh_token: refresh_token || '',
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
            email: res.data.email,
          };
          useStorage('user', this.auth);
          useStorage('refresh_token', this.refresh_token);
        }
      } catch (error) {
        window.$message.error('出错了，不要让我知道你忘记密码了');
      }
    },
    onLogoutAction() {
      this.token = '';
      this.refresh_token = '';
      this.auth = null;
      localStorage.clear();
    },
    onRegisterAction(registerInfo: UserRegisterRequestProps) {
      try {
        userRegisterService(registerInfo).then(async res => {
          if (res.data.msg === '注册成功') {
            this.auth = {
              name: registerInfo.name,
              email: registerInfo.email,
            };
            useStorage('user', this.auth);
            window.$message.success('注册成功, 请登录');
          } else if (res.data.msg === '无效验证码') {
            window.$message.error('无效验证码');
          } else if (res.data.msg === '验证码错误') {
            window.$message.error('验证码错误');
          } else if (res.data.msg === '用户名已存在') {
            window.$message.error('用户名已存在');
          }
        });
      } catch (error) {
        window.$message.error('出错了，再试一次');
      }
    },
    async onMailCodeAction(email: string) {
      try {
        const res = await sendMailCodeService(email);
        if (res.data.msg === 'registered') {
          window.$message.error('邮箱已注册');
          return false;
        } else {
          window.$message.success('发送成功, 请注意查收邮箱');
          return true;
        }
      } catch (error) {
        window.$message.error('获取验证码失败');
      }
    },
    // TODO userDeail
    // refresh_token
  },
});

export function useAuthOutsideStore() {
  return useAuthStore(piniaStore);
}

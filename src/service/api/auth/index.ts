//login.ts
import axios from '@/service/axios';
import {
  UserLoginResponse,
  UserLoginRequestProps,
  UserRegisterRequestProps,
  UserRegisterResponse,
} from '@/models/auth';

/**
 * @description: 用户登录案例
 * @params {ILogin} params
 * @return {Promise}
 */
export const userLoginService = async (
  params: UserLoginRequestProps
): Promise<UserLoginResponse> => {
  return await axios.post('/user/login', params);
};

export const userRegisterService = async (
  params: UserRegisterRequestProps
): Promise<UserRegisterResponse> => {
  return await axios.post('/user/register', params);
};

export const sendMailCodeService = async (email: string): Promise<any> => {
  return await axios.post('/mail/code/send/register', { email });
};

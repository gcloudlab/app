//login.ts
import axios from '@/service/axios';
import {
  UserLoginResponse,
  UserLoginRequestProps,
  UserRegisterRequestProps,
  UserRegisterResponse,
  RefreshAuthResponse,
  UserDetailResponse,
} from '@/models/auth';

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

export const RefreshAuthService = async (): Promise<RefreshAuthResponse> => {
  return await axios.post('/refresh/authorization');
};

export const getUserDetailByTokenService = async (): Promise<UserDetailResponse> => {
  return await axios.get('/user/detail');
};

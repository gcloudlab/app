import axios from '@/service/axios';
import {
  UserLoginResponse,
  UserLoginRequestProps,
  UserRegisterRequestProps,
  UserRegisterResponse,
  RefreshAuthResponse,
  UserDetailResponse,
  UpdateUserInfoOptions,
  SendMailCodeResponse,
} from '@/models/auth';
import { CustomResponse } from '@/models';

export const userLoginService = async (
  params: UserLoginRequestProps
): Promise<CustomResponse<UserLoginResponse>> => {
  return await axios.post('/user/login', params);
};

export const userRegisterService = async (
  params: UserRegisterRequestProps
): Promise<CustomResponse<UserRegisterResponse>> => {
  return await axios.post('/user/register', params);
};

export const sendMailCodeService = async (
  email: string
): Promise<CustomResponse<SendMailCodeResponse>> => {
  return await axios.post('/mail/code/send/register', { email });
};

export const refreshAuthService = async (): Promise<CustomResponse<RefreshAuthResponse>> => {
  return await axios.post('/refresh/authorization');
};

export const getUserDetailByTokenService = async (): Promise<
  CustomResponse<UserDetailResponse>
> => {
  return await axios.get('/user/detail');
};

export const getUserDetailById = async (
  id: string
): Promise<CustomResponse<UserDetailResponse>> => {
  return await axios.post('/user/name', { identity: id });
};

export const updateUserInfo = async (option: UpdateUserInfoOptions) => {
  return await axios.post('/user/update', option);
};

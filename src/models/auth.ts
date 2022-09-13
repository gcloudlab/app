export type UserTokenType = string;

export interface UserLoginResponse {
  msg: string;
  token: UserTokenType;
  refresh_token: UserTokenType;
}

export interface UserRegisterResponse {
  msg: string;
}

export interface UserLoginRequestProps {
  name: string;
  password: string;
}

export interface UserDetailResponse {
  name: string;
  identity?: string;
  email?: string;
  avatar?: string;
  capacity: number;
  msg?: string;
  created_at?: string;
}

export interface UserDetail {
  name: string;
  identity?: string;
  email?: string;
  avatar?: string;
  created_at?: string;
  registration_days?: number;
  capacity?: number;
}

export interface UserRegisterRequestProps {
  name: string;
  email?: string;
  code?: string;
  password?: string;
}

export interface RefreshAuthResponse {
  msg: string;
  token: UserTokenType;
  refresh_token: UserTokenType;
}

export interface UpdateUserInfoOptions {
  // identity: string;
  avatar?: string;
  name?: string;
  email?: string;
  password?: string;
}

export interface SendMailCodeResponse {
  msg?: string;
  code?: string;
}

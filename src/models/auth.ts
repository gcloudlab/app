export type UserTokenType = string;

export interface UserLoginResponse {
  data: {
    msg: string;
    token: UserTokenType;
    refresh_token: UserTokenType;
  };
  status: number;
}

export interface UserRegisterResponse {
  data: {
    msg: string;
  };
  status: number;
}

export interface UserLoginRequestProps {
  name: string;
  password: string;
}

export interface UserDetailResponse {
  data: {
    name: string;
    identity?: string;
    email?: string;
    avatar?: string;
    msg?: string;
    created_at?: string;
  };
  status: number;
}

export interface UserDetail {
  name: string;
  identity?: string;
  email?: string;
  avatar?: string;
  created_at?: string;
  registration_days?: number;
}

export interface UserRegisterRequestProps {
  name: string;
  email?: string;
  code?: string;
  password?: string;
}

export interface RefreshAuthResponse {
  data: {
    msg: string;
    token: UserTokenType;
    refresh_token: UserTokenType;
  };
  status: number;
}

export interface UpdateUserInfoOptions {
  // identity: string;
  avatar?: string;
  name?: string;
  email?: string;
  password?: string;
}

export type UserTokenType = string;

export interface UserLoginResponse {
  data: {
    token: UserTokenType;
    refresh_token: UserTokenType;
  };
  status: number;
}

export interface UserLoginRequestProps {
  name: string;
  password: string;
}

export interface UserInfo {
  name: string;
  email?: string;
  password?: string;
  avatar?: string;
}

export interface UserRegisterRequestProps {
  name: string;
  email?: string;
  code?: string;
  password?: string;
}

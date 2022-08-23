export interface ShareDetailItem {
  repository_identity: string;
  name: string;
  ext: string;
  size: number;
  path: string;
  click_num: number;
  msg?: string;
  code?: number;
}

export interface CreateShareOption {
  user_repository_identity: string;
  expired_time: number;
}
export interface CreateShareResponse {
  identity: string;
  msg?: string;
  code?: number;
}

export interface SaveShareOption {
  repository_identity: string;
  parent_id: number;
}
export interface SaveShareResponse extends CreateShareResponse {}

export interface ShareListResponse {
  list: ShareDetailItem[];
  msg: string;
  code: number;
}
export interface ShareDetailItem {
  repository_identity: string;
  identity: string;
  name: string;
  ext: string;
  size: number;
  path: string;
  click_num: number;
  expired_time: number;
  desc: string;
  avatar: string;
  owner: string;
  updated_at: string;
  msg?: string;
  code?: number;
}

export interface CreateShareOption {
  user_repository_identity: string | null;
  desc: string | null;
  expired_time: number | null;
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
export type SaveShareResponse = CreateShareResponse;

export interface ShareDetailItem {
  repository_identity: string;
  name: string;
  ext: string;
  size: number;
  path: string;
  click_num: number;
  desc: string;
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

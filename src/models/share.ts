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

export interface ShareDetailResponse {
  data: ShareDetailItem;
}

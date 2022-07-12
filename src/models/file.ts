export interface FileListResponseData {
  id: number;
  parent_id: number;
  identity: string;
  repository_identity?: string;
  name: string;
  path?: string;
  size: number;
  ext?: string;
}

export interface FileListResponse {
  data: {
    count: number;
    list: FileListResponseData[];
  };
  status: number;
}

export interface FileListData extends FileListResponseData {
  files?: FileListResponseData[];
  count?: number;
}

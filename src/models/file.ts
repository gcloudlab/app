export interface FileListResponseData {
  id: number;
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

export interface FileListData {
  id: number;
  identity: string;
  name: string;
  files?: FileListResponseData[];
  file_count: number;
}

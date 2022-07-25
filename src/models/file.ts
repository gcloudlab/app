export interface FileListResponseData {
  id: number;
  parent_id: number;
  identity?: string;
  repository_identity?: string;
  name: string;
  path?: string;
  size: number;
  ext?: string;
  type?: string;
  updated_at?: string;
}

export interface FileListResponse {
  data: {
    count: number;
    list: FileListResponseData[];
  };
  status: number;
}

export interface FileListData extends FileListResponseData {
  children?: FileListResponseData[];
  isFolder?: boolean;
}

export interface SaveFileToUserRepoOption {
  repositoryIdentity: string;
  parentId: number;
  ext: string;
  name: string;
}

export interface FileListResponseData {
  id: number;
  parent_id: number;
  identity: string;
  repository_identity?: string;
  name: string;
  path?: string;
  size: number;
  ext?: string;
  type?: string;
  updated_at?: string;
}

export interface FileListResponse {
  count: number;
  list: FileListResponseData[];
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

export interface CreateFolderOption {
  parent_id: number;
  name: string;
}
export interface UpdateFileNameOption {
  identity: string;
  name: string;
}

export interface MoveFolderOption {
  identity: string;
  parent_identity: string;
  file: FileListData;
}

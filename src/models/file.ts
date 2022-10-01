import { Component } from 'vue';

export interface FileListResponseData {
  id: number;
  parent_id: number;
  identity: string;
  repository_identity?: string;
  name: string;
  path?: string;
  size: number;
  ext?: string;
  updated_at?: string;
  deleted_at?: string;
  owner?: string;
}

export interface FileListResponse {
  count: number;
  list: FileListResponseData[];
  deleted_list: FileListResponseData[];
}

export interface FileListData extends FileListResponseData {
  children?: FileListData[];
  isFolder?: boolean;
  type?: string;
  icon?: FileIconType | string;
  target?: UploadTargetType;
}
export type FileIconType = {
  style: string;
  icon: Component;
};

export type UploadTargetType = 'private' | 'public';
export interface SaveFileToRepoOption {
  repositoryIdentity: string;
  parentId: number;
  ext: string;
  name: string;
  target: UploadTargetType;
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

import axios from '@/service/axios';
import {
  CreateFolderOption,
  FileListResponse,
  MoveFolderOption,
  SaveFileToUserRepoOption,
  UpdateFileNameOption,
} from '@/models/file';

export const getFileList = async (): Promise<FileListResponse> => {
  return await axios.get('/user/file/list');
};

export const uploadFile = async (options: any): Promise<SaveFileToUserRepoOption> => {
  return await axios.post('/file/upload', options);
};
export const saveFileToUserRepo = async (option: SaveFileToUserRepoOption) => {
  return await axios.post('/user/repository/save', option);
};
export const createFolder = async (option: CreateFolderOption) => {
  return await axios.post('/user/folder/create', option);
};
export const deleteFile = async (fileId: string) => {
  return await axios.delete(`/user/file/delete`, { data: { identity: fileId } });
};
export const updateFileName = async (option: UpdateFileNameOption) => {
  return await axios.post('/user/file/name/update', option);
};
export const moveFolder = async (option: MoveFolderOption) => {
  return await axios.put('/user/file/move', option);
};

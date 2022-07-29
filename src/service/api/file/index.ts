import axios from '@/service/axios';
import { CreateFolderOption, FileListResponse, SaveFileToUserRepoOption } from '@/models/file';

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

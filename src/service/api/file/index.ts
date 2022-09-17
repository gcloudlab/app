import axios from '@/service/axios';
import {
  CreateFolderOption,
  FileListResponse,
  MoveFolderOption,
  SaveFileToRepoOption,
  UpdateFileNameOption,
} from '@/models/file';
import { CustomResponse } from '@/models';
import _ from 'lodash';
import { UploadTargetType } from '@/models/file';

export const getFileList = async (
  target: UploadTargetType
): Promise<CustomResponse<FileListResponse>> => {
  const path = target === 'public' ? '/public/file/list' : '/user/file/list';
  return await axios.get(path);
};

export const uploadFile = async (options: any): Promise<SaveFileToRepoOption> => {
  return await axios.post('/file/upload', options);
};
export const saveFileToRepo = async (option: SaveFileToRepoOption) => {
  const path = option.target === 'public' ? '/public/file/save' : '/user/repository/save';
  return await axios.post(path, _.omit(option, 'target'));
};
export const createFolder = async (option: CreateFolderOption, target: UploadTargetType) => {
  const path = target === 'public' ? '/public/folder/create' : '/user/folder/create';
  return await axios.post(path, option);
};
export const deleteFile = async (fileId: string, target: UploadTargetType) => {
  const path = target === 'public' ? '/public/file/delete' : '/user/file/delete';
  return await axios.delete(path, {
    data: { identity: fileId },
  });
};
export const updateFileName = async (option: UpdateFileNameOption, target: UploadTargetType) => {
  const path = target === 'public' ? '/public/file/name/update' : '/user/file/name/update';
  return await axios.post(path, option);
};
export const moveFolder = async (option: MoveFolderOption, target: UploadTargetType) => {
  const path = target === 'public' ? '/public/file/move' : '/user/file/move';
  return await axios.put(path, option);
};

import axios from '@/service/axios';
import { FileListResponse, FileListResponseData } from '@/models/file';

export const getFileList = async (): Promise<FileListResponse> => {
  return await axios.get('/user/file/list');
};

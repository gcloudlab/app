import { defineStore } from 'pinia';
import piniaStore from '@/store';
import { getFileList } from '@/service/api/file';
import type { FileListData, FileListResponseData } from '@/models/file';
import transformFileList from '@/utils/transform-file-list';

export interface FileState {
  files_count: number;
  user_files: FileListData[];
}

export const useFileStore = defineStore({
  id: 'file',
  state: () =>
    ({
      files_count: 0,
      user_files: [],
    } as FileState),
  getters: {
    get_files_count: state =>
      state.user_files.map(folder => folder.file_count).reduce((a, b) => a + b, 0),
    get_user_files: state => state.user_files,
  },
  actions: {
    async onGetFileListAction() {
      try {
        let res = await getFileList();
        if (res.status === 200) {
          this.files_count = res.data.count;
          this.user_files = transformFileList(res.data.list);
        }
      } catch (error) {
        window.$message.error('出错了');
      }
    },
  },
});

export function useFileOutsideStore() {
  return useFileStore(piniaStore);
}

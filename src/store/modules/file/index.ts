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
    get_files_count: state => state.files_count,
    get_user_files: state => state.user_files,
  },
  actions: {
    async onGetFileListAction() {
      try {
        let res = await getFileList();
        if (res.status === 200) {
          this.user_files = transformFileList(res.data.list);
          this.files_count = this.user_files.reduce((prev, cur) => {
            if (cur.files) return prev + cur.files?.length || 0;
            return prev + 1;
          }, 0);
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

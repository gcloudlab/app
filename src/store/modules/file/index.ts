import { defineStore } from 'pinia';
import piniaStore from '@/store';
import { getFileList } from '@/service/api/file';
import type { FileListData, FileListResponseData } from '@/models/file';
import generateTree from '@/utils/transform-file-list';

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
          this.user_files = generateTree(res.data.list, 0);
          this.files_count = this.user_files.reduce((prev, cur) => {
            if (cur.children && cur.children.length !== 0) return prev + cur.children.length;
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

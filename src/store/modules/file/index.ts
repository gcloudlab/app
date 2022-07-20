import { defineStore } from 'pinia';
import piniaStore from '@/store';
import { getFileList } from '@/service/api/file';
import type { FileListData } from '@/models/file';
import generateTree from '@/utils/transform-file-list';
import { onError } from '@/utils/messages';

export interface FileState {
  files_count: number;
  user_files: FileListData[];
  files_size: number;
  folder_routes: FileListData[];
}

export const useFileStore = defineStore({
  id: 'file',
  state: () =>
    ({
      files_count: -1,
      user_files: [],
      files_size: -1,
      folder_routes: [{ id: -1, name: '主页', size: -1, parent_id: 0 }],
    } as FileState),
  getters: {
    get_files_count: state => state.files_count,
    get_user_files: state => state.user_files,
    get_user_files_size: state => state.files_size,
    get_folder_routes: state => state.folder_routes,
  },
  actions: {
    async onGetFileListAction() {
      try {
        let res = await getFileList();
        if (res.status === 200) {
          this.user_files = generateTree(res.data.list, 0);
          console.log('--store-all files', this.user_files);
          this.files_count = this.user_files.reduce((prev, cur) => {
            if (cur.children && cur.children.length !== 0) return prev + cur.children.length;
            return prev + 1;
          }, 0);
          this.files_size = res.data.list.reduce((prev, cur) => {
            if (cur && cur.size !== 0) return prev + cur.size;
            return prev + 1;
          }, 0);

          // console.log(this.user_files, this.files_size);
        }
      } catch (error) {
        onError();
      }
    },
    onAddToFolderRoutesAction(payload: FileListData) {
      if (this.folder_routes.find(item => item.id === payload.id)) return;
      else if (this.folder_routes[this.folder_routes.length - 1]?.id === payload.parent_id) {
        this.folder_routes.push(payload);
      } else {
        this.folder_routes = [{ id: -1, name: '主页', size: -1, parent_id: 0 }, payload];
      }
    },
    onRemoveFromFolderRoutesAction(payload?: FileListData) {
      if (payload && this.folder_routes.find(item => item.id === payload.id)) {
        this.folder_routes = this.folder_routes.filter(item => item.identity !== payload?.identity);
      } else if (!payload && this.folder_routes.length > 1) {
        this.folder_routes = this.folder_routes.slice(0, this.folder_routes.length - 1);
      }
    },
    onJumpToFolderAction(payload: FileListData) {
      this.folder_routes.map((folder, index) => {
        if (folder.id === payload.id) {
          this.folder_routes = this.folder_routes.slice(0, index + 1);
        }
      });
    },
    onJumpToFileAction(payload: FileListData) {
      if (!payload?.isFolder && payload) {
        let parent_id = payload.parent_id;
        if (parent_id === 0) {
          this.folder_routes = [
            { id: -1, name: '主页', size: -1, parent_id: 0 },
            this.user_files[this.user_files.length - 1],
          ];
          return;
        }
        let parentFolders = findParents(this.user_files, parent_id);
        if (parentFolders && parentFolders.length > 0) {
          this.folder_routes = [{ id: -1, name: '主页', size: -1, parent_id: 0 }, ...parentFolders];
        }
      }
    },
  },
});

function findParents(treeData: FileListData[], id: number) {
  let allparents: FileListData[] = [];
  if (treeData.length == 0) {
    return;
  }

  let findele = (data: FileListData[], id: number) => {
    if (!id) return;
    data.forEach(item => {
      if (item.id == id) {
        allparents.unshift(item);
        findele(treeData, item.parent_id);
      } else {
        if (!!item.children) {
          findele(item.children, id);
        }
      }
    });
  };
  findele(treeData, id);
  return allparents;
}

export function useFileOutsideStore() {
  return useFileStore(piniaStore);
}

import { defineStore } from 'pinia';
import piniaStore from '@/store';
import {
  createFolder,
  deleteFile,
  getFileList,
  moveFolder,
  updateFileName,
  uploadFile,
} from '@/service/api/file';
import type {
  CreateFolderOption,
  FileListData,
  MoveFolderOption,
  SaveFileToUserRepoOption,
  UpdateFileNameOption,
} from '@/models/file';
import generateTree, { transformOriginFileList } from '@/utils/transform-file-list';
import { onError, onWarning } from '@/utils/messages';
import type { UploadFileInfo } from 'naive-ui';
import { saveFileToUserRepo } from '@/service/api/file';
import useTimer from '@/hooks/useTimer';
import { onInfo } from '../../../utils/messages';

export interface FileState {
  files_count: number;
  user_files: FileListData[];
  files_size: number;
  folder_routes: FileListData[];
  upload_files: UploadFileInfo[];
  origin_folders: {
    label: string;
    value: number;
  }[];
  fetching: boolean;
}

export const useFileStore = defineStore({
  id: 'file',
  state: () =>
    ({
      files_count: -1,
      user_files: [],
      files_size: -1,
      folder_routes: [{ id: -1, name: '主菜单', size: -1, parent_id: 0, identity: 'root' }],
      upload_files: [],
      origin_folders: [],
      fetching: false,
    } as FileState),
  getters: {
    get_files_count: state => state.files_count,
    get_user_files: state => state.user_files,
    get_user_files_size: state => state.files_size,
    get_folder_routes: state => state.folder_routes,
    get_upload_files: state => state.upload_files,
    get_uploading_files_count: state => state.upload_files.length,
    get_origin_folders: state => state.origin_folders,
  },
  actions: {
    async onGetFileListAction() {
      try {
        this.fetching = true;
        let res = await getFileList();
        if (res.status === 200) {
          this.origin_folders = generateTree(transformOriginFileList(res.data.list), 0);
          this.user_files = generateTree(res.data.list, 0);
          // console.log('--store-all files', this.origin_folders, this.user_files);
          this.files_count = this.user_files.reduce((prev, cur) => {
            if (cur.children && cur.children.length !== 0) return prev + cur.children.length;
            return prev + 1;
          }, 0);
          this.files_size = res.data.list.reduce((prev, cur) => {
            if (cur && cur.size !== 0) return prev + cur.size;
            return prev + 1;
          }, 0);
          this.fetching = false;
        }
      } catch (error) {
        useTimer(() => {
          this.fetching = false;
          this.files_count = 0;
        }, 3);
      }
    },
    onAddToFolderRoutesAction(payload: FileListData) {
      if (this.folder_routes.find(item => item.id === payload.id)) return;
      else if (this.folder_routes[this.folder_routes.length - 1]?.id === payload.parent_id) {
        this.folder_routes.push(payload);
      } else {
        this.folder_routes = [
          { id: -1, name: '主菜单', size: -1, parent_id: 0, identity: 'root' },
          payload,
        ];
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
            { id: -1, name: '主菜单', size: -1, parent_id: 0, identity: 'root' },
            this.user_files[this.user_files.length - 1],
          ];
          return;
        }
        let parentFolders = findParents(this.user_files, parent_id);
        if (parentFolders && parentFolders.length > 0) {
          this.folder_routes = [
            { id: -1, name: '主菜单', size: -1, parent_id: 0, identity: 'root' },
            ...parentFolders,
          ];
        }
      }
    },
    onAddUploadFilesAction(payload: UploadFileInfo) {
      // 如果在，则改变状态
      if (this.upload_files.find(i => i.name === payload.name)) {
        this.upload_files.map(i => {
          if (i.name === payload.name) {
            i.status = payload.status;
          }
        });
        return;
      }
      if (payload.status === 'removed') {
        this.upload_files = this.upload_files.filter(i => i.status !== 'removed');
        return;
      } else {
        this.upload_files.push(payload);
      }
    },
    onRemoveUploadFileAction(payload?: UploadFileInfo | SaveFileToUserRepoOption) {
      if (payload) {
        this.upload_files = this.upload_files.filter(i => i.name !== payload.name);
      } else {
        this.upload_files = [];
      }
    },
    // useless
    async onUploadFileAction(payload: File) {
      try {
        await uploadFile(payload);
      } catch (err) {
        console.log(err);
      }
    },
    async onUploadFilesToUserAction(payload: SaveFileToUserRepoOption) {
      if (this.files_size >= 1024 * 1024 * 200) {
        onWarning('嘿，你的空间不够了');
        return;
      }
      try {
        const res = await saveFileToUserRepo(payload);
        if (res.data.msg === 'success') {
          this.onRemoveUploadFileAction(payload);
          this.onGetFileListAction().then(() => {
            this.onJumpToFileAction({
              parent_id: payload.parentId,
              id: -1,
              identity: payload.repositoryIdentity,
              name: payload.name,
              size: 0,
            });
          });
        } else if (res.data.msg === 'exist') {
          onError('已存在同名文件');
          this.upload_files.map(i => {
            if (i.name === payload.name) {
              i.status = 'error';
            }
          });
          // this.onRemoveUploadFileAction(payload);
        }
      } catch (e) {
        onError('上传失败，请重试');
      }
    },
    async onCreateFolderAction(payload: CreateFolderOption) {
      try {
        const res = await createFolder(payload);
        if (res.data.msg === 'success') {
          await this.onGetFileListAction();
        } else if (res.data.msg === '文件名已存在') {
          onWarning('文件夹已存在');
        }
      } catch (e) {
        onError('创建失败，请重试');
      }
    },
    async onUpdateFileNameAction(payload: UpdateFileNameOption) {
      try {
        const res = await updateFileName(payload);
        if (res.data.msg === 'success') {
          await this.onGetFileListAction();
        } else {
          onWarning(res.data.msg);
        }
      } catch (error) {
        onError('请重试');
      }
    },
    async onDeleteFileAction(files: FileListData[]) {
      Promise.allSettled(files.map(file => (file !== null ? deleteFile(file.identity) : null)))
        .then(res => {
          if (res.find(i => (i as any).value?.data?.msg === 'success')) {
            this.onGetFileListAction().then(() => {
              files.map(file => {
                file && this.onJumpToFileAction(file);
              });
            });
          } else {
            onWarning('删除失败');
          }
        })
        .catch(() => {
          onError(`出错了`);
        });
    },
    async onMoveFoderAction(payload: MoveFolderOption) {
      try {
        const res = await moveFolder(payload);
        if (res.data.msg === 'success') {
        } else {
          onWarning(res.data.msg);
        }
      } catch (error) {
        onError('出错了');
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

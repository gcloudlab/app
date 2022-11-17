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
  SaveFileToRepoOption,
  UpdateFileNameOption,
  UploadTargetType,
} from '@/models/file';
import generateTree from '@/utils/transform-file-list';
import { onError, onWarning, onSuccess } from '@/utils/messages';
import type { UploadFileInfo } from 'naive-ui';
import { saveFileToRepo } from '@/service/api/file';
import useTimer from '@/hooks/useTimer';

export interface FileState {
  files_count: number;
  public_count: number;
  user_files: FileListData[];
  public_files: FileListData[];
  owner_public_files: FileListData[];
  files_size: number;
  public_size: number;
  owner_public_files_size: number;
  folder_routes: FileListData[];
  upload_files: UploadFileInfo[];
  deleted_files: FileListData[];
  origin_folders: {
    label: string;
    value: number;
  }[];
  fetching: boolean;
  fetching_dynamic: boolean;
  uploading: boolean;
}

export const useFileStore = defineStore({
  id: 'file',
  state: () =>
    ({
      files_count: -1,
      public_count: -1,
      user_files: [],
      public_files: [],
      files_size: -1,
      public_size: -1,
      owner_public_files: [],
      owner_public_files_size: 0,
      folder_routes: [{ id: -1, name: '主菜单', size: -1, parent_id: 0, identity: 'root' }],
      upload_files: [],
      origin_folders: [],
      deleted_files: [],
      fetching: false,
      fetching_dynamic: false,
      uploading: false,
    } as FileState),
  getters: {
    get_files_count: state => state.files_count,
    get_user_files: state => state.user_files,
    get_total_files_size: state => state.files_size + state.owner_public_files_size,
    get_folder_routes: state => state.folder_routes,
    get_upload_files: state => state.upload_files,
    get_uploading_files_count: state => state.upload_files.length,
    get_origin_folders: state => state.origin_folders,
  },
  actions: {
    async onGetFileListAction() {
      try {
        this.fetching = true;
        const res = await getFileList('private');
        const public_res = await getFileList('public');

        if (res.status === 200 && public_res.status === 200) {
          const { result, count, size } = generateTree(res.data.list, 'private');
          const {
            result: public_result,
            count: public_count,
            size: public_size,
            owner_public_files,
            owner_public_files_size,
          } = generateTree(public_res.data.list, 'public');
          result.map((item: FileListData) => {
            if (item.name === '公共文件夹') {
              item.children = public_result;
              item.size = public_result.reduce(
                (total: number, item: FileListData) => total + item.size,
                0
              );
            }
          });
          this.user_files = result;
          this.origin_folders = result;
          this.deleted_files = res.data.deleted_list;
          this.owner_public_files = owner_public_files;
          this.files_count = count;
          this.public_count = public_count;
          this.files_size = size;
          this.public_size = public_size;
          this.owner_public_files_size = owner_public_files_size;
          this.fetching = false;
          // console.log('--store-all files', result);
        }
      } catch (error) {
        useTimer(() => {
          this.fetching = false;
          this.files_count = 0;
          this.public_count = 0;
        }, 3);
      }
    },
    onAddToFolderRoutesAction(payload: FileListData) {
      const other_folders = ['default', 'public'];
      if (
        this.folder_routes.at(-1)?.id === payload.parent_id &&
        !other_folders.includes(payload.identity)
      ) {
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
      if (payload?.type !== '文件夹' && payload) {
        const parent_id = payload.parent_id;
        // Bug: 我也不知道为啥注释掉这里就能正常运行了hhhh焯
        // if (parent_id === 0) {
        //   this.folder_routes = [
        //     {
        //       id: -1,
        //       name: '主菜单',
        //       size: -1,
        //       parent_id: 0,
        //       identity: 'root',
        //     },
        //     this.user_files[this.user_files.length - 1],
        //   ];
        //   return;
        // }

        const parentFolders = findParents(
          payload.target === 'private' ? this.user_files : this.public_files,
          parent_id
        );

        if (parentFolders && parentFolders.length > 0) {
          this.folder_routes = [
            {
              id: -1,
              name: '主菜单',
              size: -1,
              parent_id: 0,
              identity: 'root',
            },
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
            i.percentage = payload.percentage;
          }
        });
        return;
      }
      if (payload.status === 'removed') {
        this.upload_files = this.upload_files.filter(i => i.status !== 'removed');
      } else {
        this.upload_files.push(payload);
      }
    },
    onRemoveUploadFileAction(payload?: UploadFileInfo | SaveFileToRepoOption) {
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
    async onUploadFilesToRepoAction(payload: SaveFileToRepoOption) {
      try {
        this.uploading = true;
        const res = await saveFileToRepo(payload);
        if (res.data.msg === 'success') {
          this.uploading = false;
          this.onRemoveUploadFileAction(payload);
          this.onGetFileListAction().then(() => {
            if (payload.parentId === 0 && payload.target === 'private') {
              this.onRefreshFolderAction('default');
            } else if (payload.parentId === 0 && payload.target === 'public') {
              this.onRefreshFolderAction('public');
            }
            this.onJumpToFileAction({
              parent_id: payload.parentId,
              id: 0,
              identity: payload.repositoryIdentity,
              name: payload.name,
              size: 0,
              target: payload.target,
            });
          });
        } else if (res.data.msg === 'exist') {
          this.uploading = false;
          onError('已存在同名文件');
          this.upload_files.map(i => {
            if (i.name === payload.name) {
              i.status = 'error'; // or 'pending'?
            }
          });
          // this.onRemoveUploadFileAction(payload);
        } else if (res.data.msg === '容量不足') {
          this.uploading = false;
          onWarning('嘿，你的空间不够了');
          this.upload_files.map(i => {
            if (i.name === payload.name) {
              i.status = 'error';
            }
          });
        }
      } catch (e) {
        onError(`上传失败: ${e}`);
        this.uploading = false;
      }
    },
    async onCreateFolderAction(payload: CreateFolderOption, target: UploadTargetType) {
      try {
        const res = await createFolder(payload, target);
        if (res.data.msg === 'success') {
          onSuccess('创建成功');
          await this.onGetFileListAction().then(() => {
            if (target === 'public') {
              this.onRefreshFolderAction(target);
            }
          });
        } else if (res.data.msg === 'exits') {
          onWarning('文件夹已存在');
        }
      } catch (e) {
        onError(`创建失败: ${e}`);
      }
    },
    async onUpdateFileNameAction(payload: UpdateFileNameOption, target: UploadTargetType) {
      try {
        const res = await updateFileName(payload, target);
        if (res.data.msg === 'success') {
          await this.onGetFileListAction();
        } else {
          onWarning(res.data.msg);
        }
      } catch (error) {
        onError(`${error}`);
      }
    },
    // TODO(bug): 删除和移动文件夹无法实时更新
    async onDeleteFileAction(files: FileListData[], target: UploadTargetType) {
      Promise.allSettled(
        files.map(file => (file !== null ? deleteFile(file.identity, target) : null))
      )
        .then(res => {
          if (res.find(i => (i as any).value?.data?.msg === 'success')) {
            this.onGetFileListAction().then(() => {
              files.map(file => {
                if (file.parent_id === 0) {
                  this.onRefreshFolderAction(file.target === 'private' ? 'default' : 'public');
                } else if (file.type === '文件夹') {
                  // this.folder_routes = [...this.folder_routes.slice(0, 1)];
                }
                file && this.onJumpToFileAction(file);
              });
            });
            onSuccess('已删除');
          } else {
            onWarning('删除失败');
          }
        })
        .catch(e => {
          onError(`${e}`);
        });
    },
    async onMoveFoderAction(payload: MoveFolderOption, target: UploadTargetType) {
      if (
        payload.identity === payload.parent_identity ||
        payload.parent_identity === 'default' ||
        payload.parent_identity === 'public'
      ) {
        onWarning('无法移动');
        return;
      }
      try {
        const res = await moveFolder(payload, target);
        if (res.data.msg === 'success') {
          onSuccess('已保存');
          this.onGetFileListAction().then(() => {
            if (payload.file.parent_id === 0) {
              this.onRefreshFolderAction(payload.file.target === 'private' ? 'default' : 'public');
            }
            this.onJumpToFileAction({ ...payload.file });
          });
        } else {
          onWarning(res.data.msg);
        }
      } catch (error) {
        onError(`出错了: ${error}`);
      }
    },
    onRefreshFolderAction(identity: string) {
      const other_folders = ['default', 'public', 0];
      if (other_folders.includes(identity)) {
        this.folder_routes = [
          { id: -1, name: '主菜单', size: -1, parent_id: 0, identity: 'root' },
          ...this.user_files.filter(i => i.identity === identity),
        ];
      }
    },
  },
});

function findParents(treeData: FileListData[], id: number) {
  const allparents: FileListData[] = [];
  if (treeData.length == 0) {
    return;
  }

  const findele = (data: FileListData[], id: number) => {
    if (!id) {
      return;
    }
    data.forEach(item => {
      if (item.id == id) {
        allparents.unshift(item);
        findele(treeData, item.parent_id);
      } else if (item.children) {
        findele(item.children, id);
      }
    });
  };
  findele(treeData, id);
  return allparents;
}

export function useFileOutsideStore() {
  return useFileStore(piniaStore);
}

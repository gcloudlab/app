import { ref } from 'vue';
import { useFileOutsideStore } from '@/store/modules/file';
import type { FileListData, SaveFileToUserRepoOption } from '@/models/file';
import type { UploadFileInfo } from 'naive-ui';

const fileStore = useFileOutsideStore();

export const useFiles = () => {
  // const fileList = ref<FileListResponseData>();

  const onGetFileList = async () => {
    await fileStore.onGetFileListAction();
  };
  const onAddToFolderRoutes = (payload: FileListData) => {
    fileStore.onAddToFolderRoutesAction(payload);
  };
  const onRemoveFromFolderRoutes = (payload?: FileListData) => {
    fileStore.onRemoveFromFolderRoutesAction(payload);
  };
  const onJumpToFolder = (payload: FileListData) => {
    fileStore.onJumpToFolderAction(payload);
  };
  const onJumpToFile = (payload: FileListData) => {
    fileStore.onJumpToFileAction(payload);
  };
  const onAddUploadFiles = (payload: UploadFileInfo) => {
    fileStore.onAddUploadFilesAction(payload);
  };
  const onRemoveUploadFile = (payload?: UploadFileInfo) => {
    fileStore.onRemoveUploadFileAction(payload);
  };
  const onUploadFile = async (payloads: any) => {
    return await fileStore.onUploadFileAction(payloads);
  };
  const onUploadFilesToUser = async (payload: SaveFileToUserRepoOption) => {
    await fileStore.onUploadFilesToUserAction(payload);
  };

  return {
    onGetFileList,
    onAddToFolderRoutes,
    onRemoveFromFolderRoutes,
    onJumpToFolder,
    onJumpToFile,
    onAddUploadFiles,
    onRemoveUploadFile,
    onUploadFilesToUser,
    onUploadFile,
  };
};

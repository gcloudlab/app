import { ref } from 'vue';
import { useFileOutsideStore } from '@/store/modules/file';
import type { FileListData, FileListResponseData } from '@/models/file';

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

  return {
    onGetFileList,
    onAddToFolderRoutes,
    onRemoveFromFolderRoutes,
    onJumpToFolder,
    onJumpToFile,
  };
};

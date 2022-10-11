import { useFileOutsideStore } from '@/store/modules/file';
import type {
  CreateFolderOption,
  FileListData,
  MoveFolderOption,
  SaveFileToRepoOption,
  UpdateFileNameOption,
  UploadTargetType,
} from '@/models/file';
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
  const onUploadFilesToUser = async (payload: SaveFileToRepoOption) => {
    await fileStore.onUploadFilesToRepoAction(payload);
  };
  const onCreateFolder = async (payload: CreateFolderOption, target?: UploadTargetType) => {
    await fileStore.onCreateFolderAction(payload, target ?? 'private');
  };
  const onUpdateFileName = async (payload: UpdateFileNameOption, target?: UploadTargetType) => {
    await fileStore.onUpdateFileNameAction(payload, target ?? 'private');
  };
  const onDeleteFile = async (files: FileListData[], target?: UploadTargetType) => {
    await fileStore.onDeleteFileAction(files, target ?? 'private');
  };
  const onMoveFile = async (payload: MoveFolderOption, target?: UploadTargetType) => {
    await fileStore.onMoveFoderAction(payload, target ?? 'private');
  };

  return {
    fileStore,
    total_size: fileStore.get_total_files_size,
    onGetFileList,
    onAddToFolderRoutes,
    onRemoveFromFolderRoutes,
    onJumpToFolder,
    onJumpToFile,
    onAddUploadFiles,
    onRemoveUploadFile,
    onUploadFilesToUser,
    onUploadFile,
    onCreateFolder,
    onUpdateFileName,
    onDeleteFile,
    onMoveFile,
  };
};

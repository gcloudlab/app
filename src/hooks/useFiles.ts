import { ref } from "vue";
import { useFileOutsideStore } from "@/store/modules/file";
import type {
  CreateFolderOption,
  FileListData,
  MoveFolderOption,
  SaveFileToUserRepoOption,
  UpdateFileNameOption,
} from "@/models/file";
import type { UploadFileInfo } from "naive-ui";

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
  const onCreateFolder = async (payload: CreateFolderOption) => {
    await fileStore.onCreateFolderAction(payload);
  };
  const onUpdateFileName = async (payload: UpdateFileNameOption) => {
    await fileStore.onUpdateFileNameAction(payload);
  };
  const onDeleteFile = async (files: FileListData[]) => {
    await fileStore.onDeleteFileAction(files);
  };
  const onMoveFile = async (payload: MoveFolderOption) => {
    await fileStore.onMoveFoderAction(payload);
  };

  return {
    total_size: fileStore.get_user_files_size,
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

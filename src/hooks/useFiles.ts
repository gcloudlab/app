import { ref } from 'vue';
import { useFileOutsideStore } from '@/store/modules/file';
import type { FileListResponseData } from '@/models/file';

const fileStore = useFileOutsideStore();

export const useFiles = () => {
  const fileList = ref<FileListResponseData>();

  const onGetFileList = async () => {
    await fileStore.onGetFileListAction();
  };

  return {
    onGetFileList,
  };
};

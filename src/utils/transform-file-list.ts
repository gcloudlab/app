import type { FileListData, FileListResponseData } from '@/models/file';

const transformFileList = (fileList: FileListResponseData[]): FileListData[] => {
  let files: FileListData[] = [];
  const folders = fileList.filter(file => file.ext === '');
  const child_files = fileList.filter(file => file.ext !== '');
  for (let i = 0; i < folders.length; i++) {
    let folder = folders[i];
    files[i] = {
      id: folder.id,
      identity: folder.identity,
      name: folder.name,
      files: [],
      file_count: 0,
    };
    child_files.map(file => {
      if (
        folder.name === '图片' &&
        (file.ext === '.png' || file.ext === '.jpg' || file.ext === '.jpeg')
      ) {
        files[i].files?.push(file);
        files[i].file_count++;
      }
    });
  }
  return files;
};

export default transformFileList;

import type { FileListData, FileListResponseData } from '@/models/file';

const transformFileList = (fileList: FileListResponseData[]): FileListData[] => {
  let files: FileListData[] = [];
  const folders = fileList.filter(file => file.ext === '');
  const child_files = fileList.filter(file => file.ext !== '');
  for (let i = 0; i < folders.length; i++) {
    let folder = folders[i];
    files[i] = {
      id: folder.id,
      parent_id: folder.parent_id,
      identity: folder.identity,
      name: folder.name,
      files: [],
      count: 0,
      size: 0,
    };
    child_files.map(file => {
      // 找父文件夹
      if (file.parent_id === folder.id) {
        files[i].files?.push(file);
        // files[i].count += 1;
        files[i].size += file.size;
      } else if (
        file.parent_id === 0 &&
        file.ext !== '' &&
        files.find(f => f.id === file.id) === undefined
      ) {
        // 没有父文件夹的文件
        files.push(file);
      }
    });
  }
  return files;
};

export default transformFileList;

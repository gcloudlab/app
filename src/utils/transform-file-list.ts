import type { FileListData } from '@/models/file';
import _ from 'lodash';
import { transformDate } from './date';

const fileType = (ext: string) => {
  switch (ext.slice(1).toLowerCase()) {
    case 'jpg':
    case 'png':
    case 'gif':
    case 'bmp':
    case 'jpeg':
      return '图片';
    case 'doc':
    case 'docx':
      return '文档';
    case 'xls':
    case 'xlsx':
      return '表格';
    case 'ppt':
    case 'pptx':
      return '幻灯片';
    case 'pdf':
      return 'PDF';
    case 'zip':
    case 'rar':
      return '压缩文件';
    case 'txt':
      return '文本文件';
    case 'mp3':
    case 'wav':
      return '音频文件';
    case 'mp4':
    case 'avi':
      return '视频文件';
    case '':
      return '文件夹';
    default:
      return ext;
  }
};

const generateTree = (list: FileListData[] | any) => {
  const id: any = {};
  const result: FileListData[] | any = [];

  const files = list.filter((i: FileListData) => i.ext !== '');
  const count = files.length;
  const size = files.reduce((a: number, b: { size: number }) => a + b.size, 0);
  const children = _.groupBy(list, 'parent_id');
  const empty_folders = list.filter(
    (file: FileListData) =>
      file.ext === '' &&
      file.path === '' &&
      file.size === 0 &&
      !Object.keys(children).includes(String(file.id))
  );

  empty_folders.map((i: FileListData) => {
    children[i.id] = [];
  });

  list.map((row: FileListData) => {
    row.type = fileType(row.ext!);
    row.updated_at = transformDate(row.updated_at!);
    const index = row['id'];
    id[index] = row;
    if (children[index]) {
      row.children = children[index];
    }
  });

  for (const key in children) {
    const parent: FileListData = _.find(list, { id: Number(key) });
    if (key !== '0') {
      if (parent?.parent_id === 0) {
        const item = {
          ...parent,
          isFolder: true,
          size: children[key].reduce((a, b) => a + b.size, 0),
        };
        result.unshift(item);
      }
    } else {
      const other = children[key].filter(item => item.ext !== '');
      result.unshift({
        name: '默认文件夹',
        identity: 'other',
        size: other.reduce((total, item) => total + item.size, 0),
        isFolder: true,
        parent_id: 0,
        type: '文件夹',
        children: other,
        ext: '',
        id: 0,
      });
    }
  }
  return { result, count, size };
};

export default generateTree;

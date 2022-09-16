import type { FileIconType, FileListData } from '@/models/file';
import _ from 'lodash';
import { transformDate } from './date';
import { Folder, LogoMarkdown, FileTraySharp } from '@vicons/ionicons5';
import {
  DocumentCss20Regular,
  DocumentTextExtract20Regular,
  DocumentChevronDouble20Regular,
  DocumentJavascript20Regular,
  DocumentPercent20Regular,
  DocumentPdf32Filled,
  DocumentBulletList20Regular,
  MusicNote2Play20Regular,
  Document20Regular,
  DocumentBulletListClock20Regular,
} from '@vicons/fluent';
import { shallowRef } from 'vue';

const fileType = (ext: string): [type: string, icon: FileIconType | string] => {
  switch (ext.slice(1).toLowerCase()) {
    case 'jpg':
    case 'png':
    case 'gif':
    case 'bmp':
    case 'jpeg':
    case 'svg':
      return ['图片', 'media'];
    case 'doc':
    case 'docx':
      return ['文档', { style: 'text-gray-500', icon: shallowRef(DocumentTextExtract20Regular) }];
    case 'csv':
      return [
        'csv',
        { style: 'text-gray-500', icon: shallowRef(DocumentBulletListClock20Regular) },
      ];
    case 'css':
    case 'scss':
    case 'less':
      return ['样式文件', { style: 'text-gray-500', icon: shallowRef(DocumentCss20Regular) }];
    case 'go':
    case 'java':
    case 'py':
    case 'c':
    case 'cpp':
    case 'r':
    case 'm':
      return [
        '源文件',
        { style: 'text-gray-500', icon: shallowRef(DocumentChevronDouble20Regular) },
      ];
    case 'json':
      return ['json', { style: 'text-yellow-500', icon: shallowRef(DocumentJavascript20Regular) }];
    case 'js':
      return [
        'js脚本',
        { style: 'text-yellow-500', icon: shallowRef(DocumentJavascript20Regular) },
      ];
    case 'xls':
    case 'xlsx':
      return ['表格', { style: 'text-gray-500', icon: shallowRef(DocumentPercent20Regular) }];
    case 'ppt':
    case 'pptx':
      return ['幻灯片', { style: 'text-red-400', icon: shallowRef(DocumentTextExtract20Regular) }];
    case 'pdf':
      return ['PDF', { style: 'text-gray-500', icon: shallowRef(DocumentPdf32Filled) }];
    case 'zip':
    case 'rar':
      return ['压缩文件', { style: 'text-primary', icon: shallowRef(FileTraySharp) }];
    case 'txt':
      return [
        '文本文件',
        { style: 'text-gray-500', icon: shallowRef(DocumentBulletList20Regular) },
      ];
    case 'mp3':
    case 'wav':
      return ['音频文件', { style: 'text-primary', icon: shallowRef(MusicNote2Play20Regular) }];
    case 'mp4':
    case 'avi':
    case 'mov':
    case 'ogg':
    case 'webm':
      return ['视频文件', 'media'];
    case 'md':
      return ['markdown', { style: 'text-gray-600', icon: shallowRef(LogoMarkdown) }];
    case '':
      return ['文件夹', { style: 'text-primary', icon: shallowRef(Folder) }];
    default:
      return [ext, { style: 'text-gray-500', icon: shallowRef(Document20Regular) }];
  }
};

const generateTree = (list: FileListData[] | any) => {
  const id: any = {};
  const result: FileListData[] | any = [];

  const files = list.filter((i: FileListData) => i.repository_identity !== '' && i.path !== '');
  const count = files.length;
  const size = files.reduce((a: number, b: { size: number }) => a + b.size, 0);
  const children = _.groupBy(list, 'parent_id');

  const empty_folders = list.filter(
    (file: FileListData) =>
      file.repository_identity === '' &&
      file.path === '' &&
      file.size === 0 &&
      !Object.keys(children).includes(String(file.id))
  );

  empty_folders.map((i: FileListData) => {
    children[i.id] = [];
  });

  list.map((row: FileListData) => {
    const [type, icon] = fileType(row.ext!);
    row.type = type;
    row.icon = icon;
    row.updated_at = transformDate(row.updated_at!);
    const index = row.id;
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
      const other = children[key].filter(
        item => item.repository_identity !== '' && item.path !== ''
      );
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
        path: '',
        repository_identity: '',
        icon: { style: 'text-primary', icon: shallowRef(Folder) },
      });
    }
  }
  return { result, count, size };
};

export default generateTree;

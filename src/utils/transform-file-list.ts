import type { FileListData } from '@/models/file';
import { Folder } from '@vicons/ionicons5';
import _ from 'lodash';
import { shallowRef } from 'vue';
import { transformDate } from './date';
import { generate_file_icon } from './generate_file_icon';

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
    const [type, icon] = generate_file_icon(row.ext!);
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

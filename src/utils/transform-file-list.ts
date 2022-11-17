import type { FileListData, UploadTargetType } from '@/models/file';
import { Folder } from '@vicons/ionicons5';
import _ from 'lodash';
import { shallowRef } from 'vue';
import { transformDate } from './date';
import { generate_file_icon } from './generate_file_icon';
import { useAuthOutsideStore } from '@/store/modules/auth';
const authStore = useAuthOutsideStore();

const generateTree = (list: FileListData[] | any, target: UploadTargetType) => {
  const id: any = {};
  const result: FileListData[] | any = [];

  let files = list.filter((i: FileListData) => i.repository_identity !== '' && i.path !== '');

  // 只新建文件夹，未上传文件情况
  if (files.length === 0) {
    files = list;
  }

  let owner_public_files = [];
  let owner_public_files_size = 0;
  if (target === 'public') {
    owner_public_files = files.filter((i: FileListData) => i.owner === authStore.auth?.name);
    owner_public_files_size = owner_public_files.reduce(
      (a: number, b: { size: number }) => a + b.size,
      0
    );
  }

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

  // meta
  list.map((row: FileListData) => {
    const [type, icon] = generate_file_icon(row.ext!);
    row.type = type;
    row.icon = icon;
    row.target = target;
    row.updated_at = transformDate(row.updated_at!);
    const index = row.id;
    id[index] = row;
    if (children[index]) {
      row.children = children[index];
    }
  });

  for (const key in children) {
    const parent: FileListData = _.find(list, { id: Number(key) });
    // console.log(key, children, parent, target);

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
      if (target === 'private') {
        result.unshift(...[default_folder(other), public_folder()]);
      } else if (target === 'public') {
        result.unshift(...other);
      }
    }
  }

  return { result, count, size, owner_public_files, owner_public_files_size };
};

const public_folder = () => {
  return {
    name: '公共文件夹',
    identity: 'public',
    target: 'public',
    size: -1,
    isFolder: true,
    parent_id: 0,
    type: '文件夹',
    children: [],
    ext: '',
    id: 0,
    path: '',
    repository_identity: '',
    icon: { style: 'text-primary', icon: shallowRef(Folder) },
  };
};
const default_folder = (other: any) => {
  return {
    name: '默认文件夹',
    identity: 'default',
    target: 'private',
    size: other.reduce((total: number, item: FileListData) => total + item.size, 0),
    isFolder: true,
    parent_id: 0,
    type: '文件夹',
    children: other,
    ext: '',
    id: 0,
    path: '',
    repository_identity: '',
    icon: { style: 'text-primary', icon: shallowRef(Folder) },
  };
};
export default generateTree;

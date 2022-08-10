import type { FileListData } from '@/models/file';
import _ from 'lodash';
import { transformDate } from './date';

const generateTree = (list: FileListData[], rootId: number) => {
  if (!Array.isArray(list)) {
    new Error('type only Array');
    return list;
  }

  const objMap: any = {}; // 暂存数组以 id 为 key的映射关系
  const result = []; // 结果
  const other = [];
  let otherSize = -1;

  for (const item of list) {
    const id = item.id;
    const parentId = item.parent_id;

    // 该元素有可能已经放入map中，（找不到该项的parentId时 会先放入map
    objMap[id] = !objMap[id] ? item : { ...item, ...objMap[id] };

    let treeItem = objMap[id]; // 找到映射关系那一项（注意这里是引用）
    treeItem.updated_at = transformDate(treeItem.updated_at);
    treeItem.type = fileType(treeItem.ext);

    if (parentId === rootId && item.ext === '') {
      // 已经到根元素则将映射结果放进结果集
      // bug(fixed): 关于此处，为何treeitem放前面，若非如此合并后children为空，猜测是网络原因，因为本地是没问题的
      result.push(_.assign(treeItem, { isFolder: true, children: [] }));
    } else if (parentId === rootId && item.ext !== '') {
      // 未分类文件
      other.push({ ...treeItem, type: fileType(treeItem.ext), isFolder: false });
      otherSize += treeItem.size;
    } else {
      // 若父元素不存在，初始化父元素
      if (!objMap[parentId]) {
        objMap[parentId] = { size: 0 };
      }

      // 若无该根元素则放入map中
      if (objMap[parentId]['children'] === undefined) {
        objMap[parentId]['children'] = [];
      }
      objMap[parentId]['children'].push(treeItem);
      objMap[parentId]['size'] += treeItem.size;
      objMap[parentId]['isFolder'] = objMap[parentId]?.ext === '';
    }
  }

  if (other.length > 0) {
    console.log('---', result);
    return [
      ...result,
      {
        name: '未分类',
        identity: 'other',
        size: otherSize,
        isFolder: true,
        parent_id: 0,
        type: '文件夹',
        children: other,
      },
    ];
  }

  return result;
};

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

export const transformOriginFileList = (list: FileListData[]) => {
  const folderList = list.filter(item => item.ext === '');
  return folderList.map(item => {
    return {
      label: item.name,
      value: item.id,
    };
  });
};

export default generateTree;

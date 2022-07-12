import type { FileListData } from '@/models/file';

const transformToFileTree = (fileList: FileListData[]): FileListData[] => {
  return fileList.filter(folder => {
    folder.children = fileList.filter(file => {
      return file.id === file.parent_id;
    });
    return folder.parent_id === 0;
  });
};

const generateTree = (list: FileListData[], rootId: number) => {
  if (!Array.isArray(list)) {
    new Error('type only Array');
    return list;
  }
  const objMap: any = {}; // 暂存数组以 id 为 key的映射关系
  const result = []; // 结果

  for (const item of list) {
    const id = item.id;
    const parentId = item.parent_id;

    // 该元素有可能已经放入map中，（找不到该项的parentId时 会先放入map
    objMap[id] = !objMap[id] ? item : { ...item, ...objMap[id] };

    const treeItem = objMap[id]; // 找到映射关系那一项（注意这里是引用）

    if (parentId === rootId) {
      // 已经到根元素则将映射结果放进结果集
      result.push(treeItem);
    } else {
      // 若父元素不存在，初始化父元素
      if (!objMap[parentId]) {
        objMap[parentId] = {};
      }

      // 若无该根元素则放入map中
      if (!objMap[parentId]['children']) {
        objMap[parentId]['children'] = [];
      }
      objMap[parentId]['children'].push(treeItem);
    }
  }
  return result;
};

export default generateTree;

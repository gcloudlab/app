import { FileListData } from '@/models/file';
import { saveAs } from 'file-saver';

const downloadByUrl = async (file: FileListData) => {
  if (!file.path) return;
  if (file.type === '图片') {
    downLoadImg(file.path, file.name);
  } else {
    saveAs(file.path, file.name);
  }
  // const a = document.createElement('a');
  // a.href = url;
  // a.style.display = 'none';
  // a.setAttribute('target', '_blank');
  // a.setAttribute('download', fileName);
  // a.download = fileName || 'unknown';
  // document.body.appendChild(a);
  // a.click();
  // // window.URL.revokeObjectURL(url);
  // document.body.removeChild(a);
};

const downLoadImg = (res: string, filename: string) => {
  const blob = new Blob([res], {
    type: 'responseBlob',
  });
  saveAs(blob, filename);
};

export default downloadByUrl;

import { FileListData } from '@/models/file';
import { onError } from './messages';

const downloadByUrl = async (file: FileListData) => {
  if (!file.path) {
    return;
  }
  // I'm sb.
  coreDownload(file.path, file.name);
};

const coreDownload = (url: string, filename: string) => {
  getBlob(url, function (blob: Blob) {
    saveAs(blob, filename);
  });
};
const getBlob = (url: string, cb: any) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';
  xhr.onload = function () {
    if (xhr.status === 200) {
      cb(xhr.response);
    } else {
      onError('出错了');
    }
  };
  xhr.send();
};
const saveAs = (blob: Blob, filename: string) => {
  if ((window.navigator as any).msSaveOrOpenBlob) {
    (navigator as any).msSaveBlob(blob, filename);
  } else {
    const link = document.createElement('a');
    const body = document.querySelector('body');

    link.href = window.URL.createObjectURL(blob);
    link.download = filename;

    // fix Firefox
    link.style.display = 'none';
    body?.appendChild(link);

    link.click();
    body?.removeChild(link);

    window.URL.revokeObjectURL(link.href);
  }
};

// simple
// const downLoadLink = (url: string, filename: string) => {
//   const a = document.createElement('a');
//   a.style.display = 'none';
//   a.href = url;
//   a.setAttribute('download', filename || 'unknown');
//   document.body.appendChild(a);
//   // window.URL.revokeObjectURL(downloadUrl);
//   a.click();
//   a.remove();
// };

export default downloadByUrl;

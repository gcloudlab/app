import { FileListData } from '@/models/file';
import COS from 'cos-js-sdk-v5';
import { onError } from './messages';

const cosf = new COS({
  SecretId: import.meta.env.VITE_APP_SECRET_ID,
  SecretKey: import.meta.env.VITE_APP_SECRET_KEY,
});

const downloadByUrl = async (file: FileListData) => {
  if (!file.path) {
    return;
  }

  cosf.getObjectUrl(
    {
      Bucket: 'gcloud-1303456836',
      Region: 'ap-chengdu',
      Key: file.path.replace('https://gcloud-1303456836.cos.ap-chengdu.myqcloud.com/', ''),
      Sign: true,
    },
    function (err, data) {
      if (err) return onError('出错了');
      const downloadUrl =
        data.Url +
        (data.Url.indexOf('?') > -1 ? '&' : '?') +
        'response-content-disposition=attachment'; // 补充强制下载的参数
      coreDownload(downloadUrl, file.name);
      // downLoadLink(downloadUrl, file.name);
    }
  );
};

function coreDownload(url: string, filename: string) {
  getBlob(url, function (blob: Blob) {
    saveAs(blob, filename);
  });
}
function getBlob(url: string, cb: any) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';
  xhr.onload = function () {
    if (xhr.status === 200) {
      cb(xhr.response);
    }
  };
  xhr.send();
}
function saveAs(blob: Blob, filename: string) {
  if ((window.navigator as any).msSaveOrOpenBlob) {
    (navigator as any).msSaveBlob(blob, filename);
  } else {
    var link = document.createElement('a');
    var body = document.querySelector('body');

    link.href = window.URL.createObjectURL(blob);
    link.download = filename;

    // fix Firefox
    link.style.display = 'none';
    body?.appendChild(link);

    link.click();
    body?.removeChild(link);

    window.URL.revokeObjectURL(link.href);
  }
}

// filename
const downLoadLink = (url: string, filename: string) => {
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.setAttribute('download', filename || 'unknown');
  document.body.appendChild(a);
  // window.URL.revokeObjectURL(downloadUrl);
  a.click();
  a.remove();
};

export default downloadByUrl;

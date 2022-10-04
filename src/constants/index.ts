export const Upload_Url = 'https://gcloud.aoau.top/file/upload';

export const One_Byte = 1024;
export const Max_Size_Per_Upload = 20 * One_Byte * One_Byte;
export const One_GB = 1000 * One_Byte * One_Byte;

export const EXTENDS_MAP = {
  IMAGE: ['jpg', 'png', 'gif', 'bmp', 'jpeg', 'svg', 'ico'],
  WORD: ['doc', 'docx'],
  CSV: ['csv'],
  HTML: ['html', 'xml', 'xhtml'],
  CSS: ['css', 'scss', 'less'],
  CODE_SOURCE: ['go', 'java', 'py', 'c', 'cpp', 'r', 'm', 'api'],
  JSON: ['json'],
  JAVASCRIPT: ['js', 'ejs', 'ts', 'tsx', 'jsx'],
  EXCEL: ['xls', 'xlsx'],
  PPT: ['ppt', 'pptx'],
  PDF: ['pdf'],
  ZIP: ['zip', 'rar', '7z', 'gz'],
  TXT: ['txt'],
  AUDIO: ['mp3', 'wav'],
  VIDEO: ['mp4', 'avi', 'mov', 'ogg', 'webm'],
  MARKDOWN: ['md'],
  LINK: ['lnk', 'link'],
  BAT: ['bat'],
};

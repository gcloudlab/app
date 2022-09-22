import { One_Byte } from '@/constants';

export const transformSize = (size: number): string => {
  if (size >= 0 && size < 100000) {
    return (size / One_Byte).toFixed(2) + 'KB';
  } else if (size >= 10 ** 5 && size < 10 ** 8) {
    return (size / One_Byte ** 2).toFixed(2) + 'MB';
  } else if (size >= 10 ** 8) {
    return (size / One_Byte ** 3).toFixed(2) + 'GB';
  }
  return '0KB';
};

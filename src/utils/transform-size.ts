export const transformSize = (size: number): string => {
  if (size >= 0 && size < 100000) {
    return (size / 1024).toFixed(2) + 'KB';
  } else if (size >= 100000 && size < 100000000) {
    return (size / 1024 ** 2).toFixed(2) + 'MB';
  } else if (size >= 100000000 && size < 1000000000) {
    return (size / 1000 ** 2 / 1024).toFixed(2) + 'GB';
  }
  return '0KB';
}

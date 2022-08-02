const downloadByUrl = async (url: string | undefined, fileName: string) => {
  if (!url) return;
  const a = document.createElement('a');
  a.href = url;
  a.style.display = 'none';
  if (fileName !== undefined) {
    a.download = fileName;
  }
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export default downloadByUrl;

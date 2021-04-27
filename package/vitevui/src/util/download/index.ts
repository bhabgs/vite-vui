export const simpleDownload = (fileUrl: string, blobData?: any) => {
  const strArr = fileUrl.split('/');
  const name = strArr[strArr.length - 1];
  const a = document.createElement('a');
  let href: any = '';
  a.download = name;

  if (blobData) {
    href = window.URL.createObjectURL(blobData);
  } else {
    href = fileUrl;
  }

  a.href = href;
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  a.remove();

  if (blobData) {
    window.URL.revokeObjectURL(href);
  }
};

export const blobDownload = (blobData: any, fileUrl: string) => {
  const fileReader = new FileReader();

  fileReader.onload = async (e: any) => {
    const { result } = e.target;

    try {
      const jsonData = JSON.parse(result);
      if (jsonData.status !== 200 && jsonData.code !== 'M0000') {
        // Vue.prototype.$message.error('导出失败!');
      }
    } catch (error) {
      const blob = new Blob(
        [blobData],
        // {
        // type: 'application/vnd.ms-excel',
        // }
      );
      simpleDownload(fileUrl, blobData);
    }
  };

  fileReader.readAsText(blobData);
};

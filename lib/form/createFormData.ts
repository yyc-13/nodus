export default function createFormData(data, prodFileInfos, previewFileInfos) {
  const formData = new FormData();

  for (const key in data) {
    if (Array.isArray(data[key])) {
      data[key].forEach((value) => {
        formData.append(key, value);
      });
    } else {
      formData.append(key, data[key]);
    }
  }

  prodFileInfos.forEach((fileInfo, index) => {
    formData.append(`prodFileInfo[${index}]`, JSON.stringify(fileInfo));
  });

  previewFileInfos.forEach((fileInfo, index) => {
    formData.append(`previewFileInfo[${index}]`, JSON.stringify(fileInfo));
  });

  return formData;
}

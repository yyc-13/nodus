const storeFiles = async (files, title: string, fileType) => {
  if (!files || files.length == 0) {
    return [];
  }
  const formData = new FormData();

  files.forEach((file, index) => {
    formData.append(`files${index}`, file);
  });

  formData.append("title", title);
  formData.append("fileType", fileType);

  const res = await fetch("/api/files", {
    method: "POST",
    body: formData,
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const { fileUrls } = await res.json();
  console.log("fileUrls", fileUrls);
  return fileUrls;
};

export default storeFiles;

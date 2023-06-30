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
  console.log(1 - 2);
  const res = await fetch("/api/files", {
    method: "POST",
    body: formData,
  });
  console.log(1 - 3);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const { fileUrls: fileIdentifiers } = await res.json();
  if (title !== "prod") {
    const fileUrls = fileIdentifiers.map((fileIdentifier) => {
      return `https://feletzxvqxgytpgcgvkw.supabase.co/storage/v1/object/public/${title}/${fileType}/${fileIdentifier}`;
    });
    return fileUrls;
  }

  return fileIdentifiers;
};

export default storeFiles;

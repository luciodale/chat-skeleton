export function getFileExtension(filename: string) {
  const parts = filename.split(".");
  return parts.length > 1 ? parts[parts.length - 1].toUpperCase() : "FILE";
}

export function isImage(file: File) {
  return file.type.startsWith("image/");
}

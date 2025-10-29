import { useEffect, useState } from "react";
import { getFileExtension, isImage } from "../utils/files";

export function useFilePreview(attachment: File) {
  const [previewUrl, setPreviewUrl] = useState<string>();
  const isImageType = isImage(attachment);
  const fileExtension = getFileExtension(attachment.name);
  useEffect(() => {
    if (isImageType) {
      const url = URL.createObjectURL(attachment);
      setPreviewUrl(url);
    }
  }, [attachment, isImage]);

  return { previewUrl, isImage: isImageType, fileExtension };
}

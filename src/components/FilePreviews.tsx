import { Dispatch, memo, SetStateAction, useState } from "react";
import { RemoveIcon } from "../icons/RemoveIcon";
import { useFilePreview } from "../hooks/useFilePreview";

type FilePreviewsProps = {
  attachments: File[] | null;
  setAttachments: Dispatch<SetStateAction<File[] | null>>;
};

type FilePreviewProps = {
  attachment: File;
  onDelete: () => void;
};

function FilePreviewBase({ attachment, onDelete }: FilePreviewProps) {
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { previewUrl, isImage, fileExtension } = useFilePreview(attachment);

  return (
    <div className="group relative inline-block text-sm text-black/70 dark:text-white/90">
      <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-600">
        {isImage && !hasError ? (
          <>
            <img
              src={previewUrl}
              alt={attachment.name}
              className="h-16 w-16 object-cover"
              onError={() => setHasError(true)}
              onLoad={() => setIsLoading(false)}
            />
            {isLoading && (
              <div className="absolute inset-0 bg-surface-secondary flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-gray-300 dark:border-gray-500 border-t-gray-600 dark:border-t-gray-300 rounded-full animate-spin" />
              </div>
            )}
          </>
        ) : (
          <div className="h-16 w-16 flex flex-col items-center justify-center bg-surface-secondary p-2">
            <div className="text-xs font-semibold">{fileExtension}</div>
          </div>
        )}
        <button
          className="absolute bg-muted rounded-full p-0.5 top-1 right-1 cursor-pointer hover:opacity-80 transition-opacity"
          type="button"
          onClick={onDelete}
        >
          <RemoveIcon />
        </button>
      </div>
    </div>
  );
}

const FilePreview = memo(FilePreviewBase);

export function FilePreviewsBase({
  attachments,
  setAttachments,
}: FilePreviewsProps) {
  const onDelete = (attachment: File) => {
    setAttachments(
      attachments?.filter((a) => a.name !== attachment.name) || null
    );
  };

  return (
    <div className="mx-2 mt-2 flex flex-wrap gap-2">
      {attachments?.map((attachment) => (
        <FilePreview
          key={attachment.name}
          attachment={attachment}
          onDelete={() => onDelete(attachment)}
        />
      ))}
    </div>
  );
}

export const FilePreviews = memo(FilePreviewsBase);

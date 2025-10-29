import { Dispatch, SetStateAction, useRef } from "react";
import { AttachIcon } from "../icons/AttachIcon";

type AttachFileProps = {
  setAttachments: Dispatch<SetStateAction<File[] | null>>;
};

export function AttachFile({ setAttachments }: AttachFileProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setAttachments((prev) => [...(prev || []), ...files]);
  };

  return (
    <>
      <button
        type="button"
        className="cursor-pointer hover:bg-surface-hover rounded-full p-2"
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        <AttachIcon />
      </button>
      <input
        ref={inputRef}
        multiple
        type="file"
        style={{ display: "none" }}
        onChange={onFileChange}
      />
    </>
  );
}

import { useDropzone } from "react-dropzone";
import { useField, useFormikContext } from "formik";
import { useCallback } from "react";
import Button from "../Button/Button";
import fileUploadStates from "@/assets/icons/fileUploadStates.svg";
import type { FileDropzoneProps } from "./FileDropzone.types";

export default function FileDropzone({
  name,
  label,
  accept,
  maxSizeMB = 2,
}: FileDropzoneProps) {
  const { setFieldValue } = useFormikContext<Record<string, File | null>>();
  const [field, meta] = useField(name);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        setFieldValue(name, acceptedFiles[0]); // store single file
      }
    },
    [name, setFieldValue]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      accept,
      maxSize: maxSizeMB * 1024 * 1024,
    });

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-[14px] leading-[145%] font-medium text-gray-900">
        {label}
      </label>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed border-gray-300 rounded-[16px] h-[264px]  text-center cursor-pointer transition w-full px-6 py-[28.5px] ${
          isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
        } `}
        aria-label="File upload area"
      >
        <input {...getInputProps()} />
        {field.value ? (
          <div className="flex items-center justify-center w-full h-full">
            <p className="text-md text-gray-700">
              {field.value.name} ({(field.value.size / 1024 / 1024).toFixed(2)}{" "}
              MB)
            </p>
          </div>
        ) : (
          <div className="w-full h-full items-center justify-between  flex flex-col">
            <img src={fileUploadStates} alt="" />

            <div className="space-y-0.5 leading-[145%]">
              <p className="text-[14px]  text-primary font-semibold">
                Click to upload{" "}
                <span className="text-gray-600 font-normal">
                  or drag and drop
                </span>
              </p>

              <p className="text-[12px] text-gray-400">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </p>
            </div>

            <div className="flex items-center gap-2 w-full">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="text-gray-500 text-[12px] leading-[145%] font-semibold">
                OR
              </span>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            <Button size="sm">Browse files</Button>
          </div>
        )}
      </div>
      {meta.touched && meta.error && (
        <span className="text-red-500 text-xs">{meta.error}</span>
      )}

      {fileRejections.length > 0 && (
        <span className="text-red-500 text-xs">
          {fileRejections[0].errors[0].message}
        </span>
      )}
    </div>
  );
}

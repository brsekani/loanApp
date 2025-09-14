import { useField } from "formik";
import type { TextInputProps } from "./TextInput.types";

export default function TextInput({ label, ...props }: TextInputProps) {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-1 text-[14px] leading-[145%] w-full">
      <label htmlFor={props.name} className="font-medium text-gray-900">
        {label}
      </label>
      <input
        {...field}
        {...props}
        id={props.name}
        className={`h-14 px-4 outline-primary border rounded-[6px] placeholder:text-gray-400 
          ${meta.touched && meta.error ? "border-red-500" : "border-gray-300"}`}
      />
      {meta.touched && meta.error && (
        <span className="text-red-500 text-xs">{meta.error}</span>
      )}
    </div>
  );
}

import { useField } from "formik";
import type { SelectInputProps } from "./SelectInput.types";

export default function SelectInput({
  label,
  children,
  ...props
}: SelectInputProps) {
  const [field, meta] = useField(props);
  const isPlaceholder = !field.value;

  return (
    <div className="flex flex-col gap-1 text-[14px] leading-[145%] w-full">
      <label className="font-medium text-gray-900">{label}</label>
      <select
        {...field}
        {...props}
        className={`h-14 px-4 outline-none border rounded-[6px] 
           ${isPlaceholder ? "text-gray-400" : "text-gray-900"}
          ${meta.touched && meta.error ? "border-red-500" : "border-gray-300"}`}
      >
        {children}
      </select>

      {meta.touched && meta.error ? (
        <span className="text-red-500 text-xs">{meta.error}</span>
      ) : null}
    </div>
  );
}

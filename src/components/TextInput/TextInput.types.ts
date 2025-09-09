import type { InputHTMLAttributes } from "react";
import type { FieldHookConfig } from "formik";

export type TextInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement> &
  FieldHookConfig<string>;

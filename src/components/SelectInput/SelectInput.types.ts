import type { ReactNode } from "react";

export type SelectInputProps = {
  label: string;
  children: ReactNode;
  name: string; // required for Formik
};

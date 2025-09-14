import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";

export default function AgentNotesForm() {
  const formik = useFormik({
    initialValues: {
      notes: "",
    },
    validationSchema: Yup.object({
      notes: Yup.string()
        .min(10, "Note must be at least 10 characters")
        .required("Agents note is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      // ✅ send values.notes to backend here
    },
  });

  return (
    <form className="space-y-6" onSubmit={formik.handleSubmit}>
      <div className="w-full flex-col flex gap-1">
        <label
          htmlFor="notes"
          className="text-[16px] leading-[145%] font-medium text-gray-900"
        >
          Agents Note
        </label>
        <textarea
          id="notes"
          name="notes"
          className={`resize-none h-[98px] p-4 rounded-[6px] border outline-primary ${
            formik.touched.notes && formik.errors.notes
              ? "border-red-500"
              : "border-gray-300"
          }`}
          placeholder="Client is very cooperative and has excellent payment history. Recommended for higher loan amounts in future applications."
          value={formik.values.notes}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.notes && formik.errors.notes && (
          <span className="text-sm text-red-500">{formik.errors.notes}</span>
        )}
      </div>

      <div className="flex items-center justify-end">
        <Button type="submit">Save Notes</Button>
      </div>
    </form>
  );
}

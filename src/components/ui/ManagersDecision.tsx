export default function ManagersDecision() {
  //   const formik = useFormik({
  //     initialValues: {
  //       notes: "",
  //     },
  //     validationSchema: Yup.object({
  //       notes: Yup.string()
  //         .min(10, "Note must be at least 10 characters")
  //         .required("Agents note is required"),
  //     }),
  //     onSubmit: (values) => {
  //       console.log("Form submitted:", values);
  //       // ✅ send values.notes to backend here
  //     },
  //   });

  return (
    <form className="space-y-6">
      <div className="w-full flex-col flex gap-1">
        <label
          htmlFor="notes"
          className="text-[16px] leading-[145%] font-medium text-gray-900"
        >
          Comments
        </label>
        <textarea
          id="notes"
          name="notes"
          className={`resize-none h-[98px] p-4 rounded-[6px] border outline-primary border-gray-300`}
          placeholder="All documents are in order. This loan aligns with our risk profile. Approved."
        />
      </div>
    </form>
  );
}

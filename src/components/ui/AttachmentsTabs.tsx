import pdf from "@/assets/icons/pdf.svg";
import download from "@/assets/icons/download.svg";

export default function AttachmentsTabs() {
  const files = [
    "National ID Card (Approved.pdf)",
    "Utility Bill (Approved.pdf)",
    "Bank Statement (Approved.pdf)",
  ];

  return (
    <div className="space-y-4 lg:min-h-[559px] pb-4 h-full">
      {files.map((file, i) => (
        <div
          key={i}
          className="flex items-center justify-between h-16 border border-[#C9CDD3] rounded-[16px] px-3"
        >
          <div className="flex items-center gap-2">
            <img src={pdf} />
            <p className="text-[16px] leading-[145%] text-gray-400">{file}</p>
          </div>

          <img src={download} className="cursor-pointer" />
        </div>
      ))}
    </div>
  );
}

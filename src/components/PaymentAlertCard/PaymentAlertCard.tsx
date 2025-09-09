import call from "@/assets/icons/call.svg";
import chat from "@/assets/icons/chat.svg";
import type { PaymentAlertCardProps } from "./PaymentAlertCard.types";

export default function PaymentAlertCard({
  name,
  alertType,
  alertColor = "#F3A218",
  alertBg = "#F3A2181A",
  amount,
  phone,
}: PaymentAlertCardProps) {
  return (
    <div className="flex justify-between items-center p-4 border border-gray-200 rounded-[12px]">
      {/* Left side */}
      <div className="space-y-2">
        <div className="flex items-center md:gap-4 gap-2">
          <h1 className="md:text-[16px] text-[14px] leading-[145%] text-primary font-medium">
            {name}
          </h1>
          <div
            className="px-2 py-1.5 rounded-[12px] md:text-[12px] text-[10px] leading-[145%]"
            style={{ backgroundColor: alertBg, color: alertColor }}
          >
            {alertType}
          </div>
        </div>

        <p className="md:text-[16px] text-[14px] leading-[145%] text-primary font-medium">
          ₦{amount}
        </p>

        <p className="text-[12px] leading-[145%] text-primary">{phone}</p>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button className="w-[44px] h-[44px] bg-[#4149EB1A] rounded-[16px] flex items-center justify-center cursor-pointer">
          <img src={call} alt="call" />
        </button>
        <button className="w-[44px] h-[44px] bg-[#1ABA1A1A] rounded-[16px] flex items-center justify-center cursor-pointer">
          <img src={chat} alt="chat" />
        </button>
      </div>
    </div>
  );
}

import type { RepaymentsMetricsCardProps } from "./RepaymentsMetricsCard.types";

export default function RepaymentsMetricsCard({
  name,
  amount,
}: RepaymentsMetricsCardProps) {
  return (
    <div className="md:h-[104px] h-[86px] p-4 space-y-4 border border-gray-200 rounded-[12px] shadow-[0px_5px_3px_-2px_#00000005,0px_3px_2px_-2px_#0000000F] w-full">
      <p className="text-[12px] leading-[145%] font-medium text-gray-500">
        {name}
      </p>
      <h1 className="md:text-[32px] text-[24px] leading-[120%] text-gray-800 tracking-[-2%] font-semibold">
        {amount}
      </h1>
    </div>
  );
}

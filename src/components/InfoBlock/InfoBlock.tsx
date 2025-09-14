import React from "react";
import type { InfoBlockProps } from "./infoBlock.types";

const InfoBlock: React.FC<InfoBlockProps> = ({
  label,
  value,
  labelColor = "text-gray-400",
  valueColor = "text-gray-700",
}) => {
  return (
    <div className="leading-[145%] space-y-2">
      <h2 className={`text-[14px] ${labelColor}`}>{label}</h2>
      <h1 className={`text-[16px] font-medium ${valueColor}`}>{value}</h1>
    </div>
  );
};

export default InfoBlock;

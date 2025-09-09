// PageHeader.tsx

import type { PageHeaderProps } from "./PageHeader.types";

export default function PageHeader({
  title,
  subtitle,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={`my-8 space-y-2 leading-[120%] tracking-[-2%] hidden lg:block ${className}`}
    >
      <h1 className="text-[28px] text-gray-700 font-semibold">{title}</h1>
      {subtitle && (
        <p className="text-[20px] text-gray-400 font-medium">{subtitle}</p>
      )}
    </div>
  );
}

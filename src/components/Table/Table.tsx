import type { TableProps } from "./Table.types";

export default function Table({ columns, data }: TableProps) {
  return (
    <div className="overflow-x-auto relative ">
      <table className="w-full min-w-[1000px] border border-gray-200 rounded-lg overflow-hidden">
        {/* Head */}
        <thead className="bg-gray-100 text-left uppercase">
          <tr>
            {columns?.map((col, idx) => (
              <th
                key={idx}
                className={`px-4 py-4 text-[16px] leading-[145%] font-medium text-gray-700 ${
                  col.fixed === "right" ? "sticky right-0 bg-gray-100 " : ""
                }`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data?.length > 0 ? (
            data.map((row, i) => (
              <tr key={i} className=" hover:bg-gray-100 transition-colors">
                {columns.map((col, idx) => (
                  <td
                    key={idx}
                    className={`px-4 py-[16.5px] text-[16px] leading-[145%] text-gray-500 border-b-[0.6px] border-gray-200 ${
                      col.fixed === "right"
                        ? "sticky right-10 flex items-end justify-end  "
                        : ""
                    }`}
                  >
                    {col.render
                      ? col.render(row[col.accessor], row)
                      : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns?.length}
                className="text-center py-6 text-gray-500"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

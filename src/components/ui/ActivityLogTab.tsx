import type { Column } from "../Table/Table.types";
import Table from "../Table/Table";

export default function ActivityLogTab() {
  const columns: Column[] = [
    { header: "DATE AND TIME", accessor: "date" },

    {
      header: "ACTION",
      accessor: "type",
    },
  ];

  const data = [
    {
      id: 1,
      loanId: "LN01234",
      type: "SME Business",
      amount: "₦850,000",
      date: "Dec 20, 2024",
      status: "Active",
    },
    {
      id: 2,
      loanId: "LN01235",
      type: "Personal Loan",
      amount: "₦250,000",
      date: "Nov 15, 2024",
      status: "Completed",
    },
    {
      id: 3,
      loanId: "LN01236",
      type: "Auto Loan",
      amount: "₦1,200,000",
      date: "Jan 05, 2025",
      status: "Pending",
    },
    {
      id: 4,
      loanId: "LN01237",
      type: "Education Loan",
      amount: "₦600,000",
      date: "Oct 30, 2024",
      status: "Overdue",
    },
    {
      id: 5,
      loanId: "LN01238",
      type: "SME Business",
      amount: "₦2,000,000",
      date: "Feb 18, 2025",
      status: "Active",
    },
    {
      id: 6,
      loanId: "LN01239",
      type: "Home Loan",
      amount: "₦5,500,000",
      date: "Mar 10, 2025",
      status: "Completed",
    },
    {
      id: 7,
      loanId: "LN01240",
      type: "Personal Loan",
      amount: "₦450,000",
      date: "Apr 01, 2025",
      status: "Pending",
    },
    {
      id: 8,
      loanId: "LN01241",
      type: "Auto Loan",
      amount: "₦1,800,000",
      date: "May 12, 2025",
      status: "Active",
    },
    {
      id: 9,
      loanId: "LN01242",
      type: "Education Loan",
      amount: "₦300,000",
      date: "Jun 25, 2025",
      status: "Completed",
    },
    {
      id: 10,
      loanId: "LN01243",
      type: "SME Business",
      amount: "₦750,000",
      date: "Jul 20, 2025",
      status: "Overdue",
    },
  ];

  return (
    <div className="space-y-4 pb-4 lg:min-h-[559px] h-full">
      <Table columns={columns} data={data} />
    </div>
  );
}

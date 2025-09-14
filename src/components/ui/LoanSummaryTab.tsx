import InfoBlock from "../InfoBlock/InfoBlock";

export default function LoanSummaryTab() {
  return (
    <div className="space-y-4">
      <InfoBlock label="Loan Amount" value="₦500,000" />
      <InfoBlock label="Loan Type" value="SME Business Growth Loan" />
      <InfoBlock label="Tenure" value="12 Months" />
      <InfoBlock label="Account Number" value="01234567890" />
      <InfoBlock label="Account Name" value="John Yinka" />
      <InfoBlock label="Bank Name" value="Genesis Bank" />
      <InfoBlock label="Interest Rate" value="15% per annum" />
      <InfoBlock label="Repayment Frequency" value="Daily" />
      <InfoBlock
        label="Total Payable"
        value="₦575,000"
        valueColor="text-[#006400]"
      />
      <InfoBlock label="Daily Repayment" value="₦19,166.67" />
    </div>
  );
}

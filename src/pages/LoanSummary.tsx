import PageHeader from "@/components/PageHeader/PageHeader";
import arrowLeft from "@/assets/icons/arrow-left.svg";
import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import LoanSummaryTab from "@/components/ui/LoanSummaryTab";
import RepaymentSchedule from "@/components/ui/RepaymentSchedule";
import ManagersDecision from "@/components/ui/ManagersDecision";
import AttachmentsTabs from "@/components/ui/AttachmentsTabs";
import ActivityLogTab from "@/components/ui/ActivityLogTab";

export default function LoanSummary() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const valueStatus = "Approved";

  const tabs = [
    "Loan Summary",
    "Repayment Schedule",
    "Manager’s Decision",
    "Attachements",
    "Activity Log",
  ];

  return (
    <div className="">
      <PageHeader
        title="Loan Requests"
        subtitle="Welcome back! Here's your loan portfolio overview"
      />

      <div className="p-4 bg-white mb-[15px]">
        <div
          className="flex items-center gap-2 cursor-pointer w-fit mb-6"
          // onClick={() => naviagte(-1)}
        >
          <img src={arrowLeft} alt="arrowLeft" />
          <p className="text-[14px] leading-[145%] text-primary">
            back to All Clients
          </p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="space-y-2  leading-[145%]">
            <h2 className="text-[16px] font-medium text-gray-700">
              Loan Request Details
            </h2>
            <p className="text-[14px] text-primary">Client: John Yinka</p>
          </div>
          <div
            className={`px-2 text-[12px] leading-[145%] rounded-[12px] ${
              {
                Approved: "bg-[#0F973D1A] text-[#0F973D]",
                Pending: "bg-[#F3A2181A] text-[#F3A218]",
                Overdue: "bg-[#CB1A141A] text-[#CB1A14]",
              }[valueStatus] || "bg-gray-100 text-gray-600" // fallback for unknown values
            }`}
          >
            {valueStatus}
          </div>
        </div>

        <div className="w-full">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable" // ✅ allow horizontal scrolling
            scrollButtons="auto"
            sx={{
              mb: "25px",
              "& .MuiTab-root": {
                textTransform: "none",
                height: 41,
                minWidth: "fit-content", // ✅ shrink to fit content
                px: 2, // ✅ 16px left/right padding (MUI spacing: 2 = 16px)
                paddingY: 0, // keep height tight

                "@media (min-width:600px)": {
                  height: 52,
                },
              },

              "& .MuiTabs-flexContainer": {
                gap: "16px", // ✅ spacing between each Tab
              },

              "& .MuiTabs-indicator": { display: "none" }, // hide underline if you want bg active
            }}
            className="space-y-10"
          >
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                label={
                  <div className="flex items-center gap-2 text-[14px] leading-[145%] font-medium">
                    <span className="tab-text">{tab}</span>
                  </div>
                }
                sx={{
                  textTransform: "none",
                  minWidth: "fit-content", // ✅ don’t force extra width
                  px: 2, // ✅ 16px left/right padding
                  py: 0,

                  "& .tab-text": {
                    color: "#344054", // default
                    whiteSpace: "nowrap", // ✅ prevents breaking text
                  },

                  "&.Mui-selected .tab-text": {
                    color: "#002D62",
                  },

                  "&.Mui-selected": {
                    color: "#002D62",
                    borderBottom: "1px solid #002D62",
                  },
                }}
              />
            ))}
          </Tabs>

          {value === 0 && <LoanSummaryTab />}
          {value === 1 && <RepaymentSchedule />}
          {value === 2 && <ManagersDecision />}
          {value === 3 && <AttachmentsTabs />}
          {value === 4 && <ActivityLogTab />}
        </div>
      </div>
    </div>
  );
}

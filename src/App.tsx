import { Route, Routes } from "react-router-dom";
import DashboardLayout from "@/layouts/Dashboard/index";
import Clients from "./pages/Clients";
import Dashboard from "./pages/Dashboard";
import AddClient from "./pages/AddClient";
import ClientDetails from "./pages/ClientDetails"; // ✅ create this page later
import LoanRequests from "./pages/LoanRequests";
import LoanSummary from "./pages/LoanSummary";
import Repayments from "./pages/Repayments";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="clients" element={<Clients />} />
        <Route path="clients/new" element={<AddClient />} />
        <Route path="clients/:id" element={<ClientDetails />} />

        <Route path="loan-requests" element={<LoanRequests />} />
        <Route path="loan-requests/loan-summary" element={<LoanSummary />} />

        <Route path="repayments" element={<Repayments />} />
      </Route>
    </Routes>
  );
}

export default App;

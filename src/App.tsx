import { Route, Routes } from "react-router-dom";
import DashboardLayout from "@/layouts/Dashboard/index";
import Clients from "./pages/Clients";
import Dashboard from "./pages/Dashboard";
import AddClient from "./pages/AddClient";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        {/* Nested routes inside Dashboard */}
        <Route index element={<Dashboard />} />
        <Route path="clients" element={<Clients />} />
        <Route path="clients/add" element={<AddClient />} />
      </Route>
    </Routes>
  );
}

export default App;

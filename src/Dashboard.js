import { Route, Routes } from "react-router-dom";

import { DashboardIndex } from "./DashboardIndex";
import { DashboardLayout } from "./DashboardLayout";
import { Messages } from "./Messages";

export default function Dashboard() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardIndex />} />
        <Route path="messages" element={<Messages />} />
      </Route>
    </Routes>
  );
}
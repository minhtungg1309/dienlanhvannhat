import React from "react";
import { Routes, Route } from "react-router";

import AppLayout from "../layout/AppLayout.tsx";
import ClientLayout from "../layout/ClientLayout.tsx";
import SignIn from "../pages/AuthPages/SignIn";
import Home from "../pages/Client/Home.tsx";
import GioiThieu from "../pages/Client/GioiThieu.tsx";
import DangKy from "../pages/Client/DangKy.tsx";
import AdminHome from "../pages/Dashboard/Home.tsx";
import Permission from "../pages/Dashboard/Permission.tsx";
import Role from "../pages/Dashboard/Role.tsx";
import Chat from "../pages/Dashboard/Chat.tsx";
// import ProtectedRoute from "../components/common/ProtectedRoute";

export default function AppRoutes(): React.ReactElement {
  return (
    <Routes>
      {/* Client Layout */}
      <Route element={<ClientLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<GioiThieu />} />
        <Route path="/dang-ky" element={<DangKy />} />
      </Route>

      {/* Admin Layout - Protected */}
  {/*
  <Route path="/admin" element={
    <ProtectedRoute>
      <AppLayout />
    </ProtectedRoute>
  }>
    <Route index element={<AdminHome />} />
    <Route path="permission" element={<Permission />} />
    <Route path="role" element={<Role />} />
    <Route path="chat" element={<Chat />} />
  </Route>
  */}
  <Route path="/admin" element={<AppLayout />}>
    <Route index element={<AdminHome />} />
    <Route path="permission" element={<Permission />} />
    <Route path="role" element={<Role />} />
    <Route path="chat" element={<Chat />} />
  </Route>

      {/* Public Auth Routes */}
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

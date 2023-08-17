import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const RoutesMain = () => {
  return (
    <Routes>

      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>


    </Routes>
  );
};

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/page";
import Analyse from "./pages/analyse/page";
import Result from "./pages/analyse/result/page";
import Dashboard from "./pages/dashboard/page";
import Login from "./pages/auth/login/page";
import Register from "./pages/auth/register/page";
import ProtectedRoute from "./protectedRoute";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/analyse" element={<Analyse />}>
          {" "}
        </Route>
        <Route path="/analyse/result" element={<Result />}>
          {" "}
        </Route>
        <Route
          path="/user/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {" "}
        </Route>
        <Route path="/auth/login" element={<Login />}>
          {" "}
        </Route>
        <Route path="/auth/register" element={<Register />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

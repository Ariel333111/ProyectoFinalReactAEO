// src/components/AdminRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const RutaAdmin = ({ children }) => {
  const { user } = useAuth();
  return user?.role === "admin" ? children : <Navigate to="/Login" />;
};

export default RutaAdmin;

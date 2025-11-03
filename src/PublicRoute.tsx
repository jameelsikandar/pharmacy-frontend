import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const token = document.cookie.includes("token=");

  return token ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRoute;

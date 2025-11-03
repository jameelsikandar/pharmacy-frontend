import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/SideBar";

const Layout = () => {
  const location = useLocation();

  // if on login route, don't show layout UI
  if (location.pathname === "/login") {
    return <Outlet />;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col h-screen max-h-screen flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

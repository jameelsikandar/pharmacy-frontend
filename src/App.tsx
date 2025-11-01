import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Sidebar from "./components/SideBar";

// Pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Inventory from "./pages/Inventory/Inventory";
import POS from "./pages/POS/POS";
import Client from "./pages/Client/Client";
import Suppliers from "./pages/Suppliers/Suppliers";
import Reports from "./pages/Reports/Reports";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex flex-col h-screen max-h-screen flex-1 ">
        <LoginPage />
        {/* <InventoryPage /> */}
      </div>
    </div>
  );
}

export default App;

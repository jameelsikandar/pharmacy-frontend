import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import POS from "./pages/POS/POS.tsx";
import Inventory from "./pages/Inventory/Inventory.tsx";
import Client from "./pages/Client/Client.tsx";
import Reports from "./pages/Reports/Reports.tsx";
import Suppliers from "./pages/Suppliers/Suppliers.tsx";
import ProtectedRoutes from "./ProtectedRoutes.tsx";
import LoginPage from "./pages/Login/LoginPage.tsx";
import AOS from "aos";
import "aos/dist/aos.css";
import PublicRoute from "./PublicRoute.tsx";

const router = createBrowserRouter([
  // pubilc route /login
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },

  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <Layout />
      </ProtectedRoutes>
    ),
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "pos", element: <POS /> },
      { path: "inventory", element: <Inventory /> },
      { path: "client", element: <Client /> },
      { path: "reports", element: <Reports /> },
      { path: "suppliers", element: <Suppliers /> },
    ],
  },
]);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });

    window.scrollTo(0, 0);
  }, []);

  return <RouterProvider router={router} />;
}

export default App;

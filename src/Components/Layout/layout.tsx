import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Sidebar from "../Sidebar/sidebar";

const Layout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const handleLogout = () => {
    console.log("Logout initiated");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} handleLogout={handleLogout} />
      <main
        className={` flex  ${
          isSidebarOpen ? "lg:ml-64" : ""
        } `}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

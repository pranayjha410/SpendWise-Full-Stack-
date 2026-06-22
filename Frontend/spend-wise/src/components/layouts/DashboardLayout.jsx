import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = ({ children, activeMenu }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">

      {/* Sidebar */}
      <Sidebar
        activeMenu={activeMenu}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main content */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">

        {/* Topbar */}
        <Topbar onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;
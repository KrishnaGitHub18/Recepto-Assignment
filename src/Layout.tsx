import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "./asset/image/logo.png";
import {
  HomeOutlined,
  PieChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Layout = () => {
  const location = useLocation();

  const navItems = [
    { path: "/a/leads", label: "Leads", icon: <HomeOutlined /> },
    { path: "/a/analytics", label: "Analytics", icon: <PieChartOutlined /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-[15%] border-r border-gray-200 bg-white">
        <img src={logo} alt="Logo" className="mx-auto px-10 py-7" />
        <hr />
        <div className="p-6">
          <h2 className="text-xs mb-4 text-gray-500">MAIN</h2>

          {navItems.map(({ path, label, icon }) => (
            <Link key={path} to={path}>
              <div
                className={`py-2 px-4 flex items-center rounded-lg gap-2 my-2 transition-colors duration-200 cursor-pointer ${
                  isActive(path)
                    ? "bg-[#e1ecfc] text-blue-600 font-medium"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {icon}
                <span>{label}</span>
              </div>
            </Link>
          ))}

          <h2 className="text-xs mb-4 text-gray-500 mt-8">MORE</h2>
          <div className="py-2 px-4 flex items-center gap-2 text-gray-500 rounded-lg hover:bg-gray-100 cursor-pointer">
            <SettingOutlined />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="w-[85%] p-6 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

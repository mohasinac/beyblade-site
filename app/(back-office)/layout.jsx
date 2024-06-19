import NavBar from "@/components/backoffice/NavBar";
import Sidebar from "@/components/backoffice/Sidebar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-full">
        <NavBar />
        {/* Main */}
        <main>{children}</main>
      </div>
    </div>
  );
}

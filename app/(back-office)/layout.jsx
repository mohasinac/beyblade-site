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
        <main className="ml-60  p-8 bg-slate-900 text-slate-50 min-h-screen mt-16">
          {children}
        </main>
      </div>
    </div>
  );
}

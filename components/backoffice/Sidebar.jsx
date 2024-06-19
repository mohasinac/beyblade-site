import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="bg-slate-700 space-y-6 w-60 h-screen text-slate-50 p-3 fixed left-0 top-0">
      <Link className="mb-6" href="#">
        Logo
      </Link>
      <div className="space-y-3 flex flex-col">
        <Link href="#">Dashboard</Link>
        <Link href="#">Catalogue</Link>
        <Link href="#">Customers</Link>
        <Link href="#">International</Link>
        <Link href="#">Locations</Link>
        <Link href="#">Online Store</Link>
        <Link href="#">Orders</Link>
        <Link href="#">Pages</Link>
        <Link href="#">Sellers</Link>
        <Link href="#">Settings</Link>
        <Link href="#">Staff</Link>
      </div>
    </div>
  );
}

import React from "react";
import Icons from "./iconsKeys";
import { ShoppingCart } from "lucide-react";

export default function SmallCard({ title, sales, icon, className }) {
  const Icon = Icons[icon] || ShoppingCart;
  return (
    <div className="rounded-lg shadow-lg justify-between bg-slate-700 p-4">
      <div className="flex space-x-4">
        <div
          className={` w-8 h-8  rounded-full flex items-center  justify-center ${className}`}
        >
          <Icon className="" />
        </div>

        <div className="">
          <p>{title}</p>
          <h3>{sales}</h3>
        </div>
      </div>
    </div>
  );
}

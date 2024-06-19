import React from "react";
import Icons from "./iconsKeys";
import { Layers } from "lucide-react";

export default function LargeCard({ className, title, icon, sales }) {
  const Icon = Icons[icon] || Layers;
  return (
    <div
      className={`rounded-lg  text-white shadow-md p-8 flex items-center flex-col gap-2 ${className}`}
    >
      <Icon />
      <h4>{title}</h4>
      <h2 className="text-2xl lg:text-3xl ">{sales}$</h2>
    </div>
  );
}

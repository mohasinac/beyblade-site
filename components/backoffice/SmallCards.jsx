import React from "react";
import SmallCard from "./SmallCard";

export default function SmallCards() {
  const orderStats = [
    {
      title: "Total Orders",
      sales: 110,
      color: "bg-green-600",
      icon: "Layers",
    },
    {
      title: "Yesterday Orders",
      sales: 110,
      color: "bg-orange-600",
      icon: "Layers",
    },
    {
      title: "This Month",
      sales: 110,
      color: "bg-blue-600",
      icon: "Cart",
    },
    {
      title: "Today Orders",
      sales: 110,
      color: "bg-purple-600",
      icon: "CreditCard",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 py-8">
      {orderStats.map((os, i) => (
        <SmallCard
          key={i}
          className={os.color}
          title={os.title}
          icon={os.icon}
          sales={os.sales}
        />
      ))}
    </div>
  );
}

import Heading from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/LargeCards";
import SmallCards from "@/components/backoffice/SmallCards";
import React from "react";

const Page = () => {
  return (
    <div>
      <Heading title={"Dashboard Overview"} />
      <LargeCards />
      <SmallCards />
      {/* charts */}
      {/*  Recent Orders Table */}
    </div>
  );
};

export default Page;

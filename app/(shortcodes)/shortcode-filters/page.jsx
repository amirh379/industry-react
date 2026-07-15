import Footer1 from "@/components/footers/Footer1";
import Header22 from "@/components/headers/Header22";
import Filters from "@/components/shortcodes/Filters";
import React from "react";

export const metadata = {
  title:"ثامن فرفورژه",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header22 />
        <div className="page-content bg-white">
          <Filters />
        </div>
        <Footer1 />
      </div>
    </>
  );
}

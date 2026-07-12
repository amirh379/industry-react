import Footer15 from "@/components/footers/Footer15";
import Header22 from "@/components/headers/Header22";
import Pagination from "@/components/shortcodes/Pagination";
import React from "react";

export const metadata = {
  title:
    "Shortcode Paginations || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header22 />
        <div className="page-content bg-white">
          <Pagination />
        </div>
        <Footer15 />
      </div>
    </>
  );
}

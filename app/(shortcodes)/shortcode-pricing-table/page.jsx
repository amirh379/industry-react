import Footer15 from "@/components/footers/Footer15";
import Header22 from "@/components/headers/Header22";
import Pricing from "@/components/shortcodes/Pricing";
import React from "react";

export const metadata = {
  title:
    "Shortcode Pricing Table || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header22 />
        <div className="page-content bg-white">
          <Pricing />
        </div>
        <Footer15 />
      </div>
    </>
  );
}

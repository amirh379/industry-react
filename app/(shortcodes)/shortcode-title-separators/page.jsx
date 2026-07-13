import Footer1 from "@/components/footers/Footer1";
import Header22 from "@/components/headers/Header22";
import TitleSeparator from "@/components/shortcodes/TitleSeparator";
import React from "react";

export const metadata = {
  title:
    "Shortcode Title Seperator || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header22 />
        <div className="page-content bg-white">
          <TitleSeparator />
        </div>
        <Footer1 />
      </div>
    </>
  );
}

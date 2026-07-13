import Footer1 from "@/components/footers/Footer1";
import Header22 from "@/components/headers/Header22";
import IconStyles from "@/components/shortcodes/IconStyles";
import React from "react";

export const metadata = {
  title:
    "Shortcode Icon Box Styles || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header22 />
        <div className="page-content bg-white">
          <IconStyles />
        </div>
        <Footer1 />
      </div>
    </>
  );
}

import Footer1 from "@/components/footers/Footer1";
import Header22 from "@/components/headers/Header22";
import Team from "@/components/shortcodes/Team";
import React from "react";

export const metadata = {
  title:
    "Shortcode Team || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header22 />
        <div className="page-content bg-white">
          <Team />
        </div>
        <Footer1 />
      </div>
    </>
  );
}

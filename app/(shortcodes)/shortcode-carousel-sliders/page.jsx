import Footer1 from "@/components/footers/Footer1";
import Header22 from "@/components/headers/Header22";
import Sliders from "@/components/shortcodes/Sliders";
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
          <Sliders />
        </div>
        <Footer1 />
      </div>
    </>
  );
}

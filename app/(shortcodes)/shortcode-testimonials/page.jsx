import Footer1 from "@/components/footers/Footer1";
import Header22 from "@/components/headers/Header22";
import Testimonials from "@/components/shortcodes/Testimonials";
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
          <Testimonials />
        </div>
        <Footer1 />
      </div>
    </>
  );
}

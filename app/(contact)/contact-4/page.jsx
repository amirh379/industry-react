import Contact4 from "@/components/contact/Contact4";
import Footer15 from "@/components/footers/Footer15";
import Header22 from "@/components/headers/Header22";
import React from "react";

export const metadata = {
  title: "Contact 4 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header22 />
        <div className="page-content bg-white">
          <Contact4 />
        </div>
        <Footer15 />
      </div>
    </>
  );
}

import Contact2 from "@/components/contact/Contact2";
import Footer15 from "@/components/footers/Footer15";
import Header22 from "@/components/headers/Header22";
import React from "react";

export const metadata = {
  title: "Contact 2 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header22 />
        <div className="page-content bg-white">
          <Contact2 />
        </div>
        <Footer15 />
      </div>
    </>
  );
}

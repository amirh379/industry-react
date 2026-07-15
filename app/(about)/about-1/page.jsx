import Footer1 from "@/components/footers/Footer1";
import About from "@/components/about/CompanyIntro";
import Banner from "@/components/about/Banner";
import Header22 from "@/components/headers/Header22";
import React from "react";

export const metadata = {
  title: "ثامن فرفورژه",
  description: "معرفی شرکت ثامن فرفورژه",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header22 />
        <div className="page-content bg-white">
          <Banner />
          <About />
        </div>
        <Footer1 />
      </div>
    </>
  );
}

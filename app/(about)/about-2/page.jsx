import Footer1 from "@/components/footers/Footer1";
import About2 from "@/components/about/About2";
import Banner from "@/components/about/Banner";
import Progress from "@/components/about/Progress";

import Header22 from "@/components/headers/Header22";
import Services from "@/components/homes/home-1/Services";
import About from "@/components/homes/home-3/About";
import React from "react";

export const metadata = {
  title: "ثامن فرفورژه",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header22 />
        <div className="page-content bg-white">
          <Banner />
          <About />
          <About2 />
          <Services />
          <Progress />
        </div>
        <Footer1 />
      </div>
    </>
  );
}

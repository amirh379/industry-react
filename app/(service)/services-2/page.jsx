import Footer1 from "@/components/footers/Footer1";
import Header22 from "@/components/headers/Header22";
import Service from "@/components/homes/home-2/Service";

import Banner2 from "@/components/service/Banner2";
import Cta from "@/components/service/Cta";

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
          <Banner2 />
          <div className="content-block">
            <Cta />
            <Service />
          </div>
        </div>
        <Footer1 />
      </div>
    </>
  );
}

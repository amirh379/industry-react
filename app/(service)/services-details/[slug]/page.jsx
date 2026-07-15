import Footer1 from "@/components/footers/Footer1";
import Header22 from "@/components/headers/Header22";
import Banner3 from "@/components/service/Banner3";
import ServiceDetails from "@/components/service/ServiceDetails";
import { allServices } from "@/data/services";

import React from "react";

export const metadata = {
  title:"ثامن فرفورژه",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page({ params }) {
  const slug = params.slug.split("%20").join(" ");
  const serviceItem =
    allServices.filter((elm) => elm.title == slug)[0] || allServices[0];
  return (
    <>
      <div className="page-wraper  ">
        <Header22 />
        <div className="page-content bg-white">
          <Banner3 />
          <div className="content-block">
            <ServiceDetails serviceItem={serviceItem} />
          </div>
        </div>
        <Footer1 />
      </div>
    </>
  );
}

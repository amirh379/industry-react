import Footer1 from "@/components/footers/Footer1";
import Header22 from "@/components/headers/Header22";
import SalesExperts from "@/components/contact/SalesExperts";
import React from "react";

export const metadata = {
  title: "ثامن فرفورژه",
  description: "صنعت - قالب کارخانه و صنعتی",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header22 />
        <div className="page-content bg-white">
          <SalesExperts />
        </div>
        <Footer1 />
      </div>
    </>
  );
}

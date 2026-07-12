import Footer15 from "@/components/footers/Footer15";
import Header22 from "@/components/headers/Header22";
import HelpDesk from "@/components/otherPages/HelpDesk";
import React from "react";

export const metadata = {
  title: "مرکز پشتیبانی || صنعت - قالب کارخانه و صنعتی",
  description: "صنعت - قالب کارخانه و صنعتی",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header22 />
        <div className="page-content bg-white">
          <HelpDesk />
        </div>
        <Footer15 />
      </div>
    </>
  );
}

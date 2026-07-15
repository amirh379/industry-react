import Footer1 from "@/components/footers/Footer1";
import Header22 from "@/components/headers/Header22";
import HelpDesk from "@/components/otherPages/HelpDesk";
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
          <HelpDesk />
        </div>
        <Footer1 />
      </div>
    </>
  );
}

import Footer1 from "@/components/footers/Footer1";
import Header22 from "@/components/headers/Header22";
import Representatives from "@/components/otherPages/Representatives";
import React from "react";

export const metadata = {
  title: "ثامن فرفورژه",
  description: "نمایندگی‌های ثامن فرفورژه در سراسر کشور",
};

export default function page() {
  return (
    <>
      <div className="page-wraper">
        <Header22 />
        <div className="page-content bg-white">
          <Representatives />
        </div>
        <Footer1 />
      </div>
    </>
  );
}

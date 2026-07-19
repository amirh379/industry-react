import Footer1 from "@/components/footers/Footer1";
import Contact1 from "@/components/contact/Contact1";
import Header22 from "@/components/headers/Header22";
import React from "react";

export const metadata = {
  title: "درخواست مشاوره فنی | ثامن فرفورژه",
  description: "درخواست مشاوره فنی شرکت تولیدی ثامن فرفورژه",
};

export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header22 />
        <div className="page-content bg-white">
          <Contact1 />
        </div>
        <Footer1 />
      </div>
    </>
  );
}

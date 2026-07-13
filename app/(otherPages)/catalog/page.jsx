import Footer1 from "@/components/footers/Footer1";
import Header22 from "@/components/headers/Header22";
import Catalog from "@/components/otherPages/Catalog";
import React from "react";

export const metadata = {
  title: "کاتالوگ || ثامن فرفورژه",
  description: "دریافت کاتالوگ محصولات ثامن فرفورژه",
};

export default function page() {
  return (
    <>
      <div className="page-wraper">
        <Header22 />
        <div className="page-content bg-white">
          <Catalog />
        </div>
        <Footer1 />
      </div>
    </>
  );
}

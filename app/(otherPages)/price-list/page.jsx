import Footer15 from "@/components/footers/Footer15";
import Header22 from "@/components/headers/Header22";
import PriceList from "@/components/otherPages/PriceList";
import React from "react";

export const metadata = {
  title: "لیست قیمت || ثامن فرفورژه",
  description: "لیست قیمت محصولات ثامن فرفورژه",
};

export default function page() {
  return (
    <>
      <div className="page-wraper">
        <Header22 />
        <div className="page-content bg-white">
          <PriceList />
        </div>
        <Footer15 />
      </div>
    </>
  );
}

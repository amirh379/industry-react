import Footer15 from "@/components/footers/Footer15";
import Header22 from "@/components/headers/Header22";
import Factories from "@/components/otherPages/Factories";
import React from "react";

export const metadata = {
  title: "کارخانه‌ها || ثامن فرفورژه",
  description: "کارخانه‌های ثامن فرفورژه",
};

export default function page() {
  return (
    <>
      <div className="page-wraper">
        <Header22 />
        <div className="page-content bg-white">
          <Factories />
        </div>
        <Footer15 />
      </div>
    </>
  );
}

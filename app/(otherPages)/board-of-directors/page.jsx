import Footer15 from "@/components/footers/Footer15";
import Header22 from "@/components/headers/Header22";
import BoardOfDirectors from "@/components/otherPages/BoardOfDirectors";
import React from "react";

export const metadata = {
  title: "هیئت مدیره || ثامن فرفورژه",
  description: "اعضای هیئت مدیره ثامن فرفورژه",
};

export default function page() {
  return (
    <>
      <div className="page-wraper">
        <Header22 />
        <div className="page-content bg-white">
          <BoardOfDirectors />
        </div>
        <Footer15 />
      </div>
    </>
  );
}

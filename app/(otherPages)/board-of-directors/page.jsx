import Footer1 from "@/components/footers/Footer1";
import Header22 from "@/components/headers/Header22";
import BoardOfDirectors from "@/components/otherPages/BoardOfDirectors";
import React from "react";

export const metadata = {
  title: "ثامن فرفورژه",
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
        <Footer1 />
      </div>
    </>
  );
}

import Footer1 from "@/components/footers/Footer1";
import Header22 from "@/components/headers/Header22";
import PrivacyPolicy from "@/components/otherPages/PrivacyPolicy";
import React from "react";

export const metadata = {
  title: "قوانین حریم خصوصی || صنعت - قالب کارخانه و صنعتی",
  description: "صنعت - قالب کارخانه و صنعتی",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header22 />
        <div className="page-content bg-white">
          <PrivacyPolicy />
        </div>
        <Footer1 />
      </div>
    </>
  );
}

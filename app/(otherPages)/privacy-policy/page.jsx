import Footer15 from "@/components/footers/Footer15";
import Header1 from "@/components/headers/Header1";
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
        <Header1 />
        <div className="page-content bg-white">
          <PrivacyPolicy />
        </div>
        <Footer15 />
      </div>
    </>
  );
}

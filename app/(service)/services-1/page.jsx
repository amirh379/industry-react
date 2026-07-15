import Footer1 from "@/components/footers/Footer1";
import Testimonials from "@/components/common/Testimonials2";
import Header22 from "@/components/headers/Header22";
import About from "@/components/service/About";
import Banner from "@/components/service/Banner";
import Contact from "@/components/service/Contact";
import Facts from "@/components/service/Facts";
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
          <Banner />
          <div className="content-block">
            <About />
            <Facts />
            <div className="section-full content-inner mb-4">
              <Testimonials />
            </div>
            <Contact />
          </div>
        </div>
        <Footer1 />
      </div>
    </>
  );
}

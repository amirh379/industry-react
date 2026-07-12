import ClientSlider from "@/components/common/ClientSlider";
import Link from "next/link";
import Footer15 from "@/components/footers/Footer15";
import Header22 from "@/components/headers/Header22";
import Team1 from "@/components/team/Team1";
import React from "react";

export const metadata = {
  title: "تیم ما || صنعت - قالب کارخانه و صنعتی",
  description: "صنعت - قالب کارخانه و صنعتی",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header22 />
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">تیم ما</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>خانه</Link>
                    </li>
                    <li>تیم ما</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>

          <div className="content-block">
            <Team1 />
            <div className="section-full content-inner bg-gray">
              <div className="container overflow-hidden">
                <ClientSlider />
              </div>
            </div>
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}

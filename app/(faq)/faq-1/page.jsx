import Faq1 from "@/components/faq/Faq1";
import Footer15 from "@/components/footers/Footer15";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "سوالات متداول || صنعت - قالب کارخانه و صنعتی",
  description: "صنعت - قالب کارخانه و صنعتی",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr3.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">سوالات متداول</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href="/">خانه</Link>
                    </li>
                    <li>سوالات متداول</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>

          <div className="content-block">
            <Faq1 />
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}

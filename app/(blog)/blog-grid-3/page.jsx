import Footer1 from "@/components/footers/Footer1";
import Blog4 from "@/components/blogs/Blog4";
import Header22 from "@/components/headers/Header22";
import React from "react";
import Link from "next/link";
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
          {" "}
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr1.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">بلاگ</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>خانه</Link>
                    </li>
                    <li>بلاگ</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>
          <div className="content-area">
            <Blog4 />
          </div>
        </div>
        <Footer1 />
      </div>
    </>
  );
}

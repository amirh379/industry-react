import Link from "next/link";
import Footer16 from "@/components/footers/Footer16";
import Header22 from "@/components/headers/Header22";
import ShopCart from "@/components/shop/ShopCart";
import ShopFeatures from "@/components/shop/ShopFeatures";
import React from "react";

export const metadata = {
  title: "سبد خرید || صنعت - قالب فارسی کارخانه و صنعتی",
  description: "صنعت - قالب فارسی کارخانه و صنعتی",
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
                <h1 className="text-white">سبد خرید</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>خانه</Link>
                    </li>
                    <li>سبد خرید</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>
          <ShopCart />

          <ShopFeatures />
        </div>
        <Footer16 />
      </div>
    </>
  );
}

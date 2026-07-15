import Footer1 from "@/components/footers/Footer1";
import Link from "next/link";
import Header22 from "@/components/headers/Header22";
import ShopFeatures from "@/components/shop/ShopFeatures";
import Wishlist from "@/components/shop/Wishlist";
import React from "react";

export const metadata = {
  title: "ثامن فرفورژه",
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
                <h1 className="text-white">لیست علاقه‌مندی‌ها</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>خانه</Link>
                    </li>
                    <li>لیست علاقه‌مندی‌ها</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>
          <Wishlist />

          <ShopFeatures />
        </div>
        <Footer1 />
      </div>
    </>
  );
}

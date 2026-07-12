import Footer15 from "@/components/footers/Footer15";
import Link from "next/link";
import Header22 from "@/components/headers/Header22";
import ShopFeatures from "@/components/shop/ShopFeatures";
import ShopSidebar from "@/components/shop/ShopSidebar";
import React from "react";

export const metadata = {
  title: "محصولات || ثامن فرفورژه",
  description: "محصولات ثامن فرفورژه",
};

export default function page() {
  return (
    <>
      <div className="page-wraper">
        <Header22 />
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">محصولات</h1>
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>خانه</Link>
                    </li>
                    <li>محصولات</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <ShopSidebar />
          <ShopFeatures />
        </div>
        <Footer15 />
      </div>
    </>
  );
}

import React from "react";
import Link from "next/link";
export default function Banner() {
  return (
    <div
      className="dlab-bnr-inr overlay-black-middle bg-pt"
      style={{ backgroundImage: "url(/images/banner/bnr2.jpg)" }}
    >
      <div className="container">
        <div className="dlab-bnr-inr-entry">
          <h1 className="text-white">خدمات</h1>
          {/* Breadcrumb row */}
          <div className="breadcrumb-row">
            <ul className="list-inline">
              <li>
                <Link href={`/`}>خانه</Link>
              </li>
              <li>خدمات</li>
            </ul>
          </div>
          {/* Breadcrumb row END */}
        </div>
      </div>
    </div>
  );
}

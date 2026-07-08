import React from "react";
import Link from "next/link";
export default function Banner() {
  return (
    <div
      className="dlab-bnr-inr overlay-black-middle text-center bg-pt"
      style={{ backgroundImage: "url(/images/banner/bnr3.jpg)" }}
    >
      <div className="container">
        <div className="dlab-bnr-inr-entry align-m text-center">
          <h1 className="text-white">درباره ما</h1>
          {/* Breadcrumb row */}
          <div className="breadcrumb-row">
            <ul className="list-inline">
              <li>
                <Link href={`/`}>خانه</Link>
              </li>
              <li>درباره ما</li>
            </ul>
          </div>
          {/* Breadcrumb row END */}
        </div>
      </div>
    </div>
  );
}

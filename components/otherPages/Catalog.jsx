import Link from "next/link";
import React from "react";
import { catalogs } from "@/data/catalogs";

export default function Catalog() {
  return (
    <>
      {/* inner page banner */}
      <div
        className="dlab-bnr-inr overlay-black-middle text-center bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr2.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry align-m text-center">
            <h1 className="text-white">دریافت کاتالوگ</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>خانه</Link>
                </li>
                <li>دریافت کاتالوگ</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      <div className="content-block">
        <div className="section-full content-inner bg-gray">
          <div className="container">
            <div className="section-head text-black text-center">
              <h2 className="title">کاتالوگ‌های قابل دانلود</h2>
              <p>
                کاتالوگ‌های فنی و معرفی محصولات و خدمات ما را از فهرست زیر
                دریافت کنید.
              </p>
            </div>
            <div className="row">
              {catalogs.map((item) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={item.id}>
                  <div className="catalog-card m-b30 bg-white box-shadow radius-sm text-center">
                    <div className="catalog-card-icon text-primary">
                      <i className="fas fa-file-pdf" />
                    </div>
                    <h5 className="dlab-tilte">{item.title}</h5>
                    <p>{item.description}</p>
                    <span className="catalog-card-size">{item.fileSize}</span>
                    <a
                      href={item.fileHref}
                      download
                      className="site-button radius-no btnhover13 catalog-btn catalog-download-btn"
                    >
                      <i className="fas fa-download m-r5" />
                      دانلود
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PdfDownloadCards({
  pageTitle,
  breadcrumbLabel,
  sectionTitle,
  sectionDescription,
  items,
}) {
  return (
    <>
      <div
        className="dlab-bnr-inr overlay-black-middle text-center bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr2.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry align-m text-center">
            <h1 className="text-white">{pageTitle}</h1>
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>خانه</Link>
                </li>
                <li>{breadcrumbLabel}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="section-full content-inner bg-gray">
          <div className="container">
            <div className="section-head text-black text-center">
              <h2 className="title">{sectionTitle}</h2>
              <p>{sectionDescription}</p>
            </div>
            <div className="row">
              {items.map((item) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={item.id}>
                  <div className="catalog-card m-b30 bg-white box-shadow radius-sm text-center">
                    <div className="catalog-card-image">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        width={400}
                        height={260}
                      />
                    </div>
                    <h5 className="dlab-tilte">{item.title}</h5>
                    <p>{item.description}</p>
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

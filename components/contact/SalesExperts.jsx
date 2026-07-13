import Link from "next/link";
import React from "react";
import {
  externalSalesExperts,
  internalSalesExperts,
} from "@/data/salesExperts";

function ExpertCard({ expert }) {
  const telHref = expert.phone.replace(/-/g, "").replace("+", "");

  return (
    <div className="col-lg-4 col-md-6 m-b30">
      <div className="representative-card bg-white box-shadow radius-sm">
        <h4 className="representative-title">{expert.name}</h4>
        <p className="representative-city m-b20">{expert.position}</p>
        <ul className="representative-social">
          <li>
            <a href={`tel:${telHref}`} aria-label="تماس تلفنی">
              <i className="fas fa-phone-alt" />
            </a>
          </li>
          <li>
            <a
              href={expert.baleHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="بله"
            >
              <img
                src="/images/social/bale-black.png"
                alt="بله"
                width={20}
                height={20}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function SalesExperts() {
  return (
    <>
      <div
        className="dlab-bnr-inr overlay-black-middle text-center bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry align-m text-center">
            <h1 className="text-white">کارشناسان فروش</h1>
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>خانه</Link>
                </li>
                <li>کارشناسان فروش</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="section-full content-inner bg-gray">
          <div className="container">
            <div className="section-head text-black text-center">
              <h2 className="title">کارشناسان فروش داخلی و صادراتی ما</h2>
              <p>
                برای دریافت مشاوره تخصصی و ثبت سفارش، می‌توانید مستقیماً با
                کارشناس مربوطه در تماس باشید.
              </p>
            </div>

            <div className="expert-section-title">
              <h3 className="title">
                <i className="fas fa-flag text-primary" /> کارشناسان فروش
                داخلی
              </h3>
              <div className="expert-section-line expert-section-line-primary" />
            </div>
            <div className="row">
              {internalSalesExperts.map((expert) => (
                <ExpertCard expert={expert} key={expert.id} />
              ))}
            </div>

            <div className="expert-section-title m-t30">
              <h3 className="title">
                <i className="fas fa-globe-americas expert-section-icon-external" />{" "}
                کارشناسان فروش خارجی (صادرات)
              </h3>
              <div className="expert-section-line expert-section-line-external" />
            </div>
            <div className="row">
              {externalSalesExperts.map((expert) => (
                <ExpertCard expert={expert} key={expert.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

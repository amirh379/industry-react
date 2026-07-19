import Link from "next/link";
import React from "react";
import {
  externalSalesExperts,
  internalSalesExperts,
} from "@/data/salesExperts";

const borderThemes = ["navy", "gold"];

function ExpertCard({ expert, theme }) {
  const telHref = expert.phone.replace(/-/g, "").replace("+", "");

  return (
    <div className="col-lg-4 col-md-6 m-b30">
      <div
        className={`expert-person-card bg-white box-shadow radius-sm border-theme-${theme}`}
      >
        <div className="expert-person-media">
          {/* Image slot ready for upcoming expert photos */}
        </div>
        <div className="expert-person-info">
          <h4 className="expert-person-title">{expert.name}</h4>
          <p className="expert-person-position m-b20">{expert.position}</p>
          <ul className="expert-person-social">
            <li>
              <a
                href={`tel:${telHref}`}
                aria-label="تماس تلفنی"
                className="social-phone"
              >
                <i className="fas fa-phone-alt" />
              </a>
            </li>
            <li>
              <a
                href={expert.baleHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="بله"
                className="social-bale"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/icons/iran-map.svg"
                  alt=""
                  className="expert-section-icon-img"
                  width={34}
                  height={34}
                />
                کارشناسان فروش داخلی
              </h3>
              <div className="expert-section-line expert-section-line-primary" />
            </div>
            <div className="row">
              {internalSalesExperts.map((expert, index) => (
                <ExpertCard
                  expert={expert}
                  key={expert.id}
                  theme={borderThemes[index % borderThemes.length]}
                />
              ))}
            </div>

            <div className="expert-section-title m-t30">
              <h3 className="title">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/icons/globe-color.svg"
                  alt=""
                  className="expert-section-icon-img"
                  width={34}
                  height={34}
                />
                کارشناسان فروش خارجی (صادرات)
              </h3>
              <div className="expert-section-line expert-section-line-gold" />
            </div>
            <div className="row">
              {externalSalesExperts.map((expert, index) => (
                <ExpertCard
                  expert={expert}
                  key={expert.id}
                  theme={borderThemes[index % borderThemes.length]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

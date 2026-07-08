import Link from "next/link";
import Image from "next/image";
import React from "react";
import { toPersianDigits } from "@/utlis/toPersianDigits";
import {
  externalSalesExperts,
  internalSalesExperts,
  socialIconClasses,
} from "@/data/salesExperts";

function ExpertCard({ expert, isExternal }) {
  const telHref = expert.phone.replace(/-/g, "");
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div
        className={`expert-card m-b30 bg-white box-shadow radius-sm ${
          isExternal ? "expert-card-external" : ""
        }`}
      >
        <div className="expert-card-media">
          <Image src={expert.image} alt={expert.name} width={358} height={358} />
        </div>
        <div className="expert-card-info p-a20">
          <h4 className="dlab-title m-b5">{expert.name}</h4>
          <span className="dlab-position d-block m-b15">{expert.position}</span>
          <div className="expert-card-regions m-b15">
            <h6 className="m-b10">
              <i className="ti-location-pin" /> {expert.regionLabel}
            </h6>
            <ul className="expert-region-list list-inline">
              {expert.regions.map((region, i) => (
                <li key={i} className="expert-region-badge">
                  {region}
                </li>
              ))}
            </ul>
          </div>
          <div className="expert-card-phone m-b15">
            <a href={`tel:${telHref}`}>
              <i className="fas fa-phone-alt" />
              {toPersianDigits(expert.phone)}
            </a>
          </div>
          <ul className="dlab-social-icon dez-border">
            {expert.socialLinks.map((social, i) => (
              <li key={i}>
                <a
                  className={`site-button circle-sm outline ${social.platform}`}
                  href={social.href}
                >
                  <i className={socialIconClasses[social.platform]} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function SalesExperts() {
  return (
    <>
      {/* inner page banner */}
      <div
        className="dlab-bnr-inr overlay-black-middle text-center bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry align-m text-center">
            <h1 className="text-white">کارشناسان فروش</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>خانه</Link>
                </li>
                <li>
                  <Link href={`/contact-1`}>تماس با ما</Link>
                </li>
                <li>کارشناسان فروش</li>
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
              <h2 className="title">کارشناسان فروش داخلی و صادراتی ما</h2>
              <p>
                برای دریافت مشاوره تخصصی و ثبت سفارش، بر اساس استان یا کشور
                محل فعالیت خود می‌توانید مستقیماً با کارشناس مربوطه در تماس
                باشید.
              </p>
            </div>

            {/* Internal experts */}
            <div className="expert-section-title">
              <h3 className="title">
                <i className="fas fa-flag text-primary" /> کارشناسان فروش
                داخلی
              </h3>
              <div className="expert-section-line expert-section-line-primary" />
            </div>
            <div className="row">
              {internalSalesExperts.map((expert) => (
                <ExpertCard expert={expert} isExternal={false} key={expert.id} />
              ))}
            </div>

            {/* External experts */}
            <div className="expert-section-title m-t30">
              <h3 className="title">
                <i className="fas fa-globe-americas expert-section-icon-external" />{" "}
                کارشناسان فروش خارجی (صادرات)
              </h3>
              <div className="expert-section-line expert-section-line-external" />
            </div>
            <div className="row">
              {externalSalesExperts.map((expert) => (
                <ExpertCard expert={expert} isExternal={true} key={expert.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

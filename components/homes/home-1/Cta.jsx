import React from "react";
import Link from "next/link";
import Image from "next/image";
import { toPersianDigits } from "@/utlis/toPersianDigits";
import { companyInfo } from "@/data/company";

export default function Cta() {
  return (
    <div
      className="section-full bg-img-fix content-inner-2 overlay-black-dark contact-action style2"
      style={{ backgroundImage: "url(/images/background/bg2.jpg)" }}
    >
      <div className="container">
        <div className="row relative">
          <div
            className="col-md-12 col-lg-8 wow fadeInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="contact-no-area">
              <h2 className="title">
                جهت مشاوره برای نیازهای اختصاصی خود، با کارشناسان ما در ارتباط
                باشید
              </h2>
              <div className="contact-no">
                <div className="contact-left">
                  <h3 className="no">
                    <i className="sl-call-in" />
                    {toPersianDigits(companyInfo.phone)}
                  </h3>
                </div>
                <div className="contact-right">
                  <Link
                    href={`/sales-experts`}
                    className="site-button appointment-btn"
                  >
                    درخواست وقت مشاوره
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-12 col-lg-4 contact-img-bx wow fadeInRight relative"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <Image alt="" src="/images/company/hero-door.jpg" width="500" height="542" />
          </div>
        </div>
      </div>
    </div>
  );
}

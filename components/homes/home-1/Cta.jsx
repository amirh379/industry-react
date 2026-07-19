import React from "react";
import Link from "next/link";
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
          <div className="col-md-12">
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
                    href={`/technical-consultation`}
                    className="site-button appointment-btn"
                  >
                    درخواست مشاوره
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

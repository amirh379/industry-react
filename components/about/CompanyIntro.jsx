"use client";

import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { companyInfo } from "@/data/company";

export default function CompanyIntro() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="section-full content-inner bg-white">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="title">
              معرفی <span className="text-primary">{companyInfo.name}</span>
            </h2>
            <p>
              {companyInfo.fullName} با بیش از دو دهه تجربه در تولید درب‌های
              فرفورژه، قطعات فلزی و راهکارهای سفارشی، یکی از پیشروان این
              صنعت در منطقه است.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="video-bx m-b30">
                <Image
                  alt={`معرفی ${companyInfo.name}`}
                  src="/images/company/hero-bg.jpg"
                  width={1000}
                  height={560}
                  className="w-100"
                  style={{ objectFit: "cover", borderRadius: "6px" }}
                />
                <div className="video-play-icon">
                  <a
                    onClick={() => setOpen(true)}
                    className="popup-youtube video bg-primary"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
              <div className="content-bx1 text-center">
                <p className="m-b0">
                  ما با تکیه بر دانش فنی، تیم مهندسی مجرب و خط تولید مدرن،
                  محصولاتی باکیفیت و متنوع برای پروژه‌های مسکونی، ویلایی و
                  صنعتی ارائه می‌دهیم. هدف ما همراهی مشتریان از مرحله مشاوره تا
                  تحویل نهایی است.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="_FRZVScwggM"
        onClose={() => setOpen(false)}
      />
    </>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/data/company";

export default function Hero() {
  return (
    <div
      className="hero-sec react-parallax overflow-hidden"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <Image
        className="react-parallax-bgimage"
        alt=""
        style={{
          position: "absolute",
          left: "0%",
          top: 0,
          width: "100%",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          height: 898,
          width: "100%",
          filter: "none",
        }}
        src="/images/company/hero-bg.jpg"
        width={1920}
        height={1024}
        priority
      />
      <div className="react-parallax-content" style={{ position: "relative" }}>
        <div className="hero-section pt-50 home-bnr1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="hero-content">
                  <h1 className="title">{companyInfo.fullName}</h1>
                  <div className="description">
                    بزرگ‌ترین تولیدکننده و صادرکننده انواع درب‌های لوکس، درب‌های
                    پیش‌ساخته، نرده حفاظ و قطعات فرفورژه در خاورمیانه.
                  </div>
                  <div className="buttons">
                    <Link href="/shop-sidebar" className="site-button radius-no btnhover13 catalog-btn">محصولات</Link>
                    <Link
                      href={`/catalog`}
                      className="site-button radius-no btnhover13 catalog-btn"
                    >
                      <i className="fas fa-download m-r5" />
                      دریافت کاتالوگ
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <Image
                  alt="محصولات ثامن فرفورژه"
                  src="/images/company/hero-door.jpg"
                  width="965"
                  height="894"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

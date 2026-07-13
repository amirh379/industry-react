import React from "react";
import Link from "next/link";
import { companyInfo } from "@/data/company";

export default function Hero() {
  return (
    <div className="hero-sec home-hero overlay-black-middle overflow-hidden">
      <div
        className="home-hero-bg"
        style={{ backgroundImage: "url(/images/company/hero-bg.jpg)" }}
      />
      <div className="hero-section pt-50 home-bnr1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="hero-content">
                <h1 className="title">{companyInfo.fullName}</h1>
                <div className="description">
                  بزرگ‌ترین تولیدکننده و صادرکننده انواع درب‌های لوکس، درب‌های
                  پیش‌ساخته، نرده حفاظ و قطعات فرفورژه در خاورمیانه.
                </div>
                <div className="buttons">
                  <Link
                    href="/shop-sidebar"
                    className="site-button radius-no btnhover13 catalog-btn"
                  >
                    محصولات
                  </Link>
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
          </div>
        </div>
      </div>
    </div>
  );
}

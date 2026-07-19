"use client";

import React from "react";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { companyInfo } from "@/data/company";

const heroSlides = [
  {
    backgroundImage: "/images/company/hero-bg.jpg",
  },
  // Duplicate for now so the slider UI is visible; replace with new images later.
  {
    backgroundImage: "/images/company/hero-bg.jpg",
  },
];

export default function Hero() {
  return (
    <div className="hero-sec home-hero overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1200}
        pagination={{
          clickable: true,
          el: ".home-hero-pagination",
        }}
        className="home-hero-slider"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="home-hero-bg"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            />
            <div className="hero-section pt-50 home-bnr1">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-8 col-md-12">
                    <div className="hero-content">
                      <h1 className="title">{companyInfo.fullName}</h1>
                      <div className="description">
                        بزرگ‌ترین تولیدکننده و صادرکننده انواع درب‌های لوکس،
                        درب‌های پیش‌ساخته، نرده حفاظ و قطعات فرفورژه در خاورمیانه.
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
                          <i className="fas fa-download catalog-btn-icon" />
                          دریافت کاتالوگ
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="home-hero-pagination" />
      </Swiper>
    </div>
  );
}

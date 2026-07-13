"use client";

import { samenProducts } from "@/data/samenProducts";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

export default function About() {
  return (
    <div className="section-full bg-gray content-inner about-carousel-ser">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">محصولات ثامن فرفورژه</h2>
          <p>
            طیف کامل محصولات فرفورژه، درب‌های لوکس و سفارشی، و راهکارهای
            تخصصی برای پروژه‌های ساختمانی و ویلایی.
          </p>
        </div>
        <Swiper
          loop
          spaceBetween={30}
          watchSlidesProgress
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={800}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="about-ser-carousel owl-overflow-visible owl-carousel owl-theme owl-btn-center-lr owl-dots-primary-full owl-btn-3 m-b30"
        >
          {samenProducts.map((elm) => (
            <SwiperSlide key={elm.id} className="item">
              <div className="dlab-box service-media-bx">
                <div className="dlab-media">
                  <Link href={elm.href}>
                    <Image
                      width={500}
                      height={357}
                      src={elm.imageSrc}
                      alt={elm.title}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Link>
                </div>
                <div className="dlab-info text-center">
                  <h2 className="dlab-title">
                    <Link href={elm.href}>{elm.title}</Link>
                  </h2>
                  <p>{elm.description}</p>
                  <Link href={elm.href} className="site-button btnhover13">
                    بیشتر بدانید
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

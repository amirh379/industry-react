import React from "react";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/data/company";

export default function About() {
  return (
    <div className="section-full content-inner bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-6 m-b30 wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="our-story">
              <span>داستان ما</span>
              <h2 className="title">
                متعهد به ارائه خدمات با
                <span className="text-primary"> کیفیت بالا</span>
              </h2>
              <h4 className="title">
                {companyInfo.fullName}؛ پیشرو در تولید درب‌های لوکس و قطعات
                فرفورژه
              </h4>
              <p>
                محتوای این بخش به‌زودی به‌روزرسانی می‌شود. ساختار صفحه مطابق
                الگوی درباره شرکت آماده شده است تا امکان جایگزینی متن و تصاویر
                نهایی فراهم باشد.
              </p>
              <Link href={`/factories`} className="site-button btnhover14">
                مشاهده توانمندی‌ها
              </Link>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 m-b30 wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <Image
              className="radius-sm"
              alt={companyInfo.name}
              src="/images/about/pic6.jpg"
              width={600}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

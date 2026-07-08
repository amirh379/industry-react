import React from "react";
import Image from "next/image";
import { toPersianDigits } from "@/utlis/toPersianDigits";
export default function ProjectDetails({ projectItem }) {
  return (
    <div className="section-full content-inner bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-b30">
            <h2 className="text-black font-weight-600 m-b15">
              {projectItem.title}
            </h2>
            <p>
              این پروژه با به‌کارگیری جدیدترین استانداردهای صنعتی و مهندسی
              اجرا شده و توانسته کیفیت و بهره‌وری را به میزان قابل‌توجهی
              افزایش دهد.
            </p>
            <p>
              تیم اجرایی این پروژه با تمرکز بر ایمنی و دقت در زمان‌بندی،
              تمامی مراحل را طبق برنامه پیش برده و نتایج مطلوبی حاصل شده است.
            </p>
            <div className="row widget widget_getintuch widget_getintuch-pro-details m-lr0">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-user" />
                  <strong>کارفرما</strong> مارتین استوارت
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-location-pin" />
                  <strong>موقعیت</strong>لندن، انگلستان
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-ruler-alt-2" />
                  <strong>مساحت</strong>{toPersianDigits("1,200")}متر<sup>۲</sup>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-home" />
                  <strong>نوع پروژه</strong>پروژه مسکونی
                </div>
              </div>
            </div>
            <h2 className="text-black font-weight-600 m-b15">دامنه کار</h2>
            <p>
              این پروژه تمامی مراحل طراحی، اجرا و نظارت فنی را در بر می‌گیرد
              و با هماهنگی کامل تیم‌های مهندسی به سرانجام رسیده است.
            </p>
            <div className="row">
              <div className="col-lg-12">
                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-md">
                    <a href="#" className="icon-cell text-primary">
                      <i className="flaticon-factory" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte">مهندسی مواد</h5>
                    <p>
                      بررسی و انتخاب مواد اولیه مناسب با استانداردهای صنعتی
                      روز برای دستیابی به بالاترین کیفیت محصول نهایی.
                    </p>
                  </div>
                </div>
                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-md">
                    <a href="#" className="icon-cell text-primary">
                      <i className="flaticon-settings" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte">تحقیقات شیمیایی</h5>
                    <p>
                      انجام آزمایش‌ها و تحلیل‌های شیمیایی لازم برای اطمینان از
                      ایمنی و کارایی فرآیندهای تولید.
                    </p>
                  </div>
                </div>
                <div className="icon-bx-wraper left">
                  <div className="icon-md">
                    <a href="#" className="icon-cell text-primary">
                      <i className="flaticon-worker" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte">مهندسی نفت</h5>
                    <p>
                      طراحی و پیاده‌سازی راهکارهای فنی متناسب با نیازهای خاص
                      صنعت نفت و انرژی.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12 m-b30">
                <Image
                  alt=""
                  src="/images/about/pic3.jpg"
                  width="1000"
                  height="674"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <Image
                  alt=""
                  src="/images/our-services/pic2.jpg"
                  width="500"
                  height="357"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <Image
                  alt=""
                  src="/images/our-services/pic3.jpg"
                  width="500"
                  height="357"
                />
              </div>
              <div className="col-lg-12 m-b30">
                <Image
                  alt=""
                  src="/images/about/about2.jpg"
                  width="700"
                  height="479"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

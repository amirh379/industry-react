"use client";

import React, { useState } from "react";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import { toPersianDigits } from "@/utlis/toPersianDigits";
export default function Faq1() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="section-full overlay-white-middle content-inner">
        <div className="container">
          <div className="section-head text-black text-center">
            <h3 className="title">سوالی دارید؟</h3>
            <p>
              پاسخ پرتکرارترین سوالات مشتریان درباره خدمات و همکاری با
              مجموعه ما را در این بخش می‌یابید.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 m-b30">
              <div className="faq-video">
                <a
                  className="play-btn popup-youtube"
                  onClick={() => setOpen(true)}
                >
                  <i className="flaticon-play-button text-white" />
                </a>
                <Image
                  alt=""
                  className="img-cover radius-sm"
                  src="/images/about/pic5.jpg"
                  width="1000"
                  height="674"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 m-b30">
              <div
                className="dlab-accordion faq-1 box-sort-in m-b30"
                id="accordion1"
              >
                <div className="panel">
                  <div className="acod-head">
                    <h6 className="acod-title">
                      <a
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq1"
                        className="collapsed"
                        aria-expanded="true"
                      >
                        {toPersianDigits(1)}. چه خدماتی ارائه می‌دهید؟
                      </a>
                    </h6>
                  </div>
                  <div
                    id="faq1"
                    className="acod-body collapse"
                    data-bs-parent="#accordion1"
                  >
                    <div className="acod-content">
                      ما طیف گسترده‌ای از خدمات مهندسی، تولید و نگهداری
                      صنعتی را برای کارخانه‌ها و شرکت‌های صنعتی ارائه
                      می‌دهیم.
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="acod-head">
                    <h6 className="acod-title">
                      <a
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq2"
                        className="collapsed"
                        aria-expanded="false"
                      >
                        {toPersianDigits(2)}. زمان تحویل پروژه چقدر است؟
                      </a>
                    </h6>
                  </div>
                  <div
                    id="faq2"
                    className="acod-body collapse"
                    data-bs-parent="#accordion1"
                  >
                    <div className="acod-content">
                      زمان تحویل بسته به نوع و حجم پروژه متفاوت است و پس از
                      بررسی اولیه، برنامه زمانی دقیق در اختیار شما قرار
                      می‌گیرد.
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="acod-head">
                    <h6 className="acod-title">
                      <a
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq3"
                        className="collapsed"
                        aria-expanded="false"
                      >
                        {toPersianDigits(3)}. آیا امکان بازدید از کارخانه
                        وجود دارد؟
                      </a>
                    </h6>
                  </div>
                  <div
                    id="faq3"
                    className="acod-body collapse"
                    data-bs-parent="#accordion1"
                  >
                    <div className="acod-content">
                      بله، مشتریان می‌توانند با هماهنگی قبلی از خطوط تولید
                      و کارخانه ما بازدید کنند.
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="acod-head">
                    <h6 className="acod-title">
                      <a
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq4"
                        className="collapsed"
                        aria-expanded="false"
                      >
                        {toPersianDigits(4)}. چگونه می‌توانم سفارش خود را
                        پیگیری کنم؟
                      </a>
                    </h6>
                  </div>
                  <div
                    id="faq4"
                    className="acod-body collapse"
                    data-bs-parent="#accordion1"
                  >
                    <div className="acod-content">
                      پس از ثبت سفارش، از طریق تماس تلفنی یا ایمیل با تیم
                      پشتیبانی می‌توانید وضعیت پروژه خود را پیگیری کنید.
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="acod-head">
                    <h6 className="acod-title">
                      <a
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq5"
                        className="collapsed"
                        aria-expanded="false"
                      >
                        {toPersianDigits(5)}. آیا خدمات پس از فروش هم دارید؟
                      </a>
                    </h6>
                  </div>
                  <div
                    id="faq5"
                    className="acod-body collapse"
                    data-bs-parent="#accordion1"
                  >
                    <div className="acod-content">
                      بله، تیم پشتیبانی ما به‌صورت مستمر خدمات پس از فروش و
                      نگهداری را در اختیار مشتریان قرار می‌دهد.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Faq Info */}
          <div className="row">
            <div className="col-lg-4 col-md-6 m-b30">
              <div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                <div className="icon-md text-primary m-b20">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-factory" />
                  </a>
                </div>
                <div className="icon-content">
                  <h5 className="dlab-tilte">ساده‌سازی فرآیندها</h5>
                  <p>
                    ما با ساده‌سازی فرآیندهای پیچیده صنعتی، اجرای پروژه‌ها
                    را برای مشتریان خود آسان‌تر می‌کنیم.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 m-b30">
              <div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                <div className="icon-md text-primary m-b20">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-worker" />
                  </a>
                </div>
                <div className="icon-content">
                  <h5 className="dlab-tilte">طراحی منحصربه‌فرد</h5>
                  <p>
                    هر پروژه را با در نظر گرفتن نیازهای خاص مشتری و به‌صورت
                    اختصاصی طراحی می‌کنیم.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 m-b30">
              <div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                <div className="icon-md text-primary m-b20">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-settings" />
                  </a>
                </div>
                <div className="icon-content">
                  <h5 className="dlab-tilte">پاسخگویی سریع</h5>
                  <p>
                    تیم پشتیبانی ما همواره آماده پاسخگویی سریع و دقیق به
                    درخواست‌های مشتریان است.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Faq Info END */}
        </div>
      </div>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="_FRZVScwggM"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}

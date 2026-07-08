"use client";

import React from "react";
import { toPersianDigits } from "@/utlis/toPersianDigits";

export default function Contact1() {
  return (
    <div
      className="section-full content-inner contact-page-9 overlay-black-dark"
      style={{
        backgroundImage: "url(/images/background/bg5.jpg)",
        backgroundPosition: "30% 100%",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 text-white">
            <div className="row">
              <div className="col-lg-12 col-md-12 m-b30">
                <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                  <div className="icon-content">
                    <h5 className="dlab-tilte">
                      <span className="icon-sm text-primary">
                        <i className="ti-location-pin" />
                      </span>
                      آدرس شرکت
                    </h5>
                    <p>
                      تهران، خیابان ولیعصر، بالاتر از میدان ونک، برج صنعت،
                      طبقه ۵
                    </p>
                    <h6 className="m-b15 font-weight-400">
                      <i className="ti-alarm-clock" /> ساعات کاری
                    </h6>
                    <p className="m-b0">
                      شنبه تا پنج‌شنبه - {toPersianDigits("10:00")} تا{" "}
                      {toPersianDigits("19:00")}
                    </p>
                    <p>جمعه - تعطیل</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6 m-b30">
                <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                  <div className="icon-content">
                    <h5 className="dlab-tilte">
                      <span className="icon-sm text-primary">
                        <i className="ti-email" />
                      </span>
                      ایمیل
                    </h5>
                    <p className="m-b0">
                      <a
                        href="mailto:someone@example.com"
                        className="text-white"
                      >
                        info@example.com
                      </a>
                    </p>
                    <p className="m-b0">
                      <a
                        href="mailto:someone@example.com"
                        className="text-white"
                      >
                        hr@example.com
                      </a>
                    </p>
                    <p className="m-b0">
                      <a
                        href="mailto:someone@example.com"
                        className="text-white"
                      >
                        support@example.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6 m-b30">
                <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                  <div className="icon-content">
                    <h5 className="dlab-tilte">
                      <span className="icon-sm text-primary">
                        <i className="ti-mobile" />
                      </span>
                      شماره تماس
                    </h5>
                    <p className="m-b0">
                      <a href="tel:+982112345678" className="text-white">
                        {toPersianDigits("021-12345678")}
                      </a>
                    </p>
                    <p className="m-b0">
                      <a href="tel:+989121234567" className="text-white">
                        {toPersianDigits("0912-1234567")}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 m-b30">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="inquiry-form wow box-shadow bg-white fadeInUp"
              data-wow-delay="0.2s"
            >
              <h3 className="title-box font-weight-300 m-t0 m-b10">
                بیایید ایده شما را به واقعیت تبدیل کنیم
                <span className="bg-primary" />
              </h3>
              <p>
                فرم زیر را تکمیل کنید تا کارشناسان ما در سریع‌ترین زمان
                ممکن با شما تماس بگیرند.
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-user text-primary" />
                      </span>
                      <input
                        name="dzName"
                        type="text"
                        required
                        className="form-control"
                        placeholder="نام"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-mobile text-primary" />
                      </span>
                      <input
                        name="dzOther[Phone]"
                        type="number"
                        required
                        className="form-control"
                        placeholder="شماره تماس"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-email text-primary" />
                      </span>
                      <input
                        name="dzEmail"
                        type="email"
                        className="form-control"
                        required
                        placeholder="ایمیل شما"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group flex-nowrap">
                      <span className="input-group-addon">
                        <i className="ti-check-box text-primary" />
                      </span>
                      <select className="form-select form-select-lg type-3 ml-2">
                        <option>انتخاب صنعت</option>
                        <option>نفت و گاز</option>
                        <option>فولاد</option>
                        <option>کارخانه</option>
                        <option>ساخت‌وساز</option>
                        <option>نیروگاه خورشیدی</option>
                        <option>صنایع غذایی</option>
                        <option>کشاورزی</option>
                        <option>کشتی‌سازی</option>
                        <option>صنایع چرم</option>
                        <option>نیروگاه هسته‌ای</option>
                        <option>کارخانه آبجوسازی</option>
                        <option>معدن</option>
                        <option>خودروسازی</option>
                        <option>صنایع پلاستیک</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-file text-primary" />
                      </span>
                      <input
                        name="dzOther[Subject]"
                        type="file"
                        required
                        className="form-control"
                        placeholder="بارگذاری فایل"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-agenda text-primary" />
                      </span>
                      <textarea
                        name="dzMessage"
                        rows={4}
                        className="form-control"
                        required
                        placeholder="درباره پروژه یا ایده خود توضیح دهید"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <button
                    name="submit"
                    type="submit"
                    value="Submit"
                    className="site-button button-md"
                  >
                    <span>درخواست مشاوره رایگان!</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

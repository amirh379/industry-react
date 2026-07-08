"use client";

import React from "react";
import { toPersianDigits } from "@/utlis/toPersianDigits";

export default function Contact() {
  return (
    <div
      className="section-full overlay-black-dark bg-img-fix"
      style={{ backgroundImage: "url(/images/background/bg1.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 content-inner chosesus-content text-white">
            <h2
              className="title-box font-weight-300 m-b15 wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              با ما در تماس باشید <span className="bg-primary" />
            </h2>
            <p className="font-16 op8 wow fadeInLeft" data-wow-delay="0.4s">
              با ما تماس بگیرید یا سری به دفترمان بزنید؛ تلاش می‌کنیم در
              روزهای کاری ظرف ۲۴ ساعت به تمام درخواست‌ها پاسخ دهیم.
            </p>
            <h3
              className="font-weight-300 m-b50 op6 wow fadeInLeft"
              data-wow-delay="0.6s"
            >
              مورد اعتماد {toPersianDigits("700+")} مشتری در بیش از{" "}
              {toPersianDigits("3200")} پروژه صنعتی و مهندسی.
            </h3>
            <h4
              className="font-weight-300 wow fadeInLeft"
              data-wow-delay="0.8s"
            >
              آنچه دریافت خواهید کرد:
            </h4>
            <ul
              className="list-checked primary wow fadeInLeft"
              data-wow-delay="1s"
            >
              <li>
                <span>مشاوره تخصصی و رایگان در ابتدای پروژه</span>
              </li>
              <li>
                <span>برنامه‌ریزی دقیق و شفاف برای اجرای پروژه</span>
              </li>
              <li>
                <span>پشتیبانی مستمر پس از تحویل پروژه</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 col-md-12 m-b30">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="inquiry-form contact-project bg-white box-shadow wow fadeInUp"
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
                <div className="col-lg-6 col-sm-6">
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
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-mobile text-primary" />
                      </span>
                      <input
                        name="dzOther[Phone]"
                        type="text"
                        required
                        className="form-control"
                        placeholder="شماره تماس"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12">
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
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-check-box text-primary" />
                      </span>
                      <input
                        name="dzOther[Subject]"
                        type="text"
                        required
                        className="form-control"
                        placeholder="بارگذاری فایل"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-file text-primary" />
                      </span>
                      <input
                        name="dzOther[Subject]"
                        type="text"
                        required
                        className="form-control"
                        placeholder="بارگذاری فایل"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12">
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
                <div className="col-lg-12 col-sm-12">
                  <button
                    name="submit"
                    type="submit"
                    value="Submit"
                    className="site-button button-lg"
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

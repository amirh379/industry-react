"use client";

import { services5 } from "@/data/services";
import React from "react";

export default function About() {
  return (
    <div className="section-full content-inner bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="section-head text-black">
              <h4 className="text-gray-dark font-weight-300 m-b10">
                تخصص ما
              </h4>
              <h2 className="title">
                راهکارهای صنعتی کاملاً سفارشی‌سازی‌شده و باکیفیت
              </h2>
              <p>
                ما با تیمی متخصص و مجهز به آخرین فناوری‌های روز، خدمات
                مهندسی و صنعتی متناسب با نیاز هر پروژه را طراحی و اجرا
                می‌کنیم.
              </p>
            </div>
            <div className="section-content row">
              {services5.map((service, index) => (
                <div
                  key={index}
                  className="col-lg-6 col-md-6 service-box style3"
                  data-wow-duration="2s"
                  data-wow-delay={service.delay}
                >
                  <div className="icon-bx-wraper" data-name={service.name}>
                    <div className="icon-lg">
                      <a href="#" className="icon-cell">
                        <i className={service.icon} />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h2 className="dlab-title">{service.title}</h2>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="sticky-top m-b30">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="inquiry-form inner"
              >
                <h3 className="title m-t0 m-b10">
                  بیایید ایده شما را به واقعیت تبدیل کنیم
                </h3>
                <p>
                  فرم زیر را تکمیل کنید تا کارشناسان ما در سریع‌ترین زمان
                  ممکن با شما تماس بگیرند.
                </p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
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
                  <div className="col-lg-6 col-md-6 col-sm-6">
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
                  <div className="col-lg-12 col-md-12 col-sm-12">
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
                  <div className="col-lg-6 col-md-6 col-sm-6">
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
                  <div className="col-lg-6 col-md-6 col-sm-6">
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
                  <div className="col-lg-12 col-md-12 col-sm-12">
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
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <button
                      name="submit"
                      type="submit"
                      value="Submit"
                      className="site-button btn-block"
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
    </div>
  );
}

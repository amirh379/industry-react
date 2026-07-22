"use client";

import React, { useRef, useState } from "react";
import { companyInfo } from "@/data/company";
import { toPersianDigits } from "@/utlis/toPersianDigits";

const requestTypes = [
  "طراحی درب اختصاصی",
  "تعمیر",
  "بازسازی",
  "سفارش ویژه",
  "همکاری",
  "سایر موارد",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact1() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);
  const telHref = companyInfo.phone.replace(/-/g, "");

  const validateEmail = (value) => {
    if (!value.trim()) {
      setEmailError("لطفاً ایمیل را وارد کنید");
      return false;
    }
    if (!emailPattern.test(value.trim())) {
      setEmailError("لطفاً یک آدرس ایمیل معتبر وارد کنید");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);
  };

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
                <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm contact-info-box">
                  <div className="icon-content">
                    <h5 className="dlab-tilte">
                      <span className="icon-sm contact-info-icon">
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
                <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm contact-info-box">
                  <div className="icon-content">
                    <h5 className="dlab-tilte">
                      <span className="icon-sm contact-info-icon">
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
                <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm contact-info-box">
                  <div className="icon-content">
                    <h5 className="dlab-tilte">
                      <span className="icon-sm contact-info-icon">
                        <i className="ti-mobile" />
                      </span>
                      شماره تماس
                    </h5>
                    <p className="m-b0">
                      <a href={`tel:${telHref}`} className="text-white">
                        {toPersianDigits(companyInfo.phone)}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 m-b30">
                <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm contact-info-box contact-consult-link-box">
                  <div className="icon-content">
                    <h5 className="dlab-tilte">
                      <span className="icon-sm contact-info-icon">
                        <i className="ti-comments" />
                      </span>
                      مشاوره فنی
                    </h5>
                    <p className="m-b15">
                      برای دریافت مشاوره تخصصی درباره طراحی، تعمیر یا سفارش
                      محصولات، فرم درخواست را تکمیل کنید.
                    </p>
                    <a
                      href="#consultation-form"
                      className="site-button button-sm"
                    >
                      درخواست مشاوره فنی
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 m-b30">
            <form
              id="consultation-form"
              onSubmit={handleSubmit}
              className="inquiry-form wow box-shadow bg-white fadeInUp"
              data-wow-delay="0.2s"
              noValidate
            >
              <p className="contact-form-intro">
                فرم زیر را تکمیل کنید تا کارشناسان ما در سریع‌ترین زمان ممکن با
                شما تماس بگیرند.
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
                        type="tel"
                        inputMode="numeric"
                        required
                        className="form-control no-spinner"
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
                        className={`form-control${emailError ? " is-invalid" : ""}`}
                        required
                        placeholder="ایمیل شما"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (emailError) validateEmail(e.target.value);
                        }}
                        onBlur={(e) => validateEmail(e.target.value)}
                      />
                    </div>
                    {emailError ? (
                      <div className="invalid-feedback d-block">{emailError}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group flex-nowrap">
                      <span className="input-group-addon">
                        <i className="ti-check-box text-primary" />
                      </span>
                      <select
                        name="dzOther[RequestType]"
                        className="form-select form-select-lg type-3 ml-2"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          نوع درخواست
                        </option>
                        {requestTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group custom-file-input-group">
                      <span className="input-group-addon">
                        <i className="ti-file text-primary" />
                      </span>
                      <input
                        ref={fileInputRef}
                        name="dzOther[Subject]"
                        type="file"
                        required
                        className="d-none"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          setFileName(file ? file.name : "");
                        }}
                      />
                      <button
                        type="button"
                        className="form-control custom-file-trigger text-start"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        {fileName || "انتخاب فایل"}
                      </button>
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
                    <span>ارسال درخواست</span>
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

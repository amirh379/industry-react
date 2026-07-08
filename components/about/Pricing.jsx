import React from "react";
import { formatToman } from "@/utlis/formatToman";

export default function Pricing() {
  return (
    <div className="section-full content-inner-2 bg-white">
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title">جدول قیمت‌گذاری</h2>
          <p>
            بسته‌های خدماتی متنوعی متناسب با نیاز کسب‌وکار شما طراحی شده است تا
            بتوانید بهترین گزینه را با توجه به بودجه خود انتخاب کنید.
          </p>
        </div>
        <div className="section-content box-sort-in button-example pricingtable-style2-area m-t80">
          <div className="pricingtable-row">
            <div className="row max-w1000 m-auto">
              <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                <div className="pricingtable-wrapper style2 bg-white">
                  <div className="pricingtable-inner">
                    <div className="pricingtable-price">
                      <h4 className="font-weight-300 m-t10 m-b0">پایه</h4>
                      <div className="pricingtable-bx">
                        <span>رایگان</span>
                      </div>
                    </div>
                    <p>
                      مناسب کسب‌وکارهای کوچک که به دنبال شروع ساده و بدون
                      هزینه اولیه هستند.
                    </p>
                    <div className="m-t20">
                      <a href="#" className="site-button radius-xl">
                        <span className="p-lr30">ثبت‌نام</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                <div className="pricingtable-wrapper style2 bg-primary text-white active">
                  <div className="pricingtable-inner">
                    <div className="pricingtable-price">
                      <h4 className="font-weight-300 m-t10 m-b0">حرفه‌ای</h4>
                      <div className="pricingtable-bx">
                        {" "}
                        {formatToman(29)} / هر نصب{" "}
                      </div>
                    </div>
                    <p>
                      مناسب کسب‌وکارهایی که به امکانات و پشتیبانی بیشتری نیاز
                      دارند.
                    </p>
                    <div className="m-t20">
                      <a href="#" className="site-button white radius-xl">
                        <span className="p-lr30">ثبت‌نام</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                <div className="pricingtable-wrapper style2 bg-white">
                  <div className="pricingtable-inner">
                    <div className="pricingtable-price">
                      <h4 className="font-weight-300 m-t10 m-b0">تکمیلی</h4>
                      <div className="pricingtable-bx">
                        {" "}
                        {formatToman(49)} / هر نصب{" "}
                      </div>
                    </div>
                    <p>
                      مناسب سازمان‌های بزرگ با نیازهای گسترده و پشتیبانی
                      اختصاصی.
                    </p>
                    <div className="m-t20">
                      <a href="#" className="site-button radius-xl">
                        <span className="p-lr30">ثبت‌نام</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { toPersianDigits } from "@/utlis/toPersianDigits";

export default function PrivacyPolicy() {
  return (
    <>
      {/* inner page banner */}
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">قوانین حریم خصوصی</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <a>خانه</a>
                </li>
                <li>قوانین حریم خصوصی</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      {/* contact area */}
      <div className="content-block">
        {/* Privacy Policy */}
        <div className="section-full content-inner inner-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h4 className="title">
                  آخرین بروزرسانی قوانین حریم خصوصی صنعت در تاریخ{" "}
                  {toPersianDigits("4 تیر 1403")} انجام شده است.
                </h4>
                <p className="font-18">
                  ما به حفظ حریم خصوصی کاربران خود متعهد هستیم و تمامی
                  اطلاعاتی که در اختیار ما قرار می‌گیرد، صرفاً برای بهبود
                  خدمات و ارتباط بهتر با مشتریان استفاده می‌شود. در صورت
                  داشتن هرگونه سوال درباره نحوه استفاده از اطلاعات خود،
                  می‌توانید از طریق صفحه
                  <a> تماس با ما </a>
                  با تیم پشتیبانی در ارتباط باشید.
                </p>
                <div className="dlab-divider bg-gray-dark" />
                <h4 className="title">ما چه کسانی هستیم و این قوانین شامل چه مواردی می‌شود</h4>
                <p className="font-18">
                  صنعت یک شرکت ارائه‌دهنده خدمات و راهکارهای صنعتی است که
                  متعهد به حفظ امنیت و محرمانگی اطلاعات مشتریان خود در تمامی
                  مراحل همکاری است. این قوانین نحوه جمع‌آوری، استفاده و
                  نگهداری اطلاعات شخصی کاربران وب‌سایت را مشخص می‌کند.
                </p>
                <div className="dlab-divider bg-gray-dark" />
                <h4 className="title">چه اطلاعات شخصی‌ای جمع‌آوری می‌کنیم</h4>
                <ul className="list-circle primary m-a0">
                  <li>
                    اطلاعات تماس شامل نام، شماره تلفن و آدرس ایمیل که هنگام
                    ثبت درخواست یا فرم تماس دریافت می‌شود.
                  </li>
                  <li>
                    اطلاعات مربوط به سفارش‌ها و پروژه‌هایی که از طریق
                    وب‌سایت ثبت می‌کنید.
                  </li>
                  <li>
                    داده‌های فنی مانند نوع مرورگر و نحوه تعامل شما با
                    وب‌سایت برای بهبود تجربه کاربری.
                  </li>
                  <li>
                    اطلاعات پرداخت که صرفاً برای تکمیل فرآیند خرید و به‌صورت
                    امن پردازش می‌شود.
                  </li>
                  <li>
                    هرگونه اطلاعات دیگری که به‌صورت داوطلبانه در ارتباط با
                    ما به اشتراک می‌گذارید.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Privacy Policy END */}
      </div>
    </>
  );
}

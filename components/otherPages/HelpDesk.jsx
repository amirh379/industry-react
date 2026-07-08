import Link from "next/link";
import React from "react";

export default function HelpDesk() {
  return (
    <>
      {/* inner page banner */}
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">مرکز پشتیبانی</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={"/"}>خانه</Link>
                </li>
                <li>مرکز پشتیبانی</li>
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      {/* contact area */}
      <div className="content-block">
        {/* Career */}
        <div className="section-full content-inner bg-gray">
          <div className="container">
            <div className="row">
              {/* Left part start */}
              <div className="col-lg-8 col-md-7 col-sm-12 inner-text">
                <h2 className="title">مرکز پشتیبانی</h2>
                <p>
                  <strong>
                    تیم پشتیبانی صنعت آماده پاسخگویی به سوالات فنی، درخواست‌های
                    خدماتی و پیگیری سفارش‌های شما در تمامی روزهای کاری است.
                  </strong>
                </p>
                <h4 className="title">خدمات اضطراری</h4>
                <p>
                  در صورت بروز هرگونه مشکل فوری در خطوط تولید یا تجهیزات
                  صنعتی، تیم خدمات اضطراری ما به‌صورت شبانه‌روزی آماده
                  ارائه پشتیبانی فنی است. کافی است با شماره تماس اضطراری
                  درج‌شده در پایین همین صفحه تماس بگیرید تا سریع‌ترین
                  پاسخ ممکن دریافت شود.
                </p>
                <p>
                  همچنین می‌توانید از طریق فرم تماس یا ایمیل پشتیبانی،
                  گزارش دقیقی از مشکل پیش‌آمده ارسال کنید تا کارشناسان ما
                  در سریع‌ترین زمان ممکن پیگیری لازم را انجام دهند.
                </p>
                <h4 className="title">نکات کاربردی</h4>
                <ul className="list-check primary">
                  <li>پیش از تماس، شماره سفارش یا قرارداد خود را آماده داشته باشید.</li>
                  <li>مشکل پیش‌آمده را با جزئیات کامل شرح دهید.</li>
                  <li>در صورت امکان، تصاویر یا مستندات مرتبط را ارسال کنید.</li>
                  <li>ساعات کاری تیم پشتیبانی را برای پیگیری سریع‌تر در نظر بگیرید.</li>
                  <li>پس از دریافت پاسخ، کد پیگیری ارائه‌شده را نزد خود نگه دارید.</li>
                  <li>برای مسائل فوری از خط اضطراری استفاده کنید.</li>
                </ul>
                <h4 className="title">تعمیر و نگهداری</h4>
                <p>
                  خدمات تعمیر و نگهداری دوره‌ای تجهیزات صنعتی یکی از
                  بخش‌های اصلی پشتیبانی ماست. با برنامه‌ریزی منظم بازدیدهای
                  فنی، از بروز خرابی‌های ناگهانی و توقف خط تولید جلوگیری
                  می‌کنیم.
                </p>
                <p>
                  در صورت نیاز به برنامه‌ریزی بازدید دوره‌ای یا سرویس فوری،
                  می‌توانید از طریق فرم درخواست خدمات یا تماس مستقیم با
                  واحد پشتیبانی فنی اقدام کنید.
                </p>
                <h4 className="title">راه‌های دریافت کمک</h4>
                <ul className="list-check primary">
                  <li>پاسخگویی تلفنی به سوالات فنی در ساعات اداری.</li>
                  <li>پشتیبانی آنلاین از طریق فرم تماس وب‌سایت.</li>
                  <li>ارسال درخواست خدمات و پیگیری وضعیت آن.</li>
                  <li>راهنمای گام‌به‌گام برای رفع مشکلات رایج.</li>
                  <li>هماهنگی بازدید حضوری کارشناسان در صورت نیاز.</li>
                  <li>پشتیبانی اضطراری برای موارد فوری و بحرانی.</li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-5 col-sm-12 m-b30">
                <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box m-b30 bg-white">
                  <div className="icon-sm m-b20">
                    <a className="icon-cell">
                      <i className="ti-headphone-alt" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte text-uppercase">پشتیبانی تلفنی</h5>
                    <p>
                      پاسخگویی سریع به تماس‌های شما توسط کارشناسان مجرب فنی.
                    </p>
                    <a className="site-button">بیشتر بدانید</a>
                  </div>
                </div>
                <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box m-b30 bg-white">
                  <div className="icon-sm m-b20">
                    <a className="icon-cell">
                      <i className="ti-ruler-pencil" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte text-uppercase">
                      راهنمای ساده
                    </h5>
                    <p>
                      راهنماهای گام‌به‌گام برای رفع سریع مشکلات رایج.
                    </p>
                    <a className="site-button">بیشتر بدانید</a>
                  </div>
                </div>
                <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box bg-white">
                  <div className="icon-sm m-b20">
                    <a className="icon-cell text-primary">
                      <i className="ti-desktop" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte text-uppercase">
                      خدمات متنوع
                    </h5>
                    <p>
                      ارائه راهکارهای متنوع پشتیبانی متناسب با نیاز شما.
                    </p>
                    <a className="site-button">بیشتر بدانید</a>
                  </div>
                </div>
              </div>
              {/* Left part start END */}
            </div>
          </div>
        </div>
        {/* Career END */}
      </div>
    </>
  );
}

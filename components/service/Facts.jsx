import React from "react";
import { toPersianDigits } from "@/utlis/toPersianDigits";

export default function Facts() {
  return (
    <div
      className="section-full content-inner-1 overlay-black-dark about-8-service bg-img-fix"
      style={{ backgroundImage: "url(/images/background/bg1.jpg)" }}
    >
      <div className="container">
        <div className="section-head text-white text-center">
          <h2 className="title-box m-tb0 max-w800 m-auto">
            وقتی کارایی و ارزش را به هم متصل می‌کنیم، اتفاقات شگفت‌انگیزی
            برای کسب‌وکار شما رخ می‌دهد <span className="bg-primary" />
          </h2>
          <p>
            ما با ترکیب دانش فنی و تجربه عملی، راهکارهایی متناسب با نیازهای
            واقعی صنعت شما ارائه می‌دهیم.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row text-white">
          <div className="col-lg-4 col-md-4 m-b30">
            <div className="icon-bx-wraper bx-style-1 p-a30 center">
              <div className="icon-lg text-white m-b20">
                <a href="#" className="icon-cell text-white">
                  <i className="flaticon-factory" />
                </a>
              </div>
              <div className="icon-content">
                <h5 className="dlab-tilte text-uppercase">کارهای مکانیکی</h5>
                <p>
                  طراحی، ساخت و نگهداری تجهیزات مکانیکی با بالاترین
                  استانداردهای صنعتی روز.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 m-b30">
            <div className="icon-bx-wraper bx-style-1 p-a30 center">
              <div className="icon-lg text-white m-b20">
                <a href="#" className="icon-cell text-white">
                  <i className="flaticon-engineer" />
                </a>
              </div>
              <div className="icon-content">
                <h5 className="dlab-tilte text-uppercase">
                  انرژی و برق
                </h5>
                <p>
                  ارائه راهکارهای نوین در حوزه تولید و مدیریت انرژی برای
                  کارخانه‌ها و مجتمع‌های صنعتی.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 m-b30">
            <div className="icon-bx-wraper bx-style-1 p-a30 center">
              <div className="icon-lg text-white m-b20">
                <a href="#" className="icon-cell text-white">
                  <i className="flaticon-factory-1" />
                </a>
              </div>
              <div className="icon-content">
                <h5 className="dlab-tilte text-uppercase">
                  پالایش نفت
                </h5>
                <p>
                  خدمات تخصصی در حوزه پالایش و فرآوری نفت با تمرکز بر ایمنی
                  و بهره‌وری بالا.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="choses-info text-white">
        <div className="container-fluid">
          <div className="row choses-info-content">
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-6 p-a30 wow zoomIn"
              data-wow-delay="0.2s"
            >
              <h2 className="m-t0 m-b10 font-weight-400 font-45">
                <i className="flaticon-alarm-clock m-r10" />
                <span className="counter">{toPersianDigits(15)}</span>+
              </h2>
              <h4 className="font-weight-300 m-t0">سال سابقه فعالیت</h4>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-6 p-a30 wow zoomIn"
              data-wow-delay="0.4s"
            >
              <h2 className="m-t0 m-b10 font-weight-400 font-45">
                <i className="flaticon-worker m-r10" />
                <span className="counter">{toPersianDigits(700)}</span>+
              </h2>
              <h4 className="font-weight-300 m-t0">مشتری راضی</h4>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-6 p-a30 wow zoomIn"
              data-wow-delay="0.6s"
            >
              <h2 className="m-t0 m-b10 font-weight-400 font-45">
                <i className="flaticon-settings m-r10" />
                <span className="counter">{toPersianDigits(50)}</span>+
              </h2>
              <h4 className="font-weight-300 m-t0">متخصص فنی</h4>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-6 p-a30 wow zoomIn"
              data-wow-delay="0.8s"
            >
              <h2 className="m-t0 m-b10 font-weight-400 font-45">
                <i className="flaticon-presentation m-r10" />
                <span className="counter">{toPersianDigits(200)}</span>+
              </h2>
              <h4 className="font-weight-300 m-t0">پروژه تحویل‌شده</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

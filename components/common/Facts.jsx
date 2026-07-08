import React from "react";
import { toPersianDigits } from "@/utlis/toPersianDigits";

export default function Facts() {
  return (
    <div
      className="section-full content-inner overlay-black-dark bg-img-fix"
      style={{ backgroundImage: "url(/images/background/bg1.jpg)" }}
    >
      <div className="container">
        <div className="section-content text-center text-white">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
              <div className="counter-style-5">
                <div className="">
                  <span className="counter">{toPersianDigits(6810)}</span>
                </div>
                <span className="counter-text">کارمند پرتلاش</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
              <div className="counter-style-5">
                <div className="">
                  <span className="counter">{toPersianDigits(4060)}</span>
                </div>
                <span className="counter-text">کارخانه مدرن</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
              <div className="counter-style-5">
                <div className="">
                  <span className="counter">{toPersianDigits(3164)}</span>
                </div>
                <span className="counter-text">کارخانه در سراسر جهان</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
              <div className="counter-style-5">
                <div className="">
                  <span className="counter">{toPersianDigits(1852)}</span>
                </div>
                <span className="counter-text">جایزه بین‌المللی</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

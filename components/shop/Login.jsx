"use client";

import React from "react";

export default function Login() {
  return (
    <div className="section-full content-inner shop-account">
      {/* Product */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="font-weight-700 m-t0 m-b40">قبلا ثبت‌نام کرده‌اید؟</h2>
          </div>
        </div>
        <div className="row dzseth">
          <div className="col-lg-6 col-md-6 m-b30">
            <div className="p-a30 border-1 seth">
              <div className="tab-content">
                <h4 className="font-weight-700">مشتری جدید</h4>
                <p className="font-weight-600">
                  با ساخت حساب کاربری در فروشگاه ما، می‌توانید سریع‌تر فرآیند
                  خرید را طی کنید، چند آدرس ارسال ذخیره کنید، سفارش‌های خود را
                  مشاهده و پیگیری کنید و از امکانات بیشتری بهره‌مند شوید.
                </p>
                <a className="site-button m-r5 button-lg radius-no" href="#">
                  ساخت حساب کاربری
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 m-b30">
            <div className="p-a30 border-1 seth">
              <div className="tab-content nav" role="tablist">
                <form
                  id="login"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className="tab-pane col-12 p-a0 active show"
                  role="tabpanel"
                >
                  <h4 className="font-weight-700">ورود</h4>
                  <p className="font-weight-600">
                    اگر قبلا در سایت ما ثبت‌نام کرده‌اید، وارد شوید.
                  </p>
                  <div className="form-group">
                    <label className="font-weight-700">ایمیل *</label>
                    <input
                      required=""
                      className="form-control"
                      placeholder="ایمیل خود را وارد کنید"
                      type="email"
                      name="dzName"
                    />
                  </div>
                  <div className="form-group">
                    <label className="font-weight-700">رمز عبور *</label>
                    <input
                      required=""
                      className="form-control"
                      placeholder="رمز عبور خود را وارد کنید"
                      type="password"
                      name="dzName"
                    />
                  </div>
                  <div className="text-left">
                    <button className="site-button m-r5 button-lg radius-no">
                      ورود
                    </button>
                    <a
                      data-bs-toggle="tab"
                      href="#forgot-password"
                      className="m-l5"
                      aria-selected="false"
                      role="tab"
                      tabIndex={-1}
                    >
                      <i className="fas fa-unlock-alt" /> فراموشی رمز عبور
                    </a>
                  </div>
                </form>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  id="forgot-password"
                  className="tab-pane fade col-12 p-a0"
                  role="tabpanel"
                >
                  <h4 className="font-weight-700">فراموشی رمز عبور؟</h4>
                  <p className="font-weight-600">
                    لینک بازیابی رمز عبور به ایمیل شما ارسال خواهد شد.
                  </p>
                  <div className="form-group">
                    <label className="font-weight-700">ایمیل *</label>
                    <input
                      required=""
                      className="form-control"
                      placeholder="ایمیل خود را وارد کنید"
                      type="email"
                      name="dzName"
                    />
                  </div>
                  <div className="text-left">
                    <a
                      className="site-button outline gray button-lg radius-no active"
                      data-bs-toggle="tab"
                      href="#login"
                      aria-selected="true"
                      role="tab"
                    >
                      بازگشت
                    </a>
                    <button className="site-button pull-right button-lg radius-no">
                      ارسال
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product END */}
    </div>
  );
}

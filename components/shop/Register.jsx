"use client";

import React from "react";

export default function Register() {
  return (
    <div className="section-full content-inner shop-account">
      {/* Product */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="font-weight-700 m-t0 m-b40">ساخت حساب کاربری</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 m-b30">
            <div className="p-a30 border-1 max-w500 m-auto">
              <div className="tab-content">
                <form
                  id="login"
                  className="tab-pane active"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <h4 className="font-weight-700">اطلاعات شخصی</h4>
                  <p className="font-weight-600">
                    اگر قبلا در سایت ما ثبت‌نام کرده‌اید، وارد شوید.
                  </p>
                  <div className="form-group">
                    <label className="font-weight-700">نام *</label>
                    <input
                      name="dzName"
                      required
                      className="form-control"
                      placeholder="نام"
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label className="font-weight-700">نام خانوادگی *</label>
                    <input
                      name="dzName"
                      required
                      className="form-control"
                      placeholder="نام خانوادگی"
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label className="font-weight-700">ایمیل *</label>
                    <input
                      name="dzName"
                      required
                      className="form-control"
                      placeholder="ایمیل خود را وارد کنید"
                      type="email"
                    />
                  </div>
                  <div className="form-group">
                    <label className="font-weight-700">رمز عبور *</label>
                    <input
                      name="dzName"
                      required
                      className="form-control"
                      placeholder="رمز عبور خود را وارد کنید"
                      type="password"
                    />
                  </div>
                  <div className="text-left m-t15">
                    <button className="site-button button-lg radius-no outline outline-2 not-hover">
                      ثبت‌نام
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

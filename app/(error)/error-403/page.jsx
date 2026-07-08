import Footer15 from "@/components/footers/Footer15";
import Header1 from "@/components/headers/Header1";
import React from "react";
import { toPersianDigits } from "@/utlis/toPersianDigits";

export const metadata = {
  title: "خطای ۴۰۳ || صنعت - قالب کارخانه و صنعتی",
  description: "صنعت - قالب کارخانه و صنعتی",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content">
          <div
            className="section-full dz_error-405 content-inner overlay-black-dark"
            style={{
              backgroundImage: "url(/images/background/bg1.jpg)",
              backgroundPosition: "50% 50%",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-5 text-center text-gray m-tb30">
                  <div className="dz_error">{toPersianDigits(403)}</div>
                </div>
                <div className="col-lg-7 m-b30">
                  <h2 className="error-head text-gray">
                    مشکلی پیش آمده است!
                  </h2>
                  <p className="font-16 text-gray">
                    متأسفانه صفحه‌ای که به دنبال آن هستید پیدا نشد. ما در
                    حال بررسی این موضوع هستیم و در سریع‌ترین زمان ممکن آن
                    را برطرف خواهیم کرد.
                  </p>
                  <div className="dlab-divider bg-gray-dark" />
                  <p className="text-gray">
                    می‌توانید با کلیک روی دکمه زیر به صفحه اصلی بازگردید.
                  </p>
                  <div className="widget">
                    <div className="subscribe-form p-a0 col-lg-6 col-md-6">
                      <div>
                        <div className="input-group">
                          <input
                            name="text"
                            className="form-control radius-no"
                            placeholder="جستجوی صفحات"
                            type="text"
                          />
                          <span className="input-group-btn">
                            <button
                              type="submit"
                              className="site-button radius-no"
                            >
                              جستجو
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}

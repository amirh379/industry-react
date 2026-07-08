import Footer15 from "@/components/footers/Footer15";
import Link from "next/link";
import Header1 from "@/components/headers/Header1";
import React from "react";
import { toPersianDigits } from "@/utlis/toPersianDigits";

export const metadata = {
  title: "خطای ۴۰۵ || صنعت - قالب کارخانه و صنعتی",
  description: "صنعت - قالب کارخانه و صنعتی",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <div className="section-full dz_error-405 content-inner bg-gray">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 text-center m-tb30">
                  <div className="dz_error">{toPersianDigits(405)}</div>
                </div>
                <div className="col-lg-7 m-b30">
                  <h2 className="error-head">خطای سرور!</h2>
                  <div className="dlab-divider bg-gray-dark" />
                  <p className="font-16 error-content">
                    می‌توانید با کلیک روی دکمه زیر به صفحه اصلی بازگردید.
                  </p>
                  <Link href={`/`} className="site-button">
                    بازگشت به خانه
                  </Link>
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

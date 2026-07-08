import Link from "next/link";
import React from "react";
import { toPersianDigits } from "@/utlis/toPersianDigits";

export const metadata = {
  title: "خطای ۴۰۴ || صنعت - قالب کارخانه و صنعتی",
  description: "صنعت - قالب کارخانه و صنعتی",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <div
          className="dlab-bnr-inr full-height overlay-black-dark"
          style={{ backgroundImage: "url(/images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="row max-w700 dlab-bnr-inr-entry dz_error-404-area align-m dz_error-404 text-white m-auto">
              <div className="col-lg-4 col-md-4 m-tb30">
                <div className="bg-primary dz_error">{toPersianDigits(404)}</div>
              </div>
              <div className="col-lg-8 col-md-8 m-b30 text-left">
                <h2 className="error-head">مشکلی پیش آمده است!</h2>
                <p className="font-16">
                  متأسفانه صفحه‌ای که به دنبال آن هستید پیدا نشد. ما در حال
                  بررسی این موضوع هستیم و در سریع‌ترین زمان ممکن آن را
                  برطرف خواهیم کرد.
                </p>
                <p className="font-16">
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
    </>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div
      className="hero-sec react-parallax overflow-hidden"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <Image
        className="react-parallax-bgimage"
        alt=""
        style={{
          position: "absolute",
          left: "0%",
          top: 0,
          width: "100%",

          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          height: 898,
          width: "100%",
          filter: "none",
        }}
        src="/images/main-slider/slide8-bg.jpg"
        width={1920}
        height={1024}
        priority
      />
      <div className="react-parallax-content" style={{ position: "relative" }}>
        <div className="hero-section pt-50 home-bnr1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="hero-content">
                  <h1 className="title">ما راهکار کارخانه‌های صنعتی هستیم</h1>
                  <div className="description">
                    با بیش از سه دهه تجربه در صنعت، راهکارهای مهندسی و
                    تولیدی قابل‌اعتماد برای کارخانه‌ها و شرکت‌های صنعتی ارائه
                    می‌دهیم.
                  </div>
                  <div className="buttons">
                    <Link href="/shop">محصولات</Link>
                    {/* <Link href="/catalog">دریافت کاتالوگ</Link> */}
                    <Link
                      href={`/catalog`}
                      className="site-button outline radius-no btnhover13 catalog-btn"
                    >
                      <i className="fas fa-download m-r5" />
                      دریافت کاتالوگ
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <Image
                  alt=""
                  src="/images/main-slider/slide7-main.png"
                  width="965"
                  height="894"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

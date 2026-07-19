"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/data/footerLinks";
import { companyInfo } from "@/data/company";
import { footerSocialLinks } from "@/data/socials";
import { toPersianDigits } from "@/utlis/toPersianDigits";

export default function Footer1() {
  const telHref = companyInfo.phone.replace(/-/g, "");

  return (
    <footer className="site-footer style1">
      {/* <div className="dlab-newsletter">
        <div className="container">
          <div className="ft-contact">
            <div className="ft-contact-bx">
              <Image
                alt=""
                src="/images/icon/icon1.png"
                width="55"
                height="55"
              />
              <h4 className="title">آدرس</h4>
              <p>تهران، بلوار میرداماد، خیابان صنعت، پلاک ۸۹</p>
            </div>
            <div className="ft-contact-bx">
              <Image
                alt=""
                src="/images/icon/icon2.png"
                width="55"
                height="55"
              />
              <h4 className="title">تلفن</h4>
              <p>
                <a href={`tel:${telHref}`}>{toPersianDigits(companyInfo.phone)}</a>
              </p>
            </div>
            <div className="ft-contact-bx">
              <Image
                alt=""
                src="/images/icon/icon3.png"
                width="55"
                height="55"
              />
              <h4 className="title">ایمیل</h4>
              <p>info@industry-sample.ir</p>
            </div>
          </div>
        </div>
      </div> */}
      <div
        className="footer-top"
        style={{
          backgroundImage: "url(/images/background/bg2.png)",
          backgroundSize: "contain",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="widget widget_about">
                <h4 className="footer-title">درباره {companyInfo.name}</h4>
                <p>
                  {companyInfo.fullName}؛ بزرگ‌ترین تولیدکننده و صادرکننده انواع
                  درب‌های لوکس، درب‌های پیش‌ساخته و قطعات فرفورژه در خاورمیانه.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="widget">
                <h4 className="footer-title">پیوندها</h4>
                <ul className="list-2">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="widget widget_subscribe">
                <h4 className="footer-title">
                  {companyInfo.name} در شبکه‌های اجتماعی
                </h4>
                <ul className="footer-social-icons">
                  {footerSocialLinks.map((social) => (
                    <li key={social.className}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.ariaLabel}
                        className={`footer-social-link ${social.className}`}
                      >
                        {social.iconSrc ? (
                          social.iconSrc.endsWith(".svg") ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={social.iconSrc}
                              alt={social.ariaLabel}
                              width={24}
                              height={24}
                            />
                          ) : (
                            <Image
                              src={social.iconSrc}
                              alt={social.ariaLabel}
                              width={24}
                              height={24}
                            />
                          )
                        ) : (
                          <i className={social.iconClass} />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <span className="footer-copyright-text">
                تمام حقوق برای شرکت تولیدی ثامن فرفورژه محفوظ می‌باشد
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

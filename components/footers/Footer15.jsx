"use client";

import React from "react";
import Link from "next/link";
import { footerLinks } from "@/data/footerLinks";
import { companyInfo } from "@/data/company";

export default function Footer15() {
  return (
    <footer className="site-footer style1">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="widget widget_about">
                <h4 className="footer-title">درباره {companyInfo.name}</h4>
                <p>
                  {companyInfo.fullName}؛ بزرگ‌ترین تولیدکننده و صادرکننده انواع
                  درب‌های لوکس، درب‌های پیش‌ساخته و قطعات فرفورژه در خاورمیانه.
                </p>
                <Link href={`/about-1`} className="readmore">
                  ادامه مطلب
                </Link>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="widget">
                <h4 className="footer-title">لینک‌های مفید</h4>
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
                <h4 className="footer-title">خبرنامه</h4>
                <p>
                  برای اطلاع از آخرین محصولات و اخبار {companyInfo.name} در
                  خبرنامه ما عضو شوید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

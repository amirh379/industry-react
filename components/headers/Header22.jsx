"use client";

import React from "react";
import Nav from "./component/Nav";
import Link from "next/link";
import { headerTopPhone } from "@/data/headerLinks";
import { companyLogo, companyInfo } from "@/data/company";
import SocialIconList from "./component/SocialIconList";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import { toPersianDigits } from "@/utlis/toPersianDigits";

export default function Header22() {
  const telHref = companyInfo.phone.replace(/-/g, "");

  return (
    <header className="site-header mo-left header header22">
      <div className="top-bar">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="dlab-topbar-left topbar-left-with-social">
              <span className="topbar-support-text">مرکز پشتیبانی:</span>
              <a href={`tel:${telHref}`} className="topbar-phone-link">
                {toPersianDigits(headerTopPhone)}
              </a>
              <SocialIconList />
            </div>
            <div className="dlab-topbar-right header-topbar-actions">
              <Link
                href={`/price-list`}
                className="site-button radius-no btnhover13 topbar-action-btn price-list-btn-topbar"
              >
                لیست قیمت
              </Link>
              <Link
                href={`/catalog`}
                className="site-button radius-no btnhover13 catalog-btn catalog-btn-topbar topbar-action-btn"
              >
                <i className="fas fa-download catalog-btn-icon" />
                دریافت کاتالوگ
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix">
          <div className="container clearfix">
            <div className="logo-header mostion logo-dark">
              <Link href={`/`}>
                <img alt="ثامن فرفورژه" width="258" height="75" src={companyLogo} />
              </Link>
            </div>
            <button
              className="navbar-toggler collapsed navicon justify-content-end"
              type="button"
              onClick={toggleMobileMenu}
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="نمایش یا مخفی کردن منو"
            >
              <span />
              <span />
              <span />
            </button>
            <div
              className="header-nav navbar-collapse collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <ul className="nav navbar-nav">
                <Nav />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

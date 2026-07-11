"use client";

import React from "react";
import Nav from "./component/Nav";
import Link from "next/link";
import { headerLinks } from "@/data/headerLinks";
import { companyLogo } from "@/data/company";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import SocialIconList from "./component/SocialIconList";

export default function Header1() {
  return (
    <header className="site-header mo-left header">
      <div className="top-bar">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="dlab-topbar-left topbar-left-with-social">
              <ul>
                {headerLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
              <SocialIconList />
            </div>
            <div className="dlab-topbar-right header-topbar-actions">
              <Link href={`/shop`} className="site-button radius-no btnhover13">
                محصولات
              </Link>
              <Link
                href={`/catalog`}
                className="site-button radius-no btnhover13 catalog-btn"
              >
                <i className="fas fa-download m-r5" />
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
              <div className="logo-header d-md-block d-lg-none">
                <Link href={`/`}>
                  <img alt="ثامن فرفورژه" width="258" height="75" src={companyLogo} />
                </Link>
              </div>
              <ul className="nav navbar-nav">
                <Nav />
              </ul>
              <SocialIconList />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

import React from "react";
import Link from "next/link";
import { toPersianDigits } from "@/utlis/toPersianDigits";
import { companyInfo } from "@/data/company";

export default function PageLoader() {
  return (
    <div id="loading-area" className="samen-page-loader">
      <div className="samen-page-loader-inner">
        <img
          src="/images/SamenLogo.png"
          alt={companyInfo.name}
          className="samen-page-loader-logo"
        />
        <div className="samen-page-loader-bar">
          <span />
        </div>
        <p className="samen-page-loader-text">
          در حال بارگذاری {toPersianDigits("...")}
        </p>
      </div>
    </div>
  );
}

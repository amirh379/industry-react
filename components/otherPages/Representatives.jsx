"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { IRAN_PROVINCES, representatives } from "@/data/representatives";
import { socialLinks } from "@/data/socials";
import IranProvinceMap from "./IranProvinceMap";

const socialIconMap = Object.fromEntries(
  socialLinks.map((item) => [item.className, item])
);

const borderThemes = ["navy", "gold"];

export default function Representatives() {
  const [selectedProvince, setSelectedProvince] = useState("");

  const availableProvinces = useMemo(
    () => [...new Set(representatives.map((item) => item.province))],
    []
  );

  const filteredItems = useMemo(() => {
    if (!selectedProvince) {
      return representatives;
    }
    return representatives.filter((item) => item.province === selectedProvince);
  }, [selectedProvince]);

  return (
    <>
      <div
        className="dlab-bnr-inr overlay-black-middle text-center bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry align-m text-center">
            <h1 className="text-white">نمایندگی‌ها</h1>
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>خانه</Link>
                </li>
                <li>نمایندگی‌ها</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section-full content-inner bg-gray">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="title">
              شبکه نمایندگی‌های ثامن فرفورژه در سراسر کشور
            </h2>
            <p>استان مورد نظر را از فهرست یا روی نقشه انتخاب کنید.</p>
          </div>

          <div className="row align-items-start m-b40">
            <div className="col-lg-5 m-b30">
              <div className="representatives-filter">
                <label htmlFor="province-select" className="form-label">
                  انتخاب استان
                </label>
                <select
                  id="province-select"
                  className="form-select form-select-lg"
                  value={selectedProvince}
                  onChange={(event) => setSelectedProvince(event.target.value)}
                >
                  <option value="">همه استان‌ها</option>
                  {IRAN_PROVINCES.map((province) => (
                    <option key={province} value={province}>
                      {province}
                      {availableProvinces.includes(province) ? " ●" : ""}
                    </option>
                  ))}
                </select>
                {selectedProvince ? (
                  <button
                    type="button"
                    className="site-button button-sm m-t15"
                    onClick={() => setSelectedProvince("")}
                  >
                    نمایش همه
                  </button>
                ) : null}
              </div>
            </div>
            <div className="col-lg-7 m-b30">
              <IranProvinceMap
                selectedProvince={selectedProvince}
                availableProvinces={availableProvinces}
                onSelect={setSelectedProvince}
              />
            </div>
          </div>

          <div className="row">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div className="col-lg-4 col-md-6 m-b30" key={item.id}>
                  <div
                    className={`representative-card bg-white box-shadow radius-sm border-theme-${borderThemes[index % borderThemes.length]}`}
                  >
                    <h4 className="representative-title">{item.title}</h4>
                    <p className="representative-city m-b20">
                      <i className="ti-location-pin m-r5 location-icon-red" />
                      {item.city}، {item.province}
                    </p>
                    <ul className="representative-social">
                      {item.socialLinks.map((social) => {
                        const icon = socialIconMap[social.platform];
                        return (
                          <li key={`${item.id}-${social.platform}`}>
                            <a
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={icon?.ariaLabel || social.platform}
                            >
                              {icon?.iconSrc ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={icon.iconSrc}
                                  alt=""
                                  width={20}
                                  height={20}
                                />
                              ) : (
                                <i className={icon?.iconClass} />
                              )}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p className="m-b0">نمایندگی‌ای برای این استان یافت نشد.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

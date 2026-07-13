"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { representatives } from "@/data/representatives";
import { socialLinks } from "@/data/socials";

const socialIconMap = Object.fromEntries(
  socialLinks.map((item) => [item.className, item])
);

export default function Representatives() {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return representatives;
    }
    return representatives.filter((item) =>
      item.province.toLowerCase().includes(normalizedQuery)
    );
  }, [query]);

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
            <h2 className="title">شبکه نمایندگی‌های ثامن فرفورژه</h2>
            <p>برای یافتن نمایندگی مورد نظر، نام استان را جستجو کنید.</p>
          </div>
          <div className="representatives-search m-b40">
            <input
              type="search"
              className="form-control"
              placeholder="جستجو بر اساس استان..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className="row">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div className="col-lg-4 col-md-6 m-b30" key={item.id}>
                  <div className="representative-card bg-white box-shadow radius-sm">
                    <h4 className="representative-title">{item.title}</h4>
                    <p className="representative-city m-b20">
                      <i className="ti-location-pin m-r5" />
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
                                <img src={icon.iconSrc} alt="" width={20} height={20} />
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

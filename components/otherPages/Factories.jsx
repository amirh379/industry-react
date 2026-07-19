"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { factories } from "@/data/factories";

export default function Factories() {
  const [activeId, setActiveId] = useState(factories[0]?.id);
  const activeFactory = useMemo(
    () => factories.find((item) => item.id === activeId) || factories[0],
    [activeId]
  );

  return (
    <>
      <div
        className="dlab-bnr-inr overlay-black-middle text-center bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr2.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry align-m text-center">
            <h1 className="text-white">توانمندی‌ها</h1>
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>خانه</Link>
                </li>
                <li>توانمندی‌ها</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section-full content-inner">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5">
              <div className="widget sidebar-widget ext-sidebar-menu widget_nav_menu">
                <ul className="menu">
                  {factories.map((factory) => (
                    <li
                      key={factory.id}
                      className={activeId === factory.id ? "active" : ""}
                    >
                      <a
                        href={`#capability-${factory.id}`}
                        onClick={(event) => {
                          event.preventDefault();
                          setActiveId(factory.id);
                        }}
                      >
                        {factory.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="widget">
                <div className="download-file">
                  <h4 className="title">دانلود کاتالوگ</h4>
                  <ul>
                    <li>
                      <Link href="/catalog">
                        <div className="text">کاتالوگ محصولات</div>
                        <i className="fas fa-download" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/price-list">
                        <div className="text">لیست قیمت</div>
                        <i className="fas fa-download" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 m-b30">
              {activeFactory ? (
                <div className="row" id={`capability-${activeFactory.id}`}>
                  <div className="col-lg-6 col-md-12 m-b30">
                    <div className="dlab-box">
                      <div className="dlab-media">
                        <Image
                          alt={activeFactory.title}
                          src={activeFactory.imageSrc}
                          width={600}
                          height={800}
                          style={{ objectFit: "cover", width: "100%", height: "auto" }}
                        />
                      </div>
                      <div className="dlab-info m-t30">
                        <h4 className="dlab-title m-t0">{activeFactory.title}</h4>
                        <p className="m-b15">
                          <i className="ti-location-pin m-r5 text-primary" />
                          {activeFactory.location}
                        </p>
                        <p>{activeFactory.description}</p>
                        <span className="site-button button-sm radius-no">
                          {activeFactory.capacity}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="dlab-box">
                      <div className="dlab-media m-b30 p-b5">
                        <Image
                          alt=""
                          src="/images/our-services/pic2.jpg"
                          width={500}
                          height={357}
                        />
                      </div>
                      <div className="dlab-media">
                        <Image
                          alt=""
                          src="/images/our-services/pic3.jpg"
                          width={500}
                          height={357}
                        />
                      </div>
                      <div className="dlab-info m-t30">
                        <h4 className="dlab-title m-t0">از ایده تا اجرا</h4>
                        <p>
                          محتوای تکمیلی این بخش به‌زودی به‌روزرسانی می‌شود. در
                          حال حاضر ساختار نمایش توانمندی‌ها مطابق الگوی جزئیات
                          خدمات آماده شده است.
                        </p>
                        <p>{activeFactory.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

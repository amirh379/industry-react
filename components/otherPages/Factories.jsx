import Image from "next/image";
import Link from "next/link";
import React from "react";
import { factories } from "@/data/factories";

export default function Factories() {
  return (
    <>
      <div
        className="dlab-bnr-inr overlay-black-middle text-center bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr2.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry align-m text-center">
            <h1 className="text-white">کارخانه‌ها</h1>
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>خانه</Link>
                </li>
                <li>کارخانه‌ها</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="section-full content-inner bg-gray">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title">کارخانه‌های ثامن فرفورژه</h2>
              <p>
                مجتمع‌های تولیدی مجموعه با تجهیزات مدرن و ظرفیت بالا در خدمت
                مشتریان داخلی و صادراتی.
              </p>
            </div>
            <div className="row">
              {factories.map((factory) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={factory.id}>
                  <div className="catalog-card m-b30 bg-white box-shadow radius-sm">
                    <div className="catalog-card-image">
                      <Image
                        src={factory.imageSrc}
                        alt={factory.title}
                        width={400}
                        height={260}
                      />
                    </div>
                    <div className="p-a20">
                      <h4 className="dlab-tilte m-b10">{factory.title}</h4>
                      <p className="m-b10">
                        <i className="ti-location-pin m-r5" />
                        {factory.location}
                      </p>
                      <p className="m-b10">{factory.description}</p>
                      <span className="site-button button-sm radius-no">
                        {factory.capacity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

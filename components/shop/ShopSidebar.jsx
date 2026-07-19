"use client";

import Image from "next/image";
import Link from "next/link";
import { shopProducts } from "@/data/samenProducts";
import { partTypes, productCategories } from "@/data/shopFilters";
import React, { useMemo, useState } from "react";

export default function ShopSidebar() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPart, setSelectedPart] = useState("all-parts");

  const filteredProducts = useMemo(() => {
    return shopProducts.filter((product) => {
      const matchCategory =
        selectedCategory === "all" || product.categoryId === selectedCategory;
      const matchPart =
        selectedPart === "all-parts" ||
        product.partTypeIds?.includes(selectedPart);
      return matchCategory && matchPart;
    });
  }, [selectedCategory, selectedPart]);

  return (
    <div className="section-full content-inner">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-5 m-b30">
            <div className="widget sidebar-widget ext-sidebar-menu widget_nav_menu">
              <h5 className="widget-title m-b15">دسته‌بندی محصولات</h5>
              <ul className="menu">
                {productCategories.map((item) => (
                  <li
                    key={item.id}
                    className={selectedCategory === item.id ? "active" : ""}
                  >
                    <a
                      href={`#category-${item.id}`}
                      onClick={(event) => {
                        event.preventDefault();
                        setSelectedCategory(item.id);
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="widget sidebar-widget ext-sidebar-menu widget_nav_menu m-t30">
              <h5 className="widget-title m-b15">قطعات</h5>
              <ul className="menu">
                {partTypes.map((item) => (
                  <li
                    key={item.id}
                    className={selectedPart === item.id ? "active" : ""}
                  >
                    <a
                      href={`#part-${item.id}`}
                      onClick={(event) => {
                        event.preventDefault();
                        setSelectedPart(item.id);
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="widget m-t30">
              <div className="download-file">
                <h4 className="title">دانلود فایل‌ها</h4>
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
            <div className="row">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product.id} className="col-lg-6 col-md-6 col-sm-6">
                    <div className="shop-product-card m-b30 bg-white radius-sm">
                      <div className="shop-product-media">
                        <Link href={product.href}>
                          <Image
                            alt={product.title}
                            src={product.imageSrc}
                            width={500}
                            height={357}
                          />
                        </Link>
                      </div>
                      <div className="shop-product-info p-a20 text-center">
                        <h4 className="dlab-title m-b10">
                          <Link href={product.href}>{product.title}</Link>
                        </h4>
                        <p className="m-b15">{product.description}</p>
                        <Link
                          href={product.href}
                          className="site-button btnhover13"
                        >
                          مشاهده جزئیات
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center">
                  <p className="m-b0">محصولی در این دسته یافت نشد.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

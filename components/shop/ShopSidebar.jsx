"use client";
import Image from "next/image";
import Link from "next/link";
import { shopProducts } from "@/data/samenProducts";
import { partTypes, productCategories } from "@/data/shopFilters";
import React, { useState } from "react";

function FilterRadioList({ items, name, selectedId, onChange }) {
  return (
    <div className="shop-filter-radios">
      {items.map((item) => (
        <div className="search-content" key={item.id}>
          <input
            id={`${name}-${item.id}`}
            type="radio"
            name={name}
            checked={selectedId === item.id}
            onChange={() => onChange(item.id)}
          />
          <label htmlFor={`${name}-${item.id}`} className="search-content-area">
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default function ShopSidebar() {
  const [selectedCategory, setSelectedCategory] = useState(productCategories[0].id);
  const [selectedPart, setSelectedPart] = useState(partTypes[0].id);

  return (
    <div className="section-full content-inner">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 m-b30">
            <aside className="side-bar shop-categories sticky-top">
              <div className="widget recent-posts-entry">
                <div
                  className="dlab-accordion advanced-search toggle"
                  id="accordion1"
                >
                  <div className="panel">
                    <div className="acod-head">
                      <h5 className="acod-title">
                        <a data-bs-toggle="collapse" href="#categories">
                          دسته‌بندی محصولات
                        </a>
                      </h5>
                    </div>
                    <div id="categories" className="acod-body collapse show">
                      <div className="acod-content">
                        <FilterRadioList
                          items={productCategories}
                          name="product-category"
                          selectedId={selectedCategory}
                          onChange={setSelectedCategory}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h5 className="acod-title">
                        <a data-bs-toggle="collapse" href="#parts">
                          قطعات
                        </a>
                      </h5>
                    </div>
                    <div id="parts" className="acod-body collapse show">
                      <div className="acod-content">
                        <FilterRadioList
                          items={partTypes}
                          name="product-part"
                          selectedId={selectedPart}
                          onChange={setSelectedPart}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <div className="col-lg-9 col-md-8 m-b30">
            <div className="row">
              {shopProducts.map((product) => (
                <div key={product.id} className="col-lg-6 col-md-6 col-sm-6">
                  <div className="shop-product-card m-b30 bg-white box-shadow radius-sm">
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
                      <Link href={product.href} className="site-button btnhover13">
                        مشاهده جزئیات
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

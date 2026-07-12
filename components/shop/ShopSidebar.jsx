"use client";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { partTypes, productCategories } from "@/data/shopFilters";
import { useContextElement } from "@/context/Context";
import { formatToman } from "@/utlis/formatToman";
import React from "react";

function FilterCheckboxList({ items, namePrefix }) {
  return (
    <div className="product-brand">
      {items.map((item) => (
        <div className="search-content" key={item.id}>
          <input id={`${namePrefix}-${item.id}`} type="checkbox" />
          <label
            htmlFor={`${namePrefix}-${item.id}`}
            className="search-content-area"
          >
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default function ShopSidebar() {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();

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
                        <FilterCheckboxList
                          items={productCategories}
                          namePrefix="category"
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
                        <FilterCheckboxList
                          items={partTypes}
                          namePrefix="part"
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
              {products.map((product) => (
                <div key={product.id} className="col-lg-4 col-md-6 col-sm-6">
                  <div className={`item-box m-b10 ${product.styleClass}`}>
                    <div className="item-img">
                      <Image
                        alt=""
                        src={product.imgSrc}
                        width="450"
                        height="514"
                      />
                      <div className="item-info-in center">
                        <ul>
                          <li>
                            <a
                              className={
                                isAddedToCartProducts(product.id) ? "added" : ""
                              }
                              onClick={() => addProductToCart(product.id)}
                            >
                              <i className="ti-shopping-cart" />
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="ti-eye" />
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="ti-heart" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="item-info text-center text-black p-a10">
                      <h6 className="item-title font-weight-500">
                        <Link href={`/shop-product-details/${product.title}`}>
                          {product.title}
                        </Link>
                      </h6>
                      <ul className="item-review">
                        {[...Array(5)].map((_, i) => (
                          <React.Fragment key={i}>
                            <li>
                              <i
                                className={
                                  i + 1 < product.rating
                                    ? "fas fa-star text-yellow"
                                    : i + 0.5 == product.rating
                                    ? "fas fa-star-half-alt text-yellow"
                                    : "far fa-star"
                                }
                              />
                            </li>{" "}
                          </React.Fragment>
                        ))}
                      </ul>
                      <h4 className="item-price">
                        <del>{formatToman(product.price)}</del>{" "}
                        <span className="text-primary">
                          {formatToman(product.discountedPrice)}
                        </span>
                      </h4>
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

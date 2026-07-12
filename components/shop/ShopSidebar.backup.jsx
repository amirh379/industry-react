"use client";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { useContextElement } from "@/context/Context";
import { formatToman } from "@/utlis/formatToman";
import { toPersianDigits } from "@/utlis/toPersianDigits";
import Slider from "rc-slider";
import React, { useState } from "react";
export default function ShopSidebar() {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [width, setwidth] = useState([450, 2000]);
  const handleOnChange = (value) => {
    setwidth(value);
  };
  return (
    <div className="section-full content-inner">
      {/* Product */}
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
                          ╪»╪│╪¬┘çΓÇî╪¿┘å╪»█î ┘à╪¡╪╡┘ê┘ä╪º╪¬
                        </a>
                      </h5>
                    </div>
                    <div id="categories" className="acod-body collapse show">
                      <div className="acod-content">
                        <div className="widget widget_services">
                          <ul>
                            <li>
                              <Link href={`/shop-cart`}>┌⌐█î┘ü</Link>
                            </li>
                            <li>
                              <Link href={`/shop-cart`}>╪┤┘ä┘ê╪º╪▒ ╪¼█î┘å</Link>
                            </li>
                            <li>
                              <Link href={`/shop-cart`}>┌⌐┘ü╪┤</Link>
                            </li>
                            <li>
                              <Link href={`/shop-cart`}>┌ÿ╪º┌⌐╪¬</Link>
                            </li>
                            <li>
                              <Link href={`/shop-cart`}>╪¬╪º┘╛</Link>
                            </li>
                            <li>
                              <Link href={`/shop-cart`}>╪¿╪º┘å┘ê╪º┘å</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h5 className="acod-title">
                        <a data-bs-toggle="collapse" href="#price-range">
                          ┘à╪¡╪»┘ê╪»┘ç ┘é█î┘à╪¬
                        </a>
                      </h5>
                    </div>
                    <div className="price">
                      <input
                        type="text"
                        id="amount-2"
                        className="amount mt-2"
                        readonly
                        value={`${formatToman(400)} - ${formatToman(4000)}`}
                      />{" "}
                      <Slider
                        formatLabel={() => ``}
                        range
                        max={4000}
                        min={400}
                        defaultValue={width}
                        onChange={(value) => handleOnChange(value)}
                        id="slider"
                      />
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h5 className="acod-title">
                        <a data-bs-toggle="collapse" href="#color">
                          ╪▒┘å┌»
                        </a>
                      </h5>
                    </div>
                    <div id="color" className="acod-body collapse show">
                      <div className="acod-content">
                        <h6>╪º┘å╪¬╪«╪º╪¿ ╪▒┘å┌»</h6>
                        <div
                          className="btn-group product-item-color"
                          data-bs-toggle="buttons"
                        >
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio1"
                            defaultChecked
                          />
                          <label
                            className="btn  btn-color bg-red"
                            htmlFor="btnradio1"
                          />
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio2"
                          />
                          <label
                            className="btn  btn-color bg-dark"
                            htmlFor="btnradio2"
                          />
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio3"
                          />
                          <label
                            className="btn  btn-color bg-yellow"
                            htmlFor="btnradio3"
                          />
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio4"
                          />
                          <label
                            className="btn  btn-color bg-blue"
                            htmlFor="btnradio4"
                          />
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio5"
                          />
                          <label
                            className="btn  btn-color bg-green"
                            htmlFor="btnradio5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h5 className="acod-title">
                        <a data-bs-toggle="collapse" href="#size">
                          {" "}
                          ╪│╪º█î╪▓{" "}
                        </a>
                      </h5>
                    </div>
                    <div id="size" className="acod-body collapse show">
                      <div className="acod-content">
                        <h6>╪│╪º█î╪▓ ┘à╪¡╪╡┘ê┘ä</h6>
                        <div
                          className="btn-group product-item-size"
                          data-bs-toggle="buttons"
                        >
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio1"
                            id="btnradio11"
                            defaultChecked
                          />
                          <label className="btn" htmlFor="btnradio11">
                            XS
                          </label>
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio1"
                            id="btnradio21"
                          />
                          <label className="btn" htmlFor="btnradio21">
                            SM
                          </label>
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio1"
                            id="btnradio31"
                          />
                          <label className="btn" htmlFor="btnradio31">
                            MD
                          </label>
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio1"
                            id="btnradio41"
                          />
                          <label className="btn" htmlFor="btnradio41">
                            LG
                          </label>
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio1"
                            id="btnradio51"
                          />
                          <label className="btn" htmlFor="btnradio51">
                            XL
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h5 className="acod-title">
                        <a data-bs-toggle="collapse" href="#vendor">
                          ╪¿╪▒┘å╪»
                        </a>
                      </h5>
                    </div>
                    <div id="vendor" className="acod-body collapse show">
                      <div className="acod-content">
                        <div className="product-brand">
                          <div className="search-content">
                            <input id="seating1" type="checkbox" />
                            <label
                              htmlFor="seating1"
                              className="search-content-area"
                            >
                              Gap
                            </label>
                          </div>
                          <div className="search-content">
                            <input id="seating2" type="checkbox" />
                            <label
                              htmlFor="seating2"
                              className="search-content-area"
                            >
                              Guess
                            </label>
                          </div>
                          <div className="search-content">
                            <input id="seating3" type="checkbox" />
                            <label
                              htmlFor="seating3"
                              className="search-content-area"
                            >
                              Lacoste
                            </label>
                          </div>
                          <div className="search-content">
                            <input id="seating4" type="checkbox" />
                            <label
                              htmlFor="seating4"
                              className="search-content-area"
                            >
                              Levi's
                            </label>
                          </div>
                          <div className="search-content">
                            <input id="seating5" type="checkbox" />
                            <label
                              htmlFor="seating5"
                              className="search-content-area"
                            >
                              Polo
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h5 className="acod-title">
                        <a
                          data-bs-toggle="collapse"
                          href="#tags"
                          className="collapsed"
                        >
                          ╪¿╪▒┌å╪│╪¿ΓÇî┘ç╪º█î ┘à╪¡╪¿┘ê╪¿
                        </a>
                      </h5>
                    </div>
                    <div id="tags" className="acod-body collapse">
                      <div className="acod-content">
                        <div className="widget_tag_cloud radius">
                          <div className="tagcloud">
                            <a href="#">╪╖╪▒╪º╪¡█î</a>
                            <a href="#">╪▒╪º╪¿╪╖ ┌⌐╪º╪▒╪¿╪▒█î</a>
                            <a href="#">╪│╪ª┘ê</a>
                            <a href="#">┘ê╪▒╪»┘╛╪▒╪│</a>
                            <a href="#">╪¬┘ê╪│╪╣┘ç</a>
                            <a href="#">╪¼┘ê┘à┘ä╪º</a>
                            <a href="#">╪╖╪▒╪º╪¡█î</a>
                            <a href="#">╪▒╪º╪¿╪╖ ┌⌐╪º╪▒╪¿╪▒█î</a>
                            <a href="#">╪│╪ª┘ê</a>
                            <a href="#">┘ê╪▒╪»┘╛╪▒╪│</a>
                            <a href="#">╪¬┘ê╪│╪╣┘ç</a>
                            <a href="#">╪¼┘ê┘à┘ä╪º</a>
                            <a href="#">╪╖╪▒╪º╪¡█î</a>
                            <a href="#">╪▒╪º╪¿╪╖ ┌⌐╪º╪▒╪¿╪▒█î</a>
                            <a href="#">╪│╪ª┘ê</a>
                            <a href="#">┘ê╪▒╪»┘╛╪▒╪│</a>
                            <a href="#">╪¬┘ê╪│╪╣┘ç</a>
                            <a href="#">╪¼┘ê┘à┘ä╪º</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="acod-head">
                      <h5 className="acod-title">
                        <a
                          data-bs-toggle="collapse"
                          href="#features"
                          className="collapsed"
                        >
                          ┘à╪¡╪╡┘ê┘ä╪º╪¬ ┘ê█î┌ÿ┘ç
                        </a>
                      </h5>
                    </div>
                    <div id="features" className="acod-body collapse">
                      <div className="acod-content">
                        {products.slice(0, 3).map((elm, i) => (
                          <div key={i} className="item-widgets-box">
                            <div className="item-widgets-left">
                              <Image
                                alt=""
                                src={elm.imgSrc}
                                width="250"
                                height="294"
                              />
                            </div>
                            <div className="item-widgets-body text-black">
                              <h6 className="item-title text-capitalize font-weight-500 m-t0">
                                <Link
                                  href={`/shop-product-details/${elm.title}`}
                                >
                                  {elm.title}
                                </Link>
                              </h6>
                              <ul className="item-review text-yellow-light">
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star-half-alt" />
                                </li>
                                <li>
                                  <i className="far fa-star" />
                                </li>
                              </ul>
                              <h6 className="item-price m-b0">
                                <del>{formatToman(elm.price)}</del>
                                <span className="text-primary">
                                  {formatToman(elm.discountedPrice)}
                                </span>
                              </h6>
                            </div>
                          </div>
                        ))}
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
      {/* Product END */}
    </div>
  );
}

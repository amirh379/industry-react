"use client";
import { useContextElement } from "@/context/Context";
import { formatToman } from "@/utlis/formatToman";
import Image from "next/image";
import Link from "next/link";
export default function Checkout() {
  const { cartProducts, setCartProducts, totalPrice } = useContextElement();
  return (
    <div className="section-full content-inner">
      {/* Product */}
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()} className="shop-form">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-md-6 m-b30">
              <h4>آدرس صورتحساب و ارسال</h4>
              <div className="form-group">
                <select
                  className="form-select form-select-lg type-2"
                  aria-label="Default select example"
                >
                  <option value="">ایران</option>
                  <option value="">افغانستان</option>
                  <option value="">ترکیه</option>
                  <option value="">عراق</option>
                  <option value="">امارات متحده عربی</option>
                  <option value="">قطر</option>
                  <option value="">عمان</option>
                  <option value="">کویت</option>
                  <option value="">پاکستان</option>
                  <option value="">تاجیکستان</option>
                  <option value="">آذربایجان</option>
                  <option value="">ارمنستان</option>
                  <option value="">سایر کشورها</option>
                </select>
              </div>

              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="نام"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="نام خانوادگی"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="نام شرکت"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="آدرس"
                />
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="واحد، پلاک و غیره"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="شهر"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="استان"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="کد پستی"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="ایمیل"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="تلفن"
                  />
                </div>
              </div>
              <h6>
                <button
                  className="site-button-link"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#create-an-account"
                >
                  ساخت حساب کاربری
                  <i className="far fa-arrow-alt-circle-down" />
                </button>
              </h6>
              <div id="create-an-account" className="collapse">
                <p>
                  با وارد کردن اطلاعات زیر یک حساب کاربری بسازید. اگر قبلا در
                  سایت ثبت‌نام کرده‌اید، از بالای صفحه وارد شوید.
                </p>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="رمز عبور"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-md-6 m-b30">
              <h4 className="font-weight-600">
                <button
                  className="site-button-link"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#different-address"
                >
                  ارسال به آدرس دیگر
                  <i className="far fa-arrow-alt-circle-down" />
                </button>
              </h4>
              <div id="different-address" className="collapse">
                <p>
                  اگر پیش از این از ما خرید کرده‌اید، اطلاعات خود را در کادرهای
                  زیر وارد کنید. مشتریان جدید می‌توانند به بخش آدرس صورتحساب و
                  ارسال مراجعه کنند.
                </p>
                <div className="form-group">
                  <select
                    className="form-select form-select-lg type-2"
                    aria-label="Default select example"
                  >
                    <option value="">ایران</option>
                    <option value="">افغانستان</option>
                    <option value="">ترکیه</option>
                    <option value="">عراق</option>
                    <option value="">امارات متحده عربی</option>
                    <option value="">قطر</option>
                    <option value="">عمان</option>
                    <option value="">کویت</option>
                    <option value="">پاکستان</option>
                    <option value="">تاجیکستان</option>
                    <option value="">آذربایجان</option>
                    <option value="">ارمنستان</option>
                    <option value="">سایر کشورها</option>
                  </select>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="نام"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="نام خانوادگی"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="نام شرکت"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="آدرس"
                  />
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="واحد، پلاک و غیره"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="شهر"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="استان"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="کد پستی"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="ایمیل"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="تلفن"
                    />
                  </div>
                </div>
                <p>
                  با وارد کردن اطلاعات زیر یک حساب کاربری بسازید. اگر قبلا در
                  سایت ثبت‌نام کرده‌اید، از بالای صفحه وارد شوید.
                </p>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="توضیحات سفارش، مثلا یادداشت مخصوص برای تحویل کالا"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="dlab-divider bg-gray-dark text-gray-dark icon-center">
          <i className="fas fa-circle bg-white text-gray-dark" />
        </div>
        <div className="row">
          <div className="col-lg-6 m-b15">
            {cartProducts.length ? (
              <>
                <h4>سفارش شما</h4>
                <table className="table-bordered check-tbl">
                  <thead>
                    <tr>
                      <th>تصویر</th>
                      <th>نام محصول</th>
                      <th>جمع</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts.map((elm, i) => (
                      <tr key={i}>
                        <td>
                          <Image
                            alt=""
                            src={elm.imgSrc}
                            width="450"
                            height="514"
                          />
                        </td>
                        <td>
                          {elm.title} x {elm.quantity}
                        </td>
                        <td className="product-price">
                          {formatToman(elm.discountedPrice * elm.quantity)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              <div className="row mb-5 gap-3 align-items-center">
                <div className="col-6">سبد خرید شما خالی است</div>
                <div className="col-5">
                  <Link href={"/shop"}>
                    <button className="site-button" type="button">
                      مشاهده فروشگاه
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-6 m-b15">
            <form onSubmit={(e) => e.preventDefault()} className="shop-form">
              <h4>جمع کل سفارش</h4>
              <table className="table-bordered check-tbl">
                <tbody>
                  <tr>
                    <td>جمع جزء سفارش</td>
                    <td className="product-price">{formatToman(totalPrice)}</td>
                  </tr>
                  <tr>
                    <td>هزینه ارسال</td>
                    <td>ارسال رایگان</td>
                  </tr>
                  <tr>
                    <td>تخفیف</td>
                    <td className="product-price">{formatToman(28)}</td>
                  </tr>
                  <tr>
                    <td>جمع کل</td>
                    <td className="product-price-total">
                      {formatToman(Math.max(0, totalPrice - 28))}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h5>روش پرداخت</h5>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="نام روی کارت"
                />
              </div>
              <div className="form-group">
                <select
                  className="form-select form-select-lg type-2"
                  aria-label="Default select example"
                >
                  <option value="">نوع کارت اعتباری</option>
                  <option value="">گزینه دیگر</option>
                  <option value="">یک گزینه</option>
                  <option value="">سایر</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="شماره کارت"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="کد امنیتی کارت"
                />
              </div>
              <div className="form-group">
                <button
                  className="site-button button-lg btn-block"
                  type="button"
                >
                  ثبت نهایی سفارش
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Product END */}
    </div>
  );
}

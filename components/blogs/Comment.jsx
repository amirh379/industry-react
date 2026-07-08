"use client";

import Image from "next/image";
import { toPersianDigits } from "@/utlis/toPersianDigits";

export default function Comment() {
  return (
    <div className="clear" id="comment-list">
      <div className="comments-area" id="comments">
        <h2 className="comments-title">{toPersianDigits(8)} دیدگاه</h2>
        <div className="clearfix">
          {/* comment list END */}
          <ol className="comment-list">
            <li className="comment">
              <div className="comment-body">
                <div className="comment-author vcard">
                  <Image
                    className="avatar photo"
                    alt=""
                    src="/images/testimonials/pic1.jpg"
                    width="100"
                    height="100"
                  />
                  <cite className="fn">علی محمدی</cite>
                  <span className="says">می‌گوید:</span>
                </div>
                <div className="comment-meta">
                  <a href="#">{toPersianDigits("14 مهر 1403")} - ساعت {toPersianDigits("7:15")}</a>
                </div>
                <p>
                  کیفیت خدمات و همراهی تیم پشتیبانی واقعاً قابل تحسین بود.
                  از همکاری با این مجموعه بسیار راضی هستم و پیشنهاد می‌کنم.
                </p>
                <div className="reply">
                  <a href="#" className="comment-reply-link">
                    پاسخ
                  </a>
                </div>
              </div>
              <ol className="children">
                <li className="comment odd parent">
                  <div className="comment-body">
                    <div className="comment-author vcard">
                      <Image
                        className="avatar photo"
                        alt=""
                        src="/images/testimonials/pic2.jpg"
                        width="100"
                        height="100"
                      />
                      <cite className="fn">حسین یوسفی</cite>
                      <span className="says">می‌گوید:</span>
                    </div>
                    <div className="comment-meta">
                      <a href="#">{toPersianDigits("14 مهر 1403")} - ساعت {toPersianDigits("7:20")}</a>
                    </div>
                    <p>
                      کاملاً موافقم، من هم تجربه مشابهی داشتم. تحویل به‌موقع
                      و کیفیت بالای محصولات نکته بسیار مثبتی است.
                    </p>
                    <div className="reply">
                      <a href="#" className="comment-reply-link">
                        پاسخ
                      </a>
                    </div>
                  </div>
                  <ol className="children">
                    <li className="comment odd parent">
                      <div className="comment-body">
                        <div className="comment-author vcard">
                          <Image
                            className="avatar photo"
                            alt=""
                            src="/images/testimonials/pic3.jpg"
                            width="100"
                            height="100"
                          />
                          <cite className="fn">آرمان توکلی</cite>
                          <span className="says">می‌گوید:</span>
                        </div>
                        <div className="comment-meta">
                          <a href="#">{toPersianDigits("14 مهر 1403")} - ساعت {toPersianDigits("7:25")}</a>
                        </div>
                        <p>
                          پشتیبانی فنی سریع و دقیق بود. تشکر ویژه از تیم
                          فروش برای راهنمایی‌های کاملشان.
                        </p>
                        <div className="reply">
                          <a href="#" className="comment-reply-link">
                            پاسخ
                          </a>
                        </div>
                      </div>
                    </li>
                  </ol>
                  {/* list END */}
                </li>
              </ol>
              {/* list END */}
            </li>
            <li className="comment">
              <div className="comment-body">
                <div className="comment-author vcard">
                  <Image
                    className="avatar photo"
                    alt=""
                    src="/images/testimonials/pic1.jpg"
                    width="100"
                    height="100"
                  />
                  <cite className="fn">مریم صادقی</cite>
                  <span className="says">می‌گوید:</span>
                </div>
                <div className="comment-meta">
                  <a href="#">{toPersianDigits("15 مهر 1403")} - ساعت {toPersianDigits("9:10")}</a>
                </div>
                <p>
                  طراحی و کیفیت اجرای پروژه فوق‌العاده بود. حتماً برای
                  پروژه‌های بعدی هم با این تیم همکاری خواهم کرد.
                </p>
                <div className="reply">
                  <a href="#" className="comment-reply-link">
                    پاسخ
                  </a>
                </div>
              </div>
            </li>
            <li className="comment">
              <div className="comment-body">
                <div className="comment-author vcard">
                  <Image
                    className="avatar photo"
                    alt=""
                    src="/images/testimonials/pic2.jpg"
                    width="100"
                    height="100"
                  />
                  <cite className="fn">پریسا احمدی</cite>
                  <span className="says">می‌گوید:</span>
                </div>
                <div className="comment-meta">
                  <a href="#">{toPersianDigits("15 مهر 1403")} - ساعت {toPersianDigits("10:40")}</a>
                </div>
                <p>
                  ارتباط تیم فروش بسیار حرفه‌ای و شفاف بود. اطلاعات کاملی
                  درباره محصولات در اختیار من قرار گرفت.
                </p>
                <div className="reply">
                  <a href="#" className="comment-reply-link">
                    پاسخ
                  </a>
                </div>
              </div>
            </li>
            <li className="comment">
              <div className="comment-body">
                <div className="comment-author vcard">
                  <Image
                    className="avatar photo"
                    alt=""
                    src="/images/testimonials/pic3.jpg"
                    width="100"
                    height="100"
                  />
                  <cite className="fn">نگار کریمی</cite>
                  <span className="says">می‌گوید:</span>
                </div>
                <div className="comment-meta">
                  <a href="#">{toPersianDigits("16 مهر 1403")} - ساعت {toPersianDigits("8:05")}</a>
                </div>
                <p>
                  از سرعت پاسخگویی و دقت در اجرای سفارش بسیار راضی بودم.
                  کیفیت محصول نهایی هم عالی بود.
                </p>
                <div className="reply">
                  <a href="#" className="comment-reply-link">
                    پاسخ
                  </a>
                </div>
              </div>
            </li>
          </ol>
          {/* comment list END */}
          {/* Form */}
          <div className="comment-respond" id="respond">
            <h4 className="comment-reply-title" id="reply-title">
              دیدگاه خود را بنویسید
              <small>
                <a
                  style={{ display: "none" }}
                  href="#"
                  id="cancel-comment-reply-link"
                  rel="nofollow"
                >
                  لغو پاسخ
                </a>
              </small>
            </h4>
            <form
              className="comment-form"
              id="commentform"
              onSubmit={(e) => e.preventDefault()}
            >
              <p className="comment-form-author">
                <label htmlFor="author">
                  نام <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="author"
                  name="author"
                  placeholder="نام نویسنده"
                  id="author"
                />
              </p>
              <p className="comment-form-email">
                <label htmlFor="email">
                  ایمیل <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="email"
                  placeholder="ایمیل"
                  name="email"
                  id="email"
                />
              </p>
              <p className="comment-form-url">
                <label htmlFor="url">وب‌سایت</label>
                <input
                  type="text"
                  defaultValue="url"
                  placeholder="وب‌سایت"
                  name="url"
                  id="url"
                />
              </p>
              <p className="comment-form-comment">
                <label htmlFor="comment">دیدگاه</label>
                <textarea
                  rows={8}
                  name="comment"
                  placeholder="دیدگاه خود را بنویسید"
                  id="comment"
                  defaultValue={""}
                />
              </p>
              <p className="form-submit">
                <input
                  type="submit"
                  defaultValue="ارسال دیدگاه"
                  className="submit"
                  id="submit"
                  name="submit"
                />
              </p>
            </form>
          </div>
          {/* Form END */}
        </div>
      </div>
    </div>
  );
}

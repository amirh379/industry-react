"use client";
import { blogPosts } from "@/data/blogs";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Blogs() {
  return (
    <div
      className="section-full content-inner bg-gray wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.4s"
    >
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">آخرین مطالب وبلاگ</h2>
          <p>
            جدیدترین اخبار، مقالات و تحلیل‌های تخصصی درباره صنعت را در وبلاگ
            ما دنبال کنید.
          </p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={2}
          loop
          autoplay={{
            delay: 4000,
          }}
          speed={2500}
          modules={[Autoplay]}
          className="blog-carousel owl-none owl-carousel"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide className="item" key={index}>
              <div className="blog-post post-style-1">
                <div className="dlab-post-media dlab-img-effect rotate">
                  <Link href={`/blog-single/${post.title}`}>
                    <Image src={post.imgSrc} width={700} height={438} alt="" />
                  </Link>
                </div>
                <div className="dlab-post-info">
                  <div className="dlab-post-meta">
                    <ul>
                      <li className="post-date">
                        <strong>{post.date.day}</strong>{" "}
                        <span>{post.date.year}</span>
                      </li>
                      <li className="post-author">
                        نویسنده: <a href={`#`}>{post.author}</a>
                      </li>
                    </ul>
                  </div>
                  <div className="dlab-post-title">
                    <h3 className="post-title">
                      <Link href={`/blog-single/${post.title}`}>
                        {post.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="dlab-post-readmore">
                    <Link
                      href={`/blog-single/${post.title}`}
                      title="ادامه مطلب"
                      rel="bookmark"
                      className="site-button btnhover13"
                    >
                      ادامه مطلب
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

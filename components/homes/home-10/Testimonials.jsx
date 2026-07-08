"use client";
import { testimonials5 } from "@/data/testimonials";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <div className="section-full content-inner bg-gray">
      <div className="container">
        <div className="section-head style2 text-center">
          <h2 className="title">Testimonials</h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          slidesPerGroup={1}
          loop
          autoplay={{
            delay: 4000,
          }}
          speed={2500}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            991: {
              slidesPerView: 2,
            },
          }}
          className="testimonial-five owl-carousel owl-btn-center-lr owl-btn-2 primary dots-style-3 owl-theme"
        >
          {testimonials5.map((testimonial, index) => (
            <SwiperSlide
              className="swiper-slide item wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay={testimonial.animationDelay}
              key={index}
            >
              <div className="testimonial-14 quote-left">
                <div className="testimonial-detail clearfix text-white">
                  <h5 className="testimonial-name m-t10 m-b5">
                    {testimonial.name}
                  </h5>
                  <span className="testimonial-position">
                    {testimonial.position}
                  </span>
                </div>
                <div className="testimonial-text">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <>
      {/* Service Info Head */}

      {/* Service Info Head End */}
      {/* About Us */}
      <div className="section-full content-inner bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-6 m-b30 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="our-story">
                <span>OUR STORY</span>
                <h2 className="title">
                  Commited to High <br />
                  Quality <span className="text-primary"> Service </span>
                </h2>
                <h4 className="title">
                  Amazing things happen to your business when we connect those
                  dots of utility and value.
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting Factory. Lorem Ipsum has been the Factory's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.Lorem Ipsum is simply dummy text of the printing
                  and typesetting Factory.
                </p>
                <Link href={`/about-2`} className="site-button btnhover14">
                  Read More
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 m-b30 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <Image
                className="radius-sm"
                alt=""
                src="/images/about/pic6.jpg"
                width="600"
                height="800"
              />
            </div>
          </div>
        </div>
      </div>
      {/* About Us End */}
    </>
  );
}

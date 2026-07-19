"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { boardMembers } from "@/data/boardOfDirectors";
import { companyInfo } from "@/data/company";
import { toPersianDigits } from "@/utlis/toPersianDigits";

export default function BoardOfDirectors() {
  const [isOpen, setOpen] = useState(false);
  // Placeholder until the company video is provided.
  const boardVideoId = "";

  return (
    <>
      <div
        className="dlab-bnr-inr overlay-black-middle text-center bg-pt"
        style={{ backgroundImage: "url(/images/banner/bnr2.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry align-m text-center">
            <h1 className="text-white">هیئت مدیره</h1>
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link href={`/`}>خانه</Link>
                </li>
                <li>هیئت مدیره</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="content-block">
        <div
          className="section-full content-inner bg-white video-section"
          style={{ backgroundImage: 'url("/images/background/bg-video.png")' }}
        >
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 col-md-12 m-b30">
                <div className="video-bx">
                  <Image
                    alt="ویدیوی معرفی هیئت مدیره"
                    src="/images/about/pic5.jpg"
                    width={1000}
                    height={674}
                  />
                  <div className="video-play-icon">
                    <a
                      onClick={() => {
                        if (boardVideoId) setOpen(true);
                      }}
                      className={`popup-youtube video bg-primary${boardVideoId ? "" : " disabled"}`}
                      role="button"
                      aria-label="پخش ویدیو"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 m-b30 align-self-center video-infobx">
                <div className="ceo-message-box content-bx1">
                  <h2 className="m-b15 title">پیام مدیرعامل</h2>
                  <p className="m-b20">
                    ما در ثامن فرفورژه باور داریم کیفیت پایدار، نوآوری در طراحی
                    و تعهد به مشتری، پایه‌های موفقیت بلندمدت هر مجموعه صنعتی
                    است. هدف ما ارائه محصولاتی است که علاوه بر زیبایی، امنیت و
                    دوام ساختمان‌های شما را تضمین کند.
                  </p>
                  <p className="m-b20">
                    با تکیه بر تجربه تیم متخصص و ظرفیت تولید گسترده، آماده
                    همکاری در پروژه‌های سفارشی، ویلایی و صنعتی هستیم.
                  </p>
                  <h4 className="m-b0">مدیریت {companyInfo.name}</h4>
                  <span className="font-14">مدیرعامل شرکت</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full content-inner bg-gray">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title">اعضای هیئت مدیره</h2>
              <p>
                تیمی از مدیران باتجربه که راهبرد توسعه و کیفیت ثامن فرفورژه را
                هدایت می‌کنند.
              </p>
            </div>
            <div className="row">
              {boardMembers.map((member) => {
                const telHref = member.phone.replace(/-/g, "");
                return (
                  <div className="col-lg-6 col-md-12 m-b30" key={member.id}>
                    <div className="team-box-type dlab-box board-team-box">
                      <div className="team-mamber-img dlab-media">
                        <Image
                          src={member.imageSrc}
                          alt={member.name}
                          width={500}
                          height={600}
                        />
                      </div>
                      <div className="team-info-box">
                        <h4 className="dlab-title">{member.name}</h4>
                        <span className="dlab-position d-block m-b10">
                          {member.role}
                        </span>
                        <p>{member.bio}</p>
                        <ul className="list-inline m-tb20 board-member-social">
                          {member.socialLinks.map((social) => (
                            <li key={`${member.id}-${social.className}`}>
                              <a
                                href={social.href}
                                className={`site-button ${social.className} sharp outline`}
                                target={
                                  social.href !== "#" ? "_blank" : undefined
                                }
                                rel={
                                  social.href !== "#"
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                aria-label={social.className}
                              >
                                <i className={social.iconClass} />
                              </a>
                            </li>
                          ))}
                        </ul>
                        <ul className="team-p-info">
                          <li>
                            <i className="ti-mobile m-r5 text-primary" />
                            <a href={`tel:${telHref}`}>
                              {toPersianDigits(member.phone)}
                            </a>
                          </li>
                          <li>
                            <i className="ti-email m-r5 text-primary" />
                            <a href={`mailto:${member.email}`}>
                              {member.email}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {boardVideoId ? (
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId={boardVideoId}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}

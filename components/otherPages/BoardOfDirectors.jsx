import Image from "next/image";
import Link from "next/link";
import React from "react";
import { boardMembers } from "@/data/boardOfDirectors";

export default function BoardOfDirectors() {
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
              {boardMembers.map((member) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={member.id}>
                  <div className="board-member-card m-b30 bg-white box-shadow radius-sm">
                    <div className="board-member-media">
                      <Image
                        src={member.imageSrc}
                        alt={member.name}
                        width={358}
                        height={320}
                      />
                    </div>
                    <div className="board-member-info">
                      <h4 className="dlab-title m-b5">{member.name}</h4>
                      <span className="dlab-position d-block m-b15">
                        {member.role}
                      </span>
                      <p className="m-b0">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

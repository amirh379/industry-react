import Image from "next/image";
import { companyInfo } from "@/data/company";

const progressItems = [
  { label: "کیفیت تولید", value: 92 },
  { label: "رضایت مشتریان", value: 88 },
  { label: "تحویل به‌موقع", value: 85 },
];

export default function Progress() {
  return (
    <div className="section-full about-progress">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 col-md-12 bg-white">
            <div className="max-w700 m-auto content-inner">
              <div className="section-head">
                <h2 className="title">
                  خدماتی ارائه می‌دهیم که خودمان هم انتظارش را داریم
                </h2>
                <p>
                  {companyInfo.name} با تمرکز بر کیفیت، طراحی و پشتیبانی، مسیر
                  همکاری پایدار با مشتریان را دنبال می‌کند. جزئیات این بخش
                  به‌زودی تکمیل می‌شود.
                </p>
              </div>
              {progressItems.map((item, index) => (
                <div className="about-progress-box" key={item.label}>
                  <h6 className="text-primary">
                    {item.label}
                    <span className="progress-num pull-right">
                      {item.value}%
                    </span>
                  </h6>
                  <div className="about-progress-bar bg-gray-dark">
                    <div
                      className="about-progress bg-primary wow slideInLeft"
                      data-wow-delay={`${0.2 + index * 0.2}s`}
                      data-wow-duration="2s"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 col-md-12 p-a0">
            <Image
              alt={companyInfo.name}
              className="img-cover"
              src="/images/about/pic5.jpg"
              width={1000}
              height={674}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

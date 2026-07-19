import Image from "next/image";
import { companyInfo } from "@/data/company";

const highlights = [
  {
    icon: "flaticon-factory",
    title: "تولید صنعتی",
    text: "خطوط تولید مدرن برای ساخت درب، نرده و قطعات فرفورژه با ظرفیت بالا.",
  },
  {
    icon: "flaticon-settings",
    title: "مهندسی و طراحی",
    text: "طراحی اختصاصی و مهندسی محصول متناسب با نیاز پروژه‌های ساختمانی.",
  },
  {
    icon: "flaticon-worker",
    title: "تیم متخصص",
    text: "همراهی کارشناسان فروش و فنی از مشاوره تا تحویل نهایی.",
  },
];

export default function About2() {
  return (
    <div className="section-full box-about-list">
      <div className="row spno">
        <div className="col-lg-6 col-md-12">
          <Image
            alt={companyInfo.name}
            className="img-cover"
            src="/images/about/pic3.jpg"
            width={1000}
            height={674}
          />
        </div>
        <div className="col-lg-6 col-md-12 bg-primary">
          <div className="max-w700 m-auto p-tb50 p-lr20">
            <div className="text-white">
              <h2>
                در حال رشد و ساخت
                <br />
                محصولات بهتر
              </h2>
            </div>
            {highlights.map((item, index) => (
              <div
                className={`icon-bx-wraper left${index < highlights.length - 1 ? " m-b30" : ""}`}
                key={item.title}
              >
                <div className="icon-md">
                  <span className="icon-cell text-white">
                    <i className={item.icon} />
                  </span>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-tilte text-white">{item.title}</h4>
                  <p className="text-white">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

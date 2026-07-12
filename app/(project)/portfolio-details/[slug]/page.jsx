import Footer15 from "@/components/footers/Footer15";
import Link from "next/link";
import Header22 from "@/components/headers/Header22";
import ProjectDetails from "@/components/portfolio/ProjectDetails";
import React from "react";
import { allProjects } from "@/data/projects";

export const metadata = {
  title: "جزئیات نمونه‌کار || صنعت - قالب کارخانه و صنعتی",
  description: "صنعت - قالب کارخانه و صنعتی",
};
export default function page({ params }) {
  const slug = params.slug.split("%20").join(" ");
  const projectItem =
    allProjects.filter((elm) => elm.title == slug)[0] || allProjects[0];

  return (
    <>
      <div className="page-wraper  ">
        <Header22 />
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">جزئیات نمونه‌کار</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>خانه</Link>
                    </li>
                    <li>نمونه‌کارها</li>
                    <li>جزئیات نمونه‌کار</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>

          <div className="content-block">
            <ProjectDetails projectItem={projectItem} />
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}

import Footer2 from "@/components/footers/Footer2";
import Header17 from "@/components/headers/Header17";
import Hero from "@/components/homes/home-18/Hero";
import Service from "@/components/homes/home-2/Service";
import React from "react";

export const metadata = {
  title: "Home 18 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <div className="page-content bg-white">
          <Hero />
          <div className="content-block">
            <Service />
          </div>
        </div>
        <Footer2 />
      </div>
    </>
  );
}

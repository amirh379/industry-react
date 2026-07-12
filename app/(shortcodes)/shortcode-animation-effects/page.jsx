import Footer15 from "@/components/footers/Footer15";
import Header22 from "@/components/headers/Header22";
import Animations from "@/components/shortcodes/Animations";
import React from "react";

export const metadata = {
  title:
    "Shortcode Animation Effects || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header22 />
        <div className="page-content bg-white">
          <Animations />
        </div>
        <Footer15 />
      </div>
    </>
  );
}

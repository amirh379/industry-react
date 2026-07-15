import CommingSoon from "@/components/otherPages/CommingSoon";
import React from "react";

export const metadata = {
  title:"ثامن فرفورژه",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <div className="comming-soon">
      <div className="page-wraper">
        <CommingSoon />
      </div>{" "}
    </div>
  );
}

import React from "react";
import { priceLists } from "@/data/priceLists";
import PdfDownloadCards from "./PdfDownloadCards";

export default function PriceList() {
  return (
    <PdfDownloadCards
      pageTitle="لیست قیمت"
      breadcrumbLabel="لیست قیمت"
      sectionTitle="لیست‌های قیمت قابل دانلود"
      sectionDescription="لیست قیمت به‌روز محصولات ثامن فرفورژه را از فهرست زیر دریافت کنید."
      items={priceLists}
    />
  );
}

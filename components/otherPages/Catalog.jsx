import React from "react";
import { catalogs } from "@/data/catalogs";
import PdfDownloadCards from "./PdfDownloadCards";

export default function Catalog() {
  return (
    <PdfDownloadCards
      pageTitle="کاتالوگ"
      breadcrumbLabel="کاتالوگ"
      sectionTitle="کاتالوگ‌های قابل دانلود"
      sectionDescription="کاتالوگ‌های معرفی محصولات ثامن فرفورژه را از فهرست زیر دریافت کنید."
      items={catalogs}
    />
  );
}

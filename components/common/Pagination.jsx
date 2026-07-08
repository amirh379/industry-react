import React from "react";
import { toPersianDigits } from "@/utlis/toPersianDigits";

export default function Pagination() {
  return (
    <>
      <li className="previous">
        <a href="#">
          <i className="ti-arrow-right" /> قبلی
        </a>
      </li>
      <li className="active">
        <a href="#">{toPersianDigits(1)}</a>
      </li>
      <li>
        <a href="#">{toPersianDigits(2)}</a>
      </li>
      <li>
        <a href="#">{toPersianDigits(3)}</a>
      </li>
      <li className="next">
        <a href="#">
          بعدی <i className="ti-arrow-left" />
        </a>
      </li>
    </>
  );
}

"use client";

import React from "react";

// Simplified interactive Iran map — clickable regions for key provinces.
// Paths are approximate schematic shapes for UX, not cartographic accuracy.
const provinces = [
  {
    id: "آذربایجان شرقی",
    d: "M118 72 L142 58 L168 66 L170 92 L152 108 L128 102 L116 86 Z",
  },
  {
    id: "آذربایجان غربی",
    d: "M88 70 L116 72 L116 98 L102 118 L78 108 L76 84 Z",
  },
  {
    id: "اردبیل",
    d: "M168 66 L190 70 L192 92 L170 92 Z",
  },
  {
    id: "گیلان",
    d: "M168 92 L198 96 L200 118 L172 120 L152 108 Z",
  },
  {
    id: "مازندران",
    d: "M200 100 L268 104 L272 122 L204 120 Z",
  },
  {
    id: "گلستان",
    d: "M272 104 L320 108 L318 128 L274 124 Z",
  },
  {
    id: "خراسان شمالی",
    d: "M320 100 L360 108 L352 132 L318 128 Z",
  },
  {
    id: "خراسان رضوی",
    d: "M318 128 L360 120 L400 148 L392 200 L340 210 L312 170 Z",
  },
  {
    id: "خراسان جنوبی",
    d: "M340 210 L392 200 L400 250 L360 270 L330 240 Z",
  },
  {
    id: "سمنان",
    d: "M268 124 L312 130 L312 170 L270 168 L250 142 Z",
  },
  {
    id: "تهران",
    d: "M230 128 L258 130 L260 150 L232 152 Z",
  },
  {
    id: "البرز",
    d: "M210 120 L230 128 L232 146 L208 140 Z",
  },
  {
    id: "قزوین",
    d: "M188 118 L210 120 L208 144 L182 138 Z",
  },
  {
    id: "زنجان",
    d: "M152 108 L182 118 L178 144 L148 136 Z",
  },
  {
    id: "کردستان",
    d: "M102 118 L148 136 L140 168 L96 150 Z",
  },
  {
    id: "همدان",
    d: "M148 136 L178 144 L176 172 L146 168 Z",
  },
  {
    id: "مرکزی",
    d: "M178 144 L232 152 L230 180 L176 172 Z",
  },
  {
    id: "قم",
    d: "M232 152 L258 154 L256 176 L230 174 Z",
  },
  {
    id: "اصفهان",
    d: "M230 174 L290 168 L310 230 L250 250 L210 220 Z",
  },
  {
    id: "یزد",
    d: "M290 180 L340 210 L330 250 L290 240 Z",
  },
  {
    id: "کرمان",
    d: "M330 240 L400 250 L410 310 L350 320 L320 280 Z",
  },
  {
    id: "سیستان و بلوچستان",
    d: "M400 250 L450 270 L460 360 L400 350 L380 310 Z",
  },
  {
    id: "هرمزگان",
    d: "M320 310 L400 320 L390 360 L300 350 Z",
  },
  {
    id: "فارس",
    d: "M250 250 L320 260 L320 310 L260 320 L230 280 Z",
  },
  {
    id: "بوشهر",
    d: "M210 280 L250 290 L250 330 L200 320 Z",
  },
  {
    id: "کهگیلویه و بویراحمد",
    d: "M210 240 L250 250 L240 280 L200 270 Z",
  },
  {
    id: "چهارمحال و بختیاری",
    d: "M190 220 L230 230 L220 260 L180 250 Z",
  },
  {
    id: "خوزستان",
    d: "M140 230 L200 240 L200 300 L130 290 Z",
  },
  {
    id: "لرستان",
    d: "M146 168 L190 180 L190 220 L140 210 Z",
  },
  {
    id: "ایلام",
    d: "M96 168 L140 180 L130 220 L90 200 Z",
  },
  {
    id: "کرمانشاه",
    d: "M96 150 L146 168 L130 190 L90 170 Z",
  },
];

export default function IranProvinceMap({
  selectedProvince,
  availableProvinces = [],
  onSelect,
}) {
  const availableSet = new Set(availableProvinces);

  return (
    <div className="iran-map-wrap">
      <svg
        viewBox="60 40 420 340"
        className="iran-map-svg"
        role="img"
        aria-label="نقشه استان‌های ایران"
      >
        {provinces.map((province) => {
          const hasRep = availableSet.has(province.id);
          const isActive = selectedProvince === province.id;
          return (
            <path
              key={province.id}
              d={province.d}
              className={[
                "iran-map-province",
                hasRep ? "has-rep" : "",
                isActive ? "is-active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => onSelect?.(province.id)}
            >
              <title>{province.id}</title>
            </path>
          );
        })}
      </svg>
      <div className="iran-map-legend">
        <span className="legend-item has-rep">دارای نمایندگی</span>
        <span className="legend-item">سایر استان‌ها</span>
      </div>
    </div>
  );
}

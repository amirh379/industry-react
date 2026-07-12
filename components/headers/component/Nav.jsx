"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState("");
  const aboutLinks = [
    { href: "/about-1", label: "درباره ما" },
    { href: "/board-of-directors", label: "هیئت مدیره" },
    { href: "/factories", label: "کارخانه‌ها" },
    { href: "/shortcode-testimonials", label: "مشتریان" },
  ];
  const isRouteActive = (href) => {
    const currentSegment = pathname.split("/")[1];
    const targetSegment = href.split("/")[1];
    return currentSegment === targetSegment;
  };
  const isAboutActive = aboutLinks.some((item) => isRouteActive(item.href));

  return (
    <>
      <li className={isRouteActive("/") ? "active" : ""}>
        <Link className={isRouteActive("/") ? "menuActive" : ""} href={`/`}>
          خانه
        </Link>
      </li>
      <li className={isRouteActive("/shop-sidebar") ? "active" : ""}>
        <Link
          className={isRouteActive("/shop-sidebar") ? "menuActive" : ""}
          href={`/shop-sidebar`}
        >
          محصولات
        </Link>
      </li>
      <li className={isRouteActive("/team-1") ? "active" : ""}>
        <Link
          className={isRouteActive("/team-1") ? "menuActive" : ""}
          href={`/team-1`}
        >
          تولیدکننده
        </Link>
      </li>
      <li className={isRouteActive("/portfolio-grid-3") ? "active" : ""}>
        <Link
          className={isRouteActive("/portfolio-grid-3") ? "menuActive" : ""}
          href={`/portfolio-grid-3`}
        >
          پروژه‌ها
        </Link>
      </li>
      <li className={isRouteActive("/blog-half-img") ? "active" : ""}>
        <Link
          className={isRouteActive("/blog-half-img") ? "menuActive" : ""}
          href={`/blog-half-img`}
        >
          بلاگ‌ها
        </Link>
      </li>
      <li className={isRouteActive("/contact-1") ? "active" : ""}>
        <Link
          className={isRouteActive("/contact-1") ? "menuActive" : ""}
          href={`/contact-1`}
        >
          شعب
        </Link>
      </li>
      <li
        className={`${isAboutActive ? "active" : ""} ${menuOpen === "about" ? "open" : ""}`}
      >
        <a onClick={() => setMenuOpen((pre) => (pre === "about" ? "" : "about"))}>
          درباره ما
          <i className="fas fa-chevron-down" />
        </a>
        <ul className="sub-menu right">
          {aboutLinks.map((item) => (
            <li key={item.href}>
              <Link
                className={isRouteActive(item.href) ? "menuActive" : ""}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className={isRouteActive("/contact-1") ? "active" : ""}>
        <Link
          className={isRouteActive("/contact-1") ? "menuActive" : ""}
          href={`/contact-1`}
        >
          تماس با ما
        </Link>
      </li>
    </>
  );
}

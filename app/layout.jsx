"use client";
import { useEffect, useState } from "react";
import { Vazirmatn } from "next/font/google";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-zoom.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import "../public/main.css";
import "../public/custom.scss";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "react-modal-video/scss/modal-video.scss";

import { usePathname } from "next/navigation";
import Context from "@/context/Context";
import ThemeChanger from "@/components/common/ThemeChanger";
import PageLoader from "@/components/common/PageLoader";
import "rc-slider/assets/index.css";
import "../public/rtl.scss";
import ScrollTop from "@/components/common/ScrollTop";
import SearchPopup from "@/components/common/SearchPopup";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export default function RootLayout({ children }) {
  const path = usePathname();
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
    window.addEventListener("scroll", function () {
      var stickyHeader = document.querySelector(".sticky-header");
      if (stickyHeader) {
        if (window.pageYOffset > stickyHeader.offsetTop) {
          stickyHeader.classList.add("is-fixed");
        } else {
          stickyHeader.classList.remove("is-fixed");
        }
      }
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const links = document.querySelectorAll('a[href="#"]');

      const handleClick = (event) => {
        event.preventDefault();
      };
      if (links) {
        links.forEach((link) => {
          link.addEventListener("click", handleClick);
        });
      }
    }, 600);

    // Cleanup function to remove the event listener
    // return () => {
    //   links.forEach((link) => {
    //     link.removeEventListener("click", handleClick);
    //   });
    // };
  }, [path]);

  useEffect(() => {
    setTimeout(() => {
      const { WOW } = require("wowjs");
      const wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: false,
        once: true,
        live: false,
        callback: function (box) {
          box.classList.add("will-animate");
          box.classList.add("animated");
        },
      });
      wow.init();
    }, 100);
  }, [path]);
  useEffect(() => {
    const stored = localStorage.getItem("direction");
    if (stored) {
      document.documentElement.dir = JSON.parse(stored).dir;
    } else {
      // Persian is the default language/direction for this site.
      document.documentElement.dir = "rtl";
      localStorage.setItem("direction", JSON.stringify({ dir: "rtl" }));
    }
    setShowChild(true);
  }, []);
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/images/SamenLogo.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/images/SamenLogo.png?v=2" />
        <title>ثامن فرفورژه</title>
      </head>
      <body id="bg" className={vazirmatn.className}>
        {" "}
        <PageLoader />
        <Context>
          {showChild ? (
            <>
              <ThemeChanger /> {children} <ScrollTop />
            </>
          ) : (
            ""
          )}
        </Context>
        <SearchPopup />        
      </body>
    </html>
  );
}

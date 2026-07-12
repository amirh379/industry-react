import Image from "next/image";
import React from "react";
import { socialLinks } from "@/data/socials";

export default function SocialIconList() {
  return (
    <div className="dlab-social-icon header-social-icons">
      <ul>
        {socialLinks.map((elm, i) => (
          <li key={i}>
            <a
              className={
                elm.iconSrc
                  ? `header-social-link ${elm.className}`
                  : `site-button circle-sm outline ${elm.className}`
              }
              href={elm.href}
              target={elm.href !== "#" ? "_blank" : undefined}
              rel={elm.href !== "#" ? "noopener noreferrer" : undefined}
              aria-label={elm.ariaLabel || elm.className}
            >
              {elm.iconSrc ? (
                <Image
                  src={elm.iconSrc}
                  alt={elm.ariaLabel || elm.className}
                  width={22}
                  height={22}
                />
              ) : (
                <i className={elm.iconClass} />
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

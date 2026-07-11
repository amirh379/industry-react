import React from "react";
import { socialLinks } from "@/data/socials";

export default function SocialIconList() {
  return (
    <div className="dlab-social-icon">
      <ul>
        {socialLinks.map((elm, i) => (
          <li key={i}>
            <a
              className={`site-button circle-sm outline ${elm.className}`}
              href={elm.href}
              target={elm.href !== "#" ? "_blank" : undefined}
              rel={elm.href !== "#" ? "noopener noreferrer" : undefined}
              aria-label={elm.className}
            >
              <i className={elm.iconClass} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

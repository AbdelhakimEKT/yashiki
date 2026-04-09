"use client";

import { useEffect, useState } from "react";

import SiteBrand from "@/components/site-brand";
import SiteNav from "@/components/site-nav";

type SiteHeaderProps = {
  light?: boolean;
  overlay?: boolean;
  hideBrandLogo?: boolean;
};

export default function SiteHeader({
  light = false,
  overlay = false,
  hideBrandLogo = false,
}: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (overlay) return;

    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [overlay]);

  const shell = overlay
    ? "absolute inset-x-0 top-0 z-40 bg-[linear-gradient(180deg,rgba(20,15,13,0.62)_0%,rgba(20,15,13,0)_100%)]"
    : `sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-[var(--line)] bg-[rgba(248,241,232,0.92)] shadow-[0_1px_0_var(--line),0_4px_24px_rgba(24,17,13,0.06)] backdrop-blur-2xl"
          : "border-transparent bg-[rgba(248,241,232,0.7)] backdrop-blur-xl"
      }`;

  return (
    <header className={shell}>
      <div className="page-shell flex items-center justify-between py-5">
        <SiteBrand light={light} hideLogo={hideBrandLogo} />
        <SiteNav light={light} />
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

type SiteNavProps = {
  light?: boolean;
};

const links = [
  { href: "/#ambiance", label: "Ambiance" },
  { href: "/menu", label: "Carte" },
  { href: "/#brand", label: "Maison" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteNav({ light = false }: SiteNavProps) {
  const [open, setOpen] = useState(false);

  const shell = light
    ? "border border-[rgba(246,241,232,0.16)] bg-[rgba(246,241,232,0.06)] text-[rgba(246,241,232,0.86)]"
    : "border border-[rgba(36,46,39,0.1)] bg-[rgba(251,247,241,0.76)] text-[var(--ink-muted)]";

  const hover = light ? "hover:text-white" : "hover:text-[var(--ink)]";

  const mobileShell = light
    ? "border border-[rgba(246,241,232,0.18)] bg-[rgba(20,23,21,0.72)] text-[rgba(246,241,232,0.88)]"
    : "border border-[rgba(36,46,39,0.1)] bg-[rgba(251,247,241,0.96)] text-[var(--ink)]";

  return (
    <div className="relative">
      <button
        type="button"
        className={`inline-flex items-center gap-3 rounded-full px-4 py-3 text-[11px] uppercase tracking-[0.28em] backdrop-blur-md transition md:hidden ${shell}`}
        aria-expanded={open}
        aria-controls="site-mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span>Menu</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current/20 text-[10px]">
          {open ? "−" : "+"}
        </span>
      </button>

      <nav
        className={`hidden items-center gap-8 rounded-full px-5 py-3 text-[11px] uppercase tracking-[0.28em] backdrop-blur-md md:flex ${shell}`}
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={`transition ${hover}`}>
            {link.label}
          </Link>
        ))}
      </nav>

      {open ? (
        <div
          id="site-mobile-nav"
          className={`absolute right-0 top-[calc(100%+12px)] z-40 min-w-[16rem] rounded-[1.5rem] p-3 shadow-[0_24px_60px_rgba(26,20,16,0.14)] backdrop-blur-xl md:hidden ${mobileShell}`}
        >
          <div className="grid gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-[1rem] px-4 py-3 text-[11px] uppercase tracking-[0.24em] transition hover:bg-[rgba(255,255,255,0.08)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

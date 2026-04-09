"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { restaurant } from "@/data/restaurant";

type SiteNavProps = {
  light?: boolean;
};

const links = [
  { href: "/", label: "Accueil" },
  { href: restaurant.maisonPath, label: "La maison" },
  { href: restaurant.menuPath, label: "Carte" },
  { href: restaurant.reservationPath, label: "Réserver", primary: true },
];

export default function SiteNav({ light = false }: SiteNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const shell = light
    ? "border border-[rgba(248,241,232,0.16)] bg-[rgba(20,15,13,0.42)] text-[rgba(248,241,232,0.94)] shadow-[0_18px_40px_rgba(0,0,0,0.2)]"
    : "border border-[var(--line)] bg-[rgba(248,241,232,0.8)] text-[var(--ink-muted)]";

  const hover = light
    ? "hover:bg-[rgba(248,241,232,0.08)] hover:text-white"
    : "hover:bg-[rgba(24,17,13,0.04)] hover:text-[var(--ink)]";

  const mobileShell = light
    ? "border border-[rgba(248,241,232,0.16)] bg-[rgba(20,15,13,0.88)] text-[rgba(248,241,232,0.94)]"
    : "border border-[var(--line)] bg-[rgba(248,241,232,0.98)] text-[var(--ink)]";

  return (
    <div className="relative">
      <button
        type="button"
        className={`inline-flex items-center gap-3 rounded-full px-4 py-3 text-[11px] uppercase tracking-[0.28em] backdrop-blur-md transition md:hidden ${shell}`}
        aria-expanded={open}
        aria-controls="site-mobile-nav"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span>Menu</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current/20 text-[10px]">
          {open ? "−" : "+"}
        </span>
      </button>

      <nav
        className={`hidden items-center gap-2 rounded-full px-2 py-2 text-[11px] uppercase tracking-[0.28em] backdrop-blur-md md:flex ${shell}`}
        aria-label="Navigation principale"
      >
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`rounded-full px-4 py-2 transition duration-300 ${hover} ${
                active
                  ? light
                    ? "border border-[rgba(248,241,232,0.18)] bg-[rgba(248,241,232,0.12)] text-white shadow-[inset_0_0_0_1px_rgba(248,241,232,0.06)]"
                    : "border border-[rgba(24,17,13,0.08)] bg-[rgba(24,17,13,0.06)] text-[var(--ink)] shadow-[inset_0_0_0_1px_rgba(24,17,13,0.02)]"
                  : link.primary
                    ? light
                      ? "bg-[rgba(248,241,232,0.94)] !text-[var(--night)]"
                      : "bg-[var(--accent)] !text-[var(--paper-soft)]"
                    : ""
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {open ? (
        <div
          id="site-mobile-nav"
          className={`absolute right-0 top-[calc(100%+12px)] z-40 min-w-[18rem] rounded-[1.5rem] p-3 shadow-[0_24px_60px_rgba(26,20,16,0.18)] backdrop-blur-xl md:hidden ${mobileShell}`}
        >
          <p className="px-3 pb-2 text-[10px] uppercase tracking-[0.32em] text-current/60">
            Navigation
          </p>
          <div className="grid gap-2">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-[1rem] border px-4 py-3 text-[11px] uppercase tracking-[0.24em] transition duration-300 ${
                    active
                      ? "border-current/10 bg-[rgba(255,255,255,0.1)]"
                      : link.primary
                        ? light
                          ? "bg-[rgba(248,241,232,0.94)] !text-[var(--night)]"
                          : "bg-[var(--accent)] !text-[var(--paper-soft)]"
                        : "border-transparent hover:bg-[rgba(255,255,255,0.08)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

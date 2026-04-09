"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import { restaurant } from "@/data/restaurant";

export default function MobileBookingBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 140);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  const actions = useMemo(() => {
    if (pathname === restaurant.reservationPath) {
      return {
        primaryLabel: "Appeler",
        primaryHref: restaurant.phoneHref,
        primaryLink: false,
        secondaryLabel: "Itinéraire",
        secondaryHref: restaurant.googleMapsHref,
      };
    }

    if (pathname === restaurant.maisonPath || pathname === "/") {
      return {
        primaryLabel: "Réserver",
        primaryHref: restaurant.reservationPath,
        primaryLink: true,
        secondaryLabel: "Voir la carte",
        secondaryHref: restaurant.menuPath,
      };
    }

    return {
      primaryLabel: "Réserver",
      primaryHref: restaurant.reservationPath,
      primaryLink: true,
      secondaryLabel: "Appeler",
      secondaryHref: restaurant.phoneHref,
    };
  }, [pathname]);

  return (
    <div
      className={`fixed inset-x-4 z-40 transition duration-300 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-[26rem] items-center gap-2 rounded-[1.35rem] border border-[rgba(248,241,232,0.12)] bg-[rgba(20,15,13,0.9)] p-2 shadow-[0_18px_40px_rgba(40,28,20,0.24)] backdrop-blur-xl">
        {actions.primaryLink ? (
          <Link
            href={actions.primaryHref}
            className="mobile-sticky-primary"
          >
            {actions.primaryLabel}
          </Link>
        ) : (
          <a href={actions.primaryHref} className="mobile-sticky-primary">
            {actions.primaryLabel}
          </a>
        )}
        <a
          href={actions.secondaryHref}
          target={actions.secondaryHref.startsWith("http") ? "_blank" : undefined}
          rel={actions.secondaryHref.startsWith("http") ? "noreferrer" : undefined}
          className="mobile-sticky-secondary"
        >
          {actions.secondaryLabel}
        </a>
      </div>
    </div>
  );
}

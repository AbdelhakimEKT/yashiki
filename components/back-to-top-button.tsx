"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { restaurant } from "@/data/restaurant";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  // Pages where the mobile booking bar is hidden — back-to-top sits lower
  const hasBookingBar =
    pathname !== restaurant.menuPath && pathname !== restaurant.reservationPath;

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 720);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Revenir en haut de page"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={
        !hasBookingBar
          ? { bottom: "calc(1.5rem + env(safe-area-inset-bottom))" }
          : undefined
      }
      className={`back-to-top ${
        visible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span aria-hidden>↑</span>
    </button>
  );
}

import Link from "next/link";

import { restaurant } from "@/data/restaurant";

export default function MobileBookingBar() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
      <div className="flex items-center gap-3 rounded-[1.5rem] border border-[rgba(36,46,39,0.12)] bg-[rgba(251,247,241,0.94)] p-3 shadow-[0_18px_40px_rgba(40,28,20,0.12)] backdrop-blur-xl">
        <Link
          href={restaurant.reservationPath}
          className="inline-flex flex-1 items-center justify-center rounded-full bg-[var(--sage-deep)] px-4 py-3 text-[11px] uppercase tracking-[0.22em] !text-white"
        >
          Réserver
        </Link>
        <a
          href={restaurant.phoneHref}
          className="inline-flex flex-1 items-center justify-center rounded-full border border-[rgba(36,46,39,0.12)] px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-[var(--ink)]"
        >
          Appeler
        </a>
      </div>
    </div>
  );
}

import Link from "next/link";

import { restaurant } from "@/data/restaurant";

export default function MobileBookingBar() {
  return (
    <div
      className="fixed inset-x-4 z-40 md:hidden"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center gap-3 rounded-[1.5rem] border border-[rgba(248,241,232,0.12)] bg-[rgba(20,15,13,0.9)] p-3 shadow-[0_18px_40px_rgba(40,28,20,0.24)] backdrop-blur-xl">
        <Link
          href={restaurant.reservationPath}
          className="inline-flex flex-1 items-center justify-center rounded-full bg-[var(--accent)] px-4 py-3 text-[11px] uppercase tracking-[0.22em] !text-[var(--paper-soft)]"
        >
          Réserver ce soir
        </Link>
        <a
          href={restaurant.phoneHref}
          className="inline-flex flex-1 items-center justify-center rounded-full border border-[rgba(248,241,232,0.16)] px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-[var(--paper-soft)]"
        >
          Appeler
        </a>
      </div>
    </div>
  );
}

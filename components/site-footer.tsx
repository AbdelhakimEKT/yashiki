import Link from "next/link";

import AddressActions from "@/components/address-actions";
import SiteBrand from "@/components/site-brand";
import { restaurant } from "@/data/restaurant";

export default function SiteFooter() {
  return (
    <footer
      className="border-t border-[rgba(248,241,232,0.12)] bg-[var(--night)]"
      style={{ color: "rgb(248, 241, 232)" }}
    >
      <div className="page-shell grid gap-12 pb-28 pt-12 md:pb-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SiteBrand light />
          <p className="mt-6 max-w-md text-sm leading-7 text-[rgba(248,241,232,0.72)]">
            {restaurant.cuisine} à {restaurant.city}. Bouillons lents, sushi
            minute, service du soir et table pensée pour revenir souvent.
          </p>
          <div className="mt-6">
            <AddressActions light />
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {restaurant.guestHighlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-[rgba(248,241,232,0.12)] px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[rgba(248,241,232,0.74)]"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[rgba(248,241,232,0.52)]">
              Explorer
            </p>
            <div className="mt-4 grid gap-3 text-sm leading-7 text-[rgba(248,241,232,0.72)]">
              <Link className="transition duration-300 hover:text-[var(--paper-soft)]" href="/">Accueil</Link>
              <Link className="transition duration-300 hover:text-[var(--paper-soft)]" href={restaurant.maisonPath}>La maison</Link>
              <Link className="transition duration-300 hover:text-[var(--paper-soft)]" href={restaurant.menuPath}>Carte</Link>
              <Link className="transition duration-300 hover:text-[var(--paper-soft)]" href={restaurant.reservationPath}>Réservation</Link>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[rgba(248,241,232,0.52)]">
              Contact
            </p>
            <div className="mt-4 grid gap-3 text-sm leading-7 text-[rgba(248,241,232,0.72)]">
              <p>{restaurant.addressLine}</p>
              <a className="transition duration-300 hover:text-[var(--paper-soft)]" href={restaurant.phoneHref}>{restaurant.phoneDisplay}</a>
              <a className="transition duration-300 hover:text-[var(--paper-soft)]" href={restaurant.emailHref}>{restaurant.email}</a>
              <a className="transition duration-300 hover:text-[var(--paper-soft)]" href={restaurant.googleMapsHref} target="_blank" rel="noreferrer">
                Ouvrir dans Google Maps
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[rgba(248,241,232,0.52)]">
              Horaires
            </p>
            <div className="mt-4 grid gap-3 text-sm leading-7 text-[rgba(248,241,232,0.72)]">
              {restaurant.openingHours.map((slot) => (
                <p key={slot.days}>
                  <span className="block text-[var(--paper-soft)]">{slot.days}</span>
                  <span>{slot.hours}</span>
                </p>
              ))}
              <p className="pt-2 text-[var(--paper-soft)]">{restaurant.reservationsLabel}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(248,241,232,0.08)]">
        <div className="page-shell flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.26em] text-[rgba(248,241,232,0.36)]">
            © {new Date().getFullYear()} Yashiki Paris — Tous droits réservés
          </p>
          <p className="text-[10px] uppercase tracking-[0.26em] text-[rgba(248,241,232,0.36)]">
            {restaurant.addressLine}
          </p>
        </div>
      </div>
    </footer>
  );
}

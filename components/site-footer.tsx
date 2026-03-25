import Link from "next/link";

import SiteBrand from "@/components/site-brand";
import { restaurant } from "@/data/restaurant";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(36,46,39,0.1)]">
      <div className="mx-auto grid w-[min(100%-32px,1280px)] gap-10 pb-28 pt-10 sm:w-[min(100%-48px,1280px)] md:pb-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SiteBrand />
          <p className="mt-5 max-w-md text-sm leading-7 text-[var(--ink-muted)]">
            {restaurant.cuisine} à {restaurant.city}. Bouillons lents, sushi
            minute, service du soir et table pensée pour revenir souvent.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
              Explorer
            </p>
            <div className="mt-4 grid gap-3 text-sm leading-7 text-[var(--ink-muted)]">
              <Link href="/">Accueil</Link>
              <Link href={restaurant.maisonPath}>La maison</Link>
              <Link href={restaurant.menuPath}>Carte</Link>
              <Link href={restaurant.reservationPath}>Réservation</Link>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
              Contact
            </p>
            <div className="mt-4 grid gap-3 text-sm leading-7 text-[var(--ink-muted)]">
              <p>{restaurant.addressLine}</p>
              <a href={restaurant.phoneHref}>{restaurant.phoneDisplay}</a>
              <a href={restaurant.emailHref}>{restaurant.email}</a>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
              Horaires
            </p>
            <div className="mt-4 grid gap-3 text-sm leading-7 text-[var(--ink-muted)]">
              {restaurant.openingHours.map((slot) => (
                <p key={slot.days}>
                  <span className="block text-[var(--ink)]">{slot.days}</span>
                  <span>{slot.hours}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

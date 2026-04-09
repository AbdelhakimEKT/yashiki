import type { Metadata } from "next";
import Link from "next/link";

import AddressActions from "@/components/address-actions";
import MobileBookingBar from "@/components/mobile-booking-bar";
import OpenStatus from "@/components/open-status";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Réservation",
  description:
    "Réserve chez Yashiki à Paris avec un parcours clair: horaires, téléphone, email, FAQ et carte interactive.",
};

const reservationChannels = [
  {
    title: "Appeler",
    copy:
      "Le plus rapide pour bloquer une table, viser le comptoir ou confirmer un dîner le jour même.",
    href: restaurant.phoneHref,
    label: "Appeler maintenant",
  },
  {
    title: "Écrire",
    copy:
      "Le bon choix pour les groupes, allergies, demandes particulières ou privatisations ponctuelles.",
    href: restaurant.emailHref,
    label: "Écrire à l’équipe",
  },
  {
    title: "Préparer",
    copy:
      "Avoir le nombre de convives, l’horaire visé et les contraintes alimentaires réduit les allers-retours.",
    href: restaurant.menuPath,
    label: "Voir la carte",
  },
];

export default function ReservationPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--paper-soft)] text-[var(--ink)]">
      <SiteHeader />

      <section className="page-shell py-12 lg:py-16">
        <Reveal>
          <div className="soft-panel p-7 sm:p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.62fr_0.38fr] lg:gap-14">
              <div>
                <p className="eyebrow">Réserver</p>
                <h1 className="display-title mt-4 max-w-[9ch]">
                  Une table, un horaire, et c’est réglé.
                </h1>
                <p className="mt-6 max-w-2xl text-[16px] leading-8 text-[var(--ink-muted)]">
                  Téléphone, email, horaires, FAQ et carte interactive sont au
                  même endroit. Le parcours est conçu pour décider vite, surtout
                  sur mobile.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={restaurant.phoneHref} className="cta-primary">
                    Appeler maintenant
                  </a>
                  <a href={restaurant.emailHref} className="cta-secondary">
                    Écrire à l’équipe
                  </a>
                </div>

                <div className="mt-5">
                  <AddressActions />
                </div>
              </div>

              <div className="grid gap-4">
                <OpenStatus />
                <div className="soft-panel p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
                    Adresse
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
                    {restaurant.addressLine}
                  </p>
                  <div className="mt-4">
                    <AddressActions />
                  </div>
                </div>
                <div className="soft-panel p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
                    Réservation
                  </p>
                  <div className="mt-3 grid gap-2 text-sm leading-7 text-[var(--ink-muted)]">
                    <a href={restaurant.phoneHref}>{restaurant.phoneDisplay}</a>
                    <a href={restaurant.emailHref}>{restaurant.email}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="page-shell py-10 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {reservationChannels.map((channel, index) => (
            <Reveal key={channel.title} delay={`${index * 70}`}>
              <article className="soft-panel h-full p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]">
                  {String(index + 1).padStart(2, "0")} · {channel.title}
                </p>
                <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-[0.96] tracking-[-0.05em] text-[var(--ink)]">
                  {channel.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                  {channel.copy}
                </p>
                <a
                  href={channel.href}
                  className="mt-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[var(--accent-deep)] transition duration-300 hover:gap-4"
                >
                  {channel.label}
                  <span aria-hidden>↗</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[rgba(248,241,232,0.54)]">
        <div className="page-shell grid gap-10 py-20 lg:grid-cols-[0.56fr_0.44fr] lg:items-stretch lg:gap-14 lg:py-24">
          <Reveal className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[rgba(248,241,232,0.72)] lg:h-full lg:min-h-[44rem]">
              <iframe
                src={restaurant.googleMapsEmbedSrc}
                title="Carte interactive pour trouver Yashiki"
                className="h-[420px] w-full lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay="80">
            <p className="eyebrow">Infos pratiques</p>
            <h2 className="display-title mt-4 max-w-[8ch]">
              Aujourd’hui, tout est clair avant de valider.
            </h2>
            <div className="mt-8 grid gap-4">
              <div className="soft-panel p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
                  Horaires
                </p>
                <div className="mt-3 grid gap-3 text-sm leading-7 text-[var(--ink-muted)]">
                  {restaurant.openingHours.map((slot) => (
                    <p key={slot.days}>
                      <span className="block text-[var(--ink)]">{slot.days}</span>
                      <span>{slot.hours}</span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="soft-panel p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
                  Avant de confirmer
                </p>
                <div className="mt-4 grid gap-4">
                  {restaurant.reservationSteps.map((step, index) => (
                    <div
                      key={step.title}
                      className="border-t border-[var(--line)] pt-4 first:border-t-0 first:pt-0"
                    >
                      <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
                        {String(index + 1).padStart(2, "0")} · {step.title}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
                        {step.copy}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-shell py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-14">
          <Reveal>
            <p className="eyebrow">FAQ réservation</p>
            <h2 className="display-title mt-4 max-w-[8ch]">
              Les réponses utiles avant d’arriver.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-8 text-[var(--ink-muted)]">
              L’objectif est simple: limiter les doutes, alléger la charge
              mentale et éviter les allers-retours avant le service.
            </p>
          </Reveal>

          <div className="grid gap-4">
            {restaurant.faq.map((item, index) => (
              <Reveal key={item.question} delay={`${index * 50}`}>
                <details className="soft-panel px-6 py-5">
                  <summary className="cursor-pointer list-none rounded-[1rem] text-lg leading-8 tracking-[-0.02em] text-[var(--ink)] transition duration-300 marker:content-none hover:text-[var(--accent-deep)]">
                    {item.question}
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                    {item.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[rgba(248,241,232,0.5)]">
        <div className="page-shell grid gap-8 py-20 lg:grid-cols-[0.58fr_0.42fr] lg:items-center lg:py-24">
          <Reveal>
            <p className="eyebrow">Dernière étape</p>
            <h2 className="display-title mt-4 max-w-[9ch]">
              Réserver maintenant ou revoir la carte avant de choisir.
            </h2>
          </Reveal>

          <Reveal delay="80">
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <a href={restaurant.phoneHref} className="cta-primary">
                {restaurant.phoneDisplay}
              </a>
              <Link href={restaurant.menuPath} className="cta-secondary">
                Revenir à la carte
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
      <MobileBookingBar />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import MobileBookingBar from "@/components/mobile-booking-bar";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { menu } from "@/data/menu";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Carte",
  description:
    "La carte du soir de Yashiki à Paris: entrées, ramen, sushi, plats chauds, desserts et boissons.",
};

function toSectionId(value: string) {
  return value.toLowerCase().replaceAll("&", "and").replaceAll(" ", "-");
}

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[var(--cream-soft)] text-[var(--ink)]">
      <SiteHeader />

      <section className="mx-auto w-[min(100%-32px,1360px)] py-12 sm:w-[min(100%-48px,1360px)] lg:py-18">
        <Reveal>
          <div className="rounded-[2.6rem] border border-[rgba(36,46,39,0.1)] bg-[linear-gradient(180deg,rgba(100,118,104,0.12)_0%,rgba(251,247,241,0.94)_100%)] px-7 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-end">
              <div>
                <p className="section-label">La carte complète</p>
                <h1 className="mt-5 max-w-[8ch] text-[clamp(3.2rem,7vw,6.8rem)] leading-[0.9] tracking-[-0.06em] text-[var(--ink)]">
                  La carte du soir.
                </h1>
                <p className="mt-6 max-w-xl text-[17px] leading-9 text-[var(--ink-muted)]">
                  Entrées à partager, ramen, sushi, assiettes chaudes, desserts
                  et boissons. Une carte concise, lisible et organisée pour
                  choisir vite sans perdre la gourmandise du moment.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="rounded-[1.8rem] border border-[rgba(36,46,39,0.08)] bg-[rgba(251,247,241,0.76)] p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                    Infos utiles
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                    {restaurant.tagline}. {restaurant.addressLine}. Réservation
                    conseillée du jeudi au samedi.
                  </p>
                </div>

                <Link
                  href={restaurant.reservationPath}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--sage-deep)] px-6 py-3 text-xs uppercase tracking-[0.24em] !text-white transition duration-300 hover:bg-[var(--ink)] hover:!text-white"
                >
                  Réserver
                </Link>
              </div>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
              {menu.map((section, index) => (
                <a
                  key={section.title}
                  href={`#${toSectionId(section.title)}`}
                  className="group flex min-h-20 flex-col justify-between rounded-[1.5rem] border border-[rgba(36,46,39,0.1)] bg-[rgba(251,247,241,0.76)] px-4 py-4 transition duration-300 hover:border-[rgba(90,110,97,0.34)] hover:bg-white"
                >
                  <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm uppercase tracking-[0.16em] text-[var(--ink)]">
                    {section.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-[min(100%-32px,1360px)] space-y-8 pb-20 sm:w-[min(100%-48px,1360px)] lg:space-y-10 lg:pb-24">
        {menu.map((section, index) => (
          <Reveal key={section.title} delay={`${index * 50}`}>
            <section
              id={toSectionId(section.title)}
              className="overflow-hidden rounded-[2.4rem] border border-[rgba(36,46,39,0.1)] bg-[rgba(255,255,255,0.46)]"
            >
              <div className="grid gap-px bg-[rgba(36,46,39,0.08)] lg:grid-cols-[0.4fr_0.6fr]">
                <div className="bg-[rgba(251,247,241,0.9)] px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--sage)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-5 max-w-[8ch] text-[clamp(2.6rem,5vw,4.8rem)] leading-[0.92] tracking-[-0.06em] text-[var(--ink)]">
                    {section.title}
                  </h2>
                  <p className="mt-6 max-w-md text-[15px] leading-8 text-[var(--ink-muted)]">
                    {section.note}
                  </p>

                  <div className="mt-10 rounded-[1.6rem] border border-[rgba(36,46,39,0.1)] bg-[rgba(245,238,228,0.74)] p-6">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                      Focus
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                      {section.focus}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                    <span className="rounded-full border border-[rgba(36,46,39,0.1)] px-3 py-2">
                      {section.items.length} propositions
                    </span>
                    <span className="rounded-full border border-[rgba(36,46,39,0.1)] px-3 py-2">
                      Yashiki
                    </span>
                  </div>
                </div>

                <div className="space-y-4 bg-[rgba(255,255,255,0.62)] px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
                  {section.items.map((item) => (
                    <article
                      key={item.name}
                      className="rounded-[1.5rem] border border-[rgba(36,46,39,0.08)] bg-[rgba(251,247,241,0.72)] px-5 py-5 transition duration-300 hover:border-[rgba(90,110,97,0.2)] hover:bg-white"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="text-xl leading-[1.05] tracking-[-0.03em] text-[var(--ink)]">
                            {item.name}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
                            {item.description}
                          </p>
                          {item.badges?.length ? (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {item.badges.map((badge) => (
                                <span
                                  key={badge}
                                  className="rounded-full border border-[rgba(36,46,39,0.1)] bg-[rgba(245,238,228,0.7)] px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[var(--sage-deep)]"
                                >
                                  {badge}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>

                        <p className="shrink-0 rounded-full border border-[rgba(36,46,39,0.08)] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[var(--sage-deep)]">
                          {item.price}€
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>
        ))}
      </section>

      <section className="border-t border-[rgba(36,46,39,0.08)] bg-[var(--cream)]">
        <div className="mx-auto grid w-[min(100%-32px,1280px)] gap-10 py-20 sm:w-[min(100%-48px,1280px)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <p className="section-label">Réserver après lecture</p>
              <h2 className="section-title mt-4">
                Choisis la carte pendant qu’elle est encore en tête.
              </h2>
              <p className="section-copy mt-6">
                Après la lecture, il ne reste plus qu’à bloquer le bon créneau,
                appeler le restaurant ou passer par la page dédiée pour
                confirmer la table.
              </p>
            </div>
          </Reveal>

          <Reveal delay="80">
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Link
                href={restaurant.reservationPath}
                className="inline-flex items-center justify-center rounded-full bg-[var(--sage-deep)] px-6 py-3 text-xs uppercase tracking-[0.24em] !text-white transition duration-300 hover:bg-[var(--ink)] hover:!text-white"
              >
                Ouvrir la réservation
              </Link>
              <a
                href={restaurant.phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-[rgba(36,46,39,0.12)] px-6 py-3 text-xs uppercase tracking-[0.24em] text-[var(--ink)] transition duration-300 hover:border-[rgba(90,110,97,0.34)] hover:bg-white"
              >
                {restaurant.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
      <MobileBookingBar />
    </main>
  );
}

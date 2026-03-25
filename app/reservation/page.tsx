import type { Metadata } from "next";
import Link from "next/link";

import MobileBookingBar from "@/components/mobile-booking-bar";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Réservation",
  description:
    "Réserve chez Yashiki à Paris. Horaires, téléphone, email, groupes, comptoir et informations utiles réunis sur une page dédiée.",
};

export default function ReservationPage() {
  return (
    <main className="min-h-screen bg-[var(--cream-soft)] text-[var(--ink)]">
      <SiteHeader />

      <section className="mx-auto w-[min(100%-32px,1280px)] py-12 sm:w-[min(100%-48px,1280px)] lg:py-20">
        <Reveal>
          <div className="rounded-[2.5rem] border border-[rgba(36,46,39,0.1)] bg-[linear-gradient(180deg,rgba(100,118,104,0.12)_0%,rgba(251,247,241,0.92)_100%)] px-7 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-end">
              <div>
                <p className="section-label">Réserver</p>
                <h1 className="mt-5 max-w-[8ch] text-[clamp(3.2rem,6.6vw,6.6rem)] leading-[0.9] tracking-[-0.06em] text-[var(--ink)]">
                  Une table, un horaire, et c’est réglé.
                </h1>
                <p className="mt-6 max-w-2xl text-[17px] leading-9 text-[var(--ink-muted)]">
                  Adresse, horaires, téléphone, email, groupes et contraintes
                  alimentaires sont réunis ici pour réserver vite et sans
                  friction, que ce soit pour un dîner à deux ou une table plus
                  large.
                </p>
              </div>

              <div className="rounded-[2rem] border border-[rgba(36,46,39,0.08)] bg-[rgba(251,247,241,0.78)] p-6">
                <div className="grid gap-4 text-sm leading-7 text-[var(--ink-muted)] sm:grid-cols-2">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                      Adresse
                    </p>
                    <p className="mt-3">{restaurant.addressLine}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                      Réservation
                    </p>
                    <p className="mt-3">
                      <a href={restaurant.phoneHref}>{restaurant.phoneDisplay}</a>
                    </p>
                    <p>
                      <a href={restaurant.emailHref}>{restaurant.email}</a>
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={restaurant.phoneHref}
                    className="inline-flex items-center justify-center rounded-full bg-[var(--sage-deep)] px-6 py-3 text-xs uppercase tracking-[0.24em] !text-white transition duration-300 hover:bg-[var(--ink)] hover:!text-white"
                  >
                    Appeler maintenant
                  </a>
                  <a
                    href={restaurant.emailHref}
                    className="inline-flex items-center justify-center rounded-full border border-[rgba(36,46,39,0.12)] px-6 py-3 text-xs uppercase tracking-[0.24em] text-[var(--ink)] transition duration-300 hover:border-[rgba(90,110,97,0.34)] hover:bg-white"
                  >
                    Écrire à l’équipe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-[min(100%-32px,1280px)] py-4 sm:w-[min(100%-48px,1280px)] lg:py-10">
        <div className="grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-[rgba(36,46,39,0.08)] bg-[rgba(251,247,241,0.78)] p-7">
              <p className="section-label">Horaires</p>
              <div className="mt-6 grid gap-5">
                {restaurant.openingHours.map((slot) => (
                  <div key={slot.days}>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                      {slot.days}
                    </p>
                    <p className="mt-3 text-[15px] leading-8 text-[var(--ink-muted)]">
                      {slot.hours}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-px bg-[rgba(36,46,39,0.1)]" />
              <p className="mt-6 text-sm leading-7 text-[var(--ink-muted)]">
                {restaurant.reservationsLabel}. Les places au comptoir sont en
                nombre limité.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {restaurant.reservationSteps.map((step, index) => (
              <Reveal key={step.title} delay={`${index * 60}`}>
                <article className="h-full rounded-[1.8rem] border border-[rgba(36,46,39,0.08)] bg-[rgba(251,247,241,0.78)] p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 text-2xl leading-[1.05] tracking-[-0.04em] text-[var(--ink)]">
                    {step.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                    {step.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(100%-32px,1280px)] py-20 sm:w-[min(100%-48px,1280px)] lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <Reveal>
            <div className="max-w-2xl">
              <p className="section-label">FAQ réservation</p>
              <h2 className="section-title mt-4">
                Les questions utiles avant de confirmer la table.
              </h2>
              <p className="section-copy mt-6">
                Retrouve ici les réponses qui évitent les allers-retours
                inutiles avant le service: groupes, allergies, options
                végétariennes ou rythme de réservation.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {restaurant.faq.map((item, index) => (
              <Reveal key={item.question} delay={`${index * 40}`}>
                <details className="rounded-[1.7rem] border border-[rgba(36,46,39,0.08)] bg-[rgba(251,247,241,0.8)] px-6 py-5">
                  <summary className="cursor-pointer list-none text-lg leading-8 tracking-[-0.02em] text-[var(--ink)]">
                    {item.question}
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--ink-muted)]">
                    {item.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(36,46,39,0.08)] bg-[var(--cream)]">
        <div className="mx-auto grid w-[min(100%-32px,1280px)] gap-10 py-20 sm:w-[min(100%-48px,1280px)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <p className="section-label">Passer à l’action</p>
              <h2 className="section-title mt-4">
                Réserve maintenant ou retourne voir la carte avant de choisir.
              </h2>
            </div>
          </Reveal>

          <Reveal delay="80">
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <a
                href={restaurant.phoneHref}
                className="inline-flex items-center justify-center rounded-full bg-[var(--sage-deep)] px-6 py-3 text-xs uppercase tracking-[0.24em] !text-white transition duration-300 hover:bg-[var(--ink)] hover:!text-white"
              >
                {restaurant.phoneDisplay}
              </a>
              <Link
                href={restaurant.menuPath}
                className="inline-flex items-center justify-center rounded-full border border-[rgba(36,46,39,0.12)] px-6 py-3 text-xs uppercase tracking-[0.24em] text-[var(--ink)] transition duration-300 hover:border-[rgba(90,110,97,0.34)] hover:bg-white"
              >
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

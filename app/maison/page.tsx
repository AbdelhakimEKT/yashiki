import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import MobileBookingBar from "@/components/mobile-booking-bar";
import OpenStatus from "@/components/open-status";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import laMaisonStock from "@/imagee/la-maison-stock.jpg";
import maisonBarStock from "@/imagee/maison-bar-stock.jpg";
import maisonChefMakingStock from "@/imagee/maison-chef-making-stock.jpg";
import maisonCounterStock from "@/imagee/maison-counter-stock.jpg";
import pexelsJapaneseInterior from "@/imagee/pexels-japanese-interior.jpg";
import pexelsLanternChef from "@/imagee/pexels-lantern-chef.jpg";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "La maison",
  description:
    "Découvre l’univers de Yashiki: la salle, le comptoir, l’équipe et la philosophie qui relie le site au restaurant.",
};

const spaceNotes = [
  {
    title: "Salle feutrée",
    copy:
      "Le calme vient des matières, de la lumière et des distances. Rien n’écrase la table.",
  },
  {
    title: "Comptoir vivant",
    copy:
      "Huit places pour voir partir les bols, les coupes minute et les derniers gestes de dressage.",
  },
  {
    title: "Rythme clair",
    copy:
      "Le parcours digital et le service réel suivent la même logique: peu de friction, beaucoup d’assurance.",
  },
];

export default function MaisonPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--paper-soft)] text-[var(--ink)]">
      <section
        className="relative isolate min-h-[92svh] overflow-hidden bg-[var(--night)]"
        style={{ color: "rgb(248, 241, 232)" }}
      >
        <Image
          src={laMaisonStock}
          alt="Intérieur chaleureux et boisé du restaurant Yashiki"
          fill
          priority
          unoptimized
          className="object-cover object-[36%_center] opacity-[0.5]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,15,13,0.88)_0%,rgba(20,15,13,0.7)_44%,rgba(20,15,13,0.54)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,15,13,0.34)_0%,rgba(20,15,13,0.16)_35%,rgba(20,15,13,0.88)_100%)]" />
        <SiteHeader light overlay hideBrandLogo />

        <div className="page-shell relative z-10 grid min-h-[92svh] gap-10 pb-12 pt-28 lg:grid-cols-[0.66fr_0.34fr] lg:items-end">
          <Reveal>
            <p className="eyebrow !text-[rgba(248,241,232,0.68)]">La maison</p>
            <h1 className="display-hero mt-5 max-w-[10ch] text-[var(--paper-soft)]">
              L’ambiance n’est pas un décor. C’est une promesse tenue.
            </h1>
            <p className="mt-6 max-w-2xl text-[16px] leading-8 text-[rgba(248,241,232,0.82)]">
              Un restaurant japonais haut de gamme se raconte par la lumière,
              le rythme, la précision du geste et la manière dont le visiteur
              comprend l’endroit avant même d’y entrer.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={restaurant.reservationPath} className="cta-primary">
                Réserver maintenant
              </Link>
              <Link
                href={restaurant.menuPath}
                className="inline-flex items-center justify-center rounded-full border border-[rgba(248,241,232,0.16)] px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-[var(--paper-soft)] transition duration-300 hover:bg-[rgba(248,241,232,0.08)]"
              >
                Voir la carte
              </Link>
            </div>
          </Reveal>

          <Reveal delay="100">
            <div className="dark-panel relative overflow-hidden p-6">
              <Image
                src={maisonChefMakingStock}
                alt=""
                fill
                aria-hidden
                unoptimized
                className="object-cover object-center opacity-[0.42] saturate-[0.92]"
                sizes="(min-width: 1024px) 24rem, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,15,13,0.08)_0%,rgba(20,15,13,0.42)_48%,rgba(20,15,13,0.72)_100%)]" />
              <div className="relative z-10">
                <p className="vertical-copy hidden text-[10px] uppercase text-[rgba(248,241,232,0.42)] lg:block">
                  Paris Bois Service Comptoir
                </p>
                <div className="mt-0 lg:mt-4">
                  <OpenStatus light />
                </div>
                <p className="mt-5 text-sm leading-7 text-[rgba(248,241,232,0.78)]">
                  Le site et le lieu racontent la même chose: un Japon chaleureux,
                  structuré et lisible pour un public parisien.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-[rgba(248,241,232,0.5)]">
        <div className="page-shell grid gap-4 py-12 md:grid-cols-3">
          {spaceNotes.map((note, index) => (
            <Reveal key={note.title} delay={`${index * 70}`}>
              <article className="soft-panel p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]">
                  {note.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                  {note.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-shell py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">L’histoire du lieu</p>
            <h2 className="display-title mt-4 max-w-[8ch]">
              Le lieu parle avant même le premier plat.
            </h2>
            <div className="mt-6 grid gap-5">
              {restaurant.storytelling.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-md text-[15px] leading-8 text-[var(--ink-muted)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 grid gap-4">
              {restaurant.experiencePillars.map((pillar) => (
                <div key={pillar.title} className="border-t border-[var(--line)] pt-4">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]">
                    {pillar.title}
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-7 text-[var(--ink-muted)]">
                    {pillar.copy}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] border border-[var(--line)]">
                <Image
                  src={pexelsJapaneseInterior}
                  alt="Intérieur chaleureux de restaurant japonais avec lumière ambrée"
                  unoptimized
                  className="aspect-[5/4] w-full object-cover"
                  sizes="(min-width: 1024px) 44rem, 100vw"
                />
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-[0.52fr_0.48fr]">
              <Reveal delay="80">
                <div className="overflow-hidden rounded-[2rem] border border-[var(--line)]">
                  <Image
                    src={pexelsLanternChef}
                    alt="Cuisine ouverte japonaise sous des lanternes chaudes"
                    unoptimized
                    className="aspect-[4/5] w-full object-cover object-[46%_center]"
                    sizes="(min-width: 1024px) 20rem, 100vw"
                  />
                </div>
              </Reveal>

              <Reveal delay="140">
                <div className="grid gap-6">
                  <div className="overflow-hidden rounded-[2rem] border border-[var(--line)]">
                    <Image
                      src={maisonBarStock}
                      alt="Bar du restaurant Yashiki"
                      unoptimized
                      className="aspect-[4/3] w-full object-cover"
                      sizes="(min-width: 1024px) 18rem, 100vw"
                    />
                  </div>
                  <div className="soft-panel p-6">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]">
                      Origine & détails
                    </p>
                    <div className="mt-4 grid gap-4">
                      {restaurant.sourcingNotes.map((note) => (
                        <p key={note} className="text-sm leading-7 text-[var(--ink-muted)]">
                          {note}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[rgba(248,241,232,0.56)]">
        <div className="page-shell grid gap-10 py-24 lg:grid-cols-[0.54fr_0.46fr] lg:gap-16 lg:py-28">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--line)]">
              <Image
                src={maisonCounterStock}
                alt="Comptoir japonais vivant, lumières suspendues et ardoises de menu"
                unoptimized
                className="aspect-[5/4] w-full object-cover"
                sizes="(min-width: 1024px) 40rem, 100vw"
              />
            </div>
          </Reveal>

          <Reveal delay="80">
            <p className="eyebrow">Ce que les gens retiennent</p>
            <h2 className="display-title mt-4 max-w-[8ch]">
              Le souvenir naît du détail, pas du bruit.
            </h2>
            <div className="mt-8 grid gap-6">
              {restaurant.reviewSamples.slice(0, 2).map((review) => (
                <article key={review.name} className="border-t border-[var(--line)] pt-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
                    {review.source} · {review.name}
                  </p>
                  <p className="mt-4 text-lg leading-8 tracking-[-0.02em] text-[var(--ink)]">
                    “{review.quote}”
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {restaurant.guestHighlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-[var(--line)] bg-[rgba(248,241,232,0.72)] px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-[var(--ink-muted)]"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-shell py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.6fr_0.4fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Réserver</p>
            <h2 className="display-title mt-4 max-w-[9ch]">
              Le lieu est clair. Il reste à choisir le service.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-8 text-[var(--ink-muted)]">
              L’expérience continue avec une réservation simple, des horaires
              visibles et un accès direct au téléphone si tu veux aller vite.
            </p>
          </Reveal>

          <Reveal delay="80">
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Link href={restaurant.reservationPath} className="cta-primary">
                Réserver maintenant
              </Link>
              <a href={restaurant.phoneHref} className="cta-secondary">
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

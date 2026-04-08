import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import MenuExplorer from "@/components/menu-explorer";
import MobileBookingBar from "@/components/mobile-booking-bar";
import OpenStatus from "@/components/open-status";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import heroIllustration from "@/imagee/hero.png";
import pexelsRamenBowl from "@/imagee/pexels-ramen-bowl.jpg";
import menuSashimiPremium from "@/imagee/menu-sashimi-premium.jpg";
import menuTunaTartare from "@/imagee/menu-tuna-tartare.jpg";
import { menu } from "@/data/menu";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Carte",
  description:
    "La carte du soir de Yashiki à Paris, pensée pour être lisible, filtrable et réservée sans friction.",
};

function MenuExplorerFallback() {
  return (
    <div className="soft-panel p-6 sm:p-8">
      <p className="eyebrow">Explorer la carte</p>
      <h2 className="mt-4 text-[clamp(2.1rem,4.6vw,4.6rem)] leading-[0.94] tracking-[-0.05em] text-[var(--ink)]">
        La carte se prépare.
      </h2>
      <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[var(--ink-muted)]">
        Les sections arrivent avec les filtres, les repères alimentaires et les
        plats signature.
      </p>
    </div>
  );
}

export default function MenuPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--paper-soft)] text-[var(--ink)]">
      <section
        className="relative isolate min-h-[88svh] overflow-hidden bg-[var(--night)]"
        style={{ color: "rgb(248, 241, 232)" }}
      >
        <Image
          src={heroIllustration}
          alt=""
          aria-hidden
          fill
          className="pointer-events-none object-cover opacity-[0.1] mix-blend-screen"
          sizes="100vw"
        />
        <div className="ambient-orb absolute left-[-5rem] top-24 h-56 w-56 rounded-full bg-[rgba(161,45,39,0.28)] blur-3xl" />
        <div className="ambient-orb absolute bottom-16 right-[-3rem] h-48 w-48 rounded-full bg-[rgba(207,172,114,0.18)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_36%,rgba(248,241,232,0.12),transparent_18%)]" />
        <Image
          src={menuSashimiPremium}
          alt=""
          aria-hidden
          fill
          className="pointer-events-none object-cover object-[88%_34%] opacity-[0.08]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,15,13,0.94)_0%,rgba(20,15,13,0.88)_42%,rgba(20,15,13,0.78)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,15,13,0.22)_0%,rgba(20,15,13,0.16)_36%,rgba(20,15,13,0.9)_100%)]" />
        <SiteHeader light overlay hideBrandLogo />

        <div className="page-shell relative z-10 grid min-h-[88svh] gap-12 pb-12 pt-28 lg:grid-cols-[0.6fr_0.4fr] lg:items-center">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              <span className="info-chip">Sans PDF</span>
              <span className="info-chip">Filtres alimentaires</span>
              <span className="info-chip">Signatures visibles</span>
            </div>

            <p className="mt-8 text-[11px] uppercase tracking-[0.34em] text-[rgba(248,241,232,0.66)]">
              La carte
            </p>
            <h1 className="display-hero mt-5 max-w-[10ch] text-[var(--paper-soft)]">
              Une carte courte qui donne envie avant même de choisir.
            </h1>
            <p className="mt-6 max-w-2xl text-[16px] leading-8 text-[rgba(248,241,232,0.82)]">
              Les sections sont nettes, les repères tombent tout de suite et
              les plats forts ressortent sans bruit. L’idée n’est pas de tout
              montrer. C’est d’aider à décider vite et bien.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#menu-explorer" className="cta-primary">
                Explorer la carte
              </a>
              <Link
                href={restaurant.reservationPath}
                className="inline-flex items-center justify-center rounded-full border border-[rgba(248,241,232,0.16)] px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-[var(--paper-soft)] transition duration-300 hover:bg-[rgba(248,241,232,0.08)]"
              >
                Réserver ce soir
              </Link>
            </div>

            <div className="mt-8">
              <OpenStatus light />
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="dark-panel p-5">
                <p className="text-[2.3rem] leading-none tracking-[-0.06em] text-[var(--paper-soft)]">
                  6
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-[rgba(248,241,232,0.62)]">
                  sections lisibles
                </p>
              </div>
              <div className="dark-panel p-5">
                <p className="text-[2.3rem] leading-none tracking-[-0.06em] text-[var(--paper-soft)]">
                  1 geste
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-[rgba(248,241,232,0.62)]">
                  pour filtrer
                </p>
              </div>
              <div className="dark-panel p-5">
                <p className="text-[2.3rem] leading-none tracking-[-0.06em] text-[var(--paper-soft)]">
                  0 PDF
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-[rgba(248,241,232,0.62)]">
                  rien à télécharger
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay="120" className="lg:justify-self-end">
            <div className="relative w-full max-w-[32rem]">
              <div className="overflow-hidden rounded-[2.2rem] border border-[rgba(248,241,232,0.14)] bg-[rgba(20,15,13,0.28)] shadow-[0_28px_70px_rgba(0,0,0,0.28)]">
                <Image
                  src={menuSashimiPremium}
                  alt="Assiette premium de sashimi sur assiette noire"
                  className="aspect-[4/5] w-full object-cover object-center"
                  sizes="(min-width: 1024px) 28rem, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,15,13,0.02)_0%,rgba(20,15,13,0.7)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[rgba(248,241,232,0.62)]">
                    Plat signature
                  </p>
                  <h2 className="mt-3 max-w-[15rem] text-[clamp(2rem,3vw,3rem)] leading-[0.95] tracking-[-0.05em] text-[var(--paper-soft)]">
                    Une lecture claire du poisson et du geste.
                  </h2>
                  <p className="mt-4 max-w-[20rem] text-sm leading-7 text-[rgba(248,241,232,0.8)]">
                    Plus de matière, moins d’effet. C’est ce niveau de
                    précision que la carte doit transmettre.
                  </p>
                </div>
              </div>

              <div className="floating-plate absolute -bottom-8 right-4 hidden w-[12.5rem] overflow-hidden rounded-[1.7rem] border border-[rgba(248,241,232,0.14)] bg-[rgba(20,15,13,0.34)] shadow-[0_20px_50px_rgba(0,0,0,0.24)] md:block">
                <Image
                  src={menuTunaTartare}
                  alt="Tartare de thon dressé sur table chaude"
                  className="aspect-[4/3] w-full object-cover"
                  sizes="12.5rem"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,15,13,0.02)_0%,rgba(20,15,13,0.56)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-[rgba(248,241,232,0.66)]">
                    Table du soir
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[rgba(248,241,232,0.88)]">
                    Une touche plus chaude pour casser la froideur.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="menu-explorer" className="page-shell py-16 lg:py-20">
        <Suspense fallback={<MenuExplorerFallback />}>
          <MenuExplorer sections={menu} />
        </Suspense>
      </section>

      <section className="border-t border-[var(--line)] bg-[rgba(248,241,232,0.46)]">
        <div className="page-shell grid gap-10 py-20 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16 lg:py-24">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--line)]">
              <Image
                src={pexelsRamenBowl}
                alt="Bol de ramen servi sur table en bois"
                className="aspect-[4/5] w-full object-cover"
                sizes="(min-width: 1024px) 26rem, 100vw"
              />
            </div>
          </Reveal>

          <Reveal delay="80">
            <p className="eyebrow">Avant de réserver</p>
            <h2 className="display-title mt-4 max-w-[9ch]">
              Les détails utiles restent visibles, pas cachés.
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[var(--ink-muted)]">
              Le public français attend de la lisibilité. Le public japonais
              valorise les détails et la précision. Cette carte marie les deux:
              elle respire, mais elle dit l’essentiel avant validation.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {restaurant.sourcingNotes.map((note, index) => (
                <div key={note} className="soft-panel p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
                    Repère {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[rgba(248,241,232,0.56)]">
        <div className="page-shell grid gap-8 py-20 lg:grid-cols-[0.58fr_0.42fr] lg:items-center lg:py-24">
          <Reveal>
            <p className="eyebrow">Après la carte</p>
            <h2 className="display-title mt-4 max-w-[9ch]">
              Choisis pendant que le goût est encore en tête.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-8 text-[var(--ink-muted)]">
              La carte est faite pour aider à décider vite. Il reste à bloquer
              le créneau, appeler en un geste ou passer par la page de
              réservation.
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

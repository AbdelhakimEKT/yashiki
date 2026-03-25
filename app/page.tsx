import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import MobileBookingBar from "@/components/mobile-booking-bar";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import hero from "@/imagee/hero.png";
import laMaisonStock from "@/imagee/la-maison-stock.jpg";
import ramen from "@/imagee/ramen-image.png";
import sushi from "@/imagee/sushi-image.png";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Accueil",
};

const topSelections = [
  {
    label: "Ramen signature",
    title: "Tonkotsu Yashiki",
    copy: "Bouillon long, poitrine confite, œuf mariné.",
    price: "23€",
    href: "/menu#ramen",
    image: ramen,
    alt: "Bol de ramen signature Yashiki",
  },
  {
    label: "Coupe minute",
    title: "Assortiment du soir",
    copy: "Sélection du chef en 8 pièces selon l’arrivage.",
    price: "32€",
    href: "/menu#sushi-and-sashimi",
    image: sushi,
    alt: "Assortiment de sushi et sashimi Yashiki",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[var(--cream)] text-[var(--ink)]">
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src={hero}
          alt="Illustration principale de la maison Yashiki"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,22,18,0.18)_0%,rgba(17,22,18,0.42)_52%,rgba(17,22,18,0.72)_100%)]" />
        <div className="pointer-events-none absolute left-[8%] top-[20%] h-24 w-24 rounded-full border border-[rgba(246,241,232,0.12)]" />
        <div className="pointer-events-none absolute right-[12%] top-[18%] h-16 w-16 rounded-full border border-[rgba(246,241,232,0.12)]" />

        <SiteHeader light overlay />

        <div className="relative z-10 mx-auto flex min-h-screen w-[min(100%-32px,1280px)] items-end py-12 sm:w-[min(100%-48px,1280px)]">
          <Reveal className="grid w-full gap-10 pb-4 pt-28 lg:grid-cols-[1.06fr_0.94fr] lg:items-end lg:pb-12">
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-[rgba(246,241,232,0.18)] bg-[rgba(246,241,232,0.08)] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[rgba(246,241,232,0.84)] backdrop-blur-md">
                  {restaurant.district}
                </span>
                <span className="rounded-full border border-[rgba(246,241,232,0.18)] bg-[rgba(246,241,232,0.08)] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[rgba(246,241,232,0.84)] backdrop-blur-md">
                  {restaurant.tagline}
                </span>
                <span className="rounded-full border border-[rgba(246,241,232,0.18)] bg-[rgba(246,241,232,0.08)] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[rgba(246,241,232,0.84)] backdrop-blur-md">
                  {restaurant.counterSeats}
                </span>
              </div>

              <p className="mt-8 text-[11px] uppercase tracking-[0.34em] text-[rgba(246,241,232,0.78)]">
                {restaurant.cuisine}
              </p>
              <h1 className="mt-5 max-w-[10ch] text-[clamp(3.4rem,9vw,8rem)] leading-[0.9] tracking-[-0.055em] text-[var(--cream-soft)]">
                La table japonaise du soir à Paris.
              </h1>
              <p className="mt-6 max-w-[38rem] text-base leading-8 text-[rgba(246,241,232,0.84)] sm:text-lg">
                Yashiki signe une adresse japonaise contemporaine au cœur du
                Marais : {restaurant.tagline.toLowerCase()}, bouillons montés
                chaque jour, comptoir vivant et salle calme pour les dîners qui
                veulent autant de précision que de chaleur.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={restaurant.reservationPath}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--sage-deep)] px-7 py-3 text-xs uppercase tracking-[0.24em] !text-white transition duration-300 hover:bg-[var(--ink)] hover:!text-white"
                >
                  Réserver une table
                </Link>
                <Link
                  href={restaurant.menuPath}
                  className="inline-flex items-center justify-center rounded-full border border-[rgba(246,241,232,0.38)] px-7 py-3 text-xs uppercase tracking-[0.24em] text-[var(--cream-soft)] transition duration-300 hover:border-[rgba(246,241,232,0.72)] hover:bg-[rgba(246,241,232,0.08)]"
                >
                  Voir la carte
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {restaurant.practicalFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-[1.6rem] border border-[rgba(246,241,232,0.16)] bg-[rgba(246,241,232,0.08)] px-5 py-5 backdrop-blur-md"
                  >
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[rgba(246,241,232,0.64)]">
                      {fact.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[rgba(246,241,232,0.88)]">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="justify-self-end rounded-[2rem] border border-[rgba(246,241,232,0.2)] bg-[rgba(246,241,232,0.08)] p-6 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[rgba(246,241,232,0.62)]">
                Ce soir chez Yashiki
              </p>
              <div className="mt-4 grid gap-4 text-sm leading-7 text-[rgba(246,241,232,0.86)]">
                {restaurant.openingHours.map((slot) => (
                  <div key={slot.days}>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[rgba(246,241,232,0.66)]">
                      {slot.days}
                    </p>
                    <p>{slot.hours}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-px bg-[rgba(246,241,232,0.14)]" />
              <p className="mt-6 text-sm leading-7 text-[rgba(246,241,232,0.86)]">
                {restaurant.reservationsLabel}. Appelle le restaurant ou passe
                par la page dédiée pour aller droit au but.
              </p>
              <Link
                href={restaurant.reservationPath}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--cream-soft)] px-6 py-3 text-xs uppercase tracking-[0.24em] text-[var(--ink)] transition duration-300 hover:bg-white"
              >
                Aller à la réservation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-[min(100%-32px,1280px)] py-24 sm:w-[min(100%-48px,1280px)] lg:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-3xl">
            <p className="section-label">Signatures</p>
            <h2 className="mt-4 max-w-[12ch] text-[clamp(2.6rem,5.4vw,5.6rem)] leading-[0.92] tracking-[-0.06em] text-[var(--ink)]">
              Deux raisons très simples de réserver chez Yashiki.
            </h2>
            <p className="section-copy mt-6">
              Deux gestes tiennent la maison: un bouillon travaillé sur la
              longueur et une coupe minute qui laisse parler le produit. Le
              reste suit naturellement, avec une carte courte, lisible et faite
              pour donner faim sans hésitation.
            </p>
          </Reveal>

          <Reveal>
            <Link
              href={restaurant.menuPath}
              className="inline-flex items-center justify-center rounded-full bg-[var(--sage-deep)] px-6 py-3 text-xs uppercase tracking-[0.24em] !text-white transition duration-300 hover:bg-[var(--ink)] hover:!text-white"
            >
              Explorer la carte
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr_0.84fr]">
          {topSelections.map((item, index) => (
            <Reveal key={item.title} delay={`${index * 60}`}>
              <article className="overflow-hidden rounded-[2rem] border border-[rgba(36,46,39,0.1)] bg-[rgba(251,247,241,0.76)]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  className="aspect-[5/4] w-full object-cover"
                  sizes="(min-width: 1024px) 30vw, 100vw"
                />
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                    {item.label}
                  </p>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[clamp(1.9rem,3vw,2.8rem)] leading-[0.95] tracking-[-0.05em] text-[var(--ink)]">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                        {item.copy}
                      </p>
                    </div>
                    <span className="rounded-full border border-[rgba(36,46,39,0.12)] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[var(--sage-deep)]">
                      {item.price}
                    </span>
                  </div>
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex items-center gap-3 rounded-full border border-[rgba(36,46,39,0.12)] px-5 py-3 text-xs uppercase tracking-[0.24em] text-[var(--ink)] transition duration-300 hover:border-[rgba(90,110,97,0.34)] hover:bg-white"
                  >
                    Voir ce plat sur la carte
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay="120">
            <aside className="flex h-full flex-col justify-between rounded-[2rem] border border-[rgba(36,46,39,0.1)] bg-[linear-gradient(180deg,rgba(231,218,200,0.46)_0%,rgba(251,247,241,0.82)_100%)] p-7">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--sage)]">
                  Le ton de la maison
                </p>
                <h3 className="mt-5 max-w-[9ch] text-[clamp(2rem,4vw,3.3rem)] leading-[0.95] tracking-[-0.05em] text-[var(--ink)]">
                  Bouillons longs, coupe minute, service du soir.
                </h3>
                <p className="mt-5 text-[15px] leading-8 text-[var(--ink-muted)]">
                  Une adresse pensée pour les dîners qui cherchent une vraie
                  régularité: peu d’effet, beaucoup de netteté, et assez de
                  personnalité pour donner envie de revenir.
                </p>
              </div>

              <div className="mt-8 space-y-4 border-l border-[rgba(36,46,39,0.12)] pl-5">
                {restaurant.services.map((service) => (
                  <p
                    key={service}
                    className="text-sm leading-7 text-[var(--ink-muted)]"
                  >
                    {service}
                  </p>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[rgba(36,46,39,0.08)] bg-[var(--cream-deep)]">
        <div className="mx-auto grid w-[min(100%-32px,1280px)] gap-10 py-24 sm:w-[min(100%-48px,1280px)] lg:grid-cols-[0.98fr_1.02fr] lg:items-center lg:py-28">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.2rem] border border-[rgba(36,46,39,0.1)]">
              <Image
                src={laMaisonStock}
                alt="Intérieur chaleureux du restaurant Yashiki"
                className="aspect-[5/6] w-full object-cover object-[26%_center]"
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,22,18,0.06)_0%,rgba(17,22,18,0.5)_100%)]" />
              <div className="absolute bottom-6 left-6 max-w-[18rem] rounded-[1.6rem] border border-[rgba(246,241,232,0.18)] bg-[rgba(17,22,18,0.26)] px-5 py-5 backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[rgba(246,241,232,0.62)]">
                  La maison
                </p>
                <p className="mt-3 text-sm leading-7 text-[rgba(246,241,232,0.88)]">
                  Un vrai lieu, un vrai comptoir, une vraie adresse qui existe
                  autant par l’ambiance que par l’assiette.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay="80">
            <div className="max-w-[42rem]">
              <p className="section-label">La maison</p>
              <h2 className="mt-4 max-w-[9ch] text-[clamp(3rem,5.4vw,5.8rem)] leading-[0.9] tracking-[-0.06em] text-[var(--ink)]">
                L’adresse compte autant que l’assiette.
              </h2>
              <p className="mt-8 max-w-[38rem] text-[17px] leading-9 text-[var(--ink-muted)]">
                Salle calme, comptoir vivant, lumière tenue et bois chaud: la
                maison a son propre rythme. Derrière les bols et les assiettes,
                il y a un lieu qui accompagne vraiment le service du soir.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.6rem] border border-[rgba(36,46,39,0.1)] bg-[rgba(251,247,241,0.8)] p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                    Salle
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                    Service du soir, lumière tenue, rythme calme et place faite
                    à la table plutôt qu’au décor.
                  </p>
                </div>
                <div className="rounded-[1.6rem] border border-[rgba(36,46,39,0.1)] bg-[rgba(251,247,241,0.8)] p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                    Comptoir
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                    Huit places seulement pour voir sortir les bols, les coupes
                    minute et le geste de la maison.
                  </p>
                </div>
              </div>

              <Link
                href={restaurant.maisonPath}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--sage-deep)] px-6 py-3 text-xs uppercase tracking-[0.24em] !text-white transition duration-300 hover:bg-[var(--ink)] hover:!text-white"
              >
                Voir l’ambiance de la maison
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-[min(100%-32px,1280px)] py-24 sm:w-[min(100%-48px,1280px)] lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <Reveal>
            <div className="max-w-2xl">
              <p className="section-label">Réservation</p>
              <h2 className="section-title mt-4">
                Tout ce qu’il faut pour réserver sans chercher.
              </h2>
              <p className="section-copy mt-6">
                Adresse, horaires, téléphone, email et demandes particulières
                sont réunis au même endroit pour réserver en quelques instants,
                sans chercher les infos d’une section à l’autre.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={restaurant.reservationPath}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--sage-deep)] px-6 py-3 text-xs uppercase tracking-[0.24em] !text-white transition duration-300 hover:bg-[var(--ink)] hover:!text-white"
                >
                  Ouvrir la page réservation
                </Link>
                <a
                  href={restaurant.phoneHref}
                  className="inline-flex items-center justify-center rounded-full border border-[rgba(36,46,39,0.12)] px-6 py-3 text-xs uppercase tracking-[0.24em] text-[var(--ink)] transition duration-300 hover:border-[rgba(90,110,97,0.34)] hover:bg-white"
                >
                  Appeler le restaurant
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {restaurant.reservationSteps.map((step, index) => (
              <Reveal key={step.title} delay={`${index * 60}`}>
                <article className="h-full rounded-[1.6rem] border border-[rgba(36,46,39,0.1)] bg-[rgba(251,247,241,0.78)] p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-2xl leading-[1.05] tracking-[-0.04em] text-[var(--ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                    {step.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <MobileBookingBar />
    </main>
  );
}

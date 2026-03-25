import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import MobileBookingBar from "@/components/mobile-booking-bar";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import maisonBarStock from "@/imagee/maison-bar-stock.jpg";
import maisonChefMakingStock from "@/imagee/maison-chef-making-stock.jpg";
import maisonChefStock from "@/imagee/maison-chef-stock.jpg";
import maisonDiningStock from "@/imagee/maison-dining-stock.jpg";
import laMaisonStock from "@/imagee/la-maison-stock.jpg";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "La maison",
  description:
    "Découvre la salle, le comptoir, les cuisiniers et l’accès à la maison Yashiki à Paris.",
};

const atmosphereNotes = [
  {
    title: "Salle apaisée",
    copy: "Une lumière tenue, des tables bien espacées et une ambiance pensée pour faire exister le repas.",
  },
  {
    title: "Comptoir vivant",
    copy: "Huit places seulement pour suivre le service, les bols, les coupes et les assiettes qui partent.",
  },
  {
    title: "Cuisine lisible",
    copy: "Bouillons montés, sauces tenues, riz travaillé avec précision et carte volontairement concise.",
  },
];

const serviceMarkers = [
  {
    label: "Salle tenue",
    copy: "Des tables espacées, une lumière calme et un rythme qui laisse la soirée s’installer.",
  },
  {
    label: "Comptoir visible",
    copy: "Le geste reste lisible pour ceux qui aiment voir partir les assiettes et les bols.",
  },
  {
    label: "Cuisine régulière",
    copy: "Même ligne de précision du premier service jusqu’aux dernières commandes du soir.",
  },
];

const kitchenNotes = [
  {
    label: "Bouillons",
    copy: "Montés chaque jour pour garder de la densité sans lourdeur inutile.",
  },
  {
    label: "Coupe minute",
    copy: "Le comptoir garde une vraie tension de service, visible et précise.",
  },
  {
    label: "Équipe",
    copy: "Une brigade courte, pensée pour tenir la régularité plus que l’esbroufe.",
  },
];

const mockGoogleReviews = [
  {
    name: "Camille R.",
    quote:
      "Adresse calme, service très net et vrai plaisir sur le comptoir. On sent une maison sérieuse derrière l’assiette.",
  },
  {
    name: "Nathan B.",
    quote:
      "Bouillon précis, coupe minute visible, salle apaisée. Le genre d’endroit où l’on revient sans hésiter.",
  },
];

export default function MaisonPage() {
  return (
    <main className="min-h-screen bg-[var(--cream)] text-[var(--ink)]">
      <SiteHeader />

      <section className="mx-auto grid w-[min(100%-32px,1280px)] gap-10 py-12 sm:w-[min(100%-48px,1280px)] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-20">
        <Reveal>
          <div className="max-w-2xl">
            <p className="section-label">La maison</p>
            <h1 className="mt-4 max-w-[9ch] text-[clamp(3.2rem,6vw,6.4rem)] leading-[0.9] tracking-[-0.06em] text-[var(--ink)]">
              Une maison japonaise contemporaine, ancrée dans le service du soir.
            </h1>
            <p className="mt-8 max-w-[40rem] text-[17px] leading-9 text-[var(--ink-muted)]">
              Bois chaud, comptoir vivant, lumière tenue et service précis:
              Yashiki a été pensé comme une adresse où l’on revient pour la
              cuisine autant que pour la sensation de table juste.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={restaurant.reservationPath}
                className="inline-flex items-center justify-center rounded-full bg-[var(--sage-deep)] px-6 py-3 text-xs uppercase tracking-[0.24em] !text-white transition duration-300 hover:bg-[var(--ink)] hover:!text-white"
              >
                Réserver chez Yashiki
              </Link>
              <Link
                href={restaurant.menuPath}
                className="inline-flex items-center justify-center rounded-full border border-[rgba(36,46,39,0.12)] px-6 py-3 text-xs uppercase tracking-[0.24em] text-[var(--ink)] transition duration-300 hover:border-[rgba(90,110,97,0.34)] hover:bg-white"
              >
                Voir la carte
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay="80">
          <div className="relative overflow-hidden rounded-[2.4rem] border border-[rgba(36,46,39,0.1)]">
            <Image
              src={laMaisonStock}
              alt="Intérieur chaleureux du restaurant Yashiki"
              className="aspect-[5/4] w-full object-cover object-[28%_center]"
              sizes="(min-width: 1024px) 52vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,22,18,0.08)_0%,rgba(17,22,18,0.52)_100%)]" />
            <div className="absolute bottom-6 left-6 max-w-[18rem] rounded-[1.6rem] border border-[rgba(246,241,232,0.18)] bg-[rgba(17,22,18,0.26)] px-5 py-5 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[rgba(246,241,232,0.62)]">
                Service du soir
              </p>
              <p className="mt-3 text-sm leading-7 text-[rgba(246,241,232,0.88)]">
                Une salle qui laisse de la place au repas, au rythme et au
                retour des habitués.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-[rgba(36,46,39,0.08)] bg-[rgba(250,244,236,0.62)]">
        <div className="mx-auto grid w-[min(100%-32px,1280px)] gap-4 py-12 sm:w-[min(100%-48px,1280px)] md:grid-cols-3">
          {atmosphereNotes.map((note, index) => (
            <Reveal key={note.title} delay={`${index * 50}`}>
              <article className="rounded-[1.7rem] border border-[rgba(36,46,39,0.08)] bg-[var(--cream-soft)] p-6">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
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

      <section className="mx-auto w-[min(100%-32px,1280px)] py-24 sm:w-[min(100%-48px,1280px)] lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
          <Reveal>
            <div className="max-w-[40rem]">
              <p className="section-label">Le lieu</p>
              <h2 className="section-title mt-4">
                La salle, le comptoir et le service doivent parler ensemble.
              </h2>
              <p className="section-copy mt-6">
                La maison ne se résume pas à un joli décor. Elle tient par la
                manière dont la salle accompagne la cuisine, dont le comptoir
                reste vivant et dont chaque table reçoit le même soin du début
                à la fin du service.
              </p>
              <p className="section-copy mt-6">
                Chez Yashiki, le lieu doit rassurer tout de suite: on comprend
                le ton, on sent la rigueur et on voit qu’il y a une vraie équipe
                derrière les assiettes.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {serviceMarkers.map((item) => (
                  <article
                    key={item.label}
                    className="rounded-[1.6rem] border border-[rgba(36,46,39,0.08)] bg-[rgba(251,247,241,0.82)] p-5"
                  >
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                      {item.label}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                      {item.copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay="80">
            <div className="grid gap-6">
              <div className="relative overflow-hidden rounded-[2.2rem] border border-[rgba(36,46,39,0.1)]">
                <Image
                  src={maisonDiningStock}
                  alt="Salle de restaurant japonais contemporaine"
                  className="aspect-[5/4] w-full object-cover object-center"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,22,18,0.02)_0%,rgba(17,22,18,0.46)_100%)]" />
                <div className="absolute bottom-6 left-6 max-w-[18rem] rounded-[1.5rem] border border-[rgba(246,241,232,0.18)] bg-[rgba(17,22,18,0.24)] px-5 py-5 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[rgba(246,241,232,0.62)]">
                    La salle du soir
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[rgba(246,241,232,0.88)]">
                    Un lieu posé, chaud et lisible, pensé pour dîner plutôt que
                    seulement passer.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-[0.62fr_0.38fr]">
                <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(36,46,39,0.1)]">
                  <Image
                    src={maisonChefStock}
                    alt="Chef dressant des pièces au comptoir"
                    className="aspect-[5/4] w-full object-cover object-[44%_center]"
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,22,18,0.04)_0%,rgba(17,22,18,0.38)_100%)]" />
                  <div className="absolute bottom-5 left-5 max-w-[15rem] rounded-[1.4rem] border border-[rgba(246,241,232,0.16)] bg-[rgba(17,22,18,0.22)] px-4 py-4 backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[rgba(246,241,232,0.62)]">
                      Le geste
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[rgba(246,241,232,0.88)]">
                      Finitions nettes, montage minute et assiettes envoyées
                      sans lourdeur.
                    </p>
                  </div>
                </div>

                <div className="relative min-h-[19rem] overflow-hidden rounded-[2rem] border border-[rgba(36,46,39,0.1)] bg-[rgba(20,18,16,0.08)]">
                  <Image
                    src={maisonBarStock}
                    alt="Comptoir de restaurant japonais"
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 18vw, 100vw"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,22,18,0.06)_0%,rgba(17,22,18,0.34)_100%)]" />
                  <div className="absolute inset-x-4 bottom-4 rounded-[1.2rem] border border-[rgba(246,241,232,0.14)] bg-[rgba(17,22,18,0.22)] px-4 py-4 backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-[0.26em] text-[rgba(246,241,232,0.62)]">
                      Le comptoir
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[rgba(246,241,232,0.88)]">
                      Une place plus directe sur le service, le geste et la
                      salle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[rgba(36,46,39,0.08)] bg-[rgba(250,244,236,0.58)]">
        <div className="mx-auto grid w-[min(100%-32px,1280px)] gap-10 py-24 sm:w-[min(100%-48px,1280px)] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-28">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.4rem] border border-[rgba(36,46,39,0.1)]">
              <Image
                src={maisonChefMakingStock}
                alt="Cuisinier préparant des sushis au comptoir"
                className="aspect-[4/5] w-full object-cover object-center"
                sizes="(min-width: 1024px) 42vw, 100vw"
                loading="eager"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,22,18,0.04)_0%,rgba(17,22,18,0.42)_100%)]" />
              <div className="absolute bottom-6 left-6 max-w-[17rem] rounded-[1.6rem] border border-[rgba(246,241,232,0.18)] bg-[rgba(17,22,18,0.24)] px-5 py-5 backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[rgba(246,241,232,0.62)]">
                  Nos cuisiniers
                </p>
                <p className="mt-3 text-sm leading-7 text-[rgba(246,241,232,0.88)]">
                  Une équipe courte qui tient la ligne de la maison avec calme,
                  précision et régularité.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay="80">
            <div className="max-w-[42rem]">
              <p className="section-label">Nos cuisiniers</p>
              <h2 className="section-title mt-4">
                Une brigade visible, précise et vraiment faite pour tenir le soir.
              </h2>
              <p className="section-copy mt-6">
                Les cuisiniers de la maison travaillent dans une logique simple:
                monter juste, couper net, envoyer propre. Ce n’est pas une
                cuisine d’esbroufe. C’est une cuisine de régularité, pensée pour
                que chaque table retrouve le même niveau de soin.
              </p>
              <p className="section-copy mt-6">
                Depuis le comptoir, on voit les mains, les gestes, le riz, les
                sauces, les finitions et la tension du service. C’est ce genre
                de présence qui rend un restaurant vivant.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {kitchenNotes.map((item) => (
                  <article
                    key={item.label}
                    className="rounded-[1.6rem] border border-[rgba(36,46,39,0.08)] bg-[rgba(251,247,241,0.82)] p-5"
                  >
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                      {item.label}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                      {item.copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-[min(100%-32px,1280px)] py-24 sm:w-[min(100%-48px,1280px)] lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
          <Reveal>
            <div className="grid gap-4">
              <div className="rounded-[2.1rem] border border-[rgba(36,46,39,0.1)] bg-[rgba(251,247,241,0.82)] p-7">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--sage)]">
                  Google Maps
                </p>
                <h2 className="mt-3 text-[clamp(2.3rem,4vw,4rem)] leading-[0.95] tracking-[-0.05em] text-[var(--ink)]">
                  Trouver la maison en un regard.
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--ink-muted)]">
                  Adresse claire, quartier identifiable et accès direct depuis
                  la carte. Le bloc reste lisible immédiatement, puis la carte
                  prend le relais pour situer précisément la maison.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <article className="rounded-[1.6rem] border border-[rgba(36,46,39,0.08)] bg-[rgba(251,247,241,0.82)] p-5">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--sage)]">
                    Quartier
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                    {restaurant.neighborhood}
                  </p>
                </article>

                <article className="rounded-[1.6rem] border border-[rgba(36,46,39,0.08)] bg-[rgba(251,247,241,0.82)] p-5">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--sage)]">
                    Adresse
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                    {restaurant.addressLine}
                  </p>
                </article>

                <article className="rounded-[1.6rem] border border-[rgba(36,46,39,0.08)] bg-[rgba(251,247,241,0.82)] p-5">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--sage)]">
                    Réserver
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                    {restaurant.phoneDisplay}
                  </p>
                </article>
              </div>

              <div className="overflow-hidden rounded-[2.3rem] border border-[rgba(36,46,39,0.1)] bg-[linear-gradient(180deg,rgba(100,118,104,0.12)_0%,rgba(251,247,241,0.92)_100%)] p-7">
                <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                      Adresse complète
                    </p>
                    <p className="mt-4 text-[clamp(2rem,3vw,3rem)] leading-[0.95] tracking-[-0.04em] text-[var(--ink)]">
                      {restaurant.addressLine}
                    </p>
                    <p className="mt-5 text-sm leading-7 text-[var(--ink-muted)]">
                      Entre les rues du Marais et le rythme du soir, la maison
                      reste facile à situer, à appeler et à retrouver quand on
                      veut réserver sans chercher.
                    </p>
                  </div>

                  <div className="rounded-[1.8rem] border border-[rgba(36,46,39,0.08)] bg-[rgba(255,255,255,0.56)] p-5">
                    <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--sage)]">
                      Repères utiles
                    </p>
                    <div className="mt-4 grid gap-3 text-sm leading-7 text-[var(--ink-muted)]">
                      <p>Marais / Hôtel de Ville</p>
                      <p>{restaurant.phoneDisplay}</p>
                      <p>{restaurant.email}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {restaurant.openingHours.map((slot) => (
                    <span
                      key={slot.days}
                      className="rounded-full border border-[rgba(36,46,39,0.1)] bg-[rgba(245,238,228,0.78)] px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[var(--sage-deep)]"
                    >
                      {slot.days} · {slot.hours}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={restaurant.googleMapsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--sage-deep)] px-6 py-3 text-xs uppercase tracking-[0.24em] !text-white transition duration-300 hover:bg-[var(--ink)] hover:!text-white"
                  >
                    Ouvrir Google Maps
                  </a>
                  <a
                    href={restaurant.phoneHref}
                    className="inline-flex items-center justify-center rounded-full border border-[rgba(36,46,39,0.12)] px-6 py-3 text-xs uppercase tracking-[0.24em] text-[var(--ink)] transition duration-300 hover:border-[rgba(90,110,97,0.34)] hover:bg-white"
                  >
                    Appeler le restaurant
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay="80">
            <div className="grid gap-4">
              <article className="rounded-[2rem] border border-[rgba(36,46,39,0.08)] bg-[rgba(251,247,241,0.82)] p-7">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                  Google reviews
                </p>
                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[2.6rem] leading-none tracking-[-0.06em] text-[var(--ink)]">
                      4.8
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--ink-muted)]">
                      127 avis Google
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[var(--sage-deep)]">
                    <span className="text-xl">★</span>
                    <span className="text-xl">★</span>
                    <span className="text-xl">★</span>
                    <span className="text-xl">★</span>
                    <span className="text-xl">★</span>
                  </div>
                </div>
                <p className="mt-5 text-lg leading-8 tracking-[-0.02em] text-[var(--ink)]">
                  Une note forte, portée autant par l’ambiance de salle que par
                  la régularité du service.
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                  Les retours parlent surtout du calme de la salle, du comptoir
                  visible et d’une cuisine précise qui donne envie de revenir.
                </p>
                <div className="mt-6 grid gap-3">
                  {mockGoogleReviews.map((review) => (
                    <div
                      key={review.name}
                      className="rounded-[1.4rem] border border-[rgba(36,46,39,0.08)] bg-[rgba(245,238,228,0.68)] p-4"
                    >
                      <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--sage)]">
                        {review.name}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
                        {review.quote}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[2rem] border border-[rgba(36,46,39,0.08)] bg-[rgba(251,247,241,0.82)] p-7">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                  Adresse & accès
                </p>
                <p className="mt-4 text-2xl leading-[1.15] tracking-[-0.03em] text-[var(--ink)]">
                  {restaurant.addressLine}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                  {restaurant.neighborhood}. Le lieu est prêt à être trouvé vite,
                  autant depuis la carte que depuis la réservation.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {restaurant.openingHours.map((slot) => (
                    <span
                      key={slot.days}
                      className="rounded-full border border-[rgba(36,46,39,0.1)] bg-[rgba(245,238,228,0.74)] px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[var(--sage-deep)]"
                    >
                      {slot.days}
                    </span>
                  ))}
                </div>
                <a
                  href={restaurant.googleMapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--sage-deep)] px-6 py-3 text-xs uppercase tracking-[0.24em] !text-white transition duration-300 hover:bg-[var(--ink)] hover:!text-white"
                >
                  Ouvrir dans Google Maps
                </a>
              </article>

              <article className="rounded-[2rem] border border-[rgba(36,46,39,0.08)] bg-[rgba(251,247,241,0.82)] p-7">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                  Ce que les habitués retiennent
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {restaurant.guestHighlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-[rgba(36,46,39,0.1)] bg-[rgba(245,238,228,0.74)] px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[var(--sage-deep)]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[rgba(36,46,39,0.08)] bg-[var(--cream-deep)]">
        <div className="mx-auto grid w-[min(100%-32px,1280px)] gap-10 py-20 sm:w-[min(100%-48px,1280px)] lg:grid-cols-[0.98fr_1.02fr] lg:items-center lg:py-24">
          <Reveal>
            <div className="overflow-hidden rounded-[2.2rem] border border-[rgba(36,46,39,0.1)]">
              <Image
                src={maisonDiningStock}
                alt="Salle chaleureuse du restaurant le soir"
                className="aspect-[4/3] w-full object-cover object-center"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
          </Reveal>

          <Reveal delay="80">
            <div className="max-w-[40rem]">
              <p className="section-label">Réserver maintenant</p>
              <h2 className="section-title mt-4">
                Après l’ambiance, place à la table.
              </h2>
              <p className="section-copy mt-6">
                Le lieu donne le ton. Il ne reste plus qu’à choisir le soir, le
                créneau et la bonne façon de réserver selon le nombre de
                convives.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
      <MobileBookingBar />
    </main>
  );
}

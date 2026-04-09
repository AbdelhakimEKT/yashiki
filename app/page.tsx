import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import AddressActions from "@/components/address-actions";
import MobileBookingBar from "@/components/mobile-booking-bar";
import OpenStatus from "@/components/open-status";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import heroIllustration from "@/imagee/hero.png";
import maisonCounterStock from "@/imagee/maison-counter-stock.jpg";
import menuMaki from "@/imagee/menu-maki.jpg";
import menuNigiriSignature from "@/imagee/menu-nigiri-signature.jpg";
import menuTonkotsuYashiki from "@/imagee/menu-tonkotsu-yashiki.jpg";
import menuTunaTartare from "@/imagee/menu-tuna-tartare.jpg";
import pexelsJapaneseInterior from "@/imagee/pexels-japanese-interior.jpg";
import pexelsLanternChef from "@/imagee/pexels-lantern-chef.jpg";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: {
    absolute: "Yashiki Paris — Restaurant japonais contemporain, Le Marais",
  },
};

const signatureStories = [
  {
    number: "01",
    label: "Bouillon signature",
    title: "Tonkotsu Yashiki",
    copy:
      "Un bol dense, brillant, net. La promesse doit être visible avant même que la carte complète s’ouvre.",
    href: "/menu#ramen",
    image: menuTonkotsuYashiki,
    alt: "Bol de tonkotsu Yashiki sur comptoir en bois",
  },
  {
    number: "02",
    label: "Coupe minute",
    title: "Sushi lisibles, gestes visibles",
    copy:
      "La coupe reste un spectacle discret. Les pièces signatures se lisent vite, se choisissent vite et rassurent tout de suite.",
    href: "/menu#sushi-and-sashimi",
    image: menuNigiriSignature,
    alt: "Assiette de nigiri signature",
  },
  {
    number: "03",
    label: "La maison",
    title: "Le comptoir donne le ton du lieu",
    copy:
      "Bois chaud, service tendu mais calme, lumière tenue: l’identité passe autant par l’espace que par l’assiette.",
    href: "/maison",
    image: pexelsLanternChef,
    alt: "Cuisine ouverte japonaise sous des lanternes chaudes",
  },
];

export default function Home() {
  return (
    <main id="main-content" className="overflow-hidden bg-[var(--paper-soft)] text-[var(--ink)]">
      <section
        className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--night)]"
        style={{ color: "rgb(248, 241, 232)" }}
      >
        <Image
          src={maisonCounterStock}
          alt="Comptoir japonais vivant et lumineux chez Yashiki"
          fill
          priority
          className="object-cover object-center opacity-[0.54] saturate-[0.86]"
          sizes="100vw"
        />
        <Image
          src={heroIllustration}
          alt=""
          aria-hidden
          fill
          className="pointer-events-none object-cover opacity-[0.14] mix-blend-screen"
          sizes="100vw"
        />
        <div className="ambient-orb absolute right-[-8rem] top-20 h-64 w-64 rounded-full bg-[rgba(161,45,39,0.3)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,15,13,0.92)_0%,rgba(20,15,13,0.76)_42%,rgba(20,15,13,0.52)_70%,rgba(20,15,13,0.76)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,15,13,0.28)_0%,rgba(20,15,13,0.18)_32%,rgba(20,15,13,0.86)_100%)]" />
        <SiteHeader light overlay hideBrandLogo />

        <div className="page-shell relative z-10 grid min-h-[100svh] gap-12 pb-12 pt-28 lg:grid-cols-[0.68fr_0.32fr] lg:items-end">
          <Reveal className="max-w-4xl">
            <div className="flex flex-wrap gap-2">
              <span className="info-chip">{restaurant.district}</span>
              <span className="info-chip">{restaurant.cuisine}</span>
              <span className="info-chip">{restaurant.counterSeats}</span>
            </div>

            <p className="mt-10 text-[11px] uppercase tracking-[0.36em] text-[rgba(248,241,232,0.72)]">
              {restaurant.name}
            </p>
            <h1 className="display-hero mt-5 max-w-[10.5ch] text-[var(--paper-soft)]">
              Le Marais passe en mode nuit japonaise.
            </h1>
            <p className="copy-large mt-6 max-w-[38rem] text-[rgba(248,241,232,0.84)]">
              Une salle qui tient la nuit, un comptoir qui vit, une cuisine
              précise. On vient pour le geste, on reste pour le rythme. Et on
              réserve sans réfléchir.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={restaurant.reservationPath} className="cta-primary">
                Réserver ce soir
              </Link>
              <Link
                href={restaurant.menuPath}
                className="inline-flex items-center justify-center rounded-full border border-[rgba(248,241,232,0.16)] px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-[var(--paper-soft)] transition duration-300 hover:bg-[rgba(248,241,232,0.08)]"
              >
                Voir la carte
              </Link>
            </div>

            <div className="mt-8">
              <OpenStatus light />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {restaurant.trustMetrics.map((metric) => (
                <div key={metric.label} className="dark-panel p-5">
                  <p className="text-[2.6rem] leading-none tracking-[-0.06em] text-[var(--paper-soft)]">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-[rgba(248,241,232,0.66)]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay="140" className="lg:justify-self-end">
            <div className="flex items-end gap-4 lg:gap-6">
              <p className="vertical-copy hidden text-[10px] uppercase text-[rgba(248,241,232,0.4)] lg:block">
                Tokyo Paris Comptoir Nuit
              </p>

              <article className="floating-plate relative w-full max-w-[22rem] overflow-hidden rounded-[2rem] border border-[rgba(248,241,232,0.14)] bg-[rgba(20,15,13,0.36)] shadow-[0_28px_70px_rgba(0,0,0,0.28)]">
                <Image
                  src={menuMaki}
                  alt="Plateau de maki grillé et dressé avec soin"
                  className="aspect-[4/5] w-full object-cover"
                  sizes="(min-width: 1024px) 22rem, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,15,13,0.02)_0%,rgba(20,15,13,0.68)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[rgba(248,241,232,0.62)]">
                    Première impression
                  </p>
                  <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] leading-[0.92] tracking-[-0.05em] text-[var(--paper-soft)]">
                    Une photo. Et on a déjà faim.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[rgba(248,241,232,0.78)]">
                    L’envie vient d’abord. La carte et la réservation suivent,
                    simplement.
                  </p>
                </div>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-shell py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Signatures</p>
            <h2 className="display-title mt-4 max-w-[8ch]">
              Une carte courte. Une envie nette.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-8 text-[var(--ink-muted)]">
              On va à l’essentiel: quelques plats qui tiennent la maison. Le
              reste suit, sans bruit.
            </p>
            <div className="mt-8">
              <Link href={restaurant.menuPath} className="cta-primary">
                Explorer la carte
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-8">
            {signatureStories.map((story, index) => (
              <Reveal key={story.title} delay={`${index * 90}`}>
                <article className="grid gap-6 border-t border-[var(--line)] pt-8 first:border-t-0 first:pt-0 lg:grid-cols-[0.56fr_0.44fr] lg:items-end">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[rgba(248,241,232,0.5)]">
                      <Image
                        src={story.image}
                        alt={story.alt}
                        className="aspect-[5/4] w-full object-cover transition duration-500 hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 36rem, 100vw"
                      />
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--accent)]">
                      {story.number} · {story.label}
                    </p>
                    <h3 className="mt-4 text-[clamp(2.2rem,4vw,4rem)] leading-[0.94] tracking-[-0.05em] text-[var(--ink)]">
                      {story.title}
                    </h3>
                    <p className="mt-5 max-w-md text-[15px] leading-8 text-[var(--ink-muted)]">
                      {story.copy}
                    </p>
                    <Link
                      href={story.href}
                      className="mt-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[var(--accent-deep)] transition duration-300 hover:gap-4"
                    >
                      Ouvrir
                      <span aria-hidden>↗</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[var(--night)]"
        style={{ color: "rgb(248, 241, 232)" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(161,45,39,0.16),transparent_34%)]" />
        <div className="page-shell relative z-10 grid gap-12 py-24 lg:grid-cols-[0.42fr_0.58fr] lg:py-28">
          <Reveal>
            <p className="eyebrow !text-[rgba(248,241,232,0.64)]">Ce qu'ils disent</p>
            <p className="mt-4 text-[clamp(4.4rem,10vw,8rem)] leading-none tracking-[-0.08em] text-[var(--paper-soft)]">
              4,8
            </p>
            <p className="mt-4 max-w-sm text-[15px] leading-8 text-[rgba(248,241,232,0.72)]">
              Quand la salle, l’assiette et le service vont dans le même sens,
              la confiance arrive vite.
            </p>

            <div className="mt-10 grid gap-4">
              {restaurant.sourcingNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-[1.5rem] border border-[rgba(248,241,232,0.12)] px-5 py-5 text-sm leading-7 text-[rgba(248,241,232,0.74)]"
                >
                  {note}
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-8">
            {restaurant.reviewSamples.map((review, index) => (
              <Reveal key={review.name} delay={`${index * 80}`}>
                <article className="border-t border-[rgba(248,241,232,0.12)] pt-8 first:border-t-0 first:pt-0">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-[rgba(248,241,232,0.5)]">
                    {review.source} · {review.name}
                  </p>
                  <p className="mt-4 max-w-3xl text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.18] tracking-[-0.04em] text-[var(--paper-soft)]">
                    “{review.quote}”
                  </p>
                </article>
              </Reveal>
            ))}

            <Reveal delay="240">
              <div className="dark-panel p-6">
                <p className="text-[11px] uppercase tracking-[0.32em] text-[rgba(248,241,232,0.54)]">
                  Réserver vite
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <Link href={restaurant.reservationPath} className="cta-primary">
                    Réserver maintenant
                  </Link>
                  <a
                    href={restaurant.phoneHref}
                    className="inline-flex items-center justify-center rounded-full border border-[rgba(248,241,232,0.16)] px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-[var(--paper-soft)] transition duration-300 hover:bg-[rgba(248,241,232,0.08)]"
                  >
                    {restaurant.phoneDisplay}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-shell py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="grid gap-6 sm:grid-cols-[0.58fr_0.42fr]">
              <div className="relative min-h-[32rem] overflow-hidden rounded-[2rem] border border-[var(--line)] sm:row-span-3">
                <Image
                  src={pexelsJapaneseInterior}
                  alt="Salle japonaise chaleureuse avec bois foncé et lumière ambrée"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 34rem, 100vw"
                />
              </div>
              <div className="grid gap-6">
                <div className="overflow-hidden rounded-[2rem] border border-[var(--line)]">
                  <Image
                    src={pexelsLanternChef}
                    alt="Cuisine ouverte japonaise sous des lanternes chaudes"
                    className="aspect-[4/5] w-full object-cover object-[46%_center]"
                    sizes="(min-width: 1024px) 18rem, 100vw"
                  />
                </div>
                <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)]">
                  <Image
                    src={menuTunaTartare}
                    alt="Assiette de tartare de thon dressée sur une table en bois"
                    className="aspect-[4/3] w-full object-cover"
                    sizes="(min-width: 1024px) 18rem, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,15,13,0.02)_0%,rgba(20,15,13,0.62)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[rgba(248,241,232,0.64)]">
                      Ambiance
                    </p>
                    <p className="mt-3 max-w-[16rem] text-sm leading-7 text-[rgba(248,241,232,0.88)]">
                      Le Japon dans les matières et le geste. La France dans le
                      rythme et l’accueil.
                    </p>
                  </div>
                </div>
                <div className="soft-panel p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
                    Repères du lieu
                  </p>
                  <div className="mt-4 grid gap-3">
                    <p className="text-sm leading-7 text-[var(--ink-muted)]">
                      {restaurant.counterSeats} pour voir les gestes partir en direct.
                    </p>
                    <p className="text-sm leading-7 text-[var(--ink-muted)]">
                      Réservation conseillée dès le dîner pour garder ce rythme calme.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay="80">
            <p className="eyebrow">La maison</p>
            <h2 className="display-title mt-4 max-w-[9ch]">
              Un récit qui humanise le lieu avant la réservation.
            </h2>
            <div className="mt-6 grid gap-5">
              {restaurant.storytelling.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-xl text-[15px] leading-8 text-[var(--ink-muted)]"
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
                  <p className="mt-3 max-w-lg text-sm leading-7 text-[var(--ink-muted)]">
                    {pillar.copy}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href={restaurant.maisonPath} className="cta-secondary">
                Découvrir la maison
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[rgba(248,241,232,0.5)]">
        <div className="page-shell grid gap-10 py-20 lg:grid-cols-[0.62fr_0.38fr] lg:items-stretch lg:py-24">
          <Reveal className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[rgba(248,241,232,0.7)] lg:h-full lg:min-h-[44rem]">
              <iframe
                src={restaurant.googleMapsEmbedSrc}
                title="Carte interactive pour trouver Yashiki dans le Marais"
                className="h-[420px] w-full lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay="80">
            <p className="eyebrow">Venir & réserver</p>
            <h2 className="display-title mt-4 max-w-[9ch]">
              Toutes les infos utiles sont au bon endroit.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-8 text-[var(--ink-muted)]">
              Adresse, téléphone, horaires, carte, réservation: tout est là. Pas
              besoin de fouiller.
            </p>

            <div className="mt-8">
              <OpenStatus />
            </div>

            <div className="mt-8 grid gap-4">
              <div className="soft-panel p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
                  Adresse
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
                  {restaurant.addressLine}
                </p>
              </div>

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
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={restaurant.reservationPath} className="cta-primary">
                Réserver maintenant
              </Link>
              <a href={restaurant.phoneHref} className="cta-secondary">
                Appeler le restaurant
              </a>
            </div>

            <div className="mt-5">
              <AddressActions />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-shell py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:gap-14">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Questions rapides</p>
            <h2 className="display-title mt-4 max-w-[9ch]">
              Les réponses qu’on cherche souvent avant de réserver.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-8 text-[var(--ink-muted)]">
              Des réponses simples, comme on te les dirait au comptoir: courtes,
              directes, sans détour.
            </p>
          </Reveal>

          <div className="grid gap-4">
            {restaurant.faq.slice(0, 3).map((item, index) => (
              <Reveal key={item.question} delay={`${index * 70}`}>
                <article className="soft-panel p-6">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]">
                    {String(index + 1).padStart(2, "0")} · {item.question}
                  </p>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--ink-muted)]">
                    {item.answer}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[var(--night)]"
        style={{ color: "rgb(248, 241, 232)" }}
      >
        <Image
          src={heroIllustration}
          alt=""
          aria-hidden
          fill
          className="pointer-events-none object-cover opacity-[0.12] mix-blend-screen"
          sizes="100vw"
        />
        <div className="page-shell relative z-10 py-20 lg:py-24">
          <Reveal className="max-w-4xl">
            <p className="eyebrow !text-[rgba(248,241,232,0.62)]">Réserver</p>
            <h2 className="display-title mt-4 max-w-[10ch] text-[var(--paper-soft)]">
              La bonne table se bloque avant que l’envie redescende.
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[rgba(248,241,232,0.76)]">
              Tu as vu la salle, la carte, le comptoir. Il reste à choisir le
              service, appeler, ou réserver en ligne.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={restaurant.reservationPath} className="cta-primary">
                Réserver maintenant
              </Link>
              <Link
                href={restaurant.menuPath}
                className="inline-flex items-center justify-center rounded-full border border-[rgba(248,241,232,0.16)] px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-[var(--paper-soft)] transition duration-300 hover:bg-[rgba(248,241,232,0.08)]"
              >
                Revoir la carte
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

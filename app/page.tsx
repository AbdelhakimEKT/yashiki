import Image from "next/image";
import Link from "next/link";

import MenuPreviewLink from "@/components/menu-preview-link";
import Reveal from "@/components/reveal";
import SiteBrand from "@/components/site-brand";
import SiteNav from "@/components/site-nav";
import ambiance from "@/imagee/ambiance.png";
import hero from "@/imagee/hero.png";
import laMaisonStock from "@/imagee/la-maison-stock.jpg";
import logoSecondary from "@/imagee/logo-secondary.png";
import ramen from "@/imagee/ramen-image.png";
import sushi from "@/imagee/sushi-image.png";

const sides = [
  {
    name: "Gyoza croustillants",
    description: "Farce de volaille et gingembre, cuisson dorée, sauce maison.",
  },
  {
    name: "Aubergine miso",
    description: "Chair fondante, miso blanc, sésame blond et ciboule.",
  },
  {
    name: "Pickles maison",
    description: "Légumes marinés du jour, servis pour ouvrir et rafraîchir.",
  },
];

const contacts = [
  "16 rue des Archives, Paris",
  "Tous les soirs · 18h30 — 23h00",
  "Déjeuner du jeudi au dimanche · 12h00 — 14h30",
];

const moments = [
  "Lumière basse, bois clair, service attentif sans ostentation.",
  "Une carte courte, construite autour du bouillon, du riz et de l’arrivage.",
  "Le soir, la salle prend un rythme calme, presque feutré.",
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[var(--cream)] text-[var(--ink)]">
      <div className="pointer-events-none absolute inset-x-0 top-[42rem] h-[42rem] bg-[radial-gradient(circle_at_center,rgba(90,110,97,0.08),transparent_58%)]" />
      <div className="pointer-events-none absolute left-[-10rem] top-[118rem] h-[28rem] w-[28rem] rounded-full border border-[rgba(90,110,97,0.08)]" />
      <div className="pointer-events-none absolute right-[-8rem] top-[188rem] h-[24rem] w-[24rem] rounded-full border border-[rgba(90,110,97,0.08)]" />

      <section className="relative flex min-h-screen items-end overflow-hidden">
        <Image
          src={hero}
          alt="Illustration principale du restaurant Yashiki"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,22,18,0.2)_0%,rgba(17,22,18,0.4)_55%,rgba(17,22,18,0.66)_100%)]" />

        <header className="absolute inset-x-0 top-0 z-20">
          <div className="mx-auto flex w-[min(100%-32px,1280px)] items-center justify-between py-6 text-[11px] uppercase tracking-[0.28em] text-[rgba(246,241,232,0.86)] sm:w-[min(100%-48px,1280px)]">
            <SiteBrand light />
            <SiteNav light />
          </div>
        </header>

        <div className="relative z-10 mx-auto w-[min(100%-32px,1280px)] pb-14 pt-32 sm:w-[min(100%-48px,1280px)] sm:pb-20 lg:pb-24">
          <Reveal className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,360px)] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-[rgba(246,241,232,0.78)]">
                Restaurant japonais contemporain
              </p>
              <h1 className="max-w-[10ch] text-[clamp(3.6rem,10vw,8.6rem)] leading-[0.9] tracking-[-0.05em] text-[var(--cream-soft)]">
                YASHIKI
              </h1>
              <p className="mt-6 max-w-[34rem] text-base leading-8 text-[rgba(246,241,232,0.82)] sm:text-lg">
                Restaurant japonais contemporain à Paris. Chez Yashiki, les
                bouillons cuisent longuement, le riz est travaillé avec mesure
                et chaque service cherche la netteté plutôt que l’effet.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--sage-deep)] px-7 py-3 text-xs uppercase tracking-[0.24em] !text-white transition duration-300 hover:bg-[var(--ink)] hover:!text-white"
                >
                  Réserver une table
                </a>
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center rounded-full border border-[rgba(246,241,232,0.38)] px-7 py-3 text-xs uppercase tracking-[0.24em] text-[var(--cream-soft)] transition duration-300 hover:border-[rgba(246,241,232,0.72)] hover:bg-[rgba(246,241,232,0.08)]"
                >
                  Découvrir la carte
                </Link>
              </div>
            </div>

            <div className="justify-self-end rounded-[2rem] border border-[rgba(246,241,232,0.2)] bg-[rgba(246,241,232,0.08)] p-5 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[rgba(246,241,232,0.64)]">
                Le soir chez Yashiki
              </p>
              <p className="mt-3 max-w-[18rem] text-sm leading-7 text-[rgba(246,241,232,0.82)]">
                Une cuisine de contrastes discrets : bouillons profonds, coupes
                franches, assaisonnements tenus et salle volontairement apaisée.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="ambiance"
        className="mx-auto grid w-[min(100%-32px,1280px)] gap-10 py-24 sm:w-[min(100%-48px,1280px)] lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:py-32"
      >
        <Reveal>
          <div className="max-w-md">
            <p className="section-label">Ambiance</p>
            <h2 className="section-title mt-4">
              Une salle pensée comme une respiration.
            </h2>
            <p className="section-copy mt-6">
              Bois clair, murs mats, tables espacées. La salle est pensée pour
              accompagner le repas sans jamais prendre le dessus sur l’assiette.
            </p>
            <div className="mt-10 space-y-4 border-l border-[rgba(36,46,39,0.12)] pl-6">
              {moments.map((item) => (
                <p
                  key={item}
                  className="max-w-xs text-sm leading-7 text-[var(--ink-muted)]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay="100">
          <div className="relative overflow-hidden rounded-[2rem]">
            <Image
              src={ambiance}
              alt="Illustration secondaire de l’univers Yashiki"
              className="aspect-[4/3] w-full object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 border border-[rgba(17,22,18,0.08)]" />
            <div className="absolute bottom-5 left-5 max-w-[15rem] rounded-[1.5rem] border border-[rgba(246,241,232,0.28)] bg-[rgba(17,22,18,0.28)] px-4 py-4 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[rgba(246,241,232,0.62)]">
                Ambiance
              </p>
              <p className="mt-3 text-sm leading-7 text-[rgba(246,241,232,0.84)]">
                Une identité calme, lumineuse et cohérente du premier regard
                jusqu’à la table.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="menu"
        className="mx-auto w-[min(100%-32px,1280px)] py-10 sm:w-[min(100%-48px,1280px)]"
      >
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="max-w-xl">
              <p className="section-label">Ramen</p>
              <h2 className="section-title mt-4">
                Des ramen construits sur la patience du bouillon.
              </h2>
              <p className="section-copy mt-6">
                Porc, volaille ou version végétale, chaque bol cherche
                l’équilibre entre profondeur, tenue du gras et allonge en
                bouche.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="detail-card">
                  <p className="detail-label">Tonkotsu clair</p>
                  <p className="detail-copy">
                    Bouillon monté sur les os, poitrine confite, œuf mariné.
                  </p>
                </div>
                <div className="detail-card">
                  <p className="detail-label">Shoyu fumé</p>
                  <p className="detail-copy">
                    Volaille rôtie, tare brun, huile aromatique et cébette.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-6 text-[11px] uppercase tracking-[0.26em] text-[var(--ink-muted)]">
                <span>Préparation quotidienne</span>
                <span className="h-px w-12 bg-[rgba(36,46,39,0.16)]" />
                <span>Bouillon long</span>
              </div>
              <div className="mt-10">
                <MenuPreviewLink />
              </div>
            </div>
          </Reveal>

          <Reveal delay="100">
            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src={ramen}
                alt="Bol de ramen signature"
                className="aspect-[5/6] w-full object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute right-5 top-5 rounded-full border border-[rgba(246,241,232,0.3)] bg-[rgba(246,241,232,0.12)] px-4 py-2 text-[10px] uppercase tracking-[0.26em] text-[var(--cream-soft)] backdrop-blur-md">
                Signature bowl
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-[min(100%-32px,1280px)] py-20 sm:w-[min(100%-48px,1280px)] lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal delay="100" className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src={sushi}
                alt="Sélection de sushi et sashimi"
                className="aspect-[5/6] w-full object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute bottom-5 left-5 rounded-[1.25rem] border border-[rgba(246,241,232,0.28)] bg-[rgba(17,22,18,0.28)] px-4 py-3 text-[10px] uppercase tracking-[0.26em] text-[var(--cream-soft)] backdrop-blur-md">
                Découpe minute
              </div>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <div className="ml-auto max-w-xl">
              <p className="section-label">Sushi</p>
              <h2 className="section-title mt-4">
                Sushi, sashimi et nigiri servis selon l’arrivage.
              </h2>
              <p className="section-copy mt-6">
                Riz tiède, assaisonnement mesuré, poisson taillé au moment du
                service. Une lecture simple du produit, sans surcharge.
              </p>
              <div className="mt-10 grid gap-6 border-l border-[rgba(36,46,39,0.14)] pl-6">
                <div>
                  <p className="detail-label">Nigiri du jour</p>
                  <p className="detail-copy">
                    Sélection du marché, montage minute, wasabi dosé à la main.
                  </p>
                </div>
                <div>
                  <p className="detail-label">Maki signature</p>
                  <p className="detail-copy">
                    Roulé minute, texture nette, assaisonnement discret.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative border-y border-[rgba(36,46,39,0.1)] bg-[var(--cream-deep)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[linear-gradient(90deg,rgba(90,110,97,0.04)_0%,transparent_22%,transparent_78%,rgba(90,110,97,0.04)_100%)]" />
        <div className="mx-auto w-[min(100%-32px,1280px)] py-20 sm:w-[min(100%-48px,1280px)] lg:py-24">
          <Reveal className="max-w-2xl">
            <p className="section-label">À partager</p>
            <h2 className="section-title mt-4">Des accompagnements utiles.</h2>
            <p className="section-copy mt-6">
              Quelques assiettes pour commencer, accompagner ou partager à
              table. Des préparations courtes, faites pour rester justes.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] bg-[rgba(36,46,39,0.12)] lg:grid-cols-3">
            {sides.map((item, index) => (
              <Reveal key={item.name} delay={`${index * 90}`}>
                <article className="h-full bg-[var(--cream)] p-8">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 text-2xl tracking-[-0.04em] text-[var(--ink)]">
                    {item.name}
                  </h3>
                  <p className="mt-4 max-w-xs text-sm leading-7 text-[var(--ink-muted)]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="brand"
        className="mx-auto w-[min(100%-32px,1280px)] py-24 sm:w-[min(100%-48px,1280px)] lg:py-32"
      >
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.35rem] border border-[rgba(36,46,39,0.12)] bg-[rgba(250,244,236,0.48)] shadow-[0_28px_80px_rgba(44,32,24,0.08)]">
              <Image
                src={laMaisonStock}
                alt="Intérieur chaleureux d’un restaurant japonais contemporain"
                className="h-[32rem] w-full object-cover object-[26%_center] lg:h-[42rem]"
                sizes="(min-width: 1024px) 36vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,21,18,0.04)_0%,rgba(18,21,18,0.18)_42%,rgba(18,21,18,0.54)_100%)]" />
              <div className="absolute left-6 top-6 rounded-full border border-[rgba(246,241,232,0.26)] bg-[rgba(18,21,18,0.2)] px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-[rgba(246,241,232,0.9)] backdrop-blur-md">
                La maison
              </div>
              <div className="absolute bottom-6 left-6 max-w-[16rem] rounded-[1.55rem] border border-[rgba(246,241,232,0.18)] bg-[rgba(18,21,18,0.22)] px-5 py-5 backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[rgba(246,241,232,0.62)]">
                  Ambiance du soir
                </p>
                <p className="mt-3 text-sm leading-7 text-[rgba(246,241,232,0.86)]">
                  Bois chaud, comptoir vivant, lumière tenue et gestes visibles
                  dès le premier regard.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay="100">
            <div className="max-w-[44rem] pt-2">
              <p className="section-label">La maison</p>
              <h2 className="mt-4 max-w-[9ch] text-[clamp(3.1rem,5.6vw,6.1rem)] leading-[0.9] tracking-[-0.065em] text-[var(--ink)]">
                Une maison japonaise contemporaine, ancrée dans le service du
                soir.
              </h2>
              <p className="mt-8 max-w-[40rem] text-[17px] leading-9 text-[var(--ink-muted)]">
                Yashiki réunit un travail de bouillon, de cuisson précise et de
                produits choisis selon la saison. La carte reste volontairement
                concise pour garder une exécution régulière.
              </p>
              <p className="mt-6 max-w-[40rem] text-[17px] leading-9 text-[var(--ink-muted)]">
                À table, le geste reste lisible : riz, dashi, tare, grillades,
                friture légère, coupe minute. Une cuisine pensée pour revenir
                souvent plutôt que pour impressionner une seule fois.
              </p>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.55rem] border border-[rgba(36,46,39,0.1)] bg-[rgba(250,244,236,0.82)] p-5 shadow-[0_14px_34px_rgba(44,32,24,0.05)]">
                  <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                    01
                  </span>
                  <p className="mt-4 text-[15px] leading-8 text-[var(--ink-muted)]">
                    Bouillons montés chaque jour.
                  </p>
                </div>
                <div className="rounded-[1.55rem] border border-[rgba(36,46,39,0.1)] bg-[rgba(250,244,236,0.82)] p-5 shadow-[0_14px_34px_rgba(44,32,24,0.05)]">
                  <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                    02
                  </span>
                  <p className="mt-4 text-[15px] leading-8 text-[var(--ink-muted)]">
                    Arrivages selon la saison et la coupe.
                  </p>
                </div>
                <div className="rounded-[1.55rem] border border-[rgba(36,46,39,0.1)] bg-[rgba(250,244,236,0.82)] p-5 shadow-[0_14px_34px_rgba(44,32,24,0.05)]">
                  <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                    03
                  </span>
                  <p className="mt-4 text-[15px] leading-8 text-[var(--ink-muted)]">
                    Salle calme, service continu, rythme du soir.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="border-t border-[rgba(36,46,39,0.1)]">
        <div className="mx-auto grid w-[min(100%-32px,1280px)] gap-12 py-20 sm:w-[min(100%-48px,1280px)] lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
          <Reveal>
            <div className="max-w-xl">
              <p className="section-label">Contact</p>
              <h2 className="section-title mt-4">
                Réservations et informations.
              </h2>
              <p className="section-copy mt-6">
                Réservations conseillées chaque soir. Pour les groupes, les
                horaires et les demandes particulières, l’équipe répond par
                téléphone ou par email.
              </p>
            </div>
          </Reveal>

          <Reveal delay="100">
            <div className="grid gap-px overflow-hidden rounded-[2rem] bg-[rgba(36,46,39,0.12)]">
              <div className="grid gap-8 bg-[var(--cream)] p-8 sm:grid-cols-2">
                <div>
                  <p className="detail-label">Informations</p>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--ink-muted)]">
                    {contacts.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="detail-label">Réservation</p>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--ink-muted)]">
                    <p>
                      <a
                        href="tel:+33180001224"
                        className="text-[var(--ink-muted)] transition hover:text-[var(--ink)]"
                      >
                        +33 1 80 00 12 24
                      </a>
                    </p>
                    <p>
                      <a
                        href="mailto:reservation@yashiki.fr"
                        className="text-[var(--ink-muted)] transition hover:text-[var(--ink)]"
                      >
                        reservation@yashiki.fr
                      </a>
                    </p>
                    <p>Groupes et privatisations sur demande</p>
                  </div>
                  <a
                    href="mailto:reservation@yashiki.fr"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--sage-deep)] px-6 py-3 text-xs uppercase tracking-[0.24em] !text-white transition duration-300 hover:bg-[var(--ink)] hover:!text-white"
                  >
                    Écrire au restaurant
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3 bg-[var(--cream-deep)] px-8 py-6 text-[11px] uppercase tracking-[0.24em] text-[var(--ink-muted)] sm:flex-row sm:items-center sm:justify-between">
                <span>Réservation recommandée le vendredi et samedi</span>
                <span className="text-[var(--sage)]">8 places au comptoir</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="mx-auto w-[min(100%-32px,1280px)] py-10 sm:w-[min(100%-48px,1280px)]">
        <Reveal className="flex flex-col items-start justify-between gap-8 border-t border-[rgba(36,46,39,0.1)] pt-8 md:flex-row md:items-center">
          <Image
            src={logoSecondary}
            alt="Logo secondaire Yashiki"
            className="w-28 object-contain"
          />
          <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.24em] text-[var(--ink-muted)] md:items-end">
            <p>Yashiki Paris</p>
            <p>Ramen, sushi, assiettes du soir</p>
          </div>
        </Reveal>
      </footer>
    </main>
  );
}

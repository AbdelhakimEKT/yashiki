import Link from "next/link";

import Reveal from "@/components/reveal";
import SiteBrand from "@/components/site-brand";
import SiteNav from "@/components/site-nav";
import { menu } from "@/data/menu";

function toSectionId(value: string) {
  return value
    .toLowerCase()
    .replaceAll("&", "and")
    .replaceAll(" ", "-");
}

export default function MenuPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--cream-soft)] text-[var(--ink)]">
      <div className="pointer-events-none absolute left-[-12rem] top-24 h-[30rem] w-[30rem] rounded-full border border-[rgba(90,110,97,0.1)]" />
      <div className="pointer-events-none absolute right-[-8rem] top-[32rem] h-[26rem] w-[26rem] rounded-full border border-[rgba(90,110,97,0.09)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(90,110,97,0.1),transparent_62%)]" />

      <header className="sticky top-0 z-30 border-b border-[rgba(36,46,39,0.08)] bg-[rgba(251,247,241,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex w-[min(100%-32px,1360px)] items-center justify-between py-5 sm:w-[min(100%-48px,1360px)]">
          <SiteBrand />
          <SiteNav />
        </div>
      </header>

      <section className="mx-auto w-[min(100%-32px,1360px)] py-14 sm:w-[min(100%-48px,1360px)] lg:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.6rem] border border-[rgba(36,46,39,0.1)] bg-[linear-gradient(180deg,rgba(90,110,97,0.12)_0%,rgba(251,247,241,0.92)_100%)] px-7 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-14">
            <div className="pointer-events-none absolute right-[-5rem] top-[-4rem] h-40 w-40 rounded-full border border-[rgba(90,110,97,0.12)]" />
            <div className="pointer-events-none absolute bottom-[-7rem] left-[16%] h-48 w-48 rounded-full border border-[rgba(90,110,97,0.08)]" />

            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--sage)]">
                  Carte complète
                </p>
                <h1 className="mt-5 max-w-[8ch] text-[clamp(3.3rem,7vw,6.8rem)] leading-[0.9] tracking-[-0.06em]">
                  La carte du soir.
                </h1>
              </div>

              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <p className="max-w-2xl text-[15px] leading-8 text-[var(--ink-muted)] sm:text-base">
                  Entrees a partager, ramen, sushi, plats du soir, desserts et
                  boissons. La selection peut evoluer selon l&apos;arrivage, la
                  saison et le rythme du service.
                </p>

                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full border border-[rgba(36,46,39,0.14)] bg-[rgba(251,247,241,0.78)] px-6 py-3 text-xs uppercase tracking-[0.24em] text-[var(--ink)] transition duration-300 hover:border-[rgba(90,110,97,0.34)] hover:bg-white"
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
                  className="group flex min-h-20 flex-col justify-between rounded-[1.5rem] border border-[rgba(36,46,39,0.1)] bg-[rgba(251,247,241,0.74)] px-4 py-4 transition duration-300 hover:border-[rgba(90,110,97,0.34)] hover:bg-white"
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

      <section className="mx-auto w-[min(100%-32px,1360px)] space-y-8 pb-18 sm:w-[min(100%-48px,1360px)] lg:space-y-10 lg:pb-24">
        {menu.map((section, index) => (
          <Reveal key={section.title} delay={`${index * 70}`}>
            <section
              id={toSectionId(section.title)}
              className="relative overflow-hidden rounded-[2.4rem] border border-[rgba(36,46,39,0.1)] bg-[rgba(255,255,255,0.46)]"
            >
              <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[rgba(36,46,39,0.08)] lg:block" />
              <div className="pointer-events-none absolute right-[-2rem] top-[-2rem] h-24 w-24 rounded-full border border-[rgba(90,110,97,0.08)]" />

              <div className="grid lg:grid-cols-2">
                <div className="border-b border-[rgba(36,46,39,0.08)] px-6 py-8 sm:px-8 lg:min-h-[34rem] lg:border-b-0 lg:border-r lg:border-r-[rgba(36,46,39,0.08)] lg:px-10 lg:py-12">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--sage)]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-5 max-w-[8ch] text-[clamp(2.8rem,5vw,5rem)] leading-[0.92] tracking-[-0.06em]">
                        {section.title}
                      </h2>
                      <p className="mt-6 max-w-md text-[15px] leading-8 text-[var(--ink-muted)]">
                        {section.note}
                      </p>
                    </div>

                    <div className="mt-10 space-y-5">
                      <div className="rounded-[1.6rem] border border-[rgba(36,46,39,0.1)] bg-[rgba(251,247,241,0.72)] p-6">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--sage)]">
                          Service
                        </p>
                        <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                          Certains plats changent selon les produits recus.
                          N&apos;hesitez pas a demander les suggestions du soir.
                        </p>
                      </div>

                      <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.26em] text-[var(--ink-muted)]">
                        <span>Yashiki</span>
                        <span className="h-px w-10 bg-[rgba(36,46,39,0.16)]" />
                        <span>{section.items.length} assiettes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
                  <div className="space-y-6">
                    {section.items.map(([name, description, price], itemIndex) => (
                      <article
                        key={name}
                        className="grid grid-cols-[auto_minmax(0,1fr)_auto] gap-4 rounded-[1.4rem] border border-[rgba(36,46,39,0.08)] bg-[rgba(251,247,241,0.6)] px-4 py-5 transition duration-300 hover:border-[rgba(90,110,97,0.18)] hover:bg-[rgba(255,255,255,0.76)] sm:px-5"
                      >
                        <span className="pt-0.5 text-[10px] uppercase tracking-[0.28em] text-[var(--sage)]">
                          {String(itemIndex + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="text-lg tracking-[-0.03em] text-[var(--ink)]">
                              {name}
                            </h3>
                            <span className="hidden h-px flex-1 bg-[rgba(36,46,39,0.08)] sm:block" />
                          </div>
                          <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--ink-muted)]">
                            {description}
                          </p>
                        </div>
                        <p className="pt-0.5 text-sm uppercase tracking-[0.18em] text-[var(--sage-deep)]">
                          {price}€
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </Reveal>
        ))}
      </section>
    </main>
  );
}

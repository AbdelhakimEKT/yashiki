"use client";

import {
  startTransition,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import MenuItemCard from "@/components/menu-item-card";
import type { DietaryTag, MenuBadge, MenuSection } from "@/data/menu";

type MenuExplorerProps = {
  sections: MenuSection[];
};

type ActiveFilter = "Tout" | MenuBadge | DietaryTag;

type SectionSummary = {
  total: number;
  signatureCount: number;
  dietaryCount: number;
  highlightCount: number;
};

const filters: ActiveFilter[] = [
  "Tout",
  "Signature",
  "Le plus commandé",
  "Végétarien",
  "Sans gluten",
];
const validFilters = new Set<ActiveFilter>(filters);

function toSectionId(value: string) {
  return value.toLowerCase().replaceAll("&", "and").replaceAll(" ", "-");
}

function normalizeFilters(value: string | null): ActiveFilter[] {
  if (!value) {
    return [];
  }

  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter((entry): entry is ActiveFilter => validFilters.has(entry as ActiveFilter))
    .filter((entry) => entry !== "Tout");
}

function matchesFilter(
  badges: readonly MenuBadge[] | undefined,
  dietary: readonly DietaryTag[] | undefined,
  activeFilters: readonly ActiveFilter[],
) {
  if (activeFilters.length === 0) {
    return true;
  }

  return activeFilters.every((filter) =>
    Boolean(
      badges?.includes(filter as MenuBadge) ||
        dietary?.includes(filter as DietaryTag),
    ),
  );
}

function getSectionSummary(section: MenuSection): SectionSummary {
  return section.items.reduce<SectionSummary>(
    (summary, item) => {
      const badges = item.badges ?? [];
      const dietary = item.dietary ?? [];

      return {
        total: summary.total + 1,
        signatureCount:
          summary.signatureCount + (badges.includes("Signature") ? 1 : 0),
        dietaryCount: summary.dietaryCount + (dietary.length > 0 ? 1 : 0),
        highlightCount: summary.highlightCount + (item.highlight ? 1 : 0),
      };
    },
    {
      total: 0,
      signatureCount: 0,
      dietaryCount: 0,
      highlightCount: 0,
    },
  );
}

export default function MenuExplorer({ sections }: MenuExplorerProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryNavRef = useRef<HTMLElement | null>(null);
  const paramsString = searchParams.toString();
  const filtersFromUrl = normalizeFilters(
    searchParams.get("filters") ?? searchParams.get("filter"),
  );
  const queryFromUrl = searchParams.get("q") ?? "";

  const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>(filtersFromUrl);
  const [query, setQuery] = useState(queryFromUrl);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  useEffect(() => {
    const params = new URLSearchParams(paramsString);
    params.delete("filter");

    if (activeFilters.length === 0) {
      params.delete("filters");
    } else {
      params.set("filters", activeFilters.join(","));
    }

    if (query.trim().length === 0) {
      params.delete("q");
    } else {
      params.set("q", query.trim());
    }

    const nextParams = params.toString();

    if (nextParams === paramsString) {
      return;
    }

    router.replace(nextParams.length > 0 ? `${pathname}?${nextParams}` : pathname, {
      scroll: false,
    });
  }, [activeFilters, pathname, query, router, paramsString]);

  const filteredSections = sections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => {
        const matchesText =
          deferredQuery.length === 0
            ? true
            : [
                section.title,
                section.note,
                section.focus,
                item.name,
                item.description,
                item.highlight ?? "",
                item.badges?.join(" ") ?? "",
                item.dietary?.join(" ") ?? "",
              ]
                .join(" ")
                .toLowerCase()
                .includes(deferredQuery);

        return matchesText && matchesFilter(item.badges, item.dietary, activeFilters);
      }),
    }))
    .filter((section) => section.items.length > 0);

  const sectionIds = filteredSections.map((section) => toSectionId(section.title));
  const currentSectionId =
    activeSectionId && sectionIds.includes(activeSectionId)
      ? activeSectionId
      : sectionIds[0] ?? null;

  useEffect(() => {
    if (!currentSectionId) {
      return;
    }

    const nav = categoryNavRef.current;
    if (!nav) {
      return;
    }

    const activeLink = nav.querySelector<HTMLElement>(
      `[data-section-link="${currentSectionId}"]`,
    );
    if (!activeLink) {
      return;
    }

    const navRect = nav.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    const padding = 12;
    const alreadyVisible =
      linkRect.left >= navRect.left + padding &&
      linkRect.right <= navRect.right - padding;

    if (alreadyVisible) {
      return;
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    activeLink.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [currentSectionId]);

  useEffect(() => {
    if (sectionIds.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const currentSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (currentSection?.target.id) {
          setActiveSectionId(currentSection.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.6],
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  const visibleItems = filteredSections.reduce(
    (count, section) => count + section.items.length,
    0,
  );
  const hasActiveControls = activeFilters.length > 0 || query.trim().length > 0;

  return (
    <div className="grid min-w-0 gap-10">
      <div className="soft-panel min-w-0 p-5 sm:p-6 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <div>
            <p className="eyebrow">Explorer la carte</p>
            <h2 className="mt-4 text-[clamp(2.1rem,4.6vw,4.6rem)] leading-[0.94] tracking-[-0.05em] text-[var(--ink)]">
              Cherche vite, filtre clair, choix immédiat.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--ink-muted)] md:hidden">
              Va droit aux plats, filtre si besoin, et décide vite.
            </p>
            <p className="mt-5 hidden max-w-2xl text-[15px] leading-8 text-[var(--ink-muted)] md:block">
              La carte est courte et claire. Les signatures, les options
              végétariennes et les choix sans gluten se repèrent d’un coup
              d’œil.
            </p>
          </div>

          <label className="block">
            <span className="mb-3 block text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
              Rechercher un plat
            </span>
            <input
              type="search"
              name="menu-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="menu-input"
              placeholder="Ramen, nigiri, dessert, boisson..."
              autoComplete="off"
              enterKeyHint="search"
              inputMode="search"
              spellCheck={false}
              aria-describedby="menu-results-summary"
            />
          </label>
        </div>

        <div className="mt-6 flex min-w-0 gap-2 overflow-x-auto overflow-y-hidden pb-1 [overscroll-behavior-x:contain] [scrollbar-width:none] [-ms-overflow-style:none] sm:flex-wrap sm:overflow-visible">
          {filters.map((filter) => {
            if (filter === "Tout") {
              return null;
            }

            const active = activeFilters.includes(filter);

            return (
              <button
                key={filter}
                type="button"
                className={
                  active
                    ? "menu-filter border-transparent bg-[var(--accent)] text-[var(--paper-soft)] hover:border-transparent hover:bg-[var(--accent-deep)] hover:text-[var(--paper-soft)] focus-visible:border-transparent focus-visible:bg-[var(--accent-deep)] focus-visible:text-[var(--paper-soft)]"
                    : "menu-filter"
                }
                aria-pressed={active}
                onClick={() => {
                  startTransition(() => {
                    setActiveFilters((current) =>
                      current.includes(filter)
                        ? current.filter((entry) => entry !== filter)
                        : [...current, filter],
                    );
                  });
                }}
              >
                {filter}
              </button>
            );
          })}
          {hasActiveControls ? (
            <button
              type="button"
              className="menu-filter"
              onClick={() => {
                startTransition(() => {
                  setActiveFilters([]);
                  setQuery("");
                });
              }}
            >
              Réinitialiser
            </button>
          ) : null}
        </div>

        <div
          id="menu-results-summary"
          aria-live="polite"
          className="mt-6 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-[var(--ink-muted)]"
        >
          <span>{visibleItems} plats visibles</span>
          <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
          <span>{filteredSections.length} sections actives</span>
          {activeFilters.length > 0 ? (
            <>
              <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
              <span>Filtres : {activeFilters.join(" · ")}</span>
            </>
          ) : null}
        </div>
      </div>

      <nav
        aria-label="Sections de la carte"
        className="sticky top-3 z-20 flex min-w-0 max-w-full gap-3 overflow-x-auto overflow-y-hidden rounded-[1.35rem] bg-[rgba(248,241,232,0.78)] px-2 py-2 text-[11px] uppercase tracking-[0.26em] backdrop-blur-xl [overscroll-behavior-x:contain] [scrollbar-width:none] [-ms-overflow-style:none] sm:static sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none"
        ref={categoryNavRef}
      >
        {filteredSections.map((section, index) => (
          <a
            key={section.title}
            href={`#${toSectionId(section.title)}`}
            data-section-link={toSectionId(section.title)}
            aria-current={
              currentSectionId === toSectionId(section.title) ? "true" : undefined
            }
            className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-3 transition duration-300 ${
              currentSectionId === toSectionId(section.title)
                ? "border-[rgba(161,45,39,0.16)] bg-[rgba(161,45,39,0.08)] text-[var(--accent-deep)] shadow-[inset_0_0_0_1px_rgba(161,45,39,0.04)]"
                : "border-[var(--line)] bg-[rgba(248,241,232,0.58)] hover:border-[rgba(24,17,13,0.24)] hover:bg-[rgba(248,241,232,0.88)]"
            }`}
          >
            {String(index + 1).padStart(2, "0")} · {section.title}
          </a>
        ))}
      </nav>

      {filteredSections.length === 0 ? (
        <div className="soft-panel p-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
            Aucun résultat
          </p>
          <p className="mt-4 text-lg leading-8 text-[var(--ink-muted)]">
            Essaie un autre mot-clé ou enlève un filtre pour revoir la carte.
          </p>
        </div>
      ) : null}

      <div className="grid min-w-0 gap-14">
        {filteredSections.map((section, index) => (
          <section
            key={section.title}
            id={toSectionId(section.title)}
            data-active={currentSectionId === toSectionId(section.title)}
            className={`section-visibility border-t border-[var(--line)] pt-10 first:border-t-0 first:pt-0 ${
              index % 2 === 0
                ? "bg-[linear-gradient(90deg,rgba(248,241,232,0.42)_0%,rgba(248,241,232,0.1)_55%,transparent_100%)]"
                : "bg-[linear-gradient(90deg,rgba(248,241,232,0.26)_0%,rgba(248,241,232,0.08)_60%,transparent_100%)]"
            }`}
          >
            {(() => {
              const summary = getSectionSummary(section);

              return (
                <div className="grid min-w-0 gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
                  <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
                    <div
                      className={`max-w-md transition duration-300 ${
                        currentSectionId === toSectionId(section.title)
                          ? "opacity-100"
                          : "opacity-[0.92]"
                      }`}
                    >
                      <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
                      <h3 className="mt-3 text-[clamp(2rem,9vw,4.5rem)] leading-[0.94] tracking-[-0.05em] text-[var(--ink)]">
                        {section.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)] lg:text-[15px] lg:leading-8">
                        {section.note}
                      </p>
                      <p className="mt-4 hidden text-sm leading-7 text-[var(--accent-deep)] lg:block">
                        {section.focus}
                      </p>
                    </div>

                    <div className="detail-card mt-8 hidden p-5 lg:block">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
                        Carte tenue
                      </p>
                      <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                        <div>
                          <p className="text-[2rem] leading-none tracking-[-0.06em] text-[var(--ink)]">
                            {summary.total}
                          </p>
                          <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                            Plats choisis
                          </p>
                        </div>
                        <div>
                          <p className="text-[2rem] leading-none tracking-[-0.06em] text-[var(--ink)]">
                            {summary.signatureCount}
                          </p>
                          <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                            Signatures
                          </p>
                        </div>
                        <div>
                          <p className="text-[2rem] leading-none tracking-[-0.06em] text-[var(--ink)]">
                            {summary.dietaryCount}
                          </p>
                          <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                            Repères alimentaires
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 hidden max-w-md border-l border-[rgba(161,45,39,0.22)] pl-4 lg:block">
                      <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--accent)]">
                        Lecture rapide
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--ink-muted)]">
                        Quelques plats, bien choisis. On repère vite ce qu’on
                        vient chercher.
                      </p>
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="mb-4 flex min-w-0 flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                      <span>{section.title}</span>
                      <span className="h-px flex-1 bg-[var(--line)]" />
                      <span>{summary.total} plats</span>
                      <span className="hidden sm:inline">·</span>
                      <span className="hidden sm:inline">{summary.signatureCount} signatures</span>
                      <span className="hidden sm:inline">·</span>
                      <span className="hidden sm:inline">{summary.highlightCount} repères</span>
                    </div>

                    {section.items.map((item, itemIndex) => (
                      <MenuItemCard
                        key={item.name}
                        item={item}
                        index={itemIndex}
                      />
                    ))}
                  </div>
                </div>
              );
            })()}
          </section>
        ))}
      </div>
    </div>
  );
}

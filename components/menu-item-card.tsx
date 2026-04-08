import Image from "next/image";

import type { MenuItem } from "@/data/menu";

type MenuItemCardProps = {
  item: MenuItem;
  index: number;
};

export default function MenuItemCard({ item, index }: MenuItemCardProps) {
  const reverseLayout = index % 2 === 1;

  return (
    <article className="group grid gap-5 border-t border-[var(--line)] py-7 first:border-t-0 first:pt-0 lg:items-start lg:gap-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
      <div className={`min-w-0 ${reverseLayout ? "lg:order-2" : "lg:order-1"}`}>
        <div className="flex flex-wrap items-center gap-2">
          {item.highlight ? (
            <span className="rounded-full border border-[rgba(161,45,39,0.16)] bg-[rgba(161,45,39,0.08)] px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[var(--accent-deep)]">
              {item.highlight}
            </span>
          ) : null}
          {item.badges?.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-[var(--line)] px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[var(--ink-muted)]"
            >
              {badge}
            </span>
          ))}
          {item.dietary?.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[rgba(36,68,61,0.16)] bg-[rgba(36,68,61,0.08)] px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[var(--forest)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-start justify-between gap-4 border-b border-[var(--line)] pb-4">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 pr-4 text-[clamp(1.8rem,2.9vw,2.55rem)] leading-[0.96] tracking-[-0.05em] text-[var(--ink)]">
              {item.name}
            </h3>
          </div>
          <p className="shrink-0 text-[1.15rem] font-medium leading-none tracking-[-0.04em] text-[var(--accent-deep)] sm:text-[1.3rem]">
            {item.price}€
          </p>
        </div>

        <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[var(--ink-muted)]">
          {item.description}
        </p>
      </div>

      {item.image ? (
        <div
          className={`relative overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[rgba(248,241,232,0.62)] ${
            reverseLayout ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <Image
            src={item.image}
            alt={item.imageAlt ?? item.name}
            className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 16rem, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,15,13,0.02)_0%,rgba(20,15,13,0.08)_45%,rgba(20,15,13,0.68)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[rgba(248,241,232,0.74)]">
              {item.imageCaption ?? "Aperçu du plat"}
            </p>
          </div>
        </div>
      ) : null}
    </article>
  );
}

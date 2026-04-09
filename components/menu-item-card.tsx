import MenuItemLightbox from "@/components/menu-item-lightbox";
import type { MenuItem } from "@/data/menu";

type MenuItemCardProps = {
  item: MenuItem;
  index: number;
};

export default function MenuItemCard({ item, index }: MenuItemCardProps) {
  const reverseLayout = index % 2 === 1;
  const hasImage = Boolean(item.image);

  return (
    <article
      className={`group grid gap-4 border-t border-[var(--line)] py-5 first:border-t-0 first:pt-0 lg:items-start lg:gap-8 ${
        hasImage
          ? "grid-cols-[minmax(0,1fr)_5.75rem] lg:grid-cols-[minmax(0,1fr)_16rem]"
          : "grid-cols-1"
      }`}
    >
      <div className={`min-w-0 ${reverseLayout ? "lg:order-2" : "lg:order-1"}`}>
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {item.highlight ? (
            <span className="rounded-full border border-[rgba(161,45,39,0.16)] bg-[rgba(161,45,39,0.08)] px-2.5 py-1.5 text-[9px] uppercase tracking-[0.2em] text-[var(--accent-deep)] sm:px-3 sm:py-2 sm:text-[10px]">
              {item.highlight}
            </span>
          ) : null}
          {item.badges?.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-[var(--line)] px-2.5 py-1.5 text-[9px] uppercase tracking-[0.2em] text-[var(--ink-muted)] sm:px-3 sm:py-2 sm:text-[10px]"
            >
              {badge}
            </span>
          ))}
          {item.dietary?.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[rgba(36,68,61,0.16)] bg-[rgba(36,68,61,0.08)] px-2.5 py-1.5 text-[9px] uppercase tracking-[0.2em] text-[var(--forest)] sm:px-3 sm:py-2 sm:text-[10px]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-3 flex items-start justify-between gap-3 border-b border-[var(--line)] pb-3 sm:mt-4 sm:gap-4 sm:pb-4">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 pr-3 text-[clamp(1.45rem,7vw,1.9rem)] leading-[0.98] tracking-[-0.045em] text-[var(--ink)] sm:pr-4 lg:text-[clamp(1.8rem,2.9vw,2.55rem)]">
              {item.name}
            </h3>
          </div>
          <p className="shrink-0 pt-0.5 text-[1rem] font-medium leading-none tracking-[-0.03em] text-[var(--accent-deep)] sm:text-[1.15rem] lg:text-[1.3rem]">
            {item.price}€
          </p>
        </div>

        <p className="mt-3 max-w-2xl text-[14px] leading-6 text-[var(--ink-muted)] sm:mt-4 sm:text-[15px] sm:leading-7 lg:leading-8">
          {item.description}
        </p>
      </div>

      {item.image ? (
        <MenuItemLightbox
          image={item.image}
          alt={item.imageAlt ?? item.name}
          caption={item.imageCaption ?? "Aperçu du plat"}
          className={`relative overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[rgba(248,241,232,0.62)] ${
            reverseLayout ? "lg:order-1" : "lg:order-2"
          }`}
          imageClassName="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.03] lg:aspect-[4/3]"
          sizes="(min-width: 1024px) 16rem, 5.75rem"
        />
      ) : null}
    </article>
  );
}

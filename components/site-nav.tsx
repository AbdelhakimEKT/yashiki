import Link from "next/link";

type SiteNavProps = {
  light?: boolean;
};

export default function SiteNav({ light = false }: SiteNavProps) {
  const shell = light
    ? "border border-[rgba(246,241,232,0.16)] bg-[rgba(246,241,232,0.06)] text-[rgba(246,241,232,0.86)]"
    : "border border-[rgba(36,46,39,0.1)] bg-[rgba(251,247,241,0.72)] text-[var(--ink-muted)]";

  const hover = light ? "hover:text-white" : "hover:text-[var(--ink)]";

  return (
    <nav
      className={`hidden items-center gap-8 rounded-full px-5 py-3 text-[11px] uppercase tracking-[0.28em] backdrop-blur-md md:flex ${shell}`}
    >
      <Link href="/#ambiance" className={`transition ${hover}`}>
        Ambiance
      </Link>
      <Link href="/menu" className={`transition ${hover}`}>
        Carte
      </Link>
      <Link href="/#brand" className={`transition ${hover}`}>
        Maison
      </Link>
      <Link href="/#contact" className={`transition ${hover}`}>
        Contact
      </Link>
    </nav>
  );
}

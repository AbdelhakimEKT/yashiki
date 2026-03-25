import Link from "next/link";

export default function MenuPreviewLink() {
  return (
    <Link
      href="/menu"
      className="group inline-flex items-center gap-3 rounded-full border border-[rgba(36,46,39,0.14)] bg-[rgba(251,247,241,0.72)] px-6 py-3 text-xs uppercase tracking-[0.24em] text-[var(--ink)] transition duration-300 hover:border-[rgba(90,110,97,0.42)] hover:bg-[rgba(90,110,97,0.08)]"
    >
      <span>Voir la carte complète</span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--sage-deep)] text-[10px] text-white transition duration-300 group-hover:bg-[var(--ink)]">
        +
      </span>
    </Link>
  );
}

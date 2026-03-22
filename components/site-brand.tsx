import Image from "next/image";
import Link from "next/link";

import logoSecondary from "@/imagee/logo-secondary.png";

type SiteBrandProps = {
  light?: boolean;
};

export default function SiteBrand({ light = false }: SiteBrandProps) {
  const tone = light ? "opacity-92" : "opacity-88";
  const textTone = light
    ? "text-[rgba(246,241,232,0.88)]"
    : "text-[var(--ink)]";

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 rounded-full transition hover:opacity-100"
      aria-label="Retour a l'accueil Yashiki"
    >
      <Image
        src={logoSecondary}
        alt="Yashiki"
        className={`h-auto w-22 object-contain sm:w-24 ${tone}`}
        priority
      />
      <span
        className={`text-[11px] uppercase tracking-[0.3em] ${textTone}`}
      >
        Yashiki
      </span>
    </Link>
  );
}

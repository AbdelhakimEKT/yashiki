import Image from "next/image";
import Link from "next/link";

import logoSecondary from "@/imagee/logo-secondary.png";

type SiteBrandProps = {
  light?: boolean;
  hideLogo?: boolean;
};

export default function SiteBrand({
  light = false,
  hideLogo = false,
}: SiteBrandProps) {
  const labelTone = light ? "text-[rgba(248,241,232,0.95)]" : "text-[var(--ink)]";
  const metaTone = light
    ? "text-[rgba(248,241,232,0.62)]"
    : "text-[rgba(93,75,60,0.8)]";
  const logoFx = light ? "brightness-[1.1] drop-shadow-[0_10px_24px_rgba(0,0,0,0.34)]" : "";

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 transition hover:opacity-100"
      aria-label="Retour à l'accueil Yashiki"
    >
      {hideLogo ? null : (
        <Image
          src={logoSecondary}
          alt="Yashiki"
          className={`h-auto w-[4.8rem] object-contain sm:w-[5.3rem] ${logoFx}`}
          priority
        />
      )}
      <div className="space-y-1">
        <span
          className={`block text-[11px] uppercase tracking-[0.34em] ${labelTone}`}
        >
          Yashiki
        </span>
        <span className={`block text-[10px] uppercase tracking-[0.28em] ${metaTone}`}>
          Paris 4e
        </span>
      </div>
    </Link>
  );
}

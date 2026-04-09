"use client";

import { useState } from "react";

import { restaurant } from "@/data/restaurant";

type AddressActionsProps = {
  light?: boolean;
};

export default function AddressActions({ light = false }: AddressActionsProps) {
  const [copied, setCopied] = useState(false);

  const baseClass = light ? "quick-action quick-action-light" : "quick-action";

  return (
    <div className="flex flex-wrap gap-2">
      <a href={restaurant.phoneHref} className={baseClass}>
        Appeler
      </a>
      <a
        href={restaurant.googleMapsHref}
        target="_blank"
        rel="noreferrer"
        className={baseClass}
      >
        Itinéraire
      </a>
      <button
        type="button"
        className={baseClass}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(restaurant.addressLine);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
          } catch {
            setCopied(false);
          }
        }}
      >
        {copied ? "Adresse copiée" : "Copier l’adresse"}
      </button>
    </div>
  );
}

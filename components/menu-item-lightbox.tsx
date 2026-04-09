"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type MenuItemLightboxProps = {
  image: StaticImageData;
  alt: string;
  caption: string;
  className?: string;
  imageClassName?: string;
  sizes: string;
};

export default function MenuItemLightbox({
  image,
  alt,
  caption,
  className = "",
  imageClassName = "",
  sizes,
}: MenuItemLightboxProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`relative z-10 overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[rgba(248,241,232,0.62)] text-left [touch-action:manipulation] ${className}`}
        aria-label={`Agrandir l’image du plat ${alt}`}
        onClick={() => setOpen(true)}
      >
        <Image
          src={image}
          alt={alt}
          className={imageClassName}
          sizes={sizes}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,15,13,0.02)_0%,rgba(20,15,13,0.08)_45%,rgba(20,15,13,0.68)_100%)]" />
        <div className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(248,241,232,0.18)] bg-[rgba(20,15,13,0.46)] text-[rgba(248,241,232,0.88)] sm:hidden">
          +
        </div>
        <div className="absolute inset-x-0 bottom-0 hidden p-4 sm:block">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[rgba(248,241,232,0.74)]">
            {caption}
          </p>
        </div>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(20,15,13,0.88)] p-5 backdrop-blur-md [overscroll-behavior:contain]"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-[34rem] overflow-hidden rounded-[1.6rem] border border-[rgba(248,241,232,0.12)] bg-[rgba(20,15,13,0.96)] shadow-[0_30px_80px_rgba(0,0,0,0.36)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(248,241,232,0.14)] bg-[rgba(20,15,13,0.56)] text-[var(--paper-soft)] transition duration-300 hover:bg-[rgba(20,15,13,0.8)]"
              aria-label="Fermer l’image agrandie"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <Image
              src={image}
              alt={alt}
              className="max-h-[75vh] w-full object-contain bg-[rgba(20,15,13,0.98)]"
              sizes="90vw"
            />
            <div className="border-t border-[rgba(248,241,232,0.08)] px-5 py-4">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[rgba(248,241,232,0.62)]">
                {caption}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

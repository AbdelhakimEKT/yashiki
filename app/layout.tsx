import type { Metadata } from "next";

import RestaurantSchema from "@/components/restaurant-schema";
import pexelsJapaneseInterior from "@/imagee/pexels-japanese-interior.jpg";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const socialImage = siteUrl
  ? new URL(pexelsJapaneseInterior.src, siteUrl).toString()
  : pexelsJapaneseInterior.src;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  applicationName: "Yashiki Paris",
  title: {
    default: "Yashiki Paris",
    template: "%s | Yashiki Paris",
  },
  description:
    "Restaurant japonais contemporain à Paris. Bouillons lents, sushi minute, comptoir, service du soir et carte pensée pour donner faim.",
  keywords: [
    "restaurant japonais paris",
    "ramen paris",
    "sushi paris 4",
    "restaurant japonais contemporain",
    "yashiki paris",
  ],
  alternates: siteUrl
    ? {
        canonical: siteUrl,
      }
    : undefined,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Yashiki Paris",
    description:
      "Restaurant japonais contemporain à Paris. Bouillons lents, sushi minute, comptoir, service du soir et carte pensée pour donner faim.",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: socialImage,
        alt: "Intérieur chaleureux de Yashiki Paris",
      },
    ],
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Yashiki Paris",
    description:
      "Restaurant japonais contemporain à Paris. Bouillons lents, sushi minute, comptoir et réservation simple.",
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <a href="#main-content" className="skip-link">
          Aller au contenu
        </a>
        <RestaurantSchema />
        {children}
      </body>
    </html>
  );
}

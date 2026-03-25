import type { Metadata } from "next";

import RestaurantSchema from "@/components/restaurant-schema";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
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
  openGraph: {
    title: "Yashiki Paris",
    description:
      "Restaurant japonais contemporain à Paris. Bouillons lents, sushi minute, comptoir, service du soir et carte pensée pour donner faim.",
    locale: "fr_FR",
    type: "website",
    ...(siteUrl ? { url: siteUrl } : {}),
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
        <RestaurantSchema />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yashiki Paris",
  description:
    "Restaurant japonais contemporain à Paris. Bouillons lents, sushi minute, comptoir, service du soir et carte pensée pour donner faim.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

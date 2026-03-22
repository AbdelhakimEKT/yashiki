import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YASHIKI",
  description: "Restaurant japonais contemporain au minimalisme calme.",
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

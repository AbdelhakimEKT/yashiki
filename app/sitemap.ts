import type { MetadataRoute } from "next";

import { restaurant } from "@/data/restaurant";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

const routes = [
  "/",
  restaurant.menuPath,
  restaurant.maisonPath,
  restaurant.reservationPath,
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}

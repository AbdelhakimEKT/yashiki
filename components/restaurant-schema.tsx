import { restaurant } from "@/data/restaurant";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: `${restaurant.name} ${restaurant.city}`,
  servesCuisine: ["Japanese", "Ramen", "Sushi"],
  priceRange: restaurant.priceRange,
  telephone: restaurant.phoneDisplay,
  email: restaurant.email,
  acceptsReservations: true,
  address: {
    "@type": "PostalAddress",
    streetAddress: "16 rue des Archives",
    postalCode: "75004",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
      opens: "18:30",
      closes: "22:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Friday", "Saturday", "Sunday"],
      opens: "12:00",
      closes: "14:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Friday", "Saturday", "Sunday"],
      opens: "18:30",
      closes: "23:00",
    },
  ],
  ...(siteUrl
    ? {
        url: siteUrl,
        hasMenu: `${siteUrl}${restaurant.menuPath}`,
      }
    : {}),
};

export default function RestaurantSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

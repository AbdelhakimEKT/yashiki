import menuSashimiPremium from "@/imagee/menu-sashimi-premium.jpg";
import pexelsJapaneseInterior from "@/imagee/pexels-japanese-interior.jpg";
import pexelsRamenBowl from "@/imagee/pexels-ramen-bowl.jpg";

import { menu } from "@/data/menu";
import { restaurant } from "@/data/restaurant";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

const dayMap = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
} as const;

const dietMap = {
  "Sans gluten": "https://schema.org/GlutenFreeDiet",
  Végétarien: "https://schema.org/VegetarianDiet",
} as const;

const menuSchema = {
  "@type": "Menu",
  name: `Carte ${restaurant.name}`,
  inLanguage: "fr-FR",
  ...(siteUrl
    ? {
        url: `${siteUrl}${restaurant.menuPath}`,
      }
    : {}),
  hasMenuSection: menu.map((section) => ({
    "@type": "MenuSection",
    name: section.title,
    description: section.note,
    hasMenuItem: section.items.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      description: item.description,
      ...(item.dietary?.length
        ? {
            suitableForDiet: item.dietary.map((tag) => dietMap[tag]),
          }
        : {}),
      offers: {
        "@type": "Offer",
        price: item.price.toString(),
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
    })),
  })),
};

const images = [pexelsJapaneseInterior, pexelsRamenBowl, menuSashimiPremium]
  .map((image) => image.src)
  .map((src) => (siteUrl ? `${siteUrl}${src}` : src));

const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: `${restaurant.name} ${restaurant.city}`,
  description:
    "Restaurant japonais contemporain à Paris avec carte interactive, horaires clairs et réservation simple.",
  servesCuisine: ["Japanese", "Ramen", "Sushi"],
  priceRange: restaurant.priceRange,
  telephone: restaurant.phoneDisplay,
  email: restaurant.email,
  image: images,
  areaServed: restaurant.areaServed,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: restaurant.ratingValue,
    reviewCount: restaurant.ratingCount,
  },
  review: restaurant.reviewSamples.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.name,
    },
    publisher: {
      "@type": "Organization",
      name: review.source,
    },
    reviewBody: review.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
    },
  })),
  acceptsReservations: siteUrl
    ? `${siteUrl}${restaurant.reservationPath}`
    : restaurant.phoneHref,
  address: {
    "@type": "PostalAddress",
    streetAddress: "16 rue des Archives",
    postalCode: "75004",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  hasMap: restaurant.googleMapsHref,
  potentialAction: siteUrl
    ? {
        "@type": "ReserveAction",
        target: `${siteUrl}${restaurant.reservationPath}`,
      }
    : undefined,
  openingHoursSpecification: restaurant.schedule.flatMap((day) =>
    day.ranges.map((range) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [dayMap[day.key]],
      opens: range.open,
      closes: range.close,
    })),
  ),
  hasMenu: menuSchema,
  ...(siteUrl
    ? {
        url: siteUrl,
        mainEntityOfPage: siteUrl,
      }
    : {}),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: restaurant.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function RestaurantSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export type ServiceWindow = {
  open: string;
  close: string;
};

export type ScheduleDay = {
  key:
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday";
  label: string;
  shortLabel: string;
  ranges: readonly ServiceWindow[];
};

export const restaurant = {
  name: "Yashiki",
  city: "Paris",
  district: "Paris 4e",
  cuisine: "Restaurant japonais contemporain",
  tagline: "Ramen, sushi et assiettes du soir",
  promise: "Le Marais passe en mode nuit japonaise.",
  addressLine: "16 rue des Archives, 75004 Paris",
  phoneDisplay: "+33 1 80 00 12 24",
  phoneHref: "tel:+33180001224",
  email: "reservation@yashiki.fr",
  emailHref: "mailto:reservation@yashiki.fr",
  googleMapsHref:
    "https://www.google.com/maps/search/?api=1&query=16+rue+des+Archives%2C+75004+Paris",
  googleMapsEmbedSrc:
    "https://www.google.com/maps?q=16+rue+des+Archives%2C+75004+Paris&z=15&output=embed",
  priceRange: "€€€",
  ratingValue: 4.8,
  ratingCount: 127,
  reservationsLabel: "Réservation vivement conseillée du jeudi au samedi",
  counterSeats: "8 places seulement",
  neighborhood: "Le Marais · Hôtel de Ville",
  areaServed: "Paris centre",
  menuPath: "/menu",
  maisonPath: "/maison",
  reservationPath: "/reservation",
  trustMetrics: [
    {
      value: "4,8/5",
      label: "avis Google",
    },
    {
      value: "8",
      label: "places au comptoir",
    },
    {
      value: "23h",
      label: "jusqu’au dimanche soir",
    },
  ],
  services: [
    "Bouillons montés chaque jour",
    "Riz tiède, coupe minute, carte courte",
    "Service du soir pensé pour revenir souvent",
  ],
  schedule: [
    {
      key: "monday",
      label: "Lundi",
      shortLabel: "Lun",
      ranges: [{ open: "18:30", close: "22:30" }],
    },
    {
      key: "tuesday",
      label: "Mardi",
      shortLabel: "Mar",
      ranges: [{ open: "18:30", close: "22:30" }],
    },
    {
      key: "wednesday",
      label: "Mercredi",
      shortLabel: "Mer",
      ranges: [{ open: "18:30", close: "22:30" }],
    },
    {
      key: "thursday",
      label: "Jeudi",
      shortLabel: "Jeu",
      ranges: [
        { open: "12:00", close: "14:30" },
        { open: "18:30", close: "23:00" },
      ],
    },
    {
      key: "friday",
      label: "Vendredi",
      shortLabel: "Ven",
      ranges: [
        { open: "12:00", close: "14:30" },
        { open: "18:30", close: "23:00" },
      ],
    },
    {
      key: "saturday",
      label: "Samedi",
      shortLabel: "Sam",
      ranges: [
        { open: "12:00", close: "14:30" },
        { open: "18:30", close: "23:00" },
      ],
    },
    {
      key: "sunday",
      label: "Dimanche",
      shortLabel: "Dim",
      ranges: [
        { open: "12:00", close: "14:30" },
        { open: "18:30", close: "23:00" },
      ],
    },
  ] satisfies readonly ScheduleDay[],
  openingHours: [
    {
      days: "Lundi au mercredi",
      hours: "18h30 — 22h30",
    },
    {
      days: "Jeudi au dimanche",
      hours: "12h00 — 14h30 · 18h30 — 23h00",
    },
  ],
  practicalFacts: [
    {
      label: "Adresse",
      value: "16 rue des Archives, 75004 Paris",
    },
    {
      label: "Cuisine",
      value: "Ramen, sushi, grillades et desserts du soir",
    },
    {
      label: "Ambiance",
      value: "Salle feutrée, comptoir vivant, service calme",
    },
  ],
  experiencePillars: [
    {
      title: "Coupe minute",
      copy: "Les pièces partent quand le riz, le geste et la température sont au bon niveau.",
    },
    {
      title: "Bouillon long",
      copy: "Les ramen gardent de la densité sans devenir lourds, même au dernier service.",
    },
    {
      title: "Salle lisible",
      copy: "Lumière chaude, circulation simple, repères clairs et réservation facile sur mobile.",
    },
  ],
  storytelling: [
    "Yashiki a été pensé comme une maison de nuit: un restaurant japonais qui donne faim en un regard, puis rassure par la clarté de sa carte et la précision du service.",
    "L’esthétique puise dans le Japon des comptoirs, des matières et des gestes. La structure, elle, reste pensée pour un public français: plus d’air, plus de repères, plus de lisibilité à chaque étape.",
  ],
  sourcingNotes: [
    "Poissons selon arrivage et détails d’ingrédients donnés avant validation.",
    "Options végétariennes visibles sur la carte plutôt que cachées dans un PDF.",
    "Allergènes, groupes et demandes particulières traités dès la réservation.",
  ],
  guestHighlights: [
    "Salle calme",
    "Comptoir visible",
    "Bouillons nets",
  ],
  reviewSamples: [
    {
      name: "Camille R.",
      source: "Google",
      quote:
        "Adresse calme, service net et vrai plaisir sur le comptoir. On réserve surtout pour la régularité.",
    },
    {
      name: "Nathan B.",
      source: "Google",
      quote:
        "Bouillon dense, coupe minute visible, dîner sans surcharge. Le genre d’endroit où l’on revient vite.",
    },
    {
      name: "Sarah T.",
      source: "Google",
      quote:
        "Le site donne envie, mais la salle tient la promesse: précise, chaleureuse et simple à réserver.",
    },
  ],
  reservationSteps: [
    {
      title: "Choisir le bon canal",
      copy: "Téléphone pour aller vite, email pour les groupes, allergies ou demandes particulières.",
    },
    {
      title: "Préciser le service",
      copy: "Déjeuner du week-end, dîner feutré ou places au comptoir: l’équipe ajuste mieux si l’intention est claire.",
    },
    {
      title: "Valider les détails",
      copy: "Nombre de personnes, allergies, préférence de salle et timing sont confirmés avant l’arrivée.",
    },
  ],
  faq: [
    {
      question: "Faut-il réserver ?",
      answer:
        "Oui, surtout pour le service du soir du jeudi au samedi. Les places au comptoir partent aussi rapidement.",
    },
    {
      question: "Avez-vous des options végétariennes ?",
      answer:
        "Oui. Plusieurs assiettes et un ramen végétal figurent à la carte, et l'équipe peut te guider selon le moment.",
    },
    {
      question: "Peut-on venir en groupe ?",
      answer:
        "Oui, mais mieux vaut écrire ou appeler en amont pour que l'équipe puisse organiser la table dans de bonnes conditions.",
    },
    {
      question: "Comment signaler une allergie ou une contrainte alimentaire ?",
      answer:
        "Le plus efficace est de le préciser au moment de la réservation, puis de le rappeler à l'arrivée en salle.",
    },
    {
      question: "Avez-vous des options sans gluten ?",
      answer:
        "Oui. Plusieurs plats et desserts peuvent convenir, et l'équipe indique les options les plus simples selon le service du jour.",
    },
  ],
} as const;

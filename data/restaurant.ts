export const restaurant = {
  name: "Yashiki",
  city: "Paris",
  district: "Paris 4e",
  cuisine: "Restaurant japonais contemporain",
  tagline: "Ramen, sushi et assiettes du soir",
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
  reservationsLabel: "Réservation conseillée du jeudi au samedi",
  counterSeats: "8 places au comptoir",
  neighborhood: "Le Marais · Hôtel de Ville",
  menuPath: "/menu",
  maisonPath: "/maison",
  reservationPath: "/reservation",
  services: [
    "Bouillons montés chaque jour",
    "Riz tiède, coupe minute, carte courte",
    "Service du soir pensé pour revenir souvent",
  ],
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
      value: "Ramen, sushi, assiettes du soir",
    },
    {
      label: "Comptoir",
      value: "8 places pour suivre le service du soir",
    },
  ],
  guestHighlights: [
    "Salle calme",
    "Comptoir visible",
    "Bouillons nets",
  ],
  reservationSteps: [
    {
      title: "Appeler le restaurant",
      copy: "Le plus simple pour réserver rapidement, confirmer un créneau ou demander une table au comptoir.",
    },
    {
      title: "Écrire à l'équipe",
      copy: "Idéal pour les groupes, demandes particulières, allergies ou privatisations ponctuelles.",
    },
    {
      title: "Prévoir le bon moment",
      copy: "Le service du soir est le plus demandé, surtout du jeudi au samedi. Réserve dès que tu connais ta date.",
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
  ],
} as const;

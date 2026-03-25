export type MenuBadge =
  | "Signature"
  | "Le plus commandé"
  | "Végétarien"
  | "Suggestion du chef";

export type MenuItem = {
  name: string;
  description: string;
  price: number;
  badges?: MenuBadge[];
};

export type MenuSection = {
  title: string;
  note: string;
  focus: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    title: "Entrées",
    note: "Assiettes d'ouverture, fritures légères et préparations servies à partager.",
    focus: "À partager dès l'arrivée, avec un rythme pensé pour ouvrir l'appétit sans alourdir la table.",
    items: [
      {
        name: "Tataki de sériole",
        description: "Ponzu clair, radis glaçons, ciboulette.",
        price: 16,
        badges: ["Signature"],
      },
      {
        name: "Gyoza grillés",
        description: "Poulet fermier, gingembre frais, sauce légère.",
        price: 14,
        badges: ["Le plus commandé"],
      },
      {
        name: "Aubergine miso",
        description: "Laquée minute, sésame blond, shiso.",
        price: 13,
        badges: ["Végétarien"],
      },
      {
        name: "Tartare de thon",
        description: "Nori croustillante, concombre, wasabi doux.",
        price: 18,
      },
    ],
  },
  {
    title: "Ramen",
    note: "Bouillons cuits longuement, nouilles fermes et garnitures préparées chaque jour.",
    focus: "Le cœur de la maison: bols denses, précis, servis quand la température et l'équilibre sont justes.",
    items: [
      {
        name: "Tonkotsu Yashiki",
        description: "Bouillon long, poitrine confite, œuf mariné.",
        price: 23,
        badges: ["Signature", "Le plus commandé"],
      },
      {
        name: "Shoyu fumé",
        description: "Volaille rôtie, tare brun, huile aromatique.",
        price: 22,
        badges: ["Suggestion du chef"],
      },
      {
        name: "Miso végétal",
        description: "Champignons, maïs rôti, beurre miso.",
        price: 21,
        badges: ["Végétarien"],
      },
      {
        name: "Tsukemen du soir",
        description: "Nouilles fermes, bouillon réduit, citron.",
        price: 24,
      },
    ],
  },
  {
    title: "Sushi & Sashimi",
    note: "Poissons selon arrivage, riz tiède et coupe minute au moment du service.",
    focus: "Une lecture nette du produit et du geste, avec peu d'effet et beaucoup de précision dans la coupe.",
    items: [
      {
        name: "Assortiment du soir",
        description: "Sélection du chef en 8 pièces.",
        price: 32,
        badges: ["Signature"],
      },
      {
        name: "Nigiri signature",
        description: "Thon, sériole, daurade, saumon.",
        price: 28,
        badges: ["Le plus commandé"],
      },
      {
        name: "Maki crabe",
        description: "Avocat, concombre, mayonnaise légère.",
        price: 18,
      },
      {
        name: "Sashimi premium",
        description: "Coupe épaisse, ponzu transparent.",
        price: 29,
        badges: ["Suggestion du chef"],
      },
    ],
  },
  {
    title: "Plats",
    note: "Grillades, fritures et assiettes chaudes pour prolonger le service du soir.",
    focus: "Une suite plus généreuse pour les tables qui s'installent, avec des cuissons franches et des sauces tenues.",
    items: [
      {
        name: "Saumon laqué",
        description: "Riz vinaigré, jeunes pousses, jus soja.",
        price: 26,
      },
      {
        name: "Poulet karaage",
        description: "Panure fine, citron, pickles maison.",
        price: 24,
        badges: ["Le plus commandé"],
      },
      {
        name: "Bœuf au binchotan",
        description: "Cuisson vive, légumes braisés, tare.",
        price: 31,
        badges: ["Suggestion du chef"],
      },
      {
        name: "Tofu grillé",
        description: "Bouillon dashi clair, poireau brûlé, sésame.",
        price: 22,
        badges: ["Végétarien"],
      },
    ],
  },
  {
    title: "Desserts",
    note: "Desserts légers, textures souples et finales nettes en fin de repas.",
    focus: "Des fins de repas courtes, propres, et toujours dans la même ligne de précision que le reste du service.",
    items: [
      {
        name: "Mochi glacé",
        description: "Sésame noir ou matcha.",
        price: 9,
      },
      {
        name: "Flan hōjicha",
        description: "Crème soyeuse, caramel thé grillé.",
        price: 11,
        badges: ["Signature"],
      },
      {
        name: "Agrumes givrés",
        description: "Yuzu, pamplemousse, sirop léger.",
        price: 10,
      },
      {
        name: "Biscuit noir",
        description: "Ganache douce, sarrasin, sel fin.",
        price: 12,
      },
    ],
  },
  {
    title: "Boissons",
    note: "Saké, cocktails, thés et verres choisis pour accompagner la cuisine sans lourdeur.",
    focus: "Une sélection pensée pour suivre la table plutôt que prendre le dessus, du premier verre au dernier thé.",
    items: [
      {
        name: "Saké Junmai",
        description: "Verre ou carafe selon sélection.",
        price: 12,
        badges: ["Suggestion du chef"],
      },
      {
        name: "Highball japonais",
        description: "Whisky, soda, citron.",
        price: 14,
        badges: ["Le plus commandé"],
      },
      {
        name: "Thé genmaicha",
        description: "Infusion chaude, torréfaction douce.",
        price: 6,
      },
      {
        name: "Umeshu maison",
        description: "Prune, glace claire, finale souple.",
        price: 11,
      },
    ],
  },
];

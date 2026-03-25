export const menu = [
  {
    title: "Entrées",
    note: "Assiettes d'ouverture, fritures légères et préparations servies à partager.",
    items: [
      ["Tataki de sériole", "Ponzu clair, radis glaçons, ciboulette", "16"],
      ["Gyoza grillés", "Poulet fermier, gingembre frais, sauce légère", "14"],
      ["Aubergine miso", "Laquée minute, sésame blond, shiso", "13"],
      ["Tartare de thon", "Nori croustillante, concombre, wasabi doux", "18"],
    ],
  },
  {
    title: "Ramen",
    note: "Bouillons cuits longuement, nouilles fermes et garnitures préparées chaque jour.",
    items: [
      ["Tonkotsu Yashiki", "Bouillon long, poitrine confite, œuf mariné", "23"],
      ["Shoyu fumé", "Volaille rôtie, tare brun, huile aromatique", "22"],
      ["Miso végétal", "Champignons, maïs rôti, beurre miso", "21"],
      ["Tsukemen du soir", "Nouilles fermes, bouillon réduit, citron", "24"],
    ],
  },
  {
    title: "Sushi & Sashimi",
    note: "Poissons selon arrivage, riz tiède et coupe minute au moment du service.",
    items: [
      ["Assortiment du soir", "Sélection du chef en 8 pièces", "32"],
      ["Nigiri signature", "Thon, sériole, daurade, saumon", "28"],
      ["Maki crabe", "Avocat, concombre, mayonnaise légère", "18"],
      ["Sashimi premium", "Coupe épaisse, ponzu transparent", "29"],
    ],
  },
  {
    title: "Plats",
    note: "Grillades, fritures et assiettes chaudes pour prolonger le service du soir.",
    items: [
      ["Saumon laqué", "Riz vinaigré, jeunes pousses, jus soja", "26"],
      ["Poulet karaage", "Panure fine, citron, pickles maison", "24"],
      ["Bœuf au binchotan", "Cuisson vive, légumes braisés, tare", "31"],
      ["Tofu grillé", "Bouillon dashi clair, poireau brûlé, sésame", "22"],
    ],
  },
  {
    title: "Desserts",
    note: "Desserts légers, textures souples et finales nettes en fin de repas.",
    items: [
      ["Mochi glacé", "Sésame noir ou matcha", "9"],
      ["Flan hōjicha", "Crème soyeuse, caramel thé grillé", "11"],
      ["Agrumes givrés", "Yuzu, pamplemousse, sirop léger", "10"],
      ["Biscuit noir", "Ganache douce, sarrasin, sel fin", "12"],
    ],
  },
  {
    title: "Boissons",
    note: "Saké, cocktails, thés et verres choisis pour accompagner la cuisine sans lourdeur.",
    items: [
      ["Saké Junmai", "Verre ou carafe selon sélection", "12"],
      ["Highball japonais", "Whisky, soda, citron", "14"],
      ["Thé genmaicha", "Infusion chaude, torréfaction douce", "6"],
      ["Umeshu maison", "Prune, glace claire, finale souple", "11"],
    ],
  },
] as const;

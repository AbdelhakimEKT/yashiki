import type { StaticImageData } from "next/image";

import menuAgrumesGivres from "@/imagee/menu-agrumes-givres.jpg";
import menuAssortimentSoir from "@/imagee/menu-assortiment-soir.jpg";
import menuAubergineMiso from "@/imagee/menu-aubergine-miso.png";
import menuBiscuitNoir from "@/imagee/menu-biscuit-noir.jpg";
import menuBoeufBinchotan from "@/imagee/menu-boeuf-binchotan.jpg";
import menuFlanHojicha from "@/imagee/menu-flan-hojicha.jpg";
import menuGyozaGrilles from "@/imagee/menu-gyoza-grilles.jpg";
import menuHighballJaponais from "@/imagee/menu-highball-japonais.png";
import menuMakiCrabe from "@/imagee/menu-maki-crabe.jpg";
import menuMisoVegetal from "@/imagee/menu-miso-vegetal.jpg";
import menuMochiGlace from "@/imagee/menu-mochi-glace.jpg";
import menuNigiriSignature from "@/imagee/menu-nigiri-signature.jpg";
import menuPouletKaraage from "@/imagee/menu-poulet-karaage.jpg";
import menuSakeJunmai from "@/imagee/menu-sake-junmai.jpg";
import menuSashimiPremium from "@/imagee/menu-sashimi-premium.jpg";
import menuSaumonLaque from "@/imagee/menu-saumon-laque.jpg";
import menuShoyuFume from "@/imagee/menu-shoyu-fume.jpg";
import menuTatakiSeriole from "@/imagee/menu-tataki-seriole.jpg";
import menuTartareThon from "@/imagee/menu-tartare-thon.jpg";
import menuTheGenmaicha from "@/imagee/menu-the-genmaicha.jpg";
import menuTofuGrille from "@/imagee/menu-tofu-grille.jpg";
import menuTonkotsuYashiki from "@/imagee/menu-tonkotsu-yashiki.jpg";
import menuTsukemenSoir from "@/imagee/menu-tsukemen-soir.jpg";
import menuUmeshuMaison from "@/imagee/menu-umeshu-maison.jpg";

export type MenuBadge =
  | "Signature"
  | "Le plus commandé"
  | "Végétarien"
  | "Suggestion du chef";

export type DietaryTag = "Végétarien" | "Sans gluten";

export type MenuItem = {
  name: string;
  description: string;
  price: number;
  badges?: MenuBadge[];
  dietary?: DietaryTag[];
  highlight?: string;
  image?: StaticImageData;
  imageAlt?: string;
  imageCaption?: string;
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
        highlight: "Entrée fraîche",
        image: menuTatakiSeriole,
        imageAlt: "Assiette de tataki de poisson",
      },
      {
        name: "Gyoza grillés",
        description: "Poulet fermier, gingembre frais, sauce légère.",
        price: 14,
        badges: ["Le plus commandé"],
        highlight: "Croquant minute",
        image: menuGyozaGrilles,
        imageAlt: "Assiette de gyoza grillés",
      },
      {
        name: "Aubergine miso",
        description: "Laquée minute, sésame blond, shiso.",
        price: 13,
        badges: ["Végétarien"],
        dietary: ["Végétarien"],
        highlight: "Umami végétal",
        image: menuAubergineMiso,
        imageAlt: "Aubergine laquée au miso",
      },
      {
        name: "Tartare de thon",
        description: "Nori croustillante, concombre, wasabi doux.",
        price: 18,
        highlight: "Texture vive",
        image: menuTartareThon,
        imageAlt: "Assiette de tartare de thon",
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
        highlight: "Bouillon long",
        image: menuTonkotsuYashiki,
        imageAlt: "Bol de ramen tonkotsu",
      },
      {
        name: "Shoyu fumé",
        description: "Volaille rôtie, tare brun, huile aromatique.",
        price: 22,
        badges: ["Suggestion du chef"],
        highlight: "Fumé délicat",
        image: menuShoyuFume,
        imageAlt: "Bol de ramen shoyu",
      },
      {
        name: "Miso végétal",
        description: "Champignons, maïs rôti, beurre miso.",
        price: 21,
        badges: ["Végétarien"],
        dietary: ["Végétarien"],
        highlight: "Version végétale",
        image: menuMisoVegetal,
        imageAlt: "Bol de ramen végétarien",
      },
      {
        name: "Tsukemen du soir",
        description: "Nouilles fermes, bouillon réduit, citron.",
        price: 24,
        highlight: "Service du soir",
        image: menuTsukemenSoir,
        imageAlt: "Bol de tsukemen",
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
        highlight: "Sélection du chef",
        image: menuAssortimentSoir,
        imageAlt: "Assortiment de sushi du soir",
      },
      {
        name: "Nigiri signature",
        description: "Thon, sériole, daurade, saumon.",
        price: 28,
        badges: ["Le plus commandé"],
        highlight: "Coupe minute",
        image: menuNigiriSignature,
        imageAlt: "Assiette de nigiri",
      },
      {
        name: "Maki crabe",
        description: "Avocat, concombre, mayonnaise légère.",
        price: 18,
        highlight: "Lecture facile",
        image: menuMakiCrabe,
        imageAlt: "Assiette de maki au crabe",
      },
      {
        name: "Sashimi premium",
        description: "Coupe épaisse, ponzu transparent.",
        price: 29,
        badges: ["Suggestion du chef"],
        dietary: ["Sans gluten"],
        highlight: "Sans gluten",
        image: menuSashimiPremium,
        imageAlt: "Assiette de sashimi",
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
        highlight: "Brillant et net",
        image: menuSaumonLaque,
        imageAlt: "Assiette de saumon laqué",
      },
      {
        name: "Poulet karaage",
        description: "Panure fine, citron, pickles maison.",
        price: 24,
        badges: ["Le plus commandé"],
        highlight: "Croustillant",
        image: menuPouletKaraage,
        imageAlt: "Assiette de poulet karaage",
      },
      {
        name: "Bœuf au binchotan",
        description: "Cuisson vive, légumes braisés, tare.",
        price: 31,
        badges: ["Suggestion du chef"],
        highlight: "Cuisson vive",
        image: menuBoeufBinchotan,
        imageAlt: "Assiette de bœuf grillé",
      },
      {
        name: "Tofu grillé",
        description: "Bouillon dashi clair, poireau brûlé, sésame.",
        price: 22,
        badges: ["Végétarien"],
        dietary: ["Végétarien", "Sans gluten"],
        highlight: "Option légère",
        image: menuTofuGrille,
        imageAlt: "Assiette de tofu grillé",
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
        highlight: "Texture douce",
        image: menuMochiGlace,
        imageAlt: "Dessert mochi glacé",
      },
      {
        name: "Flan hōjicha",
        description: "Crème soyeuse, caramel thé grillé.",
        price: 11,
        badges: ["Signature"],
        highlight: "Finale signature",
        image: menuFlanHojicha,
        imageAlt: "Flan au caramel",
      },
      {
        name: "Agrumes givrés",
        description: "Yuzu, pamplemousse, sirop léger.",
        price: 10,
        dietary: ["Sans gluten"],
        highlight: "Sans gluten",
        image: menuAgrumesGivres,
        imageAlt: "Dessert aux agrumes",
      },
      {
        name: "Biscuit noir",
        description: "Ganache douce, sarrasin, sel fin.",
        price: 12,
        highlight: "Finale cacao",
        image: menuBiscuitNoir,
        imageAlt: "Dessert chocolaté au biscuit",
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
        dietary: ["Sans gluten"],
        highlight: "Accord de la maison",
        image: menuSakeJunmai,
        imageAlt: "Verre de saké",
      },
      {
        name: "Highball japonais",
        description: "Whisky, soda, citron.",
        price: 14,
        badges: ["Le plus commandé"],
        dietary: ["Sans gluten"],
        highlight: "Très demandé",
        image: menuHighballJaponais,
        imageAlt: "Cocktail highball",
      },
      {
        name: "Thé genmaicha",
        description: "Infusion chaude, torréfaction douce.",
        price: 6,
        dietary: ["Sans gluten"],
        highlight: "Sans alcool",
        image: menuTheGenmaicha,
        imageAlt: "Tasse de thé",
      },
      {
        name: "Umeshu maison",
        description: "Prune, glace claire, finale souple.",
        price: 11,
        dietary: ["Sans gluten"],
        highlight: "Maison",
        image: menuUmeshuMaison,
        imageAlt: "Verre de cocktail à la prune",
      },
    ],
  },
];

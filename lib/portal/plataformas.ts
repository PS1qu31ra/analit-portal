import type { Language } from "@/lib/i18n/translations";

export type PlataformaStatus =
  | "available"
  | "development";

type TextoTraduzido =
  Record<Language, string>;

export type Plataforma = {
  id: string;
  slug: string;
  name: string;
  category: TextoTraduzido;
  description: TextoTraduzido;
  status: PlataformaStatus;
  features: TextoTraduzido[];
  href?: string;
};

export const PLATAFORMAS: Plataforma[] = [
  {
    id: "analitcalc",
    slug: "analitcalc",
    name: "AnalitCalc",

    category: {
      "pt-BR": "Química Analítica",
      en: "Analytical Chemistry",
    },

    description: {
      "pt-BR":
        "Plataforma voltada à simulação, ao cálculo e à interpretação de sistemas de volumetria clássica.",

      en:
        "Platform designed for simulation, calculation and interpretation of classical volumetric analysis systems.",
    },

    status: "available",

    features: [
      {
        "pt-BR": "Simulações interativas",
        en: "Interactive simulations",
      },
      {
        "pt-BR": "Curvas analíticas",
        en: "Analytical curves",
      },
      {
        "pt-BR": "Interpretação química",
        en: "Chemical interpretation",
      },
    ],

    href:
      "/login?app=analitcalc",
  },

  {
    id: "analito",
    slug: "analito",
    name: "Analito",

    category: {
      "pt-BR": "Assistência científica",
      en: "Scientific assistance",
    },

    description: {
      "pt-BR":
        "Ambiente inteligente para apoio ao estudo, interpretação e aplicação de conceitos químicos.",

      en:
        "Intelligent environment designed to support the study, interpretation and application of chemical concepts.",
    },

    status:
      "development",

    features: [
      {
        "pt-BR":
          "Assistência científica",

        en:
          "Scientific assistance",
      },
      {
        "pt-BR":
          "Aprendizagem orientada",

        en:
          "Guided learning",
      },
      {
        "pt-BR":
          "Ferramentas inteligentes",

        en:
          "Intelligent tools",
      },
    ],
  },

  {
    id: "marsyn",
    slug: "marsyn",
    name: "MARSYN",

    category: {
      "pt-BR":
        "Espectrometria de massas",

      en:
        "Mass spectrometry",
    },

    description: {
      "pt-BR":
        "Plataforma destinada ao suporte à interpretação e organização de informações em LC-MS e GC-MS.",

      en:
        "Platform designed to support the interpretation and organization of LC-MS and GC-MS information.",
    },

    status:
      "development",

    features: [
      {
        "pt-BR": "LC-MS",
        en: "LC-MS",
      },
      {
        "pt-BR": "GC-MS",
        en: "GC-MS",
      },
      {
        "pt-BR":
          "Análise instrumental",

        en:
          "Instrumental analysis",
      },
    ],
  },
];
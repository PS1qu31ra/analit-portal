import type {
  Language,
} from "@/lib/i18n/translations";


export type PlataformaStatus =
  | "available"
  | "development";


type TextoTraduzido =
  Record<Language, string>;


export type Plataforma = {
  id: string;
  slug: string;
  name: string;

  category:
    TextoTraduzido;

  description:
    TextoTraduzido;

  status:
    PlataformaStatus;

  features:
    TextoTraduzido[];

  href?: string;
};


export const PLATAFORMAS:
  Plataforma[] = [
  {
    id: "analitcalc",

    slug: "analitcalc",

    name: "AnalitCalc",

    category: {
      "pt-BR":
        "Química Analítica",

      en:
        "Analytical Chemistry",
    },

    description: {
      "pt-BR":
        "Ambiente para cálculos, simulações e interpretação de sistemas de química analítica.",

      en:
        "Environment for calculations, simulations and interpretation of analytical chemistry systems.",
    },

    status:
      "available",

    features: [
      {
        "pt-BR":
          "Cálculos científicos",

        en:
          "Scientific calculations",
      },

      {
        "pt-BR":
          "Curvas analíticas",

        en:
          "Analytical curves",
      },

      {
        "pt-BR":
          "Simulações interativas",

        en:
          "Interactive simulations",
      },
    ],

    href:
      "/login?app=analitcalc",
  },

  {
    id: "visualizer",

    slug: "visualizer",

    name: "Visualizer",

    category: {
      "pt-BR":
        "Visualização científica",

      en:
        "Scientific Visualization",
    },

    description: {
      "pt-BR":
        "Explore resultados científicos por meio de visualizações, gráficos, estruturas e representações interativas.",

      en:
        "Explore scientific results through interactive visualizations, graphs, structures and representations.",
    },

    status:
      "development",

    features: [
      {
        "pt-BR":
          "Gráficos e curvas",

        en:
          "Graphs and curves",
      },

      {
        "pt-BR":
          "Visualizações interativas",

        en:
          "Interactive visualizations",
      },

      {
        "pt-BR":
          "Exploração de resultados",

        en:
          "Results exploration",
      },
    ],
  },
];
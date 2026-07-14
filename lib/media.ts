export type GalleryItem = {
  src: string;
  alt: string;
  label?: string;
};

export type PageHeroImage = {
  src: string;
  alt: string;
};

export const pageHeroImages = {
  home: {
    src: "/gallery/hero-01.svg",
    alt: "Decentralized energy grid with local power nodes and storage",
  },
  solutions: {
    src: "/gallery/solutions-01.svg",
    alt: "Clean infrastructure and waste-to-value engineering",
  },
  applications: {
    src: "/gallery/hero-02.svg",
    alt: "Compliance monitoring and regulatory performance for B2G applications",
  },
  markets: {
    src: "/gallery/hero-markets.svg",
    alt: "Industry sectors and market engagement models",
  },
  investmentModel: {
    src: "/gallery/hero-investment.svg",
    alt: "Structured investment and project development phases",
  },
  about: {
    src: "/gallery/hero-about.svg",
    alt: "Purpose-driven engineering and institutional delivery",
  },
  contact: {
    src: "/gallery/hero-contact.svg",
    alt: "Confidential inquiry and stakeholder engagement",
  },
} satisfies Record<string, PageHeroImage>;

export const heroGallery: GalleryItem[] = [
  {
    src: "/gallery/hero-01.svg",
    alt: "Decentralized energy grid with local power nodes and storage",
    label: "Resilience",
  },
  {
    src: "/gallery/hero-02.svg",
    alt: "Compliance monitoring dashboard with emissions tracking and audit trail",
    label: "Compliance",
  },
];

export const solutionsGallery: GalleryItem[] = [
  {
    src: "/gallery/solutions-01.svg",
    alt: "Waste-to-value conversion flow from waste input to recovered electricity, heat, metals, and landfill reduction",
    label: "Waste-to-value",
  },
  {
    src: "/gallery/solutions-02.svg",
    alt: "Thermochemical pyrolysis and gasification reactor producing syngas, fuel oils, and activated carbon",
    label: "Thermochemical",
  },
];

export const applicationsGallery: GalleryItem[] = [
  {
    src: "/gallery/applications-01.svg",
    alt: "B2G project delivery workflow from municipal authority through commissioning to deployed infrastructure",
    label: "B2G delivery",
  },
];


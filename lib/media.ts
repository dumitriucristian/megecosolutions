export type GalleryItem = {
  src: string;
  alt: string;
  label?: string;
};

export const heroGallery: GalleryItem[] = [
  { src: "/gallery/hero-01.svg", alt: "Abstract municipal energy gradient", label: "Resilience" },
  { src: "/gallery/hero-02.svg", alt: "Abstract systems grid", label: "Compliance" },
];

export const solutionsGallery: GalleryItem[] = [
  { src: "/gallery/solutions-01.svg", alt: "Abstract clean infrastructure arc", label: "Waste-to-value" },
  { src: "/gallery/solutions-02.svg", alt: "Abstract thermochemical flow", label: "Thermochemical" },
];

export const applicationsGallery: GalleryItem[] = [
  { src: "/gallery/applications-01.svg", alt: "Abstract control and reporting dashboard", label: "B2G delivery" },
];


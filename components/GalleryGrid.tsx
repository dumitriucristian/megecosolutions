import Image from "next/image";

import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/lib/media";

export function GalleryGrid({
  items,
  className,
  columns = 3,
}: {
  items: GalleryItem[];
  className?: string;
  columns?: 2 | 3 | 4;
}) {
  const gridCols =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 4
        ? "md:grid-cols-4"
        : "md:grid-cols-3";

  return (
    <div className={cn("grid gap-4 sm:gap-6", gridCols, className)}>
      {items.map((item) => (
        <figure
          key={item.src}
          className="group relative overflow-hidden border border-slate-200 bg-slate-50"
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              priority={false}
            />
          </div>
          {item.label ? (
            <figcaption className="absolute left-4 top-4 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-950 shadow-sm">
              {item.label}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}


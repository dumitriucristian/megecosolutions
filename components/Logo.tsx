import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({
  className,
  imageClassName,
}: {
  className?: string;
  imageClassName?: string;
}) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0 items-center", className)}>
      <Image
        src="/meg-ecosolutions-logo.png"
        alt="MEG EcoSolutions — Waste to Energy Solutions"
        width={850}
        height={303}
        className={cn("h-10 w-auto object-contain sm:h-11", imageClassName)}
        priority
      />
    </Link>
  );
}

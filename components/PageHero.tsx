import Image from "next/image";

import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";

export function PageHero({
  image,
  imageAlt,
  className,
  containerClassName,
  children,
}: {
  image: string;
  imageAlt: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("relative w-full overflow-hidden", className)}>
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/55 to-slate-950/80" />
      </div>

      <Container className={cn("relative py-16 text-white sm:py-20", containerClassName)}>
        {children}
      </Container>
    </section>
  );
}

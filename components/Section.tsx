import { cn } from "@/lib/utils";

type Tone = "light" | "dark" | "tint";

const toneClass: Record<Tone, string> = {
  light: "bg-white text-slate-950",
  dark: "bg-slate-950 text-white",
  tint: "bg-slate-50 text-slate-950",
};

export function Section({
  id,
  tone = "light",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("w-full", toneClass[tone], className)}>
      {children}
    </section>
  );
}


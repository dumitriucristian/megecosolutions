import { cn } from "@/lib/utils";

export type UseCaseCard = {
  title: string;
  description: string;
  metricsNote?: string;
};

export function UseCaseCards({
  items,
  className,
}: {
  items: ReadonlyArray<UseCaseCard>;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-2", className)}>
      {items.map((item) => (
        <div
          key={item.title}
          className="border border-white/10 bg-white/5 p-7"
        >
          <h3 className="text-lg font-semibold tracking-tight text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/75">{item.description}</p>
          {item.metricsNote ? (
            <p className="mt-4 text-xs leading-5 text-white/55">{item.metricsNote}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}


import { cn } from "@/lib/utils";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <div className="mb-2 text-xs font-medium tracking-premium text-stone-500">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-premium text-ink sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

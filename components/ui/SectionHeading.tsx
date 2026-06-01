interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p
          className={`text-xs font-medium tracking-widest uppercase mb-3 ${
            light ? "text-white/50" : "text-clay"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display font-light text-3xl lg:text-4xl leading-tight ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-white/60" : "text-stone-light"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

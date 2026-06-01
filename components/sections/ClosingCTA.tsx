import Image from "next/image";
import { WHATSAPP_BOOKING_URL, SITE } from "@/lib/constants";

export default function ClosingCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-1.png"
          alt="Roots Inn Kigali"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/75" />
      </div>

      <div className="relative max-w-3xl mx-auto px-5 lg:px-8 py-20 lg:py-28 text-center">
        <p className="text-white/50 text-[10px] font-medium tracking-widest uppercase mb-5">
          KG 20 Ave · Kigali, Rwanda
        </p>
        <h2 className="font-display font-light text-4xl lg:text-5xl text-white leading-tight mb-4">
          Your home in Kigali<br />is waiting.
        </h2>
        <p className="text-white/60 text-base leading-relaxed mb-8 max-w-sm mx-auto">
          Send us your dates and we&apos;ll confirm availability, usually within a few hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-clay hover:bg-clay-dark text-white text-sm font-medium px-10 py-4 transition-colors"
          >
            Reserve Your Stay
          </a>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="border border-white/30 hover:border-white text-white text-sm font-medium px-10 py-4 transition-colors"
          >
            {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

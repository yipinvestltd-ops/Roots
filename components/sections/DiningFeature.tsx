import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_BOOKING_URL } from "@/lib/constants";

export default function DiningFeature() {
  return (
    <section className="bg-charcoal overflow-hidden">
      {/* Full-bleed hero image with text — mirrors screenshot 5 */}
      <div className="relative w-full h-[480px] sm:h-[560px] lg:h-[640px]">
        <Image
          src="/images/dining/top-view-dining.png"
          alt="Dining Lounge & Bar at Roots Inn Kigali"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient — strong at bottom where text lives, subtle at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-charcoal/10" />

        {/* Text — bottom-left, echoing screenshot 5 layout */}
        <div className="absolute bottom-0 left-0 px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16 max-w-2xl">
          <p className="text-white/55 text-[10px] font-medium tracking-widest uppercase mb-3">
            On-site · Open daily
          </p>
          <h2 className="font-display font-light text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
            Dining Lounge<br />&amp; Bar.
          </h2>
          <p className="text-white/70 text-base leading-relaxed max-w-md">
            A relaxed space to eat, drink, and unwind. Complimentary breakfast every morning, evening meals, and drinks through the day — all under one roof.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-clay hover:bg-clay-dark text-white text-sm font-medium px-7 py-3 transition-colors"
            >
              Book a Table
            </a>
            <Link
              href="/services"
              className="border border-white/35 hover:border-white text-white text-sm font-medium px-7 py-3 transition-colors"
            >
              About the dining
            </Link>
          </div>
        </div>
      </div>

      {/* Supporting photo strip — 4 images */}
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {[
          { src: "/images/dining/dining-area.png",  alt: "Dining area interior" },
          { src: "/images/dining/breakfast-1.jpg",  alt: "Complimentary breakfast" },
          { src: "/images/dining/meal-1.jpg",       alt: "Meal at Roots Inn" },
          { src: "/images/dining/breakfast-2.jpg",  alt: "Morning breakfast spread" },
        ].map((img) => (
          <div key={img.src} className="relative h-44 lg:h-52 overflow-hidden group">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/5 transition-colors" />
          </div>
        ))}
      </div>
    </section>
  );
}

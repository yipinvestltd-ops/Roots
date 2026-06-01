"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SITE, WHATSAPP_BOOKING_URL } from "@/lib/constants";

const HERO_IMAGES = [
  { src: "/images/hero/hero-1.png", alt: "Roots Inn Kigali — welcoming accommodation" },
  { src: "/images/hero/hero-2.png", alt: "Comfortable rooms at Roots Inn Kigali" },
  { src: "/images/hero/hero-3.png", alt: "Well-furnished space at Roots Inn" },
  { src: "/images/hero/hero-4.png", alt: "Roots Inn exterior and surroundings" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const go = useCallback(
    (index: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setTransitioning(false);
      }, 400);
    },
    [transitioning]
  );

  const next = useCallback(() => go((current + 1) % HERO_IMAGES.length), [current, go]);
  const prev = useCallback(() => go((current - 1 + HERO_IMAGES.length) % HERO_IMAGES.length), [current, go]);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  let touchStartX = 0;
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(480px, 82vh, 760px)" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Images */}
      {HERO_IMAGES.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover object-center"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Scrim — lighter at top so navbar logo is readable, richer at bottom for text */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/65" />

      {/* Content — vertically centred with slight upward offset */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center pb-12">
        <p className="text-white/65 text-[11px] font-medium tracking-widest uppercase mb-4 animate-fade-up">
          KG 20 Ave · Kigali, Rwanda
        </p>
        <h1 className="font-display font-light text-white text-4xl sm:text-5xl lg:text-7xl leading-none tracking-wide mb-4 animate-fade-up delay-100">
          {SITE.tagline}
        </h1>
        <p className="text-white/75 text-sm lg:text-base max-w-sm lg:max-w-md leading-relaxed mb-7 animate-fade-up delay-200">
          {SITE.subTagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 animate-fade-up delay-300">
          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-clay hover:bg-clay-dark text-white text-sm font-medium px-8 py-3.5 transition-colors min-w-[152px]"
          >
            Book Now
          </a>
          <a
            href="/rooms"
            className="border border-white/55 hover:border-white text-white text-sm font-medium px-8 py-3.5 transition-colors min-w-[152px]"
          >
            View Rooms
          </a>
        </div>
      </div>

      {/* Prev / Next — desktop only */}
      <button
        onClick={prev}
        className="absolute left-5 lg:left-8 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/25 hover:bg-black/45 text-white flex items-center justify-center transition-colors hidden sm:flex"
        aria-label="Previous image"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-5 lg:right-8 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/25 hover:bg-black/45 text-white flex items-center justify-center transition-colors hidden sm:flex"
        aria-label="Next image"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "w-6 h-1 bg-white" : "w-1 h-1 bg-white/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

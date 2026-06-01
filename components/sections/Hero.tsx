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

  const go = useCallback((index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 300);
  }, [transitioning]);

  const next = useCallback(() => {
    go((current + 1) % HERO_IMAGES.length);
  }, [current, go]);

  const prev = useCallback(() => {
    go((current - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  }, [current, go]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Touch/swipe
  let touchStartX = 0;
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  return (
    <section
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
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
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
        <p className="text-white/70 text-xs font-medium tracking-widest uppercase mb-5 animate-fade-up">
          KG 20 Ave · Kigali, Rwanda
        </p>
        <h1 className="font-display font-light text-white text-5xl sm:text-6xl lg:text-8xl leading-none tracking-wide mb-5 animate-fade-up delay-100">
          {SITE.tagline}
        </h1>
        <p className="text-white/80 text-base lg:text-lg max-w-md leading-relaxed mb-8 animate-fade-up delay-200">
          {SITE.subTagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 animate-fade-up delay-300">
          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-clay hover:bg-clay-dark text-white text-sm font-medium px-8 py-4 transition-colors min-w-[160px]"
          >
            Book Now
          </a>
          <a
            href="/rooms"
            className="border border-white/60 hover:border-white text-white text-sm font-medium px-8 py-4 transition-colors min-w-[160px]"
          >
            View Rooms
          </a>
        </div>
      </div>

      {/* Prev / Next arrows — desktop */}
      <button
        onClick={prev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors hidden sm:flex"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors hidden sm:flex"
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "w-8 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-6 lg:right-10 hidden sm:flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-full bg-white/60 animate-[scrollLine_2s_ease_infinite]" />
        </div>
      </div>
    </section>
  );
}

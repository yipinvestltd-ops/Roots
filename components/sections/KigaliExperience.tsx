"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const KIGALI_IMAGES = [
  { src: "/images/kigali/city-1.jpg", alt: "Kigali city view" },
  { src: "/images/kigali/city-2.jpg", alt: "Kigali panorama" },
  { src: "/images/kigali/city-3.jpg", alt: "Kigali streets" },
  { src: "/images/kigali/city-4.jpg", alt: "Kigali neighbourhood" },
  { src: "/images/kigali/city-5.jpg", alt: "Kigali city lights" },
  { src: "/images/kigali/city-6.jpg", alt: "Kigali skyline" },
  { src: "/images/kigali/city-7.jpg", alt: "Kigali road" },
];

export default function KigaliExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  // Drive the CSS animation restart on visibility
  useEffect(() => {
    if (isVisible) setTick((t) => t + 1);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-charcoal"
      style={{ height: "clamp(380px, 62vh, 660px)" }}
    >
      {/* All 7 images stacked — each a vertical strip that slowly drifts */}
      <div className="absolute inset-0 flex">
        {KIGALI_IMAGES.map((img, i) => {
          // Alternating drift directions — odd drift left, even drift right
          // Very slow: 22–30s per image to feel calm not frantic
          const duration = 22 + i * 1.5;
          const direction = i % 2 === 0 ? "driftRight" : "driftLeft";

          return (
            <div
              key={img.src}
              className="relative flex-1 overflow-hidden"
              style={{ minWidth: 0 }}
            >
              <div
                className="absolute inset-[-8%] w-[116%]"
                style={{
                  animation: isVisible
                    ? `${direction} ${duration}s ease-in-out infinite alternate`
                    : "none",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center"
                  sizes="15vw"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Unified dark scrim so strips feel like one cohesive scene */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(28,28,26,0.60) 0%, rgba(28,28,26,0.25) 35%, rgba(28,28,26,0.25) 65%, rgba(28,28,26,0.72) 100%)",
          zIndex: 2,
        }}
      />

      {/* Vertical dividers between strips — very subtle */}
      <div className="absolute inset-0 flex pointer-events-none" style={{ zIndex: 3 }}>
        {KIGALI_IMAGES.map((_, i) => (
          <div key={i} className="flex-1 border-r border-white/5 last:border-0" />
        ))}
      </div>

      {/* Text overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center"
        style={{ zIndex: 4 }}
      >
        <p className="text-white/50 text-[10px] font-medium tracking-widest uppercase mb-4">
          Kigali, Rwanda
        </p>
        <h2
          className="font-display font-light text-white leading-tight"
          style={{ fontSize: "clamp(1.65rem, 3.8vw, 3.2rem)", maxWidth: "680px" }}
        >
          Experience quiet living in the heart of Kigali.
        </h2>
      </div>

      <style>{`
        @keyframes driftRight {
          0%   { transform: translateX(0%) scale(1.04); }
          100% { transform: translateX(4%) scale(1.08); }
        }
        @keyframes driftLeft {
          0%   { transform: translateX(0%) scale(1.04); }
          100% { transform: translateX(-4%) scale(1.08); }
        }
      `}</style>
    </section>
  );
}

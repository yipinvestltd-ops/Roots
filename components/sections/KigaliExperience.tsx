"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const KIGALI_IMAGES = [
  { src: "/images/kigali/city-1.jpg", alt: "Kigali city view" },
  { src: "/images/kigali/city-2.jpg", alt: "Kigali panorama" },
  { src: "/images/kigali/city-3.jpg", alt: "Kigali streets" },
  { src: "/images/kigali/city-4.jpg", alt: "Kigali neighbourhood" },
  { src: "/images/kigali/city-5.jpg", alt: "Kigali city" },
  { src: "/images/kigali/city-6.jpg", alt: "Kigali skyline" },
  { src: "/images/kigali/city-7.jpg", alt: "Kigali road" },
];

export default function KigaliExperience() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer — only run slideshow when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setCurrent((c) => {
        setPrev(c);
        return (c + 1) % KIGALI_IMAGES.length;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: "clamp(340px, 55vh, 620px)" }}
    >
      {/* Slideshow images — ken-burns effect on active, instant swap */}
      {KIGALI_IMAGES.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: i === current
              ? "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)"
              : i === prev
              ? "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
            zIndex: i === current ? 2 : i === prev ? 1 : 0,
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            style={{
              transform: i === current ? "scale(1.06)" : "scale(1.0)",
              transition: i === current
                ? "transform 8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                : "transform 0s",
            }}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Layered scrim — darkens edges, keeps centre bright */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(28,28,26,0.55) 0%, rgba(28,28,26,0.10) 40%, rgba(28,28,26,0.10) 60%, rgba(28,28,26,0.65) 100%)",
          zIndex: 3,
        }}
      />

      {/* Text overlay — centred, elegant */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center"
        style={{ zIndex: 4 }}
      >
        <p className="text-white/55 text-[10px] font-medium tracking-widest uppercase mb-4">
          Kigali, Rwanda
        </p>
        <h2 className="font-display font-light text-white leading-tight"
          style={{ fontSize: "clamp(1.6rem, 4vw, 3.25rem)", maxWidth: "700px" }}
        >
          Experience quiet living in the heart of Kigali.
        </h2>
        <div className="mt-8 flex items-center gap-3">
          {KIGALI_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => { setPrev(current); setCurrent(i); }}
              className="rounded-full transition-all duration-500"
              style={{
                width: i === current ? "24px" : "6px",
                height: "3px",
                background: i === current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
              }}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

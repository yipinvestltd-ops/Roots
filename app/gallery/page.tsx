"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

const GALLERY: Record<string, GalleryItem[]> = {
  Rooms: [
    { src: "/images/rooms/two-bedroom/bedroom.png", alt: "Two-bedroom apartment bedroom" },
    { src: "/images/rooms/two-bedroom/living-room.png", alt: "Two-bedroom apartment living room" },
    { src: "/images/rooms/two-bedroom/bathroom.png", alt: "Two-bedroom apartment bathroom" },
    { src: "/images/rooms/one-bedroom/bedroom.png", alt: "One-bedroom apartment bedroom" },
    { src: "/images/rooms/one-bedroom/living-room.png", alt: "One-bedroom apartment living room" },
    { src: "/images/rooms/one-bedroom/bathroom.png", alt: "One-bedroom apartment bathroom" },
    { src: "/images/rooms/deluxe/bedroom.png", alt: "Double deluxe bedroom" },
    { src: "/images/rooms/deluxe/bathroom.png", alt: "Double deluxe bathroom" },
    { src: "/images/rooms/twin/bedroom.png", alt: "Double twin bedroom" },
    { src: "/images/rooms/twin/bathroom.png", alt: "Double twin bathroom" },
  ],
  Dining: [
    { src: "/images/dining/top-view-dining.png", alt: "Dining area overview at Roots Inn" },
    { src: "/images/dining/dining-area.png", alt: "Restaurant interior" },
    { src: "/images/dining/breakfast-1.jpg", alt: "Complimentary breakfast" },
    { src: "/images/dining/breakfast-2.jpg", alt: "Morning breakfast" },
    { src: "/images/dining/breakfast-3.jpg", alt: "Fresh breakfast spread" },
    { src: "/images/dining/meal-1.jpg", alt: "Meal served at Roots Inn" },
    { src: "/images/dining/meal-2.jpg", alt: "Dining at Roots Inn Kigali" },
  ],
  Kigali: [
    { src: "/images/kigali/city-1.jpg", alt: "Kigali city view", caption: "Kigali" },
    { src: "/images/kigali/city-2.jpg", alt: "Kigali panorama", caption: "Kigali" },
    { src: "/images/kigali/city-3.jpg", alt: "Kigali streets", caption: "Kigali" },
    { src: "/images/kigali/city-4.jpg", alt: "Kigali neighbourhood", caption: "Kigali" },
    { src: "/images/kigali/city-5.jpg", alt: "Kigali city", caption: "Kigali" },
    { src: "/images/kigali/city-6.jpg", alt: "Kigali skyline", caption: "Kigali" },
    { src: "/images/kigali/city-7.jpg", alt: "Kigali road", caption: "Kigali" },
  ],
  Attractions: [
    { src: "/images/attractions/city-center.jpg", alt: "Kigali City Centre", caption: "Kigali City Centre — 10 min" },
    { src: "/images/attractions/convention-center.webp", alt: "Kigali Convention Centre", caption: "Kigali Convention Centre — 8 min" },
    { src: "/images/attractions/kimironko-market.webp", alt: "Kimironko Market", caption: "Kimironko Market — 15 min" },
    { src: "/images/attractions/genocide-memorial.webp", alt: "Kigali Genocide Memorial", caption: "Genocide Memorial — 12 min" },
    { src: "/images/attractions/nyandungu.webp", alt: "Nyandungu Eco Park", caption: "Nyandungu Eco Park — 20 min" },
    { src: "/images/attractions/inema-art.webp", alt: "Inema Arts Center", caption: "Inema Arts Center — 18 min" },
    { src: "/images/attractions/akagera.webp", alt: "Akagera National Park", caption: "Akagera National Park — 2.5 hr" },
    { src: "/images/attractions/volcanoes.jpg", alt: "Volcanoes National Park", caption: "Volcanoes National Park — 2 hr" },
    { src: "/images/attractions/lake-kivu.webp", alt: "Lake Kivu", caption: "Lake Kivu — 2.5 hr" },
    { src: "/images/attractions/nyungwe.webp", alt: "Nyungwe Forest", caption: "Nyungwe Forest — 4 hr" },
  ],
};

const TABS = ["All", ...Object.keys(GALLERY)] as const;

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [lightbox, setLightbox] = useState<{ items: GalleryItem[]; index: number } | null>(null);

  const allImages: GalleryItem[] = Object.values(GALLERY).flat();
  const images = activeTab === "All" ? allImages : GALLERY[activeTab as keyof typeof GALLERY] || [];

  const openLightbox = (src: string) => {
    const index = images.findIndex((img) => img.src === src);
    if (index >= 0) setLightbox({ items: images, index });
  };

  const closeLightbox = () => setLightbox(null);
  const lightboxPrev = () => {
    if (!lightbox) return;
    setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.items.length) % lightbox.items.length });
  };
  const lightboxNext = () => {
    if (!lightbox) return;
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.items.length });
  };

  // Touch swipe in lightbox
  let lbTouchX = 0;
  const lbTouchStart = (e: React.TouchEvent) => { lbTouchX = e.touches[0].clientX; };
  const lbTouchEnd = (e: React.TouchEvent) => {
    const diff = lbTouchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { diff > 0 ? lightboxNext() : lightboxPrev(); }
  };

  return (
    <>
      {/* Header — ivory background, different from dark-bg headers */}
      <section className="bg-linen pt-24 pb-8 lg:pt-32 lg:pb-10 border-b border-stone/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-3">
              Gallery
            </p>
            <h1 className="font-display font-light text-charcoal text-4xl lg:text-5xl">
              See for yourself.
            </h1>
          </div>
          <p className="text-stone-light text-sm max-w-xs">
            {allImages.length} photos — rooms, dining, Kigali, and nearby attractions.
          </p>
        </div>
      </section>

      {/* Filter tabs — sticky */}
      <div className="bg-linen border-b border-stone/10 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex gap-0 overflow-x-auto scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-medium py-4 px-4 shrink-0 border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-clay text-clay"
                    : "border-transparent text-stone-light hover:text-charcoal"
                }`}
              >
                {tab}
                {tab !== "All" && (
                  <span className="ml-1.5 text-xs text-stone-light/60">
                    ({GALLERY[tab as keyof typeof GALLERY]?.length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry grid */}
      <section className="bg-ivory py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="columns-2 sm:columns-2 lg:columns-3 gap-3 lg:gap-4 space-y-3 lg:space-y-4">
            {images.map((img) => (
              <div
                key={img.src}
                className="break-inside-avoid relative overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-400 group-hover:scale-[1.025]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/65 to-transparent px-3 py-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-xs font-medium">{img.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] bg-charcoal/96 flex items-center justify-center"
          onClick={closeLightbox}
          onTouchStart={lbTouchStart}
          onTouchEnd={lbTouchEnd}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/50 hover:text-white p-3 z-10"
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-3 z-10 hidden sm:block"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-3 z-10 hidden sm:block"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>

          <div
            className="max-w-5xl w-full mx-4 sm:mx-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center max-h-[80vh]">
              <Image
                src={lightbox.items[lightbox.index].src}
                alt={lightbox.items[lightbox.index].alt}
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto max-w-full object-contain"
                sizes="90vw"
              />
            </div>
            <div className="flex items-center justify-between mt-4 px-1">
              <p className="text-white/50 text-xs">
                {lightbox.items[lightbox.index].caption || lightbox.items[lightbox.index].alt}
              </p>
              <p className="text-white/30 text-xs">
                {lightbox.index + 1} / {lightbox.items.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

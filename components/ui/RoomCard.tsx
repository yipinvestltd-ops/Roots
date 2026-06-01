"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { getRoomWhatsAppUrl } from "@/lib/constants";

interface Room {
  id: string;
  name: string;
  price: number;
  tag: string;
  description: string;
  longDescription: string;
  amenities: string[];
  images: string[];
}

export default function RoomCard({ room }: { room: Room }) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="bg-ivory overflow-hidden border border-stone/10">
      {/* Image area */}
      <div className="relative">
        <div className="relative h-72 sm:h-96 overflow-hidden">
          {room.images.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-400 ${
                i === activeImg ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`${room.name} at Roots Inn`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={i === 0}
              />
            </div>
          ))}
          {/* Tag */}
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-charcoal/80 text-white text-xs font-medium px-3 py-1.5 tracking-wide">
              {room.tag}
            </span>
          </div>
        </div>

        {/* Thumbnail strip */}
        {room.images.length > 1 && (
          <div className="flex gap-2 p-3 bg-charcoal/5">
            {room.images.map((src, i) => (
              <button
                key={src}
                onClick={() => setActiveImg(i)}
                className={`relative w-16 h-12 overflow-hidden shrink-0 transition-all ${
                  i === activeImg ? "ring-2 ring-clay" : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={src}
                  alt={`${room.name} view ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h2 className="font-body font-semibold text-charcoal text-xl lg:text-2xl">
              {room.name}
            </h2>
          </div>
          <div className="text-right shrink-0">
            <div className="font-display italic text-3xl text-charcoal">
              ${room.price}
            </div>
            <span className="text-xs text-stone-light">per night</span>
          </div>
        </div>

        <p className="text-stone-light text-sm lg:text-base leading-relaxed mb-3">
          {room.description}
        </p>
        <p className="text-stone-light text-sm leading-relaxed mb-6">
          {room.longDescription}
        </p>

        {/* Amenities */}
        <div className="mb-8">
          <h3 className="text-xs font-medium tracking-widest uppercase text-charcoal mb-4">
            What&apos;s included
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {room.amenities.map((a) => (
              <div key={a} className="flex items-center gap-2.5">
                <Check size={13} className="text-clay shrink-0" />
                <span className="text-stone text-sm">{a}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 border-t border-stone/10 pt-6">
          <a
            href={getRoomWhatsAppUrl(room.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-clay hover:bg-clay-dark text-white text-sm font-medium py-4 text-center transition-colors"
          >
            Book Now — ${room.price}/night
          </a>
          <a
            href={`tel:+250780967647`}
            className="border border-stone/30 hover:border-clay text-stone hover:text-clay text-sm font-medium px-6 py-4 text-center transition-colors"
          >
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}

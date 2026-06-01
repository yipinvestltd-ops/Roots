import type { Metadata } from "next";
import Image from "next/image";
import RoomCard from "@/components/ui/RoomCard";
import { ROOMS, WHATSAPP_BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Rooms & Apartments — From $30/night",
  description:
    "Browse rooms and apartments at Roots Inn Kigali. Double rooms from $30/night, two-bedroom apartments from $55/night. All include breakfast and free Wi-Fi.",
};

export default function RoomsPage() {
  return (
    <>
      {/* Header — horizontal split: text left, image right */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[320px]">
        <div className="bg-charcoal flex flex-col justify-center px-5 lg:px-14 pt-28 pb-12 lg:pt-0 lg:pb-0">
          <p className="text-white/50 text-xs font-medium tracking-widest uppercase mb-4">
            Accommodations
          </p>
          <h1 className="font-display font-light text-white text-4xl lg:text-5xl leading-tight mb-4">
            Four rooms.<br />One standard.
          </h1>
          <p className="text-white/60 text-base max-w-sm leading-relaxed">
            From a clean double room to a full two-bedroom apartment — all with daily breakfast, free Wi-Fi, and housekeeping.
          </p>
        </div>
        <div className="relative h-64 lg:h-auto min-h-[260px]">
          <Image
            src="/images/rooms/two-bedroom/living-room.png"
            alt="Apartment living room at Roots Inn Kigali"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Jump links */}
      <div className="bg-ivory border-b border-stone/10 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4 flex gap-6 min-w-max lg:min-w-0 lg:flex-wrap">
          {ROOMS.map((room) => (
            <a
              key={room.id}
              href={`#${room.id}`}
              className="text-sm text-stone-light hover:text-clay transition-colors whitespace-nowrap"
            >
              {room.name}{" "}
              <span className="font-semibold text-charcoal">${room.price}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Rooms */}
      <section className="bg-linen py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ROOMS.map((room) => (
              <div key={room.id} id={room.id}>
                <RoomCard room={room} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-ivory py-14 border-t border-stone/10">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="font-display font-light text-3xl text-charcoal mb-3">
            Not sure which one fits?
          </h2>
          <p className="text-stone-light text-sm mb-6">
            Tell us how long you&apos;re staying and who you&apos;re travelling with — we&apos;ll point you in the right direction.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-clay hover:bg-clay-dark text-white text-sm font-medium px-8 py-4 transition-colors"
            >
              Ask Us
            </a>
            <a
              href="tel:+250780967647"
              className="border border-stone/30 hover:border-clay text-stone hover:text-clay text-sm font-medium px-8 py-4 transition-colors"
            >
              +250 780 967 647
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

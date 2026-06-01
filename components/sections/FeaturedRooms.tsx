import Image from "next/image";
import Link from "next/link";
import { ROOMS, getRoomWhatsAppUrl } from "@/lib/constants";

export default function FeaturedRooms() {
  const featured = ROOMS.filter((r) => r.featured);

  return (
    <section className="bg-linen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-3">
              Accommodations
            </p>
            <h2 className="font-display font-light text-3xl lg:text-4xl text-charcoal">
              Pick your room.
            </h2>
          </div>
          <Link
            href="/rooms"
            className="text-sm font-medium text-clay hover:underline underline-offset-4 shrink-0"
          >
            All 4 room types →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {featured.map((room) => (
            <div key={room.id} className="group overflow-hidden bg-ivory">
              {/* Image — taller, no overlay clutter */}
              <div className="relative h-60 sm:h-72 overflow-hidden">
                <Image
                  src={room.images[0]}
                  alt={`${room.name} at Roots Inn Kigali`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Price — top right overlay */}
                <div className="absolute top-4 right-4 bg-charcoal/85 px-3 py-1.5 text-right">
                  <span className="font-display italic text-xl text-white">${room.price}</span>
                  <span className="text-white/50 text-xs block leading-none">/night</span>
                </div>
              </div>

              {/* Content — tighter, less padding */}
              <div className="p-5 lg:p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-body font-semibold text-charcoal text-base leading-tight">
                    {room.name}
                  </h3>
                  <span className="text-xs font-medium text-clay border border-clay/30 px-2 py-0.5 shrink-0">
                    {room.tag}
                  </span>
                </div>
                <p className="text-stone-light text-sm leading-relaxed mb-5">
                  {room.description}
                </p>

                <div className="flex gap-3 border-t border-stone/10 pt-5">
                  <a
                    href={getRoomWhatsAppUrl(room.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-clay hover:bg-clay-dark text-white text-sm font-medium py-3 text-center transition-colors"
                  >
                    Book Now
                  </a>
                  <Link
                    href="/rooms"
                    className="border border-stone/25 text-stone hover:border-clay hover:text-clay text-sm font-medium px-5 py-3 transition-colors"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All rooms — compact grid teaser */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          {ROOMS.filter(r => !r.featured).map((room) => (
            <Link
              key={room.id}
              href={`/rooms#${room.id}`}
              className="group flex items-center gap-3 bg-ivory hover:bg-charcoal/5 p-3 transition-colors"
            >
              <div className="relative w-16 h-12 shrink-0 overflow-hidden">
                <Image
                  src={room.images[0]}
                  alt={room.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="font-body font-medium text-charcoal text-xs leading-tight">{room.name}</p>
                <p className="text-clay text-xs mt-0.5">${room.price}/night</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

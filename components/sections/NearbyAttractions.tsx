import Image from "next/image";
import Link from "next/link";
import { ATTRACTIONS } from "@/lib/constants";

export default function NearbyAttractions() {
  return (
    <section className="bg-linen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-3">
              Around Kigali
            </p>
            <h2 className="font-display font-light text-3xl lg:text-4xl text-charcoal">
              Worth seeing nearby.
            </h2>
            <p className="text-stone-light text-base mt-3 max-w-lg">
              From the city centre to national parks — there&apos;s a lot to explore from your base on KG 20 Ave.
            </p>
          </div>
          <Link
            href="/gallery?tab=Attractions"
            className="text-sm font-medium text-clay hover:underline underline-offset-4 shrink-0"
          >
            See all →
          </Link>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
          {ATTRACTIONS.slice(0, 5).map((attraction) => (
            <div
              key={attraction.name}
              className="min-w-[60vw] sm:min-w-[45vw] lg:min-w-0 snap-start group overflow-hidden"
            >
              <div className="relative h-44 lg:h-48 overflow-hidden">
                <Image
                  src={attraction.image}
                  alt={attraction.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 60vw, (max-width: 1024px) 45vw, 20vw"
                />
              </div>
              <div className="py-3">
                <p className="font-body font-medium text-charcoal text-sm">{attraction.name}</p>
                <p className="text-stone-light text-xs mt-0.5">{attraction.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ATTRACTIONS } from "@/lib/constants";

// Show the 6 most city-accessible attractions with strong photography
const FEATURED = ATTRACTIONS.slice(0, 6);

export default function KigaliContext() {
  return (
    <section className="bg-ivory py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-3">
              Around Kigali
            </p>
            <h2 className="font-display font-light text-3xl lg:text-4xl text-charcoal">
              A city worth exploring.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-sm font-medium text-clay hover:underline underline-offset-4 shrink-0"
          >
            See all attractions →
          </Link>
        </div>

        {/* 2-row asymmetric grid — large card + 4 smaller */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {/* Large feature card — Kigali city */}
          <div className="col-span-2 row-span-2 relative h-72 lg:h-full min-h-[280px] overflow-hidden group">
            <Image
              src="/images/kigali/city-2.jpg"
              alt="Kigali city panorama"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 lg:p-6">
              <p className="text-white font-body font-medium text-sm">Kigali</p>
              <p className="text-white/60 text-xs mt-0.5">One of Africa&apos;s cleanest capitals</p>
            </div>
          </div>

          {/* 4 attraction cards */}
          {FEATURED.slice(0, 4).map((attraction) => (
            <div
              key={attraction.name}
              className="relative h-36 lg:h-40 overflow-hidden group"
            >
              <Image
                src={attraction.image}
                alt={attraction.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-3">
                <p className="text-white font-body font-medium text-xs leading-tight">{attraction.name}</p>
                <p className="text-white/60 text-[10px] mt-0.5">{attraction.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-stone-light text-sm mt-5">
          KG 20 Ave puts you close to the city centre and within reach of Rwanda&apos;s most visited attractions.
          <Link href="/contact" className="text-clay ml-2 hover:underline underline-offset-4">
            See our location →
          </Link>
        </p>
      </div>
    </section>
  );
}

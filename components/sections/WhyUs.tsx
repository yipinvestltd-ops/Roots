import Image from "next/image";
import { MapPin, Sparkles, Tag, Headphones } from "lucide-react";

const PILLARS = [
  {
    icon: MapPin,
    title: "KG 20 Ave",
    desc: "Minutes from the Convention Centre, Kacyiru's business district, and the city's best restaurants.",
  },
  {
    icon: Sparkles,
    title: "Cleaned daily",
    desc: "Fresh linen, clean towels, restocked amenities — every room, every day.",
  },
  {
    icon: Tag,
    title: "$30 – $55 /night",
    desc: "Double rooms to two-bedroom apartments. Breakfast included. No hidden charges.",
  },
  {
    icon: Headphones,
    title: "Always reachable",
    desc: "Late arrival, early checkout, local recommendation — call, WhatsApp, or come to reception.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-ivory">
      {/* Welcome — two-column layout with photo */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-4">
              Roots Inn, Kigali
            </p>
            <h2 className="font-display font-light text-3xl lg:text-5xl text-charcoal leading-tight mb-6">
              Somewhere to come back to.
            </h2>
            <p className="text-stone-light text-base lg:text-lg leading-relaxed mb-10">
              We&apos;re on KG 20 Ave — a short drive from wherever you need to be in Kigali. The rooms are clean, the Wi-Fi works, and someone is always here if you need anything. That&apos;s what we do.
            </p>

            {/* Pillars inline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-clay/10 shrink-0 mt-0.5">
                      <Icon size={14} className="text-clay" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-charcoal text-sm mb-0.5">
                        {pillar.title}
                      </p>
                      <p className="text-stone-light text-xs leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Photo — use the living room shot, it shows space */}
          <div className="relative h-80 lg:h-[520px] overflow-hidden">
            <Image
              src="/images/rooms/two-bedroom/living-room.png"
              alt="Two-bedroom apartment living space at Roots Inn Kigali"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 bg-charcoal/80 px-4 py-2">
              <p className="text-white text-xs font-medium">Two-Bedroom Apartment — $55/night</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

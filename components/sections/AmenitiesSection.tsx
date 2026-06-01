import Image from "next/image";
import { Wifi, Coffee, Car, Sparkles, Headphones, Plane, ChefHat, Zap } from "lucide-react";

const AMENITIES = [
  { icon: Wifi,       label: "Free Wi-Fi",           detail: "Fast enough for calls and remote work" },
  { icon: Coffee,     label: "Daily breakfast",       detail: "Included — served fresh every morning" },
  { icon: Car,        label: "Secure parking",        detail: "On-site, no extra charge" },
  { icon: Sparkles,   label: "Daily housekeeping",    detail: "Fresh linen and towels, every day" },
  { icon: Headphones, label: "24/7 support",          detail: "Always someone to reach" },
  { icon: Plane,      label: "Airport transfer",      detail: "Available on request" },
  { icon: ChefHat,    label: "Full kitchen",          detail: "In both apartment types" },
  { icon: Zap,        label: "Power backup",          detail: "No unexpected outages" },
];

export default function AmenitiesSection() {
  return (
    <section className="bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left — content */}
          <div className="px-5 lg:px-14 py-14 lg:py-24">
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-4">
              What&apos;s included
            </p>
            <h2 className="font-display font-light text-3xl lg:text-4xl text-white mb-10 leading-tight">
              The things that make a stay
              <br />
              <span className="text-white/40 italic">actually comfortable.</span>
            </h2>

            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              {AMENITIES.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-clay/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={13} className="text-clay" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium leading-tight">
                        {item.label}
                      </p>
                      <p className="text-white/40 text-xs mt-0.5 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — dining photo */}
          <div className="relative min-h-[320px] lg:min-h-0 overflow-hidden">
            <Image
              src="/images/dining/dining-area.png"
              alt="Dining area at Roots Inn Kigali"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent lg:from-charcoal/60" />
          </div>

        </div>
      </div>
    </section>
  );
}

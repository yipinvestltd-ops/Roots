import Image from "next/image";

export default function DiningFeature() {
  return (
    <section className="bg-ivory py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-5">
          {/* Main image — full height */}
          <div className="lg:col-span-3 relative h-80 sm:h-[420px] lg:h-[540px] overflow-hidden group">
            <Image
              src="/images/dining/top-view-dining.png"
              alt="Dining at Roots Inn Kigali"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 lg:p-9">
              <p className="text-white/60 text-xs font-medium tracking-widest uppercase mb-2">
                Included every morning
              </p>
              <h3 className="font-display font-light text-white text-3xl lg:text-4xl leading-tight">
                Breakfast before<br />your day starts.
              </h3>
              <p className="text-white/65 text-sm mt-3 max-w-xs leading-relaxed">
                Hot, fresh, and already paid for. No menus, no extra charges — just come down when you&apos;re ready.
              </p>
            </div>
          </div>

          {/* Right column — 3 stacked images */}
          <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-5">
            <div className="relative h-40 lg:h-[170px] overflow-hidden group">
              <Image
                src="/images/dining/breakfast-1.jpg"
                alt="Complimentary breakfast at Roots Inn"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 50vw, 40vw"
              />
            </div>
            <div className="relative h-40 lg:h-[170px] overflow-hidden group">
              <Image
                src="/images/dining/meal-1.jpg"
                alt="Meal served at Roots Inn"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 50vw, 40vw"
              />
            </div>
            {/* Third image — desktop only */}
            <div className="relative h-40 lg:h-[170px] overflow-hidden group hidden lg:block">
              <Image
                src="/images/dining/breakfast-3.jpg"
                alt="Morning breakfast spread at Roots Inn"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="40vw"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

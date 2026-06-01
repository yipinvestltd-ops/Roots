import Image from "next/image";
import Link from "next/link";

const ATTRACTIONS = [
  {
    name: "Kigali Genocide Memorial",
    distance: "12 min drive",
    category: "History & Culture",
    description:
      "A deeply moving tribute to the victims of the 1994 genocide. One of the most important historical sites in Africa — respectfully maintained and soberly presented.",
    image: "/images/attractions/genocide-memorial.webp",
  },
  {
    name: "Inema Arts Center",
    distance: "18 min drive",
    category: "Arts & Culture",
    description:
      "A lively contemporary arts hub founded by two Rwandan brothers. Rotating exhibitions, live music, craft market, and a garden café. A genuine window into Kigali's creative scene.",
    image: "/images/attractions/inema-art.webp",
  },
  {
    name: "Kigali Convention Centre",
    distance: "8 min drive",
    category: "Architecture",
    description:
      "The centrepiece of modern Kigali — a striking copper-domed building that hosts major international conferences. Worth seeing from the outside even if you're not attending an event.",
    image: "/images/attractions/convention-center.webp",
  },
  {
    name: "Kimironko Market",
    distance: "15 min drive",
    category: "Local Life",
    description:
      "Kigali's largest and most vibrant open-air market. Fresh produce, local fabrics, crafts, and street food. The best place to get a real sense of everyday city life.",
    image: "/images/attractions/kimironko-market.webp",
  },
  {
    name: "Nyandungu Eco Park",
    distance: "20 min drive",
    category: "Nature & Outdoors",
    description:
      "A restored wetland park in the heart of Kigali with walking trails, birdwatching, and green open space. Quiet, well-maintained, and free to enter.",
    image: "/images/attractions/nyandungu.webp",
  },
  {
    name: "Kigali City Centre",
    distance: "10 min drive",
    category: "City",
    description:
      "The downtown core — clean, walkable streets lined with restaurants, coffee shops, banks, and boutiques. Easy to explore on foot and very safe by regional standards.",
    image: "/images/attractions/city-center.jpg",
  },
  {
    name: "Akagera National Park",
    distance: "2.5 hr drive",
    category: "Wildlife & Safari",
    description:
      "Rwanda's only savannah national park — home to the Big Five after a successful conservation programme. Day trips and overnight stays available through licensed operators.",
    image: "/images/attractions/akagera.webp",
  },
  {
    name: "Volcanoes National Park",
    distance: "2 hr drive",
    category: "Wildlife & Trekking",
    description:
      "The famous mountain gorilla trekking destination and base of the Virunga volcanoes. One of the most extraordinary wildlife experiences in Africa. Advance permits required.",
    image: "/images/attractions/volcanoes.jpg",
  },
];

// Category colour mapping
const CATEGORY_STYLES: Record<string, string> = {
  "History & Culture": "bg-stone/10 text-stone",
  "Arts & Culture":    "bg-sage/15 text-sage",
  "Architecture":      "bg-clay/10 text-clay",
  "Local Life":        "bg-stone/10 text-stone",
  "Nature & Outdoors": "bg-sage/15 text-sage",
  "City":              "bg-clay/10 text-clay",
  "Wildlife & Safari": "bg-sage/15 text-sage",
  "Wildlife & Trekking": "bg-sage/15 text-sage",
};

export default function AttractionsSection() {
  const featured = ATTRACTIONS.slice(0, 3);   // top row — full cards
  const rest = ATTRACTIONS.slice(3);           // second row — compact cards

  return (
    <section className="bg-linen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-3">
              Around Kigali
            </p>
            <h2 className="font-display font-light text-3xl lg:text-4xl text-charcoal">
              Worth making time for.
            </h2>
            <p className="text-stone-light text-sm mt-2 max-w-lg">
              KG 20 Ave puts you within easy reach of Kigali&apos;s most visited places — from the city centre to national parks.
            </p>
          </div>
          <Link
            href="/gallery"
            className="text-sm font-medium text-clay hover:underline underline-offset-4 shrink-0"
          >
            Photo gallery →
          </Link>
        </div>

        {/* Featured row — 3 tall cards, horizontal scroll on mobile */}
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x scrollbar-hide lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 mb-4">
          {featured.map((a) => (
            <div
              key={a.name}
              className="min-w-[78vw] sm:min-w-[56vw] lg:min-w-0 snap-start group overflow-hidden bg-ivory flex-shrink-0"
            >
              <div className="relative h-52 lg:h-60 overflow-hidden">
                <Image
                  src={a.image}
                  alt={a.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 56vw, 33vw"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span
                    className={`text-[10px] font-medium tracking-wide uppercase px-2 py-1 ${
                      CATEGORY_STYLES[a.category] || "bg-stone/10 text-stone"
                    }`}
                  >
                    {a.category}
                  </span>
                  <span className="text-xs text-stone-light shrink-0">{a.distance}</span>
                </div>
                <h3 className="font-body font-semibold text-charcoal text-base mb-1.5">
                  {a.name}
                </h3>
                <p className="text-stone-light text-xs leading-relaxed">
                  {a.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Rest — compact 2-col / 4-col grid, horizontal scroll on mobile */}
        <div className="flex gap-3 overflow-x-auto pb-2 snap-x scrollbar-hide lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
          {rest.map((a) => (
            <div
              key={a.name}
              className="min-w-[62vw] sm:min-w-[44vw] lg:min-w-0 snap-start group overflow-hidden flex-shrink-0"
            >
              <div className="relative h-36 lg:h-40 overflow-hidden">
                <Image
                  src={a.image}
                  alt={a.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 62vw, (max-width: 1024px) 44vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-3">
                  <p className="text-white font-medium text-xs leading-tight">{a.name}</p>
                  <p className="text-white/55 text-[10px] mt-0.5">{a.distance}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { WHATSAPP_BOOKING_URL, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services & Amenities",
  description:
    "Everything included at Roots Inn Kigali — complimentary breakfast, free Wi-Fi, daily housekeeping, secure parking, airport transfers and 24/7 support.",
};

// Regrouped: core + support — breaks the 7-identical-rows problem
const CORE_SERVICES = [
  {
    name: "Complimentary Breakfast",
    desc: "Served fresh every morning, included in your rate. No booking needed, no extra charge. Come down when you're ready and have a proper meal before your day starts.",
    image: "/images/dining/breakfast-2.jpg",
    alt: "Fresh breakfast at Roots Inn Kigali",
  },
  {
    name: "Free High-Speed Wi-Fi",
    desc: "Available in every room and in the common areas. Fast enough for video calls, remote work, and streaming — not just browsing.",
    image: "/images/dining/dining-area.png",
    alt: "Comfortable space with Wi-Fi at Roots Inn",
  },
  {
    name: "Daily Housekeeping",
    desc: "Rooms are serviced every day. Fresh linen, clean towels, restocked amenities — done quietly while you're out. For long-stay guests, we adjust the schedule to suit your routine.",
    image: "/images/hero/hero-3.png",
    alt: "Clean, well-maintained room at Roots Inn",
  },
  {
    name: "Secure Parking",
    desc: "On-site parking is available for all guests. Secure, no additional charge. Let us know when you book if you'll be arriving by car.",
    image: "/images/kigali/city-3.jpg",
    alt: "Streets near Roots Inn Kigali",
  },
];

const SUPPORT_SERVICES = [
  {
    name: "Airport Transfer",
    desc: "Transfers to and from Kigali International Airport on request. Let us know your arrival or departure time when you book.",
    icon: "✈",
  },
  {
    name: "24/7 Guest Support",
    desc: "Whether you arrive on a late flight or have a question at midnight — there's always someone you can reach by phone or WhatsApp.",
    icon: "◎",
  },
  {
    name: "Full Kitchen (Apartments)",
    desc: "Both the one-bedroom and two-bedroom apartments include a full kitchen. Cook your own meals, store your groceries, feel at home.",
    icon: "⌂",
  },
  {
    name: "Power Backup",
    desc: "Backup power in case of grid outages. Your devices stay charged, your work stays uninterrupted.",
    icon: "⚡",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header — different from other pages: text-only on dark bg, no image */}
      <section className="bg-charcoal pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-white/50 text-xs font-medium tracking-widest uppercase mb-4">
              What&apos;s included
            </p>
            <h1 className="font-display font-light text-white text-4xl lg:text-6xl leading-tight mb-5">
              Every stay, the same
              <br />
              <span className="text-white/40 italic">standard of care.</span>
            </h1>
            <p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-xl">
              Regardless of which room you choose, you get breakfast, Wi-Fi, housekeeping, and someone to call. Here&apos;s everything that comes with your booking.
            </p>
          </div>
        </div>
      </section>

      {/* Core services — 2-col photo grid */}
      <section className="bg-linen py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs font-medium tracking-widest uppercase text-clay mb-8">
            Included in every stay
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {CORE_SERVICES.map((service, i) => (
              <div key={service.name} className="group overflow-hidden bg-ivory">
                <div className={`relative overflow-hidden ${i < 2 ? "h-56 lg:h-64" : "h-48 lg:h-56"}`}>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-body font-semibold text-charcoal text-base mb-2">
                    {service.name}
                  </h2>
                  <p className="text-stone-light text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional services — compact list */}
      <section className="bg-ivory py-12 lg:py-16 border-t border-stone/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-xs font-medium tracking-widest uppercase text-clay mb-8">
            Also available
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {SUPPORT_SERVICES.map((s) => (
              <div key={s.name} className="flex items-start gap-4">
                <span className="text-clay text-xl leading-none shrink-0 mt-0.5">{s.icon}</span>
                <div>
                  <h3 className="font-body font-semibold text-charcoal text-sm mb-1.5">
                    {s.name}
                  </h3>
                  <p className="text-stone-light text-xs leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="font-display font-light text-3xl text-white mb-3">
            Any questions before you book?
          </h2>
          <p className="text-white/60 text-base mb-8">
            Message us on WhatsApp and we&apos;ll reply quickly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-clay hover:bg-clay-dark text-white text-sm font-medium px-8 py-4 transition-colors"
            >
              Book Now
            </a>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="border border-white/30 hover:border-white text-white text-sm font-medium px-8 py-4 transition-colors"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

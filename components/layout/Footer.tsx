import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE, WHATSAPP_BOOKING_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-display text-2xl font-light text-white tracking-wide">
                Roots Inn
              </span>
              <p className="text-[10px] font-medium tracking-widest uppercase text-clay mt-0.5">
                Kigali
              </p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Well-kept rooms and apartments in the heart of Kigali. A clean, comfortable place to come back to — whether you're here for a day or a month.
            </p>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-clay hover:bg-clay-dark text-white text-sm font-medium px-6 py-3 transition-colors"
            >
              Reserve Your Stay
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-xs font-medium tracking-widest uppercase mb-5">
              Pages
            </h3>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs font-medium tracking-widest uppercase mb-5">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href={SITE.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors"
              >
                <MapPin size={15} className="mt-0.5 shrink-0 text-clay" />
                <span>{SITE.address}</span>
              </a>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Phone size={15} className="shrink-0 text-clay" />
                <span>{SITE.phone}</span>
              </a>
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"
              >
                <MessageCircle size={15} className="shrink-0 text-clay" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Mail size={15} className="shrink-0 text-clay" />
                <span>{SITE.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Roots Inn Kigali. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">KG 20 Ave, Kigali, Rwanda</p>
        </div>
      </div>
    </footer>
  );
}

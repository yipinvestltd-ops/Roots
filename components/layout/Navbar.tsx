"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_BOOKING_URL } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-linen/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col leading-none group"
              onClick={() => setOpen(false)}
            >
              <span
                className={`font-display text-xl lg:text-2xl font-light tracking-wide transition-colors ${
                  scrolled || !isHome ? "text-charcoal" : "text-white"
                }`}
              >
                Roots Inn
              </span>
              <span
                className={`text-[10px] font-body font-medium tracking-widest uppercase transition-colors ${
                  scrolled || !isHome ? "text-clay" : "text-white/80"
                }`}
              >
                Kigali
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-clay ${
                    pathname === link.href
                      ? "text-clay"
                      : scrolled || !isHome
                      ? "text-stone"
                      : "text-white/90"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-clay hover:bg-clay-dark text-white text-sm font-medium px-5 py-2.5 transition-colors rounded-sm"
              >
                Book Now
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden p-2 transition-colors ${
                scrolled || !isHome ? "text-charcoal" : "text-white"
              }`}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-8 py-24">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-display text-4xl font-light text-white/90 hover:text-white py-3 border-b border-white/10 transition-colors ${
                  pathname === link.href ? "text-clay" : ""
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-10">
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block bg-clay text-white text-center text-base font-medium py-4 tracking-wide"
            >
              Book Now
            </a>
          </div>

          <div className="mt-auto pb-4">
            <p className="text-white/40 text-sm">KG 20 Ave, Kigali, Rwanda</p>
            <a href="tel:+250780967647" className="text-white/60 text-sm hover:text-white transition-colors">
              +250 780 967 647
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

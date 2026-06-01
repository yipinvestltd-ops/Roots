"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_BOOKING_URL } from "@/lib/constants";

export default function StickyBookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.75);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={WHATSAPP_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between bg-clay text-white px-5 py-4 w-full"
      >
        <div>
          <p className="text-sm font-semibold leading-none">Book Now</p>
          <p className="text-white/60 text-xs mt-1">Rooms from $30/night</p>
        </div>
        <div className="text-white/70 text-sm font-medium">→</div>
      </a>
    </div>
  );
}

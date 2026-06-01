"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/constants";
import Link from "next/link";

interface FAQSectionProps {
  preview?: boolean;
  light?: boolean;
}

export default function FAQSection({ preview = false, light = false }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null);
  const items = preview ? FAQS.slice(0, 3) : FAQS;

  return (
    <section className={`py-16 lg:py-24 ${light ? "bg-charcoal" : "bg-linen"}`}>
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <div className="mb-10">
          <p className={`text-xs font-medium tracking-widest uppercase mb-3 ${light ? "text-clay" : "text-clay"}`}>
            Before you book
          </p>
          <h2 className={`font-display font-light text-3xl lg:text-4xl ${light ? "text-white" : "text-charcoal"}`}>
            Questions we get a lot.
          </h2>
        </div>

        <div className={`divide-y ${light ? "divide-white/10" : "divide-stone/10"}`}>
          {items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className={`w-full flex items-start justify-between py-5 text-left gap-6 group ${
                  light ? "text-white" : "text-charcoal"
                }`}
              >
                <span className={`font-body font-medium text-sm lg:text-base leading-snug ${
                  open === i ? "text-clay" : ""
                }`}>
                  {item.q}
                </span>
                <span className="shrink-0 mt-0.5">
                  {open === i ? (
                    <Minus size={15} className="text-clay" />
                  ) : (
                    <Plus size={15} className={light ? "text-white/40" : "text-stone/40"} />
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-48 pb-5" : "max-h-0"
                }`}
              >
                <p className={`text-sm leading-relaxed ${light ? "text-white/60" : "text-stone-light"}`}>
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {preview && (
          <div className="mt-8 pt-6 border-t border-stone/10">
            <Link
              href="/contact#faq"
              className="text-sm font-medium text-clay hover:underline underline-offset-4"
            >
              More questions answered on the contact page →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

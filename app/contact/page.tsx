"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, MapPin, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";
import FAQSection from "@/components/sections/FAQSection";
import { REVIEWS, SITE, WHATSAPP_BOOKING_URL } from "@/lib/constants";

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="fill-clay text-clay" />
      ))}
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Enquiry from Roots Inn website");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="relative h-64 lg:h-72 overflow-hidden">
        <Image
          src="/images/hero/hero-4.png"
          alt="Contact Roots Inn Kigali"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="absolute inset-0 flex flex-col justify-center px-5 lg:px-8 max-w-7xl mx-auto">
          <p className="text-white/60 text-xs font-medium tracking-widest uppercase mb-3">
            Get in touch
          </p>
          <h1 className="font-display font-light text-white text-4xl lg:text-5xl">
            We&apos;re here to help.
          </h1>
          <p className="text-white/70 text-base mt-3 max-w-md">
            Reach out before or after your booking — we reply quickly.
          </p>
        </div>
      </section>

      {/* Reviews section */}
      <section className="bg-ivory py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-3">
              Guest reviews
            </p>
            <h2 className="font-display font-light text-3xl lg:text-4xl text-charcoal">
              Heard from guests.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.name} className="bg-linen p-6 flex flex-col">
                <StarRating count={review.rating} />
                <blockquote className="mt-4 text-stone text-sm leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-clay/10 flex items-center justify-center shrink-0">
                    <span className="text-clay font-medium text-sm">{review.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-charcoal font-medium text-sm">{review.name}</p>
                    <p className="text-stone-light text-xs">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={SITE.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-clay hover:underline underline-offset-4"
            >
              Leave a review on Google
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* Map + Contact */}
      <section id="map" className="bg-ivory py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-3">
              Location
            </p>
            <h2 className="font-display font-light text-3xl lg:text-4xl text-charcoal">
              Find us on KG 20 Ave.
            </h2>
            <p className="text-stone-light text-base mt-3 max-w-xl">
              We&apos;re on KG 20 Ave, Kigali — easy to reach from the airport and well connected to the city&apos;s main business and leisure areas.
            </p>
          </div>

          {/* Mini Kigali photo strip */}
          <div className="grid grid-cols-3 gap-3 mb-10">
            {["/images/kigali/city-4.jpg", "/images/kigali/city-5.jpg", "/images/kigali/city-6.jpg"].map((src, i) => (
              <div key={i} className="relative h-24 lg:h-32 overflow-hidden">
                <Image src={src} alt="Kigali city" fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="relative w-full h-80 lg:h-[420px] overflow-hidden bg-stone/10">
                <iframe
                  src={SITE.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Roots Inn exact location on Google Maps"
                  className="absolute inset-0"
                />
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={SITE.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-clay hover:bg-clay-dark text-white text-sm font-medium px-6 py-3 transition-colors"
                >
                  <MapPin size={15} />
                  Get Directions
                </a>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 border border-stone/30 hover:border-clay text-stone hover:text-clay text-sm font-medium px-6 py-3 transition-colors"
                >
                  <Phone size={15} />
                  {SITE.phone}
                </a>
              </div>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-body font-semibold text-charcoal text-base mb-4">
                  Contact details
                </h3>
                <div className="flex flex-col gap-4">
                  <a
                    href={SITE.googleMapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm text-stone-light hover:text-charcoal transition-colors"
                  >
                    <MapPin size={15} className="mt-0.5 shrink-0 text-clay" />
                    <span>{SITE.address}</span>
                  </a>
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="flex items-center gap-3 text-sm text-stone-light hover:text-charcoal transition-colors"
                  >
                    <Phone size={15} className="shrink-0 text-clay" />
                    <span>{SITE.phone}</span>
                  </a>
                  <a
                    href={WHATSAPP_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-stone-light hover:text-charcoal transition-colors"
                  >
                    <MessageCircle size={15} className="shrink-0 text-clay" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 text-sm text-stone-light hover:text-charcoal transition-colors"
                  >
                    <Mail size={15} className="shrink-0 text-clay" />
                    <span>{SITE.email}</span>
                  </a>
                </div>
              </div>

              <div className="border-t border-stone/10 pt-6">
                <h3 className="font-body font-semibold text-charcoal text-base mb-3">
                  Hours
                </h3>
                <div className="flex flex-col gap-2 text-sm text-stone-light">
                  <div className="flex justify-between">
                    <span>Check-in</span>
                    <span className="text-charcoal">From 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-out</span>
                    <span className="text-charcoal">By 11:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reception</span>
                    <span className="text-charcoal">24 / 7</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-stone/10 pt-6">
                <a
                  href={WHATSAPP_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-clay hover:bg-clay-dark text-white text-sm font-medium py-4 text-center transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-linen py-16 lg:py-24 border-t border-stone/10">
        <div className="max-w-2xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-3">
              Send a message
            </p>
            <h2 className="font-display font-light text-3xl lg:text-4xl text-charcoal">
              Have a question?
            </h2>
            <p className="text-stone-light text-base mt-3">
              Fill in the form below and we&apos;ll get back to you. For a faster response, message us on WhatsApp.
            </p>
          </div>

          {submitted ? (
            <div className="bg-ivory border border-clay/20 p-8 text-center">
              <p className="font-display text-2xl text-charcoal mb-2">Message sent.</p>
              <p className="text-stone-light text-sm">
                We&apos;ll be in touch shortly. You can also reach us on WhatsApp for a faster reply.
              </p>
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 bg-clay hover:bg-clay-dark text-white text-sm font-medium px-6 py-3 transition-colors"
              >
                Message on WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-charcoal tracking-wide uppercase mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-ivory border border-stone/20 focus:border-clay outline-none text-stone text-sm px-4 py-3 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-charcoal tracking-wide uppercase mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-ivory border border-stone/20 focus:border-clay outline-none text-stone text-sm px-4 py-3 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-charcoal tracking-wide uppercase mb-2">
                  Phone <span className="text-stone-light normal-case tracking-normal font-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-ivory border border-stone/20 focus:border-clay outline-none text-stone text-sm px-4 py-3 transition-colors"
                  placeholder="+250 7XX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-charcoal tracking-wide uppercase mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-ivory border border-stone/20 focus:border-clay outline-none text-stone text-sm px-4 py-3 transition-colors resize-none"
                  placeholder="Tell us your dates, room preference, or any question you have..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-clay hover:bg-clay-dark text-white text-sm font-medium py-4 transition-colors"
                >
                  Send Message
                </button>
                <a
                  href={WHATSAPP_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-stone/30 hover:border-clay text-stone hover:text-clay text-sm font-medium py-4 text-center transition-colors"
                >
                  WhatsApp instead
                </a>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-charcoal py-16">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="font-display font-light text-3xl text-white mb-3">
            Your room is waiting.
          </h2>
          <p className="text-white/60 text-base mb-8">
            Rooms from $30/night. Book directly and we&apos;ll confirm within a few hours.
          </p>
          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-clay hover:bg-clay-dark text-white text-sm font-medium px-10 py-4 transition-colors"
          >
            Book Now
          </a>
        </div>
      </section>
    </>
  );
}

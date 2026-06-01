import type { Metadata } from "next";
import Script from "next/script";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import FeaturedRooms from "@/components/sections/FeaturedRooms";
import DiningFeature from "@/components/sections/DiningFeature";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import AttractionsSection from "@/components/sections/AttractionsSection";
import KigaliExperience from "@/components/sections/KigaliExperience";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import ClosingCTA from "@/components/sections/ClosingCTA";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Roots Inn Kigali — Hotel & Apartments on KG 20 Ave",
  description:
    "Well-kept rooms and apartments in Kigali, Rwanda. From $30/night on KG 20 Ave. Complimentary breakfast, free Wi-Fi, secure parking. Book direct.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Roots Inn",
  description: "Well-kept hotel rooms and apartments in Kigali, Rwanda on KG 20 Ave.",
  telephone: SITE.phoneRaw,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "KG 20 Ave",
    addressLocality: "Kigali",
    addressCountry: "RW",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -1.9440984,
    longitude: 30.1324139,
  },
  priceRange: "$$",
};

export default function Home() {
  return (
    <>
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. Hero */}
      <Hero />
      {/* 2. Why Roots Inn */}
      <WhyUs />
      {/* 3. Rooms */}
      <FeaturedRooms />
      {/* 4. Dining Lounge & Bar */}
      <DiningFeature />
      {/* 5. What's Included */}
      <AmenitiesSection />
      {/* 6. Attractions */}
      <AttractionsSection />
      {/* 7. Kigali Experience — all images combined, slow motion, under attractions */}
      <KigaliExperience />
      {/* 8. Reviews */}
      <ReviewsSection />
      {/* 9. FAQ */}
      <FAQSection preview />
      {/* 10. Closing CTA */}
      <ClosingCTA />
    </>
  );
}

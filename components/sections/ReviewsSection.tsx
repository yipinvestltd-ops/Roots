import { REVIEWS } from "@/lib/constants";
import { SITE } from "@/lib/constants";

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {[0,1,2,3,4].map(i => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M6 1L7.39 4.26L11 4.64L8.5 6.97L9.18 10.5L6 8.77L2.82 10.5L3.5 6.97L1 4.64L4.61 4.26L6 1Z"
            fill="#8B6147"/>
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="bg-ivory py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-start">
          {/* Heading column */}
          <div className="lg:pr-8">
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-3">
              Guest reviews
            </p>
            <h2 className="font-display font-light text-3xl lg:text-4xl text-charcoal leading-tight mb-5">
              In their own words.
            </h2>
            <p className="text-stone-light text-sm leading-relaxed mb-6">
              Guests from across Africa and beyond — short stays, long assignments, family trips.
            </p>
            <a
              href={SITE.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-clay text-clay hover:bg-clay hover:text-white text-xs font-medium px-4 py-2.5 transition-colors tracking-wide"
            >
              Leave a review
            </a>
          </div>

          {/* Reviews — 2-col on desktop */}
          <div className="lg:col-span-2">
            {/* Mobile: horizontal scroll. Desktop: 2-col grid */}
            <div className="flex gap-4 overflow-x-auto pb-3 snap-x scrollbar-hide lg:grid lg:grid-cols-2 lg:overflow-visible lg:pb-0 lg:gap-5">
              {REVIEWS.map((review) => (
                <div
                  key={review.name}
                  className="min-w-[80vw] sm:min-w-[65vw] lg:min-w-0 snap-start bg-linen p-6 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Stars />
                    {/* Large decorative quote — no avatar letter box */}
                    <span className="font-display text-5xl text-clay/20 leading-none select-none mt-[-8px]">&ldquo;</span>
                  </div>
                  <blockquote className="text-stone text-sm leading-relaxed flex-1">
                    {review.text}
                  </blockquote>
                  <div className="mt-5 pt-4 border-t border-stone/10">
                    <p className="text-charcoal font-semibold text-sm">{review.name}</p>
                    <p className="text-stone-light text-xs mt-0.5">{review.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

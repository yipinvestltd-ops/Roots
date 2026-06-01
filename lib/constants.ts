export const SITE = {
  name: "Roots Inn",
  tagline: "Your home in Kigali.",
  subTagline: "Rooms and apartments on KG 20 Ave — breakfast included, Wi-Fi that works.",
  address: "KG 20 Ave, Kigali, Rwanda",
  phone: "+250 780 967 647",
  phoneRaw: "+250780967647",
  whatsapp: "+250780967647",
  email: "rootsinnkigali@gmail.com",
  googleMapsUrl:
    "http://google.com/maps/dir//Roots+Inn,+KG+20+Ave,+Kigali/@-1.9491289,30.1242848,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x19dca71581b6df8f:0xcc8a847345942541!2m2!1d30.1324139!2d-1.9440984?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4!2d30.1302392!3d-1.9440984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca71581b6df8f%3A0xcc8a847345942541!2sRoots%20Inn!5e0!3m2!1sen!2srw!4v1685000000000!5m2!1sen!2srw",
};

export const WHATSAPP_BOOKING_URL = `https://wa.me/${SITE.whatsapp}?text=Hello%20Roots%20Inn%2C%20I%20would%20like%20to%20book%20a%20room.`;

export function getRoomWhatsAppUrl(roomName: string): string {
  const msg = encodeURIComponent(`Hello Roots Inn, I'd like to book the ${roomName}.`);
  return `https://wa.me/${SITE.whatsapp}?text=${msg}`;
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const ROOMS = [
  {
    id: "two-bedroom",
    name: "Two-Bedroom Apartment",
    slug: "two-bedroom",
    price: 55,
    tag: "Best for families & groups",
    description:
      "The two-bedroom apartment is built for families, groups, or anyone who needs real space. There's a full kitchen, a comfortable living area, and two separate bedrooms — everything you'd need for a longer stay without giving up comfort.",
    longDescription:
      "Whether you're here with family, travelling with a colleague, or simply want the space of a full apartment, this is the right choice. The kitchen means you can prepare your own meals, the living area gives you room to spread out, and both bedrooms are properly furnished with good mattresses and storage.",
    amenities: [
      "2 bedrooms",
      "Full kitchen",
      "Living room",
      "2 bathrooms",
      "Free Wi-Fi",
      "Daily housekeeping",
      "Breakfast included",
      "Secure parking",
    ],
    images: [
      "/images/rooms/two-bedroom/bedroom.png",
      "/images/rooms/two-bedroom/living-room.png",
      "/images/rooms/two-bedroom/bathroom.png",
    ],
    featured: true,
  },
  {
    id: "one-bedroom",
    name: "One-Bedroom Apartment",
    slug: "one-bedroom",
    price: 40,
    tag: "Business & leisure",
    description:
      "A well-proportioned apartment that works whether you're here for business or a few days of exploring. The kitchen means you're not eating out for every meal, and the separate living space makes it feel less like a hotel room and more like your own place.",
    longDescription:
      "This apartment suits solo travellers and couples who want more than a standard hotel room. You get a proper bedroom, a living area, and a kitchen — so you're not confined to one space. Good Wi-Fi throughout, daily housekeeping, and breakfast included every morning.",
    amenities: [
      "1 bedroom",
      "Kitchen",
      "Living area",
      "Bathroom",
      "Free Wi-Fi",
      "Daily housekeeping",
      "Breakfast included",
      "Secure parking",
    ],
    images: [
      "/images/rooms/one-bedroom/bedroom.png",
      "/images/rooms/one-bedroom/living-room.png",
      "/images/rooms/one-bedroom/bathroom.png",
    ],
    featured: true,
  },
  {
    id: "twin",
    name: "Double Twin Bedroom",
    slug: "twin",
    price: 35,
    tag: "Two single beds",
    description:
      "Two single beds, a clean bathroom, and everything you need for a comfortable stay. Popular with colleagues travelling together or siblings who'd rather not share a bed.",
    longDescription:
      "A straightforward, well-kept room with two separate single beds. Clean, quiet, and properly maintained — with free Wi-Fi, daily housekeeping, and breakfast included. Good value for two people sharing.",
    amenities: [
      "2 single beds",
      "Bathroom",
      "Free Wi-Fi",
      "Daily housekeeping",
      "Breakfast included",
    ],
    images: [
      "/images/rooms/twin/bedroom.png",
      "/images/rooms/twin/bathroom.png",
    ],
    featured: false,
  },
  {
    id: "deluxe",
    name: "Double Deluxe Bedroom",
    slug: "deluxe",
    price: 30,
    tag: "Most affordable",
    description:
      "A clean, well-furnished double room — the right choice if you want a comfortable base without paying for space you won't use. Good bed, good Wi-Fi, and a fresh breakfast every morning.",
    longDescription:
      "The double deluxe is our most affordable room, but nothing important is missing. The bed is proper, the bathroom is clean, and the Wi-Fi works. If you're in Kigali for work or passing through, this is all you need.",
    amenities: [
      "Double bed",
      "Bathroom",
      "Free Wi-Fi",
      "Daily housekeeping",
      "Breakfast included",
    ],
    images: [
      "/images/rooms/deluxe/bedroom.png",
      "/images/rooms/deluxe/bathroom.png",
    ],
    featured: false,
  },
];

export const AMENITIES = [
  { icon: "wifi", label: "Free High-Speed Wi-Fi", desc: "Reliable throughout the property — good enough for video calls and remote work." },
  { icon: "coffee", label: "Complimentary Breakfast", desc: "Served fresh every morning, included in your rate. No extra charge." },
  { icon: "car", label: "Secure Parking", desc: "On-site parking available for guests travelling by car." },
  { icon: "sparkles", label: "Daily Housekeeping", desc: "Rooms are serviced every day. Fresh linen, clean towels, restocked amenities." },
  { icon: "headset", label: "24/7 Guest Support", desc: "Someone is always available — whether it's 6 AM or midnight." },
  { icon: "plane", label: "Airport Transfer", desc: "Transfers to and from Kigali International Airport, available on request." },
  { icon: "utensils", label: "Full Kitchen (Apartments)", desc: "Both apartment types include a fully equipped kitchen for longer stays." },
  { icon: "zap", label: "Power Backup", desc: "Backup power so you're never left in the dark." },
];

export const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Nairobi",
    rating: 5,
    text: "Clean, comfortable, and well looked after. The staff were helpful throughout our stay and breakfast was a nice touch every morning. We'll be back next time we're in Kigali.",
  },
  {
    name: "James O.",
    location: "Lagos",
    rating: 5,
    text: "I stayed for two weeks on a work assignment. The apartment had everything I needed — kitchen, good Wi-Fi, quiet at night. Genuinely one of the better extended-stay options in the city.",
  },
  {
    name: "Amina K.",
    location: "Kampala",
    rating: 5,
    text: "Great value for the location. The room was spotless, check-in was easy, and it felt nothing like a big hotel — in a good way. Felt like someone actually cared about the place.",
  },
  {
    name: "David R.",
    location: "London",
    rating: 5,
    text: "Stayed here for a week while visiting Kigali for the first time. The team was incredibly helpful with local recommendations. The apartment was spotless and breakfast was always ready on time.",
  },
];

export const FAQS = [
  {
    q: "What time is check-in and check-out?",
    a: "Check-in is from 2:00 PM. Check-out is by 11:00 AM. If you need a different arrangement, contact us in advance and we'll do our best to help.",
  },
  {
    q: "Is breakfast included in the room rate?",
    a: "Yes. A complimentary breakfast is included with every stay, served each morning in the dining area.",
  },
  {
    q: "Do you offer long-stay rates?",
    a: "Yes. If you're staying a week or more, get in touch and we'll work out a rate that makes sense for your stay.",
  },
  {
    q: "Is parking available?",
    a: "Yes, secure on-site parking is available for guests at no extra charge.",
  },
  {
    q: "Do the apartments have kitchens?",
    a: "Both the one-bedroom and two-bedroom apartments have full kitchens with cooking facilities.",
  },
  {
    q: "Can you arrange airport transfers?",
    a: "Yes, airport transfers are available on request. Contact us when you book and we'll arrange it.",
  },
  {
    q: "What's nearby?",
    a: "You're a short drive from the Kigali Convention Centre, Kimironko Market, Nyandungu Eco Park, and the city centre. We're happy to suggest restaurants and things to do.",
  },
  {
    q: "How do I confirm a booking?",
    a: "Send us a message on WhatsApp or call +250 780 967 647. We'll confirm your dates and room within a few hours.",
  },
];

export const ATTRACTIONS = [
  { name: "Kigali City Centre", desc: "10 min drive", image: "/images/attractions/city-center.jpg" },
  { name: "Kigali Convention Centre", desc: "8 min drive", image: "/images/attractions/convention-center.webp" },
  { name: "Kimironko Market", desc: "15 min drive", image: "/images/attractions/kimironko-market.webp" },
  { name: "Kigali Genocide Memorial", desc: "12 min drive", image: "/images/attractions/genocide-memorial.webp" },
  { name: "Nyandungu Eco Park", desc: "20 min drive", image: "/images/attractions/nyandungu.webp" },
  { name: "Inema Arts Center", desc: "18 min drive", image: "/images/attractions/inema-art.webp" },
  { name: "Akagera National Park", desc: "2.5 hr drive", image: "/images/attractions/akagera.webp" },
  { name: "Volcanoes National Park", desc: "2 hr drive", image: "/images/attractions/volcanoes.jpg" },
  { name: "Lake Kivu", desc: "2.5 hr drive", image: "/images/attractions/lake-kivu.webp" },
  { name: "Nyungwe Forest", desc: "4 hr drive", image: "/images/attractions/nyungwe.webp" },
];

export const SERVICES = [
  {
    name: "Accommodation",
    tagline: "Rooms and apartments for every kind of stay",
    description:
      "From a clean double room for a single night to a two-bedroom apartment for a month-long stay, every room at Roots Inn is maintained to the same standard. You'll find a proper bed, a clean bathroom, and everything in working order when you arrive.",
    image: "/images/hero/hero-2.png",
    alt: "Well-furnished room at Roots Inn Kigali",
  },
  {
    name: "Complimentary Breakfast",
    tagline: "Start each morning well",
    description:
      "A fresh breakfast is served every morning and included in your rate. No booking needed, no extra charge. Come down when you're ready and have a proper meal before your day starts.",
    image: "/images/dining/breakfast-2.jpg",
    alt: "Fresh breakfast served at Roots Inn",
  },
  {
    name: "Free High-Speed Wi-Fi",
    tagline: "Reliable internet throughout the property",
    description:
      "Wi-Fi is available in every room and in the common areas. It's fast enough for video calls, remote work, and streaming — not just browsing. We know reliable internet isn't optional for most guests.",
    image: "/images/dining/dining-area.png",
    alt: "Comfortable dining area with Wi-Fi at Roots Inn",
  },
  {
    name: "Secure Parking",
    tagline: "On-site parking at no extra cost",
    description:
      "If you're travelling by car, on-site parking is available for all guests. Secure, well-lit, and no additional charge. Let us know when you book if you'll be arriving by car.",
    image: "/images/kigali/city-2.jpg",
    alt: "Kigali streets near Roots Inn",
  },
  {
    name: "Daily Housekeeping",
    tagline: "Your room, reset every day",
    description:
      "Rooms are serviced daily. Fresh linen, clean towels, restocked amenities — done quietly and professionally while you're out. For long-stay guests, we adjust the schedule to suit your routine.",
    image: "/images/hero/hero-3.png",
    alt: "Clean, well-maintained room at Roots Inn",
  },
  {
    name: "Airport Transfer",
    tagline: "A smooth start and end to your trip",
    description:
      "We can arrange transfers to and from Kigali International Airport on request. Let us know your arrival or departure time when you book, and we'll sort it. No searching for a taxi when you land.",
    image: "/images/kigali/city-1.jpg",
    alt: "Kigali streets and transport",
  },
  {
    name: "24/7 Guest Support",
    tagline: "Someone is always available",
    description:
      "Whether you arrive on a late flight, need a recommendation at 7 AM, or have a question at any hour — there's always someone you can reach. Call us, message us on WhatsApp, or come to reception.",
    image: "/images/hero/hero-4.png",
    alt: "Roots Inn front desk and service",
  },
];

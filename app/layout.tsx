import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyBookingBar from "@/components/ui/StickyBookingBar";

export const metadata: Metadata = {
  title: {
    default: "Roots Inn Kigali — Hotel & Apartments on KG 20 Ave",
    template: "%s | Roots Inn Kigali",
  },
  description:
    "Well-kept rooms and apartments in Kigali, Rwanda. From $30/night on KG 20 Ave. Complimentary breakfast, free Wi-Fi, secure parking. Book direct.",
  keywords: ["hotel kigali", "apartments kigali", "accommodation kigali", "roots inn", "KG 20 Ave", "rwanda hotel"],
  openGraph: {
    title: "Roots Inn Kigali — Hotel & Apartments",
    description: "Your home in Kigali. Rooms from $30/night on KG 20 Ave.",
    images: ["/images/hero/hero-1.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-linen text-stone antialiased">
        <Navbar />
        <main>{children}</main>
        <StickyBookingBar />
        <Footer />
      </body>
    </html>
  );
}

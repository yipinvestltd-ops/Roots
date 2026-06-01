import { WHATSAPP_BOOKING_URL, getRoomWhatsAppUrl } from "@/lib/constants";

interface BookingButtonProps {
  label?: string;
  roomName?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function BookingButton({
  label = "Book Now",
  roomName,
  variant = "primary",
  size = "md",
  className = "",
}: BookingButtonProps) {
  const href = roomName ? getRoomWhatsAppUrl(roomName) : WHATSAPP_BOOKING_URL;

  const base = "inline-block font-medium tracking-wide transition-all duration-200 text-center";

  const variants = {
    primary: "bg-clay hover:bg-clay-dark text-white",
    outline: "border border-clay text-clay hover:bg-clay hover:text-white",
    ghost: "text-clay hover:underline underline-offset-4",
  };

  const sizes = {
    sm: "text-xs px-4 py-2.5",
    md: "text-sm px-6 py-3",
    lg: "text-sm px-8 py-4",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {label}
    </a>
  );
}

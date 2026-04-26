import { useConfig } from "@/features/invitation/hooks/use-config";
import { Clock, MapPin, CalendarCheck, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { formatEventDate } from "@/lib/format-event-date";

export default function Place() {
  const config = useConfig(); // Use hook to get config from API or fallback to static

  return (
    <>
     <div style={{ backgroundColor: "#95A58D", marginBottom: "-8px" }}>
  <svg
    viewBox="0 0 1440 60"
    preserveAspectRatio="none"
    style={{ display: "block", width: "100%", height: "60px" }}
  >
    <path
      d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
      fill="#DADEDF"
    />
  </svg>
</div>
    </>
  );
}

function Diamond({ size = "default" }) {
  const sizeClasses =
    size === "large"
      ? "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
      : "w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6";

  return (
    <svg
      viewBox="0 0 18 18"
      className={`flex-shrink-0 mx-1 sm:mx-2 ${sizeClasses}`}
    >
      <rect
        x="4"
        y="4"
        width="10"
        height="10"
        fill="none"
        stroke="#95A58D"
        strokeWidth="0.9"
        transform="rotate(45,9,9)"
      />
      <rect
        x="6.5"
        y="6.5"
        width="5"
        height="5"
        fill="#95A58D"
        transform="rotate(45,9,9)"
      />
    </svg>
  );
}

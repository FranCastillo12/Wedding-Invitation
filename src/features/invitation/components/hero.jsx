import { useEffect, useState } from "react";
import { useConfig } from "@/features/invitation/hooks/use-config";
import { formatEventDate } from "@/lib/format-event-date";
import { getGuestName } from "@/lib/invitation-storage";
import "../../../index.css"

export default function Hero() {
  const config = useConfig();
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const name = getGuestName();
    if (name) setGuestName(name);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 md:py-14 lg:py-20 overflow-hidden"
      style={{ backgroundColor: "#DADEDF" }}
    >
      {/* Marco exterior */}
      <div
        className="absolute inset-2 sm:inset-3 md:inset-6 lg:inset-5 border"
        style={{ borderColor: "#5D7B9F", borderWidth: "0.6px" }}
      />
      {/* Marco interior */}
      <div
        className="absolute inset-6 sm:inset-8 md:inset-16 lg:inset-15 border"
        style={{ borderColor: "#5D7B9F", borderWidth: "0.4px" }}
      />

      {/* Ornamento top — oculto en landscape móvil */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex items-center ornamento-top landscape-hide"
       
      >
        <div className="h-px" style={{ width: "clamp(40px, 18vw, 380px)", backgroundColor: "#95A58D" }} />
        <Diamond />
        <div className="h-px" style={{ width: "clamp(40px, 18vw, 380px)", backgroundColor: "#95A58D" }} />
      </div>

      {/* Ornamento bottom — oculto en landscape móvil */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex  items-center ornamento-bottom landscape-hidden"
       
      >
        <div className="h-px" style={{ width: "clamp(40px, 18vw, 380px)", backgroundColor: "#95A58D" }} />
        <Diamond />
        <div className="h-px" style={{ width: "clamp(40px, 18vw, 380px)", backgroundColor: "#95A58D" }} />
      </div>

      {/* Contenido */}
      <div className="text-center relative z-10 flex flex-col items-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl w-full">

        {/* Nombre del invitado si existe */}
        {guestName && (
          <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 tracking-widest" style={{ color: "#5D7B9F" }}>
            Para: {guestName}
          </p>
        )}

        {/* Adorno encima de "Nos casamos" */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
          <div className="w-10 sm:w-12 md:w-20 lg:w-28 h-px" style={{ backgroundColor: "#95A58D" }} />
          <Diamond />
          <div className="w-10 sm:w-12 md:w-20 lg:w-28 h-px" style={{ backgroundColor: "#95A58D" }} />
        </div>

        {/* Nos casamos */}
        <p
          className="tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg mb-6 sm:mb-8 md:mb-10 lg:mb-14"
          style={{ color: "#95A58D" }}
        >
          NOS CASAMOS
        </p>

        {/* Nombre 1 — único h1 */}
        <h1
          className="leading-none mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          style={{
            fontFamily: "Dancing Script",
            fontSize: "clamp(40px, 14vw, 120px)",
            fontWeight: 700,
            fontStyle: "italic",
            color: "#3a4a5a",
          }}
        >
          {config.boyfriendName}
        </h1>

        {/* Divisor con & */}
        <div className="flex items-center justify-center w-full mb-8">
          <div className="h-px flex-shrink-0" style={{ width: "clamp(40px, 15vw, 160px)", backgroundColor: "rgba(93,123,159,0.25)" }} />
          <div
            className="rounded-full flex items-center justify-center border flex-shrink-0 mx-3"
            style={{ width: "clamp(32px, 5vw, 52px)", height: "clamp(32px, 5vw, 52px)", borderColor: "rgba(93,123,159,0.35)" }}
          >
            <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "clamp(13px, 2.5vw, 22px)", color: "#5D7B9F" }}>
              &amp;
            </span>
          </div>
          <div className="h-px flex-shrink-0" style={{ width: "clamp(40px, 15vw, 160px)", backgroundColor: "rgba(93,123,159,0.25)" }} />
        </div>

        {/* Nombre 2 — h2 para SEO correcto */}
        <h2
          className="leading-none mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          style={{
            fontFamily: "Dancing Script",
            fontSize: "clamp(40px, 14vw, 120px)",
            fontWeight: 700,
            fontStyle: "italic",
            color: "#3a4a5a",
          }}
        >
          {config.GirlfriendName}
        </h2>

        {/* Fecha */}
        <p
          className="tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-2 sm:mb-3 md:mb-4 lg:mb-5"
          style={{ color: "#5D7B9F" }}
        >
          {formatEventDate(config.date)}
        </p>

        {/* Lugar */}
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-5 md:mb-6 lg:mb-8"
          style={{ fontFamily: "Georgia, serif", fontStyle: "italic", color: "#95A58D" }}
        >
          {config.venue}
        </p>

        {/* Adorno debajo del lugar */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <div className="w-10 sm:w-12 md:w-20 lg:w-28 h-px" style={{ backgroundColor: "#95A58D" }} />
          <Diamond />
          <div className="w-10 sm:w-12 md:w-20 lg:w-28 h-px" style={{ backgroundColor: "#95A58D" }} />
        </div>

        {/* Flecha scroll */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          <svg
            className="w-4 h-6 sm:w-5 sm:h-7 md:w-6 md:h-8 lg:w-7 lg:h-10"
            viewBox="0 0 18 28"
            aria-label="Desplazar hacia abajo"
            role="img"
          >
            <line x1="9" y1="0" x2="9" y2="20" stroke="rgba(93,123,159,0.35)" strokeWidth="1" />
            <polyline points="2,14 9,22 16,14" fill="none" stroke="rgba(93,123,159,0.35)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Media query para landscape móvil */}
      <style>{`
        @media (max-height: 500px) and (orientation: landscape) {
          .landscape-hide { display: none; }
        }
      `}</style>
    </section>
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
      aria-hidden="true"
    >
      <rect x="4" y="4" width="10" height="10" fill="none" stroke="#95A58D" strokeWidth="0.9" transform="rotate(45,9,9)" />
      <rect x="6.5" y="6.5" width="5" height="5" fill="#95A58D" transform="rotate(45,9,9)" />
    </svg>
  );
}
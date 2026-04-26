import { useConfig } from "@/features/invitation/hooks/use-config";
import { Clock, MapPin, CalendarCheck, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { formatEventDate } from "@/lib/format-event-date";

export default function Place() {
  const config = useConfig(); // Use hook to get config from API or fallback to static

  return (
    <>
      {/* Location section */}
      <section
        id="location"
        className="min-h-screen relative overflow-hidden"
        style={{ backgroundColor: "#DADEDF" }}
      >
        <div className="container mx-auto px-4 py-5 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >




      <h1
      className="text-4xl sm:text-5xl mb-2"
      style={{ fontFamily: "Dancing Script", color: "#95A58D" }}
    >
     Detalles del día
    </h1>



      


         <p
      className="mb-10 text-sm tracking-wide"
      style={{ fontFamily: "Georgia, serif",fontSize: "clamp(18px, 6vw, 10px)",color: "#3a4a5a" }}
    >
      Todo lo que necesitas saber
    </p>
      
        <div style={{
        
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          margin: "2% 0 20px",
        }}>
          <div style={{ height: "1px", width: "180px", background: "rgba(149,165,141,0.45)" }} />
          <div style={{ width: "7px", height: "7px", background: "rgba(149,165,141,0.6)", transform: "rotate(45deg)" }} />
          <div style={{ height: "1px", width: "180px", background: "rgba(149,165,141,0.45)" }} />
        </div>

          </motion.div>

          {/* Location Content */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className="rounded-2xl p-10 sm:p-14 border"
                style={{
                     background: "rgba(255,255,255,0.45)",
            border: "1px solid rgba(93,123,159,0.18)",
            borderRadius: "2px",
            padding: "52px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
                }}
              >
                <div className="flex flex-col items-center">
                  <div
                    className="flex items-center justify-center flex-shrink-0 border"
                    style={{
                            width: "64px",
              height: "64px",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(93,123,159,0.2)",
              flexShrink: 0,
                    }}
                  >
                    <MapPin
                      style={{
                        width: "clamp(14px, 2.5vw, 28px)",
                        height: "clamp(14px, 2.5vw, 20px)",
                        color: "#5D7B9F",
                      }}
                    />
                  </div>
                </div>

    
                <h2
                  className="text-center mb-8"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(26px, 5vw, 32px)",
                    fontStyle: "italic",
                    fontWeight: 700,
                    color: "#3a4a5a",
                  }}
                >
                  {config.location}
                </h2>

                {/* Imagen centrada — más grande */}
                <div className="flex justify-center mb-8">
                  <img
                    src="/public/Hotelmarriot.jpeg"
                    alt="Hotel Marriot"
                    className="rounded-xl object-cover border"
                    style={{
                      width: "clamp(240px, 80%, 680px)",
                      maxHeight: "380px",
                      borderColor: "rgba(93,123,159,0.2)",
                    }}
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col items-center gap-4 mb-10">
                  <div className="flex items-center gap-3">
                    <CalendarCheck
                      className="w-5 h-5"
                      style={{ color: "#5D7B9F" }}
                    />
                    <p
                      style={{
                        fontSize: "clamp(13px, 2.5vw, 16px)",
                        color: "#3a4a5a",
                      }}
                    >
                      {formatEventDate(config.date)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5" style={{ color: "#5D7B9F" }} />
                    <p
                      style={{
                        fontSize: "clamp(13px, 2.5vw, 16px)",
                        color: "#3a4a5a",
                      }}
                    >
                      De {config.time}
                    </p>
                  </div>
                </div>

                {/* Divisor */}
                <div
                  className="h-px mb-8"
                  style={{ backgroundColor: "rgba(149,165,141,0.35)" }}
                />
{/* Botones */}
<div className="flex flex-row gap-3 w-full">
  {/* Botón: Ver en el mapa */}
  <motion.a
    href={config.maps_url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="flex-1 flex items-center justify-center gap-2 px-4 py-4 rounded-xl border transition-colors"
    style={{
      backgroundColor: "rgba(255,255,255,0.5)",
      borderColor: "rgba(93,123,159,0.25)",
      color: "#5D7B9F",
      fontSize: "14px",
      minHeight: "54px",
    }}
  >
    <MapPin className="w-4 h-4 flex-shrink-0" />
    <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", whiteSpace: "nowrap" }}>
      Ver en el mapa
    </span>
  </motion.a>

  {/* Botón: Añadir al calendario */}
  <motion.a
    href={config.calendar_url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="flex-1 flex items-center justify-center gap-2 px-4 py-4 rounded-xl border transition-colors"
    style={{
      backgroundColor: "rgba(255,255,255,0.5)",
      borderColor: "rgba(93,123,159,0.25)",
      color: "#5D7B9F",
      fontSize: "14px",
      minHeight: "54px",
    }}
  >
    <CalendarCheck className="w-4 h-4 flex-shrink-0" />
    <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", whiteSpace: "nowrap" }}>
      Añadir al calendario
    </span>
  </motion.a>
</div>

            
              </div>
            </motion.div>
          </div>
        </div>
      </section>
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

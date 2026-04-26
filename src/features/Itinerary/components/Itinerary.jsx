import { useConfig } from "@/features/invitation/hooks/use-config";
import { Clock, MapPin, CalendarCheck, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { formatEventDate } from "@/lib/format-event-date";
import {
  Church,
  UtensilsCrossed,
  Music,
  Blend,
  Martini,
  Heart,
  PartyPopper,
} from "lucide-react";

export default function Itinerary() {
  const config = useConfig(); // Use hook to get config from API or fallback to static

  const itinerario = [
    {
      icon: Heart,
      hora: "......",
      titulo: "Llegada de invitados",
      descripcion: "Descripcion",
    },
    {
      icon: Blend,
      hora: "......",
      titulo: "Boda",
      descripcion: "Descripcion",
    },
    {
      icon: Martini,
      hora: "....",
      titulo: "Cóctel",
      descripcion: "Descripcion",
    },
    {
      icon: Music,
      hora: "....",
      titulo: "Fiesta",
      descripcion: "Descripcion",
    },
    {
      icon: UtensilsCrossed,
      hora: ".....",
      titulo: "Cena",
      descripcion: "Descripcion",
    },
    {
      icon: PartyPopper,
      hora: "....",
      titulo: "Despedida",
      descripcion: "Descripcion",
    },
  ];

  return (
  <>
      <section
        id="itinerario"
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
    Programa del día
    </h1>    


         <p
      className="mb-10 text-sm tracking-wide"
      style={{ fontFamily: "Georgia, serif",fontSize: "clamp(18px, 6vw, 10px)",color: "#3a4a5a" }}
    >
      Lo que tenemos planeado
    </p>



      
      
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          margin: "2% 0 40px",
        }}>
          <div style={{ height: "1px", width: "180px", background: "rgba(149,165,141,0.45)" }} />
          <div style={{ width: "7px", height: "7px", background: "rgba(149,165,141,0.6)", transform: "rotate(45deg)" }} />
          <div style={{ height: "1px", width: "180px", background: "rgba(149,165,141,0.45)" }} />
        </div>

          </motion.div>



          {/* Lista */}
          <div className="flex flex-col gap-0 max-w-2xl mx-auto">
            {itinerario.map((item, index) => (
              <div key={index} className="flex gap-6 sm:gap-10">

                {/* Línea de tiempo */}
                <div className="flex flex-col items-center">
                  <div
                    className="flex items-center justify-center flex-shrink-0 border"
                    style={{
                      width: "clamp(48px, 7vw, 64px)",   // ⬆️ era 36–48px
                      height: "clamp(48px, 7vw, 64px)",  // ⬆️ era 36–48px
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.4)",
                      borderColor: "rgba(93,123,159,0.25)",
                    }}
                  >
                    <item.icon
                      style={{
                        width: "clamp(20px, 3vw, 27px)",   // ⬆️ era 14–20px
                        height: "clamp(20px, 3vw, 27px)",  // ⬆️ era 14–20px
                        color: "#5D7B9F",
                      }}
                    />
                  </div>
                  {index < itinerario.length - 1 && (
                    <div
                      className="w-px flex-1 my-2"
                      style={{ backgroundColor: "rgba(149,165,141,0.4)" }}
                    />
                  )}
                </div>

                {/* Contenido */}
                <div className="pb-10 sm:pb-12 flex-1">
                  <p
                    className="tracking-widest mb-1"
                    style={{
                      fontSize: "clamp(12px, 2vw, 14px)", // ⬆️ era 9–11px
                      color: "#95A58D",
                    }}
                  >
                    {item.hora}
                  </p>
                  <h4
                    className="mb-2"
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "clamp(22px, 4vw, 22px)", // ⬆️ era 16–22px
                      fontStyle: "italic",
                      fontWeight: 700,
                      color: "#3a4a5a",
                    }}
                  >
                    {item.titulo}
                  </h4>
                  <p
                    style={{
                      fontSize: "clamp(15px, 2.5vw, 14px)", // ⬆️ era 12–14px
                      color: "rgba(58,74,90,0.65)",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.descripcion}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

function Diamond() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 18 18"
      className="flex-shrink-0 mx-1"
    >
      <rect
        x="4"
        y="4"
        width="10"
        height="10"
        fill="none"
        stroke="rgba(149,165,141,0.65)"
        strokeWidth="0.9"
        transform="rotate(45,9,9)"
      />
      <rect
        x="6.5"
        y="6.5"
        width="5"
        height="5"
        fill="rgba(149,165,141,0.35)"
        transform="rotate(45,9,9)"
      />
    </svg>
  );
}
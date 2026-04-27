import { useConfig } from "@/features/invitation/hooks/use-config";
import { Shirt } from "lucide-react";
import { motion } from "framer-motion";

export default function DressCode() {
  const config = useConfig();

  return (
    <section
      id="DressCode"
      style={{ backgroundColor: "#DADEDF" }}
    >
      <div   className="container mx-auto px-4 py-5 relative z-10"
      style={{ maxWidth: "960px", margin: "0 auto" }}>

    
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
    Vestimenta
    </h1>


        
         <p
      className="mb-10 text-sm tracking-wide"
      style={{ fontFamily: "Georgia, serif",fontSize: "clamp(18px, 6vw, 10px)",color: "#3a4a5a" }}
    >
        Código de vestimenta
    </p>

        {/* Separador */}
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


        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
          {/* Ícono */}
          <div style={{
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
          }}>
            <Shirt size={28} color="#5D7B9F" strokeWidth={1.3} />
          </div>

          {/* Título de la card */}
          <p style={{
            textAlign: "center",
            fontFamily: "Georgia, serif",
            fontSize: "clamp(20px, 2.5vw, 24px)",
            fontStyle: "italic",
            fontWeight: 700,
            color: "#3a4a5a",
            marginBottom: "16px",
          }}>
            Etiqueta formal
          </p>

          {/* Descripción */}
          <p style={{
            textAlign: "center",
            fontSize: "clamp(14px, 1.8vw, 16px)",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            color: "rgba(58,74,90,0.65)",
            lineHeight: 1.85,
            maxWidth: "480px",
            margin: "0 0 36px",
          }}>
            Deseamos que sea un evento formal. Se pide evitar
            tonos beige y blancos tanto para hombres como para mujeres.
          </p>

          {/* Divisor */}
          <div style={{
            width: "100%",
            maxWidth: "480px",
            height: "1px",
            background: "rgba(149,165,141,0.35)",
            margin: "0 0 32px",
          }} />

          {/* Chips de colores */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
          }}>
            {[
              { label: "Evitar", color: "#e8e0d0", text: "Beige / Blanco", avoid: true },
              { label: "Sugerido", color: "#3a4a5a", text: "Tonos oscuros" },
              { label: "Sugerido", color: "#5D7B9F", text: "Azules" },
              { label: "Sugerido", color: "#95A58D", text: "Verdes apagados" },
            ].map((chip) => (
              <div
                key={chip.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  background: "rgba(255,255,255,0.5)",
                  border: "1px solid rgba(149,165,141,0.25)",
                  borderRadius: "2px",
                }}
              >
                <div style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  backgroundColor: chip.color,
                  border: chip.avoid ? "1.5px solid rgba(93,123,159,0.35)" : "none",
                  flexShrink: 0,
                  position: "relative",
                }}>
                  {chip.avoid && (
                    <svg
                      viewBox="0 0 14 14"
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                    >
                      <line x1="2" y1="2" x2="12" y2="12" stroke="rgba(93,123,159,0.55)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )}
                </div>
                <span style={{
                  fontSize: "12px",
                  color: "rgba(58,74,90,0.7)",
                  letterSpacing: "0.05em",
                }}>
                  {chip.text}
                </span>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
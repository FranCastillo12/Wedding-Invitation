// Footer.jsx
import { motion } from "framer-motion";
import { useConfig } from "@/features/invitation/hooks/use-config";
import { formatEventDate } from "@/lib/format-event-date";

export default function Footer() {
  const config = useConfig();

  return (
    <footer
      style={{ backgroundColor: "#DADEDF" }}
      className="relative overflow-hidden px-6 py-16 flex flex-col items-center text-center"
    >
      {/* Línea top */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: "0.6px",
          width: "100%",
          maxWidth: "480px",
          backgroundColor: "rgba(93,123,159,0.3)",
          marginBottom: "48px",
          transformOrigin: "center",
        }}
      />

      {/* Frase */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        style={{
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(14px, 2vw, 17px)",
          color: "rgba(58,74,90,0.55)",
          maxWidth: "360px",
          lineHeight: 1.85,
          marginBottom: "40px",
          letterSpacing: "0.01em",
        }}
      >
        "El amor no se mira, el amor se ve cuando dos personas miran juntos en la misma dirección."
      </motion.p>

      {/* Diamante decorativo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.35 }}
        style={{ marginBottom: "32px" }}
      >
        <Diamond />
      </motion.div>

      {/* Nombres */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.45 }}
        style={{
          fontFamily: "Dancing Script",
          fontSize: "clamp(32px, 6vw, 52px)",
          fontWeight: 700,
          fontStyle: "italic",
          color: "#3a4a5a",
          lineHeight: 1.1,
          marginBottom: "16px",
        }}
      >
        {config.boyfriendName}{" "}
        <span style={{ color: "#5D7B9F", fontSize: "0.7em" }}>&amp;</span>{" "}
        {config.GirlfriendName}
      </motion.p>

      {/* Fecha */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.6 }}
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(10px, 1.5vw, 12px)",
          letterSpacing: "0.3em",
          color: "#95A58D",
          textTransform: "uppercase",
          marginBottom: "48px",
        }}
      >
        {formatEventDate(config.date)}
      </motion.p>

      {/* Línea bottom */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
        style={{
          height: "0.6px",
          width: "100%",
          maxWidth: "480px",
          backgroundColor: "rgba(93,123,159,0.3)",
          marginBottom: "24px",
          transformOrigin: "center",
        }}
      />

      {/* Crédito */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.8 }}
        style={{
          fontSize: "10px",
          letterSpacing: "0.2em",
          color: "rgba(93,123,159,0.4)",
          textTransform: "uppercase",
        }}
      >
        Con amor · {new Date().getFullYear()}
      </motion.p>
    </footer>
  );
}

function Diamond() {
  return (
    <svg viewBox="0 0 18 18" width="20" height="20" aria-hidden="true">
      <rect x="4" y="4" width="10" height="10" fill="none" stroke="#95A58D" strokeWidth="0.9" transform="rotate(45,9,9)" />
      <rect x="6.5" y="6.5" width="5" height="5" fill="#95A58D" transform="rotate(45,9,9)" />
    </svg>
  );
}
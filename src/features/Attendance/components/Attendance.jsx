import { useState, useEffect, useRef } from "react";
import { useConfig } from "@/features/invitation/hooks/use-config";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

// ── Helpers ───────────────────────────────────────────────────────────────────
const COLORS = ["#8FA886", "#5D7B9F", "#95A58D", "#C8B8A2", "#D4C5B0", "#7A9E8E", "#6B8FAD"];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

// ── Confetti ──────────────────────────────────────────────────────────────────
function Confetti({ active }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particles.current = Array.from({ length: 120 }, () => ({
      x: randomBetween(canvas.width * 0.2, canvas.width * 0.8),
      y: randomBetween(-20, -80),
      vx: randomBetween(-4, 4),
      vy: randomBetween(2, 7),
      size: randomBetween(5, 11),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: randomBetween(0, 360),
      rotationSpeed: randomBetween(-4, 4),
      shape: Math.random() > 0.5 ? "rect" : "circle",
      opacity: 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.12;
        p.rotation += p.rotationSpeed;
        p.opacity -= 0.008;

        if (p.opacity <= 0) return;

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;

        if (p.shape === "rect") {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      const alive = particles.current.some((p) => p.opacity > 0 && p.y < canvas.height);
      if (alive) {
        animRef.current = requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 999 }}
    />
  );
}



// ── Attendance ────────────────────────────────────────────────────────────────
export default function Attendance({ onSubmit }) {
  const config = useConfig();

  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    asiste: null,
    espacios: 1,
  });
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = "Requerido";
    if (!form.correo.trim() || !/\S+@\S+\.\S+/.test(form.correo)) e.correo = "Correo inválido";
    if (form.asiste === null) e.asiste = "Seleccioná una opción";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    if (form.asiste) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    }
    setSubmitted(true);
    onSubmit?.(form);
  };

  const inputStyle = (hasError) => ({
    width: "100%",
    padding: "10px 14px",
    fontFamily: "Georgia, serif",
    fontSize: "14px",
    color: "#2E3D4F",
    backgroundColor: "rgba(255,255,255,0.6)",
    border: `1px solid ${hasError ? "#c0796a" : "rgba(93,123,159,0.25)"}`,
    borderRadius: "3px",
    outline: "none",
    transition: "border-color 0.2s ease",
    boxSizing: "border-box",
  });

  const labelStyle = {
    fontFamily: "Georgia, serif",
    fontSize: "10px",
    letterSpacing: "0.3em",
    color: "#95A58D",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "6px",
  };

  return (
    <>
      <Confetti active={showConfetti} />

      <section
        id="asistencia"
         className="min-h-screen relative overflow-hidden"
        style={{ backgroundColor: "#DADEDF",}}
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
    Confirma tu Asistencia
    </h1>



         <p
      className="mb-10 text-sm tracking-wide"
      style={{ fontFamily: "Georgia, serif",fontSize: "clamp(18px, 6vw, 10px)",color: "#3a4a5a" }}
    >
     Esperamos verte allí
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
 
          {/* RSVP Card */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "min(100%, 520px)" }}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      backgroundColor: "#DADEDF",
                      border: "1px solid rgba(93,123,159,0.2)",
                      borderRadius: "4px",
                      padding: "52px 40px",
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <div style={{
                      position: "absolute", inset: "10px",
                      border: "1px solid rgba(149,165,141,0.15)",
                      borderRadius: "2px", pointerEvents: "none",
                    }} />

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "24px" }}>
                      <div style={{ height: "1px", width: "40px", background: "rgba(149,165,141,0.4)" }} />
                      <Diamond size={8} />
                      <div style={{ height: "1px", width: "40px", background: "rgba(149,165,141,0.4)" }} />
                    </div>

                    <p style={{
                      fontFamily: "Georgia, serif", fontSize: "11px",
                      letterSpacing: "0.35em", color: "#95A58D",
                      textTransform: "uppercase", margin: "0 0 12px",
                    }}>
                      {form.asiste ? "¡Nos vemos pronto!" : "Gracias por avisarnos"}
                    </p>

                    <h3 style={{
                      fontFamily: "'Dancing Script', cursive",
                      fontSize: "clamp(28px, 5vw, 38px)",
                      fontWeight: 700, color: "#2E3D4F",
                      margin: "0 0 16px", lineHeight: 1.2,
                    }}>
                      {form.nombre}
                    </h3>

                    <p style={{
                      fontFamily: "Georgia, serif", fontSize: "14px",
                      fontStyle: "italic", color: "rgba(58,74,90,0.65)", margin: 0,
                    }}>
                      {form.asiste
                        ? `Tu confirmación fue recibida.`
                        : "Lamentamos que no puedas acompañarnos."}
                    </p>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "28px" }}>
                      <div style={{ height: "1px", width: "40px", background: "rgba(149,165,141,0.4)" }} />
                      <Diamond size={8} />
                      <div style={{ height: "1px", width: "40px", background: "rgba(149,165,141,0.4)" }} />
                    </div>
                  </motion.div>

                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.7 }}
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid rgba(93,123,159,0.25))",
                      borderRadius: "4px",
                      padding: "clamp(28px, 5%, 48px) clamp(24px, 5%, 44px)",
                      position: "relative",
                    }}
                  >
                    <div style={{
                      position: "absolute", inset: "10px",
                      border: "1px solid rgba(93,123,159,0.25))",
                      borderRadius: "2px", pointerEvents: "none",
                    }} />

                    {/* Header del card */}


                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                      {/* Nombre */}
                      <div>
                        <label style={labelStyle}>Nombre completo</label>
                        <input
                          type="text"
                          value={form.nombre}
                          onChange={e => { setForm({ ...form, nombre: e.target.value }); setErrors({ ...errors, nombre: null }); }}
                          placeholder="Tu nombre completo"
                          style={inputStyle(errors.nombre)}
                          onFocus={e => e.target.style.borderColor = "rgba(93,123,159,0.55)"}
                          onBlur={e => e.target.style.borderColor = errors.nombre ? "#c0796a" : "rgba(93,123,159,0.25)"}
                        />
                        {errors.nombre && <p style={{ margin: "4px 0 0", fontSize: "11px", color: "#c0796a", fontFamily: "Georgia, serif" }}>{errors.nombre}</p>}
                      </div>

                      {/* Correo */}
                      <div>
                        <label style={labelStyle}>Correo electrónico</label>
                        <input
                          type="email"
                          value={form.correo}
                          onChange={e => { setForm({ ...form, correo: e.target.value }); setErrors({ ...errors, correo: null }); }}
                          placeholder="correo@ejemplo.com"
                          style={inputStyle(errors.correo)}
                          onFocus={e => e.target.style.borderColor = "rgba(93,123,159,0.55)"}
                          onBlur={e => e.target.style.borderColor = errors.correo ? "#c0796a" : "rgba(93,123,159,0.25)"}
                        />
                        {errors.correo && <p style={{ margin: "4px 0 0", fontSize: "11px", color: "#c0796a", fontFamily: "Georgia, serif" }}>{errors.correo}</p>}
                      </div>

                      {/* ¿Asiste? */}
                      <div>
                        <label style={labelStyle}>¿Vas a asistir?</label>
                        <div style={{ display: "flex", gap: "12px" }}>
                          <button
                            onClick={() => { setForm({ ...form, asiste: true }); setErrors({ ...errors, asiste: null }); }}
                            style={{
                              flex: 1, padding: "10px 0",
                              display: "flex", alignItems: "center", justifyContent: "center", gap: "7px",
                              fontFamily: "Georgia, serif", fontSize: "11px",
                              letterSpacing: "0.25em", textTransform: "uppercase",
                              cursor: "pointer", borderRadius: "3px",
                              transition: "all 0.2s ease",
                              backgroundColor: form.asiste === true ? "#8FA886" : "rgba(255,255,255,0.5)",
                              border: form.asiste === true ? "1px solid #8FA886" : "1px solid rgba(93,123,159,0.25)",
                              color: form.asiste === true ? "#fff" : "#5D7B9F",
                            }}
                          >
                            <Check size={13} strokeWidth={2.5} />
                            Sí, asistiré
                          </button>

                          <button
                            onClick={() => { setForm({ ...form, asiste: false, espacios: 1 }); setErrors({ ...errors, asiste: null }); }}
                            style={{
                              flex: 1, padding: "10px 0",
                              display: "flex", alignItems: "center", justifyContent: "center", gap: "7px",
                              fontFamily: "Georgia, serif", fontSize: "11px",
                              letterSpacing: "0.25em", textTransform: "uppercase",
                              cursor: "pointer", borderRadius: "3px",
                              transition: "all 0.2s ease",
                              backgroundColor: form.asiste === false ? "#9aa8b8" : "rgba(255,255,255,0.5)",
                              border: form.asiste === false ? "1px solid #9aa8b8" : "1px solid rgba(93,123,159,0.25)",
                              color: form.asiste === false ? "#fff" : "#5D7B9F",
                            }}
                          >
                            <X size={13} strokeWidth={2.5} />
                            No podré ir
                          </button>
                        </div>
                        {errors.asiste && <p style={{ margin: "4px 0 0", fontSize: "11px", color: "#c0796a", fontFamily: "Georgia, serif" }}>{errors.asiste}</p>}
                      </div>

                      {/* Cantidad de espacios */}
                      <AnimatePresence>
                        {form.asiste === true && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            style={{ overflow: "hidden" }}
                          >
                            <label style={labelStyle}>Cantidad de personas</label>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                              <button
                                onClick={() => setForm({ ...form, espacios: Math.max(1, form.espacios - 1) })}
                                style={{
                                  width: "34px", height: "34px", borderRadius: "50%",
                                  border: "1px solid rgba(93,123,159,0.3)",
                                  backgroundColor: "rgba(255,255,255,0.5)", color: "#5D7B9F",
                                  fontSize: "18px", cursor: "pointer",
                                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                                }}
                              >−</button>

                              <div style={{
                                flex: 1, textAlign: "center",
                                fontFamily: "'Dancing Script', cursive",
                                fontSize: "28px", fontWeight: 700, color: "#2E3D4F", lineHeight: 1,
                              }}>
                                {form.espacios}
                              </div>

                              <button
                                onClick={() => setForm({ ...form, espacios: Math.min(10, form.espacios + 1) })}
                                style={{
                                  width: "34px", height: "34px", borderRadius: "50%",
                                  border: "1px solid rgba(93,123,159,0.3)",
                                  backgroundColor: "rgba(255,255,255,0.5)", color: "#5D7B9F",
                                  fontSize: "18px", cursor: "pointer",
                                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                                }}
                              >+</button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Botón enviar */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleSubmit}
                        style={{
                          width: "100%", padding: "13px 0", marginTop: "8px",
                          fontFamily: "Georgia, serif", fontSize: "11px",
                          letterSpacing: "0.4em", textTransform: "uppercase",
                          color: "#fff", backgroundColor: "#8FA886",
                          border: "none", borderRadius: "3px", cursor: "pointer",
                          boxShadow: "0 2px 12px rgba(143,168,134,0.3)",
                        }}
                      >
                        Confirmar asistencia
                      </motion.button>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
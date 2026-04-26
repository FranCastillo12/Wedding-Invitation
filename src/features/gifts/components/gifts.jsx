import { useConfig } from "@/features/invitation/hooks/use-config";
import { Gift, CreditCard, Copy, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Gifts() {
  const config = useConfig();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const cuentas = [
    {
      banco: "BANCO NACIONAL",
      cuenta: "100-01-000-123456-7",
      iban: "CR21 0151 0001 0012 3456 78",
    },
    {
      banco: "BAC CREDOMATIC",
      cuenta: "010203040-5",
      iban: "CR05 0152 0001 0203 0405 06",
    },
  ];

  return (
    <section
      id="regalos"
      style={{ backgroundColor: "#DADEDF"}}
    >
      <div
       className="container mx-auto px-4 py-5 relative z-10"
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
    Regalos
    </h1>


        <p
      className="mb-10 text-sm tracking-wide"
      style={{ fontFamily: "Georgia, serif",fontSize: "clamp(18px, 6vw, 10px)",color: "#3a4a5a" }}
    >
        Su presencia es nuestro mayor regalo
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



        <p style={{
          textAlign: "center",
          fontFamily: "Georgia, serif",
          fontSize: "clamp(16px, 2.5vw, 13px)",
          fontStyle: "italic",
          color: "rgba(58,74,90,0.75)",
          lineHeight: 1.9,
          maxWidth: "620px",
          margin: "0 auto 40px",
        }}>
          Para nosotros lo más importante es contar con su presencia.
          Si desean hacernos una muestra de cariño, les agradecemos
          que sea mediante efectivo en un sobre.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
          gap: "28px",
          alignItems: "start",
        }}>

          {/* Card Sobre */}
          <div style={{
            background: "rgba(255,255,255,0.45)",
            border: "1px solid rgba(93,123,159,0.18)",
            borderRadius: "2px",
            padding: "52px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
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
              <Gift size={28} color="#5D7B9F" strokeWidth={1.3} />
            </div>

            <p style={{
              textAlign: "center",
              fontFamily: "Georgia, serif",
              fontSize: "clamp(20px, 2.5vw, 24px)",
              fontStyle: "italic",
              fontWeight: 700,
              color: "#3a4a5a",
              marginBottom: "16px",
            }}>
              Sobre en recepción
            </p>

            <p style={{
              textAlign: "center",
              fontSize: "clamp(14px, 1.8vw, 16px)",
              color: "rgba(58,74,90,0.65)",
              lineHeight: 1.85,
              margin: 0,
            }}>
              Contaremos con un baúl de regalos en la recepción donde
              podrán depositar su sobre con cariño.
            </p>
          </div>

          {/* Card Transferencia */}
          <div style={{
            background: "rgba(255,255,255,0.45)",
            border: "1px solid rgba(93,123,159,0.18)",
            borderRadius: "2px",
            padding: "52px 40px",
          }}>
            <div style={{
              width: "64px",
              height: "64px",
              margin: "0 auto 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(93,123,159,0.2)",
            }}>
              <CreditCard size={28} color="#5D7B9F" strokeWidth={1.3} />
            </div>

            <p style={{
              textAlign: "center",
              fontFamily: "Georgia, serif",
              fontSize: "clamp(20px, 2.5vw, 24px)",
              fontStyle: "italic",
              fontWeight: 700,
              color: "#3a4a5a",
              marginBottom: "16px",
            }}>
              Transferencia
            </p>

            <p style={{
              textAlign: "center",
              fontSize: "clamp(14px, 1.8vw, 16px)",
              color: "rgba(58,74,90,0.65)",
              lineHeight: 1.85,
              marginBottom: "32px",
            }}>
              También pueden hacernos llegar su regalo de forma digital.
            </p>

            {cuentas.map((c, i) => (
              <div
                key={i}
                style={{
                  borderTop: "1px solid rgba(149,165,141,0.25)",
                  paddingTop: "20px",
                  marginTop: i > 0 ? "20px" : 0,
                }}
              >
                <p style={{
                  fontSize: "11px",
                  letterSpacing: "0.3em",
                  color: "#95A58D",
                  textAlign: "center",
                  marginBottom: "14px",
                }}>
                  {c.banco}
                </p>
                <BankRow label="CUENTA" value={c.cuenta} />
                <BankRow label="IBAN"   value={c.iban} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function BankRow({ label, value }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "10px",
      padding: "10px 14px",
      background: "rgba(255,255,255,0.5)",
      border: "1px solid rgba(149,165,141,0.2)",
      borderRadius: "2px",
      gap: "8px",
    }}>
      <div style={{ minWidth: 0 }}>
        <p style={{
          fontSize: "10px",
          letterSpacing: "0.3em",
          color: "rgba(58,74,90,0.45)",
          margin: "0 0 2px",
        }}>
          {label}
        </p>
        <p style={{
          fontSize: "clamp(12px, 1.6vw, 14px)",
          fontWeight: 700,
          color: "#3a4a5a",
          margin: 0,
          letterSpacing: "0.03em",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}>
          {value}
        </p>
      </div>
      <CopyButton text={value} />
    </div>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "6px 8px",
        borderRadius: "2px",
        color: copied ? "#95A58D" : "#5D7B9F",
        transition: "color 0.15s",
        flexShrink: 0,
      }}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}
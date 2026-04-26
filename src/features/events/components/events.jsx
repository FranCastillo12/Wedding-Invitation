import EventCards from "@/features/events/components/events-card";
import { useConfig } from "@/features/invitation/hooks/use-config";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Events() {
  const config = useConfig(); // Use hook to get config from API or fallback to static

  return (
    <>
 <section
      id="regalos"

      className=" relative overflow-hidden"
      style={{ backgroundColor: "#DADEDF"}}
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
    Alojamiento
    </h1>
         <p
      className="mb-10 text-sm tracking-wide"
      style={{ fontFamily: "Georgia, serif",fontSize: "clamp(18px, 6vw, 10px)",color: "#3a4a5a" }}
    >
        Recomendaciones para tu estadia
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







        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, 1fr))",
          gap: "28px",
          alignItems: "start",
        }}>

         

       

               {/* Events Grid */}
          <motion.div
           initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.6 }}
    style={{ width: "min(100%, 420px)", margin: "0 auto" }}
          >
            <EventCards events={config.agenda} />
          </motion.div>

        </div>
      </div>
    </section>
    
   
    </>
  );
}

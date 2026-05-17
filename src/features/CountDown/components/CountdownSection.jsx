import { Countdown } from "@/features/CountDown";
import { motion } from "framer-motion";


export default function CountdownSection({ targetDate }) {
  return (
    <section className="py-7 px-4" style={{ backgroundColor: "#95A58D" }}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl mb-4"
            style={{paddingTop:"20px", fontFamily: "Dancing Script", color: "#ffffff" }}
          >
            Cuenta regresiva
          </h2>


          {/* Wrapper centrado para el grid */}
          <div className="flex justify-center">
            <Countdown targetDate={targetDate} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

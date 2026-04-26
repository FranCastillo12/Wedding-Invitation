import { Countdown } from "@/features/CountDown";

export default function CountdownSection({ targetDate }) {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#95A58D" }}>
  <div className="max-w-4xl mx-auto text-center">
    <h2
      className="text-4xl sm:text-5xl mb-4"
      style={{ fontFamily: "Dancing Script", color: "#ffffff" }}
    >
      Cuenta atrás
    </h2>
    <p
      className="mb-10 text-sm tracking-wide"
      style={{ fontFamily: "Georgia, serif",color: "#ffffff" }}
    >
      Para el día más especial de nuestras vidas
    </p>

    {/* Wrapper centrado para el grid */}
    <div className="flex justify-center">
      <Countdown targetDate={targetDate} />
    </div>
  </div>
</section>
  )
}
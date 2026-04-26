import { useState, useEffect } from "react";

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculate = () => {
      const diff = targetDate.getTime() - new Date().getTime();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };
    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ];

  return (
  <div
  className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6"
  style={{ width: "clamp(270px, 80vw, 500px)" }}
>
  {units.map((unit) => (
    <div key={unit.label} className="flex flex-col items-center">
      <div
        className="rounded-xl flex flex-col items-center justify-center border w-full"
        style={{
          aspectRatio: "1",
          backgroundColor: "#C0cfb2",
          borderColor: "rgb(255, 253, 253)",
        }}
      >
        <span
          className="font-semibold leading-none"
          style={{
            fontSize: "clamp(24px, 10vw, 40px)",
            color: "#ffffff",
          }}
        >
          {String(unit.value).padStart(2, "0")}
        </span>
        <span
          className="tracking-widest mt-1"
          style={{
            paddingTop: "7px",
            fontSize: "clamp(18px, 2.5vw, 18px)",
            fontWeight: 300,

"@media (max-width: 640px)": {
  fontWeight: 500,
},
            fontFamily: "Georgia, serif",

            color: "#ffffff",
          }}
        >
          {unit.label}
        </span>
      </div>
    </div>
  ))}
</div>
  );
}

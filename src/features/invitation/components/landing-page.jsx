// import { useConfig } from "@/features/invitation/hooks/use-config";
// import { formatEventDate } from "@/lib/format-event-date";
// import { useState } from "react";

// export default function LandingPage({ onOpenInvitation, names, date }) {
//   const [isOpening, setIsOpening] = useState(false);
//   const [isFlipped, setIsFlipped] = useState(false);
//   const config = useConfig();

//   const handleClick = () => {
//     if (isOpening) return;
//     setIsOpening(true);
//     setTimeout(() => setIsFlipped(true), 100);
//     setTimeout(() => onOpenInvitation(), 1500);
//   };

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
//       style={{ backgroundColor: "#E8EAEB" }}
//       onClick={handleClick}
//     >
//       {/* Fondo con textura sutil */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `radial-gradient(circle at 30% 20%, rgba(149,165,141,0.08) 0%, transparent 60%),
//                             radial-gradient(circle at 70% 80%, rgba(93,123,159,0.07) 0%, transparent 55%)`,
//         }}
//       />

//       <div className="relative" style={{ perspective: "1400px" }}>
//         {/* Contenedor del sobre */}
//         <div
//           className={`relative transition-all duration-1000 ease-in-out ${
//             isFlipped ? "-translate-y-32 opacity-0 scale-95" : "scale-100"
//           }`}
//           style={{
//             width: "min(90vw, 850px)",
//             height: "min(63vw, 550px)",
//             transformStyle: "preserve-3d",
//             filter: isOpening
//               ? "drop-shadow(0 40px 60px rgba(93,123,159,0.25))"
//               : "drop-shadow(0 20px 40px rgba(93,123,159,0.18)) drop-shadow(0 4px 12px rgba(93,123,159,0.12))",
//             transition: "filter 0.4s ease, transform 1s ease, opacity 1s ease",
//           }}
//         >
//           {/* SVG principal del sobre — todo en uno */}
//           <svg
//             className="absolute inset-0 w-full h-full"
//             viewBox="0 0 680 460"
//             preserveAspectRatio="none"
//             style={{ overflow: "visible" }}
//           >
//             <defs>
//               <filter
//                 id="envelopeShadow"
//                 x="-5%"
//                 y="-5%"
//                 width="110%"
//                 height="120%"
//               >
//                 <feDropShadow
//                   dx="0"
//                   dy="8"
//                   stdDeviation="12"
//                   floodColor="#5D7B9F"
//                   floodOpacity="0.12"
//                 />
//               </filter>

//               {/* Gradiente cuerpo del sobre */}
//               <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0%" stopColor="#F2F4F5" />
//                 <stop offset="100%" stopColor="#D8DCE0" />
//               </linearGradient>

//               {/* Gradiente solapa frontal */}
//               <linearGradient id="flapGrad" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0%" stopColor="#E0E4E8" />
//                 <stop offset="100%" stopColor="#C8CED4" />
//               </linearGradient>

//               {/* Gradiente solapa reverso (cuando se abre) */}
//               <linearGradient id="flapBackGrad" x1="0" y1="1" x2="0" y2="0">
//                 <stop offset="0%" stopColor="#D4D8DC" />
//                 <stop offset="100%" stopColor="#E8EAEB" />
//               </linearGradient>

//               {/* Gradiente triángulos laterales */}
//               <linearGradient id="sideGrad" x1="0" y1="0" x2="1" y2="0">
//                 <stop offset="0%" stopColor="#C8CED6" />
//                 <stop offset="100%" stopColor="#D8DCE2" />
//               </linearGradient>

//               {/* Gradiente triángulo inferior */}
//               <linearGradient id="bottomGrad" x1="0" y1="1" x2="0" y2="0">
//                 <stop offset="0%" stopColor="#C5CBD4" />
//                 <stop offset="100%" stopColor="#D2D8DE" />
//               </linearGradient>
//             </defs>

//             {/* === CUERPO DEL SOBRE === */}
//             <rect
//               x="0"
//               y="0"
//               width="680"
//               height="460"
//               rx="4"
//               ry="4"
//               fill="url(#bodyGrad)"
//             />

//             {/* Pliegues laterales (triángulos) */}
//             <polygon points="0,0 340,200 0,460" fill="url(#sideGrad)" />
//             <polygon points="680,0 340,200 680,460" fill="url(#sideGrad)" />

//             {/* Pliegue inferior */}
//             <polygon points="0,460 340,200 680,460" fill="url(#bottomGrad)" />

//             {/* Líneas de pliegue sutiles */}
//             <line
//               x1="0"
//               y1="0"
//               x2="340"
//               y2="200"
//               stroke="rgba(93,123,159,0.15)"
//               strokeWidth="0.8"
//             />
//             <line
//               x1="680"
//               y1="0"
//               x2="340"
//               y2="200"
//               stroke="rgba(93,123,159,0.15)"
//               strokeWidth="0.8"
//             />
//             <line
//               x1="0"
//               y1="460"
//               x2="340"
//               y2="200"
//               stroke="rgba(93,123,159,0.12)"
//               strokeWidth="0.8"
//             />
//             <line
//               x1="680"
//               y1="460"
//               x2="340"
//               y2="200"
//               stroke="rgba(93,123,159,0.12)"
//               strokeWidth="0.8"
//             />

//             {/* Borde exterior del sobre */}
//             <rect
//               x="0.5"
//               y="0.5"
//               width="679"
//               height="459"
//               rx="3.5"
//               ry="3.5"
//               fill="none"
//               stroke="rgba(93,123,159,0.3)"
//               strokeWidth="1"
//             />

//             {/* Marco decorativo interior */}
//             <rect
//               x="12"
//               y="12"
//               width="656"
//               height="436"
//               rx="2"
//               ry="2"
//               fill="none"
//               stroke="rgba(93,123,159,0.18)"
//               strokeWidth="0.6"
//             />
//             <rect
//               x="18"
//               y="18"
//               width="644"
//               height="424"
//               rx="1.5"
//               ry="1.5"
//               fill="none"
//               stroke="rgba(149,165,141,0.2)"
//               strokeWidth="0.4"
//             />
//           </svg>

//           {/* === SOLAPA ANIMADA (HTML sobre SVG) === */}
//           <div
//             className="absolute top-0 left-0 right-0 origin-top"
//             style={{
//               height: "43.5%" /* 200/460 */,
//               transformStyle: "preserve-3d",
//               transform: isOpening ? "rotateX(180deg)" : "rotateX(0deg)",
//               transition: "transform 0.75s cubic-bezier(0.4, 0, 0.2, 1)",
//             }}
//           >
//             {/* Frente de la solapa */}
//             <svg
//               className="absolute inset-0 w-full h-full"
//               viewBox="0 0 680 200"
//               preserveAspectRatio="none"
//               style={{ backfaceVisibility: "hidden", overflow: "visible" }}
//             >
//               <defs>
//                 <linearGradient id="flapFrontGrad" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#DDE1E6" />
//                   <stop offset="100%" stopColor="#C8CDD4" />
//                 </linearGradient>
//               </defs>
//               {/* Triángulo de la solapa */}
//               <polygon points="0,0 680,0 340,200" fill="url(#flapFrontGrad)" />
//               {/* Borde de la solapa */}
//               <polyline
//                 points="0,0 340,200 680,0"
//                 fill="none"
//                 stroke="rgba(93,123,159,0.35)"
//                 strokeWidth="1"
//               />
//             </svg>

//             {/* Reverso de la solapa */}
//             <svg
//               className="absolute inset-0 w-full h-full"
//               viewBox="0 0 680 200"
//               preserveAspectRatio="none"
//               style={{
//                 backfaceVisibility: "hidden",
//                 transform: "rotateX(180deg)",
//                 overflow: "visible",
//               }}
//             >
//               <polygon points="0,0 680,0 340,200" fill="#E2E5E9" />
//             </svg>
//           </div>

//           {/* === SELLO === */}
//           <div
//             className="absolute -translate-x-1/2 left-[44%] sm:left-[47%]"
//             style={{
//               top: "calc(43.5% - 28px)",
//               zIndex: 10,
//               transformStyle: "preserve-3d",
//               transform: isOpening
//                 ? "rotateX(180deg) translateY(0px)"
//                 : "rotateX(0deg)",
//               transition: "transform 0.75s cubic-bezier(0.4,0,0.2,1)",
//             }}
//           >
//             <div
//               style={{
//                 width: "clamp(42px, 6vw, 56px)",
//                 height: "clamp(42px, 6vw, 56px)",
//                 borderRadius: "50%",
//                 backgroundColor: "#8FA886",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 boxShadow:
//                   "0 2px 12px rgba(93,123,159,0.25), inset 0 1px 0 rgba(255,255,255,0.15)",
//               }}
//             >
//               <WaxSealIcon />
//             </div>
//           </div>

//           {/* === CONTENIDO DEL SOBRE === */}
//           <div
//             className="absolute inset-0 flex flex-col items-center justify-end text-center "
//             style={{
//               paddingBottom: "clamp(8px, 3vw, 45px)",
//             }}
//           >
//             <div className="flex flex-col items-center gap-0">
//               <div className="hidden sm:flex items-center gap-2 mb-3 opacity-50">
//                 <div
//                   className="w-8 h-px"
//                   style={{ backgroundColor: "#95A58D" }}
//                 />
//                 <Diamond size={7} color="#95A58D" />
//                 <div
//                   className="w-8 h-px"
//                   style={{ backgroundColor: "#95A58D" }}
//                 />
//               </div>

//               <h2
             
//                 style={{
//                   fontFamily: "'Dancing Script', cursive",
//                   fontSize: "clamp(32px, 5.5vw, 70px)",
//                   fontWeight: 700,
//                   color: "#2E3D4F",
//                   lineHeight: 1.15,
//                   margin: 0,
//                   letterSpacing: "-0.01em",
//                 }}
//               >
//                 {config.boyfriendName}
//               </h2>

//               {/* Divisor & */}
//               <div
//                 className="flex items-center gap-3 my-2"
//                 style={{ width: "clamp(160px, 24vw, 240px)" }}
//               >
//                 <div
//                   className="flex-1 h-px"
//                   style={{ backgroundColor: "rgba(93,123,159,0.2)" }}
//                 />
//                 <span
//                   style={{
//                     fontFamily: "'Playfair Display', serif",
//                     fontSize: "clamp(13px, 2vw, 18px)",
//                     fontStyle: "italic",
//                     color: "rgba(93,123,159,0.7)",
//                     lineHeight: 1,
//                   }}
//                 >
//                   &amp;
//                 </span>
//                 <div
//                   className="flex-1 h-px"
//                   style={{ backgroundColor: "rgba(93,123,159,0.2)" }}
//                 />
//               </div>

//               <h2
//                 style={{
//                   fontFamily: "'Dancing Script', cursive",
//                   fontSize: "clamp(32px, 5.5vw, 70px)",
//                   fontWeight: 700,
//                   color: "#2E3D4F",
//                   lineHeight: 1.15,
//                   margin: 0,
//                   letterSpacing: "-0.01em",
//                 }}
//               >
//                 {config.GirlfriendName}
//               </h2>

//               {/* Fecha */}
//               {/* <div className="flex items-center gap-2 mt-3 opacity-60">
//                 <div className="w-8 h-px" style={{ backgroundColor: "#95A58D" }} />
//                 <p style={{
//                   fontFamily: "'Playfair Display', serif",
//                   fontSize: "clamp(10px, 2.5vw, 12px)",
//                   letterSpacing: "0.28em",
//                   color: "#6B7E6A",
//                   margin: 0,
//                   textTransform: "uppercase",
//                 }}>
//                   {formatEventDate(config.date)}
//                 </p>
//                 <div className="w-8 h-px" style={{ backgroundColor: "#95A58D" }} />
//               </div> */}
//             </div>
//           </div>

//           {/* Sombra debajo del sobre */}
//           <div
//             className="absolute -bottom-4 left-10 right-10 h-6 rounded-full"
//             style={{
//               background: "rgba(60,80,110,0.12)",
//               filter: "blur(10px)",
//               transition: "opacity 0.4s ease",
//               opacity: isOpening ? 0 : 1,
//             }}
//           />
//         </div>

//         {/* Instrucción */}
//         <div
//           className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
//           style={{
//             bottom: "-36px",
//             opacity: isOpening ? 0 : 1,
//             transition: "opacity 0.4s ease",
//           }}
//         >
//           <p
//             style={{
//               fontFamily: "'Playfair Display', serif",
//               fontSize: "clamp(9px, 2vw, 11px)",
//               letterSpacing: "0.45em",
//               color: "#95A58D",
//               margin: 0,
//               animation: "pulse 2.5s ease-in-out infinite",
//             }}
//           >
//             TOCA PARA ABRIR
//           </p>
//         </div>
//       </div>

//       <style>{`
//         @keyframes pulse {
//           0%, 100% { opacity: 0.6; }
//           50% { opacity: 1; }
//         }
//       `}</style>
//     </div>
//   );
// }

// function WaxSealIcon() {
//   return (
//     <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//       <rect
//         x="5"
//         y="5"
//         width="14"
//         height="14"
//         rx="0.5"
//         fill="none"
//         stroke="rgba(255,255,255,0.75)"
//         strokeWidth="0.8"
//         transform="rotate(45,12,12)"
//       />
//       <rect
//         x="7.5"
//         y="7.5"
//         width="9"
//         height="9"
//         rx="0.5"
//         fill="rgba(255,255,255,0.2)"
//         transform="rotate(45,12,12)"
//       />
//     </svg>
//   );
// }

// function Diamond({ color = "rgba(149,165,141,0.65)", size = 10 }) {
//   return (
//     <svg
//       width={size * 1.4}
//       height={size * 1.4}
//       viewBox="0 0 18 18"
//       style={{ flexShrink: 0 }}
//     >
//       <rect
//         x="4"
//         y="4"
//         width="10"
//         height="10"
//         fill="none"
//         stroke={color}
//         strokeWidth="0.9"
//         transform="rotate(45,9,9)"
//       />
//       <rect
//         x="6.5"
//         y="6.5"
//         width="5"
//         height="5"
//         fill={color}
//         opacity="0.35"
//         transform="rotate(45,9,9)"
//       />
//     </svg>
//   );
// }
import { useConfig } from "@/features/invitation/hooks/use-config";
import { useState } from "react";

export default function LandingPage({ onOpenInvitation, invitado }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const config = useConfig();

  const handleClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => setIsFlipped(true), 100);
    setTimeout(() => onOpenInvitation(), 1500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
      style={{ backgroundColor: "#E8EAEB" }}
      onClick={handleClick}
    >
      {/* Fondo con textura sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, rgba(149,165,141,0.08) 0%, transparent 60%),
                            radial-gradient(circle at 70% 80%, rgba(93,123,159,0.07) 0%, transparent 55%)`,
        }}
      />

      <div className="relative" style={{ perspective: "1400px" }}>
        {/* Contenedor del sobre */}
        <div
          className={`relative transition-all duration-1000 ease-in-out ${
            isFlipped ? "-translate-y-32 opacity-0 scale-95" : "scale-100"
          }`}
          style={{
            width: "min(90vw, 850px)",
            height: "min(63vw, 550px)",
            transformStyle: "preserve-3d",
            filter: isOpening
              ? "drop-shadow(0 40px 60px rgba(93,123,159,0.25))"
              : "drop-shadow(0 20px 40px rgba(93,123,159,0.18)) drop-shadow(0 4px 12px rgba(93,123,159,0.12))",
            transition: "filter 0.4s ease, transform 1s ease, opacity 1s ease",
          }}
        >
          {/* SVG principal del sobre */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 680 460"
            preserveAspectRatio="none"
            style={{ overflow: "visible" }}
          >
            <defs>
              {/* Gradiente cuerpo */}
              <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F2F4F5" />
                <stop offset="100%" stopColor="#D8DCE0" />
              </linearGradient>
              {/* Gradiente triángulos laterales */}
              <linearGradient id="sideGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#C8CED6" />
                <stop offset="100%" stopColor="#D8DCE2" />
              </linearGradient>
              {/* Gradiente triángulo inferior */}
              <linearGradient id="bottomGrad" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#C5CBD4" />
                <stop offset="100%" stopColor="#D2D8DE" />
              </linearGradient>
            </defs>

            {/* Cuerpo del sobre */}
            <rect x="0" y="0" width="680" height="460" rx="4" ry="4" fill="url(#bodyGrad)" />

            {/* Pliegues laterales */}
            <polygon points="0,0 340,200 0,460" fill="url(#sideGrad)" />
            <polygon points="680,0 340,200 680,460" fill="url(#sideGrad)" />

            {/* Pliegue inferior */}
            <polygon points="0,460 340,200 680,460" fill="url(#bottomGrad)" />

            {/* Líneas de pliegue */}
            <line x1="0" y1="0" x2="340" y2="200" stroke="rgba(93,123,159,0.15)" strokeWidth="0.8" />
            <line x1="680" y1="0" x2="340" y2="200" stroke="rgba(93,123,159,0.15)" strokeWidth="0.8" />
            <line x1="0" y1="460" x2="340" y2="200" stroke="rgba(93,123,159,0.12)" strokeWidth="0.8" />
            <line x1="680" y1="460" x2="340" y2="200" stroke="rgba(93,123,159,0.12)" strokeWidth="0.8" />

            {/* Borde exterior */}
            <rect x="0.5" y="0.5" width="679" height="459" rx="3.5" ry="3.5" fill="none" stroke="rgba(93,123,159,0.3)" strokeWidth="1" />

            {/* Marcos decorativos interiores */}
            <rect x="12" y="12" width="656" height="436" rx="2" ry="2" fill="none" stroke="rgba(93,123,159,0.18)" strokeWidth="0.6" />
            <rect x="18" y="18" width="644" height="424" rx="1.5" ry="1.5" fill="none" stroke="rgba(149,165,141,0.2)" strokeWidth="0.4" />

            {/* ── DECORACIONES ART DÉCO ── */}

            {/* Esquina sup-izq — abanico */}
            <g transform="translate(22, 22)">
              <path d="M0 65 A65 65 0 0 1 65 0" stroke="rgba(149,165,141,0.45)" strokeWidth="0.9" fill="none" />
              <path d="M0 52 A52 52 0 0 1 52 0" stroke="rgba(149,165,141,0.38)" strokeWidth="0.8" fill="none" />
              <path d="M0 39 A39 39 0 0 1 39 0" stroke="rgba(149,165,141,0.32)" strokeWidth="0.75" fill="none" />
              <path d="M0 26 A26 26 0 0 1 26 0" stroke="rgba(149,165,141,0.28)" strokeWidth="0.7" fill="none" />
              <path d="M0 13 A13 13 0 0 1 13 0" stroke="rgba(149,165,141,0.22)" strokeWidth="0.65" fill="none" />
              <line x1="0" y1="0" x2="65" y2="0" stroke="rgba(149,165,141,0.35)" strokeWidth="0.75" />
              <line x1="0" y1="0" x2="0" y2="65" stroke="rgba(149,165,141,0.35)" strokeWidth="0.75" />
              <line x1="0" y1="0" x2="46" y2="46" stroke="rgba(149,165,141,0.28)" strokeWidth="0.65" />
              <line x1="0" y1="0" x2="25" y2="60" stroke="rgba(149,165,141,0.22)" strokeWidth="0.6" />
              <line x1="0" y1="0" x2="60" y2="25" stroke="rgba(149,165,141,0.22)" strokeWidth="0.6" />
            </g>

            {/* Esquina sup-der */}
            <g transform="translate(658, 22) scale(-1,1)">
              <path d="M0 65 A65 65 0 0 1 65 0" stroke="rgba(149,165,141,0.45)" strokeWidth="0.9" fill="none" />
              <path d="M0 52 A52 52 0 0 1 52 0" stroke="rgba(149,165,141,0.38)" strokeWidth="0.8" fill="none" />
              <path d="M0 39 A39 39 0 0 1 39 0" stroke="rgba(149,165,141,0.32)" strokeWidth="0.75" fill="none" />
              <path d="M0 26 A26 26 0 0 1 26 0" stroke="rgba(149,165,141,0.28)" strokeWidth="0.7" fill="none" />
              <path d="M0 13 A13 13 0 0 1 13 0" stroke="rgba(149,165,141,0.22)" strokeWidth="0.65" fill="none" />
              <line x1="0" y1="0" x2="65" y2="0" stroke="rgba(149,165,141,0.35)" strokeWidth="0.75" />
              <line x1="0" y1="0" x2="0" y2="65" stroke="rgba(149,165,141,0.35)" strokeWidth="0.75" />
              <line x1="0" y1="0" x2="46" y2="46" stroke="rgba(149,165,141,0.28)" strokeWidth="0.65" />
              <line x1="0" y1="0" x2="25" y2="60" stroke="rgba(149,165,141,0.22)" strokeWidth="0.6" />
              <line x1="0" y1="0" x2="60" y2="25" stroke="rgba(149,165,141,0.22)" strokeWidth="0.6" />
            </g>

            {/* Esquina inf-izq */}
            <g transform="translate(22, 438) scale(1,-1)">
              <path d="M0 65 A65 65 0 0 1 65 0" stroke="rgba(149,165,141,0.38)" strokeWidth="0.9" fill="none" />
              <path d="M0 52 A52 52 0 0 1 52 0" stroke="rgba(149,165,141,0.32)" strokeWidth="0.8" fill="none" />
              <path d="M0 39 A39 39 0 0 1 39 0" stroke="rgba(149,165,141,0.28)" strokeWidth="0.75" fill="none" />
              <path d="M0 26 A26 26 0 0 1 26 0" stroke="rgba(149,165,141,0.22)" strokeWidth="0.7" fill="none" />
              <path d="M0 13 A13 13 0 0 1 13 0" stroke="rgba(149,165,141,0.18)" strokeWidth="0.65" fill="none" />
              <line x1="0" y1="0" x2="65" y2="0" stroke="rgba(149,165,141,0.28)" strokeWidth="0.75" />
              <line x1="0" y1="0" x2="0" y2="65" stroke="rgba(149,165,141,0.28)" strokeWidth="0.75" />
              <line x1="0" y1="0" x2="46" y2="46" stroke="rgba(149,165,141,0.22)" strokeWidth="0.65" />
            </g>

            {/* Esquina inf-der */}
            <g transform="translate(658, 438) scale(-1,-1)">
              <path d="M0 65 A65 65 0 0 1 65 0" stroke="rgba(149,165,141,0.38)" strokeWidth="0.9" fill="none" />
              <path d="M0 52 A52 52 0 0 1 52 0" stroke="rgba(149,165,141,0.32)" strokeWidth="0.8" fill="none" />
              <path d="M0 39 A39 39 0 0 1 39 0" stroke="rgba(149,165,141,0.28)" strokeWidth="0.75" fill="none" />
              <path d="M0 26 A26 26 0 0 1 26 0" stroke="rgba(149,165,141,0.22)" strokeWidth="0.7" fill="none" />
              <path d="M0 13 A13 13 0 0 1 13 0" stroke="rgba(149,165,141,0.18)" strokeWidth="0.65" fill="none" />
              <line x1="0" y1="0" x2="65" y2="0" stroke="rgba(149,165,141,0.28)" strokeWidth="0.75" />
              <line x1="0" y1="0" x2="0" y2="65" stroke="rgba(149,165,141,0.28)" strokeWidth="0.75" />
              <line x1="0" y1="0" x2="46" y2="46" stroke="rgba(149,165,141,0.22)" strokeWidth="0.65" />
            </g>

            {/* Mini abanico centro-superior */}
            <g transform="translate(340, 26)">
              <path d="M-34 0 A34 34 0 0 0 34 0" stroke="rgba(149,165,141,0.4)" strokeWidth="0.85" fill="none" />
              <path d="M-27 0 A27 27 0 0 0 27 0" stroke="rgba(149,165,141,0.34)" strokeWidth="0.75" fill="none" />
              <path d="M-20 0 A20 20 0 0 0 20 0" stroke="rgba(149,165,141,0.28)" strokeWidth="0.7" fill="none" />
              <path d="M-13 0 A13 13 0 0 0 13 0" stroke="rgba(149,165,141,0.22)" strokeWidth="0.65" fill="none" />
              <line x1="-34" y1="0" x2="34" y2="0" stroke="rgba(149,165,141,0.32)" strokeWidth="0.65" />
              <line x1="0" y1="0" x2="0" y2="-34" stroke="rgba(149,165,141,0.32)" strokeWidth="0.65" />
              <line x1="0" y1="0" x2="-24" y2="-24" stroke="rgba(149,165,141,0.26)" strokeWidth="0.6" />
              <line x1="0" y1="0" x2="24" y2="-24" stroke="rgba(149,165,141,0.26)" strokeWidth="0.6" />
              <circle cx="0" cy="0" r="2.2" fill="rgba(149,165,141,0.45)" />
            </g>

            {/* Mini abanico centro-inferior */}
            <g transform="translate(340, 444) scale(1,-1)">
              <path d="M-34 0 A34 34 0 0 0 34 0" stroke="rgba(149,165,141,0.32)" strokeWidth="0.85" fill="none" />
              <path d="M-27 0 A27 27 0 0 0 27 0" stroke="rgba(149,165,141,0.26)" strokeWidth="0.75" fill="none" />
              <path d="M-20 0 A20 20 0 0 0 20 0" stroke="rgba(149,165,141,0.22)" strokeWidth="0.7" fill="none" />
              <line x1="-34" y1="0" x2="34" y2="0" stroke="rgba(149,165,141,0.26)" strokeWidth="0.65" />
              <line x1="0" y1="0" x2="0" y2="-34" stroke="rgba(149,165,141,0.26)" strokeWidth="0.65" />
              <circle cx="0" cy="0" r="2.2" fill="rgba(149,165,141,0.38)" />
            </g>

            {/* Líneas horizontales flanqueando el sello */}
            <line x1="140" y1="178" x2="270" y2="178" stroke="rgba(149,165,141,0.42)" strokeWidth="0.85" />
            <line x1="140" y1="183" x2="270" y2="183" stroke="rgba(149,165,141,0.25)" strokeWidth="0.55" />
            <line x1="410" y1="178" x2="540" y2="178" stroke="rgba(149,165,141,0.42)" strokeWidth="0.85" />
            <line x1="410" y1="183" x2="540" y2="183" stroke="rgba(149,165,141,0.25)" strokeWidth="0.55" />
            <line x1="140" y1="228" x2="270" y2="228" stroke="rgba(149,165,141,0.42)" strokeWidth="0.85" />
            <line x1="140" y1="233" x2="270" y2="233" stroke="rgba(149,165,141,0.25)" strokeWidth="0.55" />
            <line x1="410" y1="228" x2="540" y2="228" stroke="rgba(149,165,141,0.42)" strokeWidth="0.85" />
            <line x1="410" y1="233" x2="540" y2="233" stroke="rgba(149,165,141,0.25)" strokeWidth="0.55" />

            {/* Rombos en extremos */}
            <g transform="translate(133, 205)">
              <path d="M0 -9 L6 0 L0 9 L-6 0 Z" stroke="rgba(149,165,141,0.5)" strokeWidth="0.8" fill="none" />
              <circle cx="0" cy="0" r="1.8" fill="rgba(149,165,141,0.45)" />
            </g>
            <g transform="translate(547, 205)">
              <path d="M0 -9 L6 0 L0 9 L-6 0 Z" stroke="rgba(149,165,141,0.5)" strokeWidth="0.8" fill="none" />
              <circle cx="0" cy="0" r="1.8" fill="rgba(149,165,141,0.45)" />
            </g>

            {/* Puntos decorativos */}
            <circle cx="170" cy="180" r="1.6" fill="rgba(149,165,141,0.48)" />
            <circle cx="185" cy="180" r="1.1" fill="rgba(149,165,141,0.35)" />
            <circle cx="495" cy="180" r="1.6" fill="rgba(149,165,141,0.48)" />
            <circle cx="510" cy="180" r="1.1" fill="rgba(149,165,141,0.35)" />
            <circle cx="170" cy="230" r="1.6" fill="rgba(149,165,141,0.48)" />
            <circle cx="185" cy="230" r="1.1" fill="rgba(149,165,141,0.35)" />
            <circle cx="495" cy="230" r="1.6" fill="rgba(149,165,141,0.48)" />
            <circle cx="510" cy="230" r="1.1" fill="rgba(149,165,141,0.35)" />

            {/* Líneas verticales laterales */}
            <line x1="26" y1="90" x2="26" y2="370" stroke="rgba(149,165,141,0.22)" strokeWidth="0.65" />
            <line x1="654" y1="90" x2="654" y2="370" stroke="rgba(149,165,141,0.22)" strokeWidth="0.65" />
          </svg>

          {/* === SOLAPA ANIMADA === */}
          <div
            className="absolute top-0 left-0 right-0 origin-top"
            style={{
              height: "43.5%",
              transformStyle: "preserve-3d",
              transform: isOpening ? "rotateX(180deg)" : "rotateX(0deg)",
              transition: "transform 0.75s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {/* Frente de la solapa */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 680 200"
              preserveAspectRatio="none"
              style={{ backfaceVisibility: "hidden", overflow: "visible" }}
            >
              <defs>
                <linearGradient id="flapFrontGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#DDE1E6" />
                  <stop offset="100%" stopColor="#C8CDD4" />
                </linearGradient>
              </defs>
              <polygon points="0,0 680,0 340,200" fill="url(#flapFrontGrad)" />
              <polyline points="0,0 340,200 680,0" fill="none" stroke="rgba(93,123,159,0.35)" strokeWidth="1" />
              {/* Decoración art déco en la solapa */}
              <line x1="0" y1="0" x2="340" y2="200" stroke="rgba(149,165,141,0.2)" strokeWidth="0.7" />
              <line x1="680" y1="0" x2="340" y2="200" stroke="rgba(149,165,141,0.2)" strokeWidth="0.7" />
              <path d="M306 0 A34 34 0 0 0 374 0" stroke="rgba(149,165,141,0.32)" strokeWidth="0.75" fill="none" />
              <path d="M313 0 A27 27 0 0 0 367 0" stroke="rgba(149,165,141,0.26)" strokeWidth="0.65" fill="none" />
              <circle cx="340" cy="0" r="2" fill="rgba(149,165,141,0.4)" />
            </svg>

            {/* Reverso de la solapa */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 680 200"
              preserveAspectRatio="none"
              style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)", overflow: "visible" }}
            >
              <polygon points="0,0 680,0 340,200" fill="#E2E5E9" />
            </svg>
          </div>

         {/* === SELLO === */}
<div
  className="absolute -translate-x-1/2 left-[41%] md:left-[43%]"
  style={{
    top: "calc(43.5% - 44px)", // ← subido para compensar el mayor tamaño
    zIndex: 10,
    transformStyle: "preserve-3d",
    transform: isOpening ? "rotateX(180deg) translateY(0px)" : "rotateX(0deg)",
    transition: "transform 0.75s cubic-bezier(0.4,0,0.2,1)",
  }}
>
  <div
    style={{
      width: "clamp(72px, 10vw, 96px)",   // ← antes: clamp(48px, 6.5vw, 62px)
      height: "clamp(72px, 10vw, 96px)",  // ← antes: clamp(48px, 6.5vw, 62px)
      borderRadius: "50%",
      background: "radial-gradient(circle at 36% 33%, #96b48e, #7d9b76 50%, #628060 75%, #4e6a4d)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 16px rgba(78,106,77,0.45), inset 0 2px 5px rgba(255,255,255,0.22), inset 0 -2px 5px rgba(0,0,0,0.12)",
      position: "relative",
    }}
  >
    {/* Anillo interior */}
    <div style={{
      position: "absolute",
      inset: "8px",                        // ← antes: 5px
      borderRadius: "50%",
      border: "1px solid rgba(255,255,255,0.25)",
    }} />
    <span style={{
      fontFamily: "Dancing Script",
      fontStyle: "italic",
      fontSize: "clamp(20px, 3vw, 30px)", // ← antes: clamp(13px, 1.8vw, 18px)
      color: "rgba(255,255,255,0.9)",
      letterSpacing: "1px",
      textShadow: "0 1px 3px rgba(0,0,0,0.25)",
      position: "relative",
      zIndex: 1,
      lineHeight: 1,
    }}>
      A<span style={{ fontSize: "0.5em", verticalAlign: "small" }}>&amp;</span>V
    </span>
  </div>
</div>

       

          {/* Sombra debajo del sobre */}
          <div
            className="absolute -bottom-4 left-10 right-10 h-6 rounded-full"
            style={{
              background: "rgba(60,80,110,0.12)",
              filter: "blur(10px)",
              transition: "opacity 0.4s ease",
              opacity: isOpening ? 0 : 1,
            }}
          />
        </div>

        {/* Instrucción */}
        <div
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
          style={{ bottom: "-36px", opacity: isOpening ? 0 : 1, transition: "opacity 0.4s ease" }}
        >
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(9px, 2vw, 11px)",
            letterSpacing: "0.45em",
            color: "#95A58D",
            margin: 0,
            animation: "pulse 2.5s ease-in-out infinite",
          }}>
            TOCA PARA ABRIR
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function Diamond({ color = "rgba(149,165,141,0.65)", size = 10 }) {
  return (
    <svg width={size * 1.4} height={size * 1.4} viewBox="0 0 18 18" style={{ flexShrink: 0 }}>
      <rect x="4" y="4" width="10" height="10" fill="none" stroke={color} strokeWidth="0.9" transform="rotate(45,9,9)" />
      <rect x="6.5" y="6.5" width="5" height="5" fill={color} opacity="0.35" transform="rotate(45,9,9)" />
    </svg>
  );
}
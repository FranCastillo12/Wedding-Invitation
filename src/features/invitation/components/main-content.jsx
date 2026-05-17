import Hero from "@/features/invitation/components/hero";
import { Events } from "@/features/events";


import { Gifts } from "@/features/gifts";
import { CountdownSection } from "@/features/CountDown";
import { Place } from "@/features/Place";
import { Itinerary } from "@/features/Itinerary";
import { DressCode } from "@/features/DressCode";

import { Attendance } from "@/features/Attendance";
import { Footer } from "@/features/Footer";








const WEDDING_DATE = new Date("2027-01-16T14:30:00")

// Main Invitation Content
export default function MainContent() {
  return (
    <>
      <Hero />
      <CountdownSection targetDate={WEDDING_DATE}/>

      <Place />
    
      <Itinerary />
    
      <DressCode />
   
      <Gifts />
      
      <Events />
      <Attendance />
      <Footer />

 
   
    </>
  );
}

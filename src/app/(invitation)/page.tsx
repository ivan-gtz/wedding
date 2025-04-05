"use client";
import WeddingTimeline from "@/components/WeddingTimeline";
import DressCode from "@/components/DressCode";
import { motion, useScroll } from "framer-motion";
import GiftSuggestion from "@/components/GiftSuggestion";
import { PhotoFirst } from "@/components/images/PhotoFirt";
import { ShowFirst } from "@/components/ShowFirst";
import { Showsecond } from "@/components/ShowSecond";
import { PhotoSecond } from "@/components/images/PhotoSecond";
import { PhotoThird } from "@/components/images/PhotoThird";
import OurParents from "@/components/OurParents";
import { Suspense } from 'react';
import PassesHandler from "@/components/PassesHandler";

const SlideUpText = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20%" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className="w-full"
  >
    {children}
  </motion.div>
);

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const rsvpDeadline = "10 de Mayo de 2025";
  const rsvpLink = `https://wa.me/63951215?text=${encodeURIComponent("Confirmo asistencia a la boda!")}`;
  const rsvpLink2 = `https://wa.me/67437595?text=${encodeURIComponent("Confirmo asistencia a la boda!")}`;

  return (
    <div className="">
      <PhotoFirst />
      <ShowFirst />

      <SlideUpText delay={0.2}>
        <Showsecond />
      </SlideUpText>

      <SlideUpText delay={0.2}>
        <PhotoSecond />
      </SlideUpText>
      <SlideUpText delay={0.2}>
        <PhotoThird />
      </SlideUpText>
      <SlideUpText delay={0.2}>
        <OurParents />
      </SlideUpText>
      <SlideUpText delay={0.2}>
        <WeddingTimeline />
      </SlideUpText>
      <SlideUpText delay={0.2}>
        <DressCode />
      </SlideUpText>
      <SlideUpText delay={0.2}>
        <Suspense fallback={<div>Cargando confirmación...</div>}>
          <PassesHandler
            defaultPasses={1}
            rsvpDeadline={rsvpDeadline}
            rsvpLink={rsvpLink}
            rsvpLink2={rsvpLink2}
          />
        </Suspense>
      </SlideUpText>
      <SlideUpText delay={0.4}>

        <GiftSuggestion />
      </SlideUpText>

    </div>
  );
}
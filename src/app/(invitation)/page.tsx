"use client";
import WeddingTimeline from "@/components/WeddingTimeline";
import DressCode from "@/components/DressCode";
import GiftSuggestion from "@/components/GiftSuggestion";
import { PhotoFirst } from "@/components/images/PhotoFirt";
import { ShowFirst } from "@/components/ShowFirst";
import { Showsecond } from "@/components/ShowSecond";
import { PhotoSecond } from "@/components/images/PhotoSecond";
import { PhotoThird } from "@/components/images/PhotoThird";
import OurParents from "@/components/OurParents";
import { Suspense } from 'react';
import PassesHandler from "@/components/PassesHandler";

export default function HomePage() {
  const rsvpDeadline = "10 de Mayo de 2025";
  const rsvpLink = `https://wa.me/63951215?text=${encodeURIComponent("Confirmo asistencia a la boda!")}`;
  const rsvpLink2 = `https://wa.me/67437595?text=${encodeURIComponent("Confirmo asistencia a la boda!")}`;

  return (
    <div className="">
      <PhotoFirst />
      <ShowFirst />
      <Showsecond />
      <PhotoSecond />
      <PhotoThird />
      <div>
        <OurParents />
      </div>
      <div>
        <WeddingTimeline />
      </div>
      <div>
        <DressCode />
      </div>
      <div>
        <Suspense fallback={<div>Cargando confirmación...</div>}>
          <PassesHandler
            defaultPasses={1}
            rsvpDeadline={rsvpDeadline}
            rsvpLink={rsvpLink}
            rsvpLink2={rsvpLink2}
          />
        </Suspense>
      </div>
      <div>
        <GiftSuggestion />
      </div>
    </div>
  );
}
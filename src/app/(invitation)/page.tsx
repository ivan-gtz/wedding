"use client"
import WeddingTimeline from "@/components/WeddingTimeline";
import DressCode from "@/components/DressCode";
import ConfirmAttendance from "@/components/Confirmation";
import GiftSuggestion from "@/components/GiftSuggestion";
import { PhotoFirst } from "@/components/images/PhotoFirt";
import { ShowFirst } from "@/components/ShowFirst";
import { Showsecond } from "@/components/ShowSecond";
import { PhotoSecond } from "@/components/images/PhotoSecond";
import { PhotoThird } from "@/components/images/PhotoThird";
import OurParents from "@/components/OurParents";
import { useSearchParams } from 'next/navigation';
export default function HomePage() {

  const searchParams = useSearchParams();
  const defaultPasses = 1;
  const getValidPasses = () => {
    const urlPasses = searchParams.get('pases');

    if (!urlPasses) return defaultPasses;
    const numericPasses = parseInt(urlPasses);

    if (isNaN(numericPasses)) return defaultPasses; // Si no es número
    return Math.max(1, numericPasses); // Mínimo 1 pase
  };

  const passes = getValidPasses();

  const rsvpDeadline = "10 de Mayo de 2025";
  // ¡IMPORTANTE! Reemplaza '#' con tu enlace real (Formulario, WhatsApp, Email, etc.)
  const rsvpLink = `https://wa.me/63951215?text=${encodeURIComponent("Confirmo asistencia a la boda!")}`;
  const rsvpLink2 = `https://wa.me/67437595?text=${encodeURIComponent("Confirmo asistencia a la boda!")}`;
  // Ejemplo enlace WhatsApp (reemplaza con tu número y ajusta el mensaje):
  // const rsvpLink = `https://wa.me/1234567890?text=${encodeURIComponent("Confirmo asistencia a la boda!")}`;
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
        <ConfirmAttendance
          deadline={rsvpDeadline}
          confirmationLink={rsvpLink}
          confirmationLink2={rsvpLink2}
          passes={passes}
        />
      </div>
      <div>
        <GiftSuggestion />
      </div>
    </div>
  );
}
"use client"
import Image from "next/image";
import WeddingTimeline from "@/components/WeddingTimeline";
import DressCode from "@/components/DressCode";
import { FaGlassCheers } from "react-icons/fa";
import ConfirmAttendance from "@/components/Confirmation";
import GiftSuggestion from "@/components/GiftSuggestion";
import { PhotoFirst } from "@/components/images/PhotoFirt";
import { ShowFirst } from "@/components/ShowFirst";
import { Showsecond } from "@/components/ShowSecond";
import { PhotoSecond } from "@/components/images/PhotoSecond";
import { PhotoThird } from "@/components/images/PhotoThird";
import OurParents from "@/components/OurParents";

export default function HomePage() {

    // Define la fecha límite y el enlace de confirmación
    const rsvpDeadline = "10 de Mayo de 2025";
    // ¡IMPORTANTE! Reemplaza '#' con tu enlace real (Formulario, WhatsApp, Email, etc.)
    const rsvpLink =`https://wa.me/67437595?text=${encodeURIComponent("Confirmo asistencia a la boda!")}`;
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
      />
      </div>
      <div>
        <GiftSuggestion />
      </div>
    </div>
  );
}
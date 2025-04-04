"use client"
import CountdownTimer from "@/components/CoutDownTimer";
import Image from "next/image";
import { motion } from "motion/react"
import { goodFont, loraFont, nameFont, titleFont } from "@/config/fonts";
import DateDisplay from "@/components/DataDisplay";
import StyledCalendar from "@/components/StyledCalendar";
import WeddingTimeline from "@/components/WeddingTimeline";
import DressCode from "@/components/DressCode";
import MusicPlayer from "@/components/MusicPlayer";
import LocationInfo from "@/components/LocationInfo";
import { FaGlassCheers } from "react-icons/fa";
import ConfirmAttendance from "@/components/Confirmation";
import GiftSuggestion from "@/components/GiftSuggestion";
import { PhotoFirst } from "@/components/images/PhotoFirt";
import { ShowFirst } from "@/components/ShowFirst";
import { Showsecond } from "@/components/ShowSecond";
import { PhotoSecond } from "@/components/images/PhotoSecond";
import { Bible } from "@/components/Bible";
import { PhotoThird } from "@/components/images/PhotoThird";
import OurParents from "@/components/OurParents";

const receptionData = {
  icon: FaGlassCheers, // Otro icono diferente
  title: "Recepción",
  addressLines: [
    "Salón de Fiestas 'El Encanto'",
    "Avenida Los Álamos 456",
    "Ciudad Ejemplo, Provincia",
    "País"
  ],
  mapLink: "YOUR_GOOGLE_MAPS_LINK_RECEPTION", // ¡REEMPLAZA ESTE ENLACE!
  buttonText: "Como llegar" // Texto personalizado para el botón
};
const councilData = {
  icon: FaGlassCheers, // Otro icono diferente
  title: "Consejo bíblico",
  addressLines: [
    "Salón del Renio de los Testigos De Jehová'",
    "Avenida Los Álamos 456",
    "Luego del consejo bíblico rogamos encarecidamente que puedan pasar directamente al salón de evento ya que se servirá un aperitivo y acto seguido la recepción",
    "Agradecemos su colaboración"
  ],
  mapLink: "YOUR_GOOGLE_MAPS_LINK_RECEPTION", // ¡REEMPLAZA ESTE ENLACE!
  buttonText: "Como llegar" // Texto personalizado para el botón
};

export default function HomePage() {

    // Define la fecha límite y el enlace de confirmación
    const rsvpDeadline = "02 de Mayo de 2025";
    // ¡IMPORTANTE! Reemplaza '#' con tu enlace real (Formulario, WhatsApp, Email, etc.)
    const rsvpLink = "#";
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
        <WeddingTimeline />
      </div>

      <div className="flex flex-col gap-4 p-4 max-w-4xl mx-auto"> {/* Ajusta max-w-* según necesites */}
        {/* Imagen 3 */}


        {/* Imagen 4 */}
        <Image
          src="/imgs/boda4.jpg"
          alt="imagen de la boda 3"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover rounded-lg shadow-sm"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 600px"
        />
      </div>
      <div>
        <DressCode />
      </div>
      <div>
        <OurParents />
      </div>
      <div>
        <LocationInfo {...receptionData}/>
        <LocationInfo {...councilData}/>
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
// components/ConfirmAttendance.tsx
import { garaFont, titleFont } from '@/config/fonts';
import React from 'react';
import { BsCalendarHeart } from 'react-icons/bs'; // Importa el icono
import { TbCards } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";


interface ConfirmAttendanceProps {
  // Puedes pasar la fecha límite y el enlace como props para mayor flexibilidad
  deadline: string; // Ejemplo: "02 de Mayo de 2025"
  confirmationLink: string;
  confirmationLink2: string;
  passes: number;
}

const ConfirmAttendance: React.FC<ConfirmAttendanceProps> = ({
  deadline,
  confirmationLink,
  confirmationLink2,
  passes
}) => {

  // Prepara el enlace de WhatsApp (ejemplo, puedes usar cualquier enlace)
  // const whatsappMessage = encodeURIComponent(`¡Hola! Confirmo mi asistencia a la boda. ¡Gracias!`);
  // const whatsappLink = `https://wa.me/TUNUMERODETELEFONO?text=${whatsappMessage}`;
  // Asegúrate de reemplazar TUNUMERODETELEFONO o usa el confirmationLink directamente si es un formulario

  return (
    <section className="py-16 md:py-20 px-4 text-center bg-gray-100">
      <div className="max-w-md mx-auto"> {/* Limita el ancho */}
        <div>
          <TbCards className="w-14 h-14 md:w-18 md:h-18 text-brand-icon-color mx-auto mb-6" />

          <h1 className={`${titleFont.className} text-2xl md:text-2xl font-semibold uppercase tracking-widest text-brand-text-title mb-4`}>
            Pases
          </h1>
          <p className={`${titleFont.className} text-center font-semibold my-2`}>Tenemos reservado</p>
          <div className="flex flex-row place-content-center mb-4">
            <p className={`${titleFont.className} mx-2 font-medium text-2xl`}>para ti</p>
            <p className={`${titleFont.className} mx-2 font-semibold text-4xl`}>{ passes }</p>
            <p className={`${titleFont.className} mx-2 font-medium text-2xl`}>
              {passes == 1 ? "lugar" : "lugares"}
            </p>
          </div>

        </div>
        {/* Icono */}
        <BsCalendarHeart className="w-10 h-10 md:w-12 md:h-12 text-brand-icon-color mx-auto mb-6" />

        {/* Título */}
        <h3 className="font-serif text-lg md:text-xl font-medium uppercase tracking-widest text-brand-text-title mb-4">
          Confirmar Asistencia
        </h3>

        {/* Fecha Límite */}
        <p className={`${garaFont.className} text-xl text-brand-text-body mb-8`}>
          Por favor, confirma tu asistencia hasta el {deadline}
        </p>
        <p className={`${garaFont.className} text-xl mb-8`}>
           Puedes confirmar con:
        </p>

        <div className="flex flex-col items-center">
        {/* Botón de Confirmación */}
          <a
            href={confirmationLink} // Usa el enlace pasado como prop
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-brand-text-title text-brand-text-title
                        font-serif text-sm uppercase tracking-wider font-medium
                        py-2.5 px-6  /* Ajusta padding si es necesario */
                        hover:bg-brand-text-title hover:text-brand-background-light
                        transition-colors duration-200 ease-in-out
                        mb-4"
          >
            <FaWhatsapp className="mr-2" size={25}/>
            WhatsApp Oscar
          </a>
          <p className='text-center mb-4'>ó</p>
          <a
            href={confirmationLink2} // Usa el enlace pasado como prop
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-brand-text-title text-brand-text-title
                        font-serif text-sm uppercase tracking-wider font-medium
                        py-2.5 px-6  /* Ajusta padding si es necesario */
                        hover:bg-brand-text-title hover:text-brand-background-light
                        transition-colors duration-200 ease-in-out
                        mb-8"
          >
            <FaWhatsapp className="mr-2" size={25}/>
            WhatsApp Liceth
          </a>
        </div>
        {/* Texto Final */}
        <div className={`${garaFont.className} text-lg text-brand-text-body leading-relaxed`}>
          <p className="mb-1">¡Esperamos verlos y celebrar juntos!</p>
          <p>Con mucho cariño.</p>
          {/* Puedes añadir los nombres aquí si quieres */}
          {/* <p className="mt-1">Nombre Novia & Nombre Novio</p> */}
        </div>

      </div>
    </section>
  );
};

export default ConfirmAttendance;
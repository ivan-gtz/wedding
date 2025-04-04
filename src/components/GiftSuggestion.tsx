// components/GiftSuggestion.tsx
import React from 'react';
import Image from 'next/image'; // Importa el componente Image de Next.js
import { FaGift } from 'react-icons/fa'; // Icono de regalo
import { BsEnvelopeHeart } from 'react-icons/bs'; // Icono de sobre con corazón

const GiftSuggestion = () => {
  // ¡IMPORTANTE! Reemplaza esta ruta con la ubicación real de tu imagen en la carpeta /public
  const coupleImageUrl = '/imgs/boda4.jpg';

  return (
    // Sección principal con padding y color de fondo
    <section className="bg-brand-background-light py-12 md:py-16 text-center relative overflow-hidden">
      {/* Opcional: Añadir una textura o gradiente sutil de fondo si se desea */}
      {/* <div className="absolute inset-0 bg-[url('/path/to/subtle-texture.png')] opacity-5 mix-blend-multiply z-0"></div> */}

      {/* Contenedor principal del contenido */}
      <div className="relative z-10 max-w-lg mx-auto px-4">

        {/* Título Principal */}
        <h3 className="font-script text-3xl md:text-4xl text-brand-text-title mb-4">
          Sugerencia de regalo
        </h3>

        {/* Icono de Regalo */}
        <FaGift className="w-8 h-8 md:w-10 md:h-10 text-brand-icon-color mx-auto mb-6" />

        {/* Mensaje Principal */}
        <p className="font-serif text-lg md:text-xl font-semibold text-brand-text-body mb-2">
          Tu presencia es nuestro mayor regalo
        </p>

        {/* Mensaje Secundario (efectivo) */}
        <p className="font-serif text-base text-brand-text-body mb-8 leading-relaxed">
          Si deseas obsequiarnos algún presente<br /> agradeceríamos que fuera en efectivo
        </p>

        {/* Icono de Sobre (Separador) */}
        <BsEnvelopeHeart className="w-10 h-10 md:w-12 md:h-12 text-brand-icon-color mx-auto mb-8" />

      </div> {/* Fin del contenedor de texto superior */}

      {/* Sección de la Imagen Principal */}
      <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto mb-8 lg:mb-0 rounded-lg shadow-lg overflow-hidden">
        {/* Usamos Next.js Image para optimización */}
        <Image
          src={coupleImageUrl}
          alt="Nuestra foto junto al lago" // Texto alternativo descriptivo
          layout="fill" // Hace que la imagen llene el contenedor
          objectFit="cover" // Escala la imagen para cubrir, puede recortar
          quality={85} // Ajusta la calidad de imagen (0-100)
        />
      </div>

      {/* Texto de Agradecimiento Inferior */}
      {/* Solución simple con margen negativo para superponer ligeramente */}
       <div className="relative z-10 max-w-lg mx-auto px-4 mt-[-2rem] md:mt-[1.5rem]">
         <p className="font-script text-2xl md:text-3xl text-brand-text-title">
           Gracias por ser parte de nuestro gran día
         </p>
       </div>

       {/* --- Alternativa: Superposición con Gradiente (más complejo) --- */}
       {/* Quita el div anterior y descomenta este si prefieres este efecto */}
       {/* <div className="absolute bottom-0 left-0 right-0 z-20 pb-6 pt-10 bg-gradient-to-t from-brand-background-light via-brand-background-light/90 to-transparent">
           <p className="font-script text-2xl md:text-3xl text-brand-text-title text-center px-4">
               Gracias por ser parte de nuestro gran día
           </p>
       </div> */}

    </section>
  );
};

export default GiftSuggestion;
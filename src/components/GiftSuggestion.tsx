// components/GiftSuggestion.tsx
import React from 'react';
import Image from 'next/image'; // Importa el componente Image de Next.js
import { BsEnvelopeHeart } from 'react-icons/bs'; // Icono de sobre con corazón
import { ariFont, garaFont, titleFont } from '@/config/fonts';

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
        <h3 className={`${titleFont.className} text-3xl md:text-4xl text-brand-text-title mb-4`}>
          Sugerencia de regalo
        </h3>

        {/* Icono de Sobre (Separador) */}
        <BsEnvelopeHeart className="w-12 h-12 md:w-12 md:h-12 text-brand-icon-color mx-auto mb-8" />

        {/* Mensaje Principal */}
        <p className={`${garaFont.className} font-serif text-2xl md:text-2xl font-semibold text-brand-text-body mb-2`}>
          Tu presencia es nuestro mayor regalo
        </p>

        {/* Mensaje Secundario (efectivo) */}
        <p className={`${garaFont.className} font-serif text-xl text-brand-text-body mb-8 leading-relaxed`}>
          Si deseas obsequiarnos algún presente<br /> agradeceríamos que fuera en efectivo
        </p>
        <div className='relative inline-block'>
          <Image 
            src={'/imgs/giftme1.png'} 
            alt={'sugerencia de ragalo'}
            width={450}          
            height={450}
            className="block rounded-xl shadow-sm"
          />
        </div>

      </div> {/* Fin del contenedor de texto superior */}

      {/* Sección de la Imagen Principal */}
      <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto mb-8 mt-10 lg:mb-0 rounded-lg shadow-lg overflow-hidden">
        {/* Usamos Next.js Image para optimización */}
        <Image
          src={coupleImageUrl}
          alt="Nuestra foto junto al lago" // Texto alternativo descriptivo
          layout="fill" // Hace que la imagen llene el contenedor
          objectFit="cover" // Escala la imagen para cubrir, puede recortar
          quality={85} // Ajusta la calidad de imagen (0-100)
        />
      </div>

      {/* Texto de Agradecimiento Inferior modificado */}
      {/* Solución simple con margen negativo para superponer ligeramente */}
       <div className="relative z-10 max-w-lg mx-auto px-4 mt-[-2rem] md:mt-[1.5rem]">
         <p className={`${ariFont.className} text-4xl md:text-6xl text-brand-text-title`}>
           Gracias por ser parte de nuestro gran día
         </p>
       </div>

    </section>
  );
};

export default GiftSuggestion;
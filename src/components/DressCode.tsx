import { garaFont, tangFont, titleFont } from '@/config/fonts';
import React from 'react';
// Importa tus fuentes si usas next/font
// import { Great_Vibes, Playfair_Display } from 'next/font/google';

// Configura las fuentes (ejemplo con Google Fonts)
// const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ['400'] });
// const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'], style: ['normal', 'italic'] });

const DressCode = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white text-gray-800">

      <h2 className={`${tangFont.className} text-5xl md:text-6xl mb-6 italic`}>
        {/* Si usas una fuente variable/local, aplica la clase aquí */}
        Código de Vestimenta
      </h2>
      <h3 className={`${titleFont.className} text-lg md:text-2xl mb-10 tracking-widest font-serif text-gray-800`}>
        FORMAL
      </h3>

      {/* --- Ilustraciones --- */}
      <div className="flex justify-center items-end space-x-8 md:space-x-12 mb-5">
        {/* Reemplaza src con la ruta a tus imágenes */}
        <img
          src="/icons/man.png" 
          alt="Ilustración de vestido de noche largo"
          className="h-36 md:h-48 w-auto" // Ajusta la altura según necesites
        />
        <img
          src="/icons/women2.png" 
          alt="Ilustración de esmoquin"
          className="h-36 md:h-48 w-auto" // Ajusta la altura según necesites
        />
      </div>

      {/* --- Nota sobre color --- */}
      {/* Aplica tu fuente serif itálica */}
      <p className={`${garaFont.className} text-xl italic text-gray-700 mb-2 max-w-md`}>
        Hemos reservado el color BLANCO para la novia el color CELESTE para el novio.
      </p>
    </section>
  );
};

export default DressCode;
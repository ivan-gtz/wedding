import React from 'react';
// Importa tus fuentes si usas next/font
// import { Great_Vibes, Playfair_Display } from 'next/font/google';

// Configura las fuentes (ejemplo con Google Fonts)
// const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ['400'] });
// const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'], style: ['normal', 'italic'] });

const DressCode = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white text-gray-800">
      {/* --- Título Principal --- */}
      {/* Aplica aquí tu fuente script personalizada. Ejemplo: className={greatVibes.className} */}
      <h2 className="text-4xl md:text-5xl mb-6 font-serif italic text-gray-700">
        {/* Si usas una fuente variable/local, aplica la clase aquí */}
        Código de Vestimenta
      </h2>

      {/* --- Nivel de Etiqueta --- */}
      {/* Aplica aquí tu fuente serif. El tracking-widest simula el espaciado. */}
      {/* Considera 'uppercase' si la fuente no tiene small caps */}
      <h3 className="text-xl md:text-2xl mb-10 tracking-widest font-serif text-gray-800">
        FORMAL
      </h3>

      {/* --- Ilustraciones --- */}
      <div className="flex justify-center items-end space-x-8 md:space-x-12 mb-10">
        {/* Reemplaza src con la ruta a tus imágenes */}
        <img
          src="/icons/vals2.png" 
          alt="Ilustración de vestido de noche largo"
          className="h-36 md:h-48 w-auto" // Ajusta la altura según necesites
        />
        <img
          src="/icons/vals2.png" 
          alt="Ilustración de esmoquin"
          className="h-36 md:h-48 w-auto" // Ajusta la altura según necesites
        />
      </div>

      {/* --- Nota sobre color --- */}
      {/* Aplica tu fuente serif itálica */}
      <p className="text-base italic font-serif text-gray-600 mb-12 max-w-md">
        (Hemos reservado el color BLANCO para la novia el color CELESTE para el novio.)
      </p>
      <h3 className="text-xl md:text-2xl mb-2 tracking-widest font-serif text-gray-800">
        Ellas:
      </h3>
      <p className="text-lg md:text-xl text-gray-800 mb-2">
            Vestido largo y zapatos cómodos
      </p>
      <h3 className="text-xl md:text-2xl mb-2 tracking-widest font-serif text-gray-800">
        Ellos:
      </h3>
      <p className="text-lg md:text-xl text-gray-800 mb-2">
            Traje y corbata
      </p>

    </section>
  );
};

export default DressCode;
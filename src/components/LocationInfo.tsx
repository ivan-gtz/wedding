// components/LocationInfo.tsx
import React from 'react';

interface LocationInfoProps {
  // Prop para recibir el componente Icono (de react-icons u otra librería)
  icon: React.ElementType;
  title: string;
  addressLines: string[]; // Un array para las líneas de la dirección
  mapLink: string;
  buttonText?: string; // Texto opcional para el botón (default: "VER MAPA")
}

const LocationInfo: React.FC<LocationInfoProps> = ({
  icon: IconComponent, // Renombramos la prop para usarla como componente
  title,
  addressLines,
  mapLink,
  buttonText = "VER MAPA" // Valor por defecto para el texto del botón
}) => {
  return (
    // Contenedor principal: centrado, con padding y ancho máximo opcional
    <div className="max-w-sm mx-auto text-center py-10 px-4">

      {/* Icono */}
      <IconComponent className="w-12 h-12 md:w-14 md:h-14 text-brand-icon-color mx-auto mb-5" /> {/* Color y tamaño del icono */}

      {/* Título */}
      <h3 className="font-serif text-lg md:text-xl font-medium uppercase tracking-widest text-brand-text-title mb-4"> {/* Estilo del título */}
        {title}
      </h3>

      {/* Dirección */}
      <div className="font-serif text-sm md:text-base text-brand-text-body leading-normal mb-6"> {/* Estilo de la dirección */}
        {addressLines.map((line, index) => (
          // Renderiza cada línea de la dirección en un párrafo separado
          <p key={index}>{line}</p>
        ))}
      </div>

      {/* Botón */}
      <a
        href={mapLink}
        target="_blank" // Abrir en nueva pestaña
        rel="noopener noreferrer" // Buenas prácticas
        // Estilo del botón: borde, texto, padding, hover
        className="inline-block border border-brand-text-title text-brand-text-title
                   font-semibold text-xs uppercase tracking-wider
                   py-2.5 px-8 rounded
                   hover:bg-brand-text-title hover:text-brand-background-light
                   transition-colors duration-200 ease-in-out"
      >
        Como llegar
      </a>
    </div>
  );
};

export default LocationInfo;
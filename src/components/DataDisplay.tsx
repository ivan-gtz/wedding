// components/DateDisplay.tsx
import { testFont } from '@/config/fonts';
import React from 'react';

interface DateDisplayProps {
  dayOfWeek: string; 
  month: string;     
  dayNumber: string; 
  year: string;      
  time: string;      
}

const DateDisplay: React.FC<DateDisplayProps> = ({
  dayOfWeek,
  month,
  dayNumber,
  year,
  time,
}) => {
  return (
    <div className={`${testFont.className} flex items-center justify-center gap-5 sm:gap-8 text-stone-600`}>

      {/* Sección Izquierda: Día de la Semana */}
      <div className="text-right uppercase tracking-wider text-sm sm:text-base">
        {dayOfWeek}
      </div>

      {/* Sección Central: Fecha con Separadores */}
      <div className="
          flex flex-col items-center justify-center text-center
          border-l border-r border-stone-300  // Separadores verticales
          px-5 sm:px-8                         // Espaciado horizontal interno
        "
      >
        {/* Mes */}
        <span className="text-xs sm:text-sm uppercase tracking-widest mb-1"> {/* Más espaciado en letras */}
          {month}
        </span>

        {/* Número del Día */}
        {/* Ajusta tamaño (text-6xl), peso (font-light) y color (text-stone-500) */}
        <span className="text-5xl sm:text-7xl font-light text-stone-500 leading-none my-1">
          {dayNumber}
        </span>

        {/* Año */}
        <span className="text-sm sm:text-base tracking-wider mt-1">
          {year}
        </span>
      </div>

      {/* Sección Derecha: Hora */}
      {/* Usamos w-fit para que no ocupe más espacio del necesario */}
      <div className="text-left uppercase tracking-wider text-sm sm:text-base w-fit">
        {time}
      </div>

    </div>
  );
};

export default DateDisplay;
// components/StyledCalendarJune.tsx
import { motion } from "framer-motion"
import { titleFont } from '@/config/fonts';
import React from 'react';
import { FaHeart } from "react-icons/fa6";

interface StyledCalendarJuneProps {
  highlightDay: number;
}

const StyledCalendar: React.FC<StyledCalendarJuneProps> = ({ highlightDay }) => {

  const daysOfWeek = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];

  // Datos para Junio (Junio 2024 empieza en Sábado - índice 6)
  // Necesitamos 6 nulls al inicio. Junio tiene 30 días. Total 36 celdas.
  // Necesitamos 6 filas * 7 columnas = 42 celdas. Añadir 6 nulls al final.
  const monthDays = [
    1,
    2, 3, 4, 5, 6, 7, 8,          // Semana 2
    9, 10, 11, 12, 13, 14, 15,          // Semana 3
    16, 17, 18, 19, 20, 21, 22,          // Semana 4
    23, 24, 25, 26, 27, 28, 29,          // Semana 5
    30,
  ];

  // --- Colores basados en la nueva imagen (tonos marrones/beige) ---
  // Puedes ajustar estos colores o definirlos en tu tailwind.config.js
  const bgColor = 'bg-stone-50';         // Fondo beige muy claro
  const textColor = 'text-zinc-500';     // Texto marrón oscuro (días, números)
  const borderColor = 'border-amber-950'; // Borde marrón oscuro
  // const highlightBgColor = 'text-stone-400'; // Corazón marrón más suave
  const highlightTextColor = 'text-stone-50'; // Texto sobre corazón (o text-white)

  return (
    // Contenedor principal
    <div className={`p-4 sm:p-6 ${bgColor} max-w-xs sm:max-w-sm mx-auto rounded-lg font-serif shadow-sm`}>

      {/* Encabezado - Días de la semana */}
      <div className={`grid grid-cols-7 gap-x-1 pb-2 border-t pt-2 ${borderColor}`}>
        {daysOfWeek.map((day) => (
          <div
            key={day}
            // Usamos text-center y tamaño ajustado
            className={`text-center text-base font-medium ${titleFont.className}`}
            style={{ color: "#A2846F" }}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Cuerpo - Números del mes */}
      <div className={`grid grid-cols-7 gap-x-1 gap-y-1 pt-0 border-t ${borderColor}`}>
        {monthDays.map((day, index) => (
          <div
            key={index}
            className={`
              h-8 sm:h-10 flex items-center justify-center text-base relative 
              ${day ? textColor : 'text-transparent'}                      
            `}
          >
            {/* Renderizar solo si 'day' no es null */}
            {day !== null && (
              // Comprobar si es el día a resaltar
              day === highlightDay ? (
                <>
                  {/* Icono corazón de fondo */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1], // Escala de animación
                      transition: {
                        duration: 1,       // Duración de cada ciclo
                        repeat: Infinity,  // Repetir infinitamente
                        ease: "easeInOut"  // Suavizado de la animación
                      }
                    }}
                  >
                    <FaHeart
                      style={{ color: "#A2846F" }}
                      size={35}
                    />
                  </motion.div>
                  {/* Número encima */}
                  <span className={`absolute z-10 font-semibold ${highlightTextColor} ${titleFont.className}`}>
                    {day}
                  </span>
                </>
              ) : (
                // Día normal
                <span className={`${titleFont.className} font-medium`}>{day}</span>
              )
            )}
          </div>
        ))}
      </div>
      <div className={`${borderColor} border-t my-0`}></div>

    </div>
  );
};

export default StyledCalendar;
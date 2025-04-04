"use client";

import { titleFont } from '@/config/fonts';
import React, { useState, useEffect } from 'react';

// Interfaces (sin cambios)
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

// --- Valores Placeholder ---
// Puedes usar '00', '--', o lo que prefieras mostrar antes de que el JS cargue
const PLACEHOLDER_VALUE = "00";
const PLACEHOLDER_DAYS = 0; // O un string como '--' si prefieres

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  // Estado para el tiempo restante, inicializado a CERO o nulls
  // para que el cálculo inicial no dependa de new Date() aquí.
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // --- NUEVO ESTADO: Para controlar si el componente ya se montó en el cliente ---
  const [hasMounted, setHasMounted] = useState(false);

  // --- useEffect para marcar como montado ---
  useEffect(() => {
    // Este efecto solo corre en el cliente, después del primer render
    setHasMounted(true);
  }, []); // Array vacío = corre solo una vez al montar

  // Función para calcular (sin cambios)
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let newTimeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    if (difference > 0) {
      newTimeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return newTimeLeft;
  };

  // --- useEffect para actualizar el contador (solo si está montado) ---
  useEffect(() => {
    // Si no está montado, no hacemos nada aún
    if (!hasMounted) {
      return;
    }

    // Calcular el tiempo inicial una vez montado
    setTimeLeft(calculateTimeLeft());

    // Configurar el intervalo para futuras actualizaciones
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Limpiar el intervalo al desmontar
    return () => clearInterval(timer);

  }, [hasMounted, targetDate]); // Depende de hasMounted y targetDate

  // Función de formato (sin cambios)
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  // --- Renderizado con Clases Tailwind y Control de Montaje ---
  // Mostramos placeholders si aún no se ha montado en el cliente
  const displayDays = hasMounted ? timeLeft.days : PLACEHOLDER_DAYS;
  const displayHours = hasMounted ? formatNumber(timeLeft.hours) : PLACEHOLDER_VALUE;
  const displayMinutes = hasMounted ? formatNumber(timeLeft.minutes) : PLACEHOLDER_VALUE;
  const displaySeconds = hasMounted ? formatNumber(timeLeft.seconds) : PLACEHOLDER_VALUE;

  return (
    <div className="flex justify-center items-start sm:flex-wrap gap-2 sm:gap-5 p-5 sm:p-8 text-stone-600 bg-stone-300 text-center w-full font-serif">
      {/* Sección Días */}
      <div className={`flex flex-col items-center`}>
        <div className="bg-white px-5 py-4 sm:px-8 sm:py-5 rounded-lg mb-2.5 w-[85px] sm:w-[120px] shadow-md flex justify-center items-center">
          <span className="block text-3xl sm:text-5xl font-normal leading-none">
            {displayDays}
          </span>
        </div>
        <span className={`${titleFont.className} bg-white px-1 py-1 sm:px-4 sm:py-1.5 rounded-md w-[85px] sm:w-[120px] shadow-xs text-sm sm:text-base font-medium`}>
          DÍAS
        </span>
      </div>
  
      {/* Sección Horas */}
      <div className="flex flex-col items-center">
        <div className="bg-white px-5 py-4 sm:px-8 sm:py-5 rounded-lg mb-2.5 w-[85px] sm:w-[120px] shadow-md flex justify-center items-center">
          <span className="block text-3xl sm:text-5xl font-normal leading-none">
            {displayHours}
          </span>
        </div>
        <span className={`${titleFont.className} bg-white px-1 py-1 sm:px-4 sm:py-1.5 rounded-md w-[85px] sm:w-[120px] shadow-xs text-sm sm:text-base font-medium`}>
          HORAS
        </span>
      </div>
  
      {/* Sección Minutos */}
      <div className="flex flex-col items-center">
        <div className="bg-white px-5 py-4 sm:px-8 sm:py-5 rounded-lg mb-2.5 w-[85px] sm:w-[120px] shadow-md flex justify-center items-center">
          <span className="block text-3xl sm:text-5xl font-normal leading-none">
            {displayMinutes}
          </span>
        </div>
        <span className={`${titleFont.className} bg-white px-1 py-1 sm:px-4 sm:py-1.5 rounded-md w-[85px] sm:w-[120px] shadow-xs text-sm sm:text-base font-medium`}>
          MINUTOS
        </span>
      </div>
  
      {/* Sección Segundos */}
      <div className="flex flex-col items-center">
        <div className="bg-white px-5 py-4 sm:px-8 sm:py-5 rounded-lg mb-2.5 w-[85px] sm:w-[120px] shadow-md flex justify-center items-center">
          <span className="block text-3xl sm:text-5xl font-normal leading-none">
            {displaySeconds}
          </span>
        </div>
        <span className={`${titleFont.className} bg-white px-1 py-1 sm:px-4 sm:py-1.5 rounded-md w-[85px] sm:w-[120px] shadow-xs text-sm sm:text-base font-medium`}>
          SEGUNDOS
        </span>
      </div>
    </div>
  );
  
};

export default CountdownTimer;
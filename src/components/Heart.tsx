// components/HeartSeparator.tsx (o donde lo tengas)
import React from 'react';

const HeartSeparator = ({ className }: { className?: string }) => (
    <svg
        className={className} // Permite pasar clases desde fuera (color, tamaño, margen)
        viewBox="0 0 100 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor" // Hereda el color del texto
        strokeWidth="1.5" // Grosor de la línea (ajusta según necesites)
    >
        {/* Línea izquierda */}
        <path d="M0 10 H 35" strokeLinecap="round" />
        {/* Corazón (usando stroke y fill para que coincida mejor) */}
        <path
            d="M40 10 C 40 5, 45 0, 50 0 S 60 5, 60 10 C 60 15, 50 20, 50 20 S 40 15, 40 10 Z"
            fill="currentColor" // Rellena el corazón con el color del texto
            stroke="currentColor" // Borde del corazón con el mismo color
            strokeWidth="1" // Borde fino para el corazón
        />
         {/* Línea derecha */}
         <path d="M65 10 H 100" strokeLinecap="round" />
    </svg>
);

export default HeartSeparator;
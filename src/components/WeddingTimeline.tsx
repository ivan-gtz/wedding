import React from 'react';
import Image from 'next/image';

interface TimelineEvent {
  time: string;
  event: string;
  icon: string; 
}

const timelineData: TimelineEvent[] = [
  { time: "10:00 AM", event: "Consejo bíblico", icon: "/icons/bible.png" }, 
  { time: "02:00 PM", event: "Recepción", icon: "/icons/reception.png" },      
  { time: "03:00 PM", event: "Vals", icon: "/icons/vals3.png" },          
  { time: "03:30 PM", event: "Cena", icon: "/icons/dinner.png" },      
  { time: "05:00 PM", event: "Fiesta", icon: "/icons/party.png" },      
  { time: "10:00 PM", event: "Nos despedimos", icon: "/icons/theEnd.png" }, 
];

const WeddingTimelineResponsive: React.FC = () => {
  const desktopLineVerticalPosition = '113px';

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 bg-gray-50 font-sans">
      <div className="relative md:block">
        {/* --- Línea Horizontal (Desktop) --- */}
        <div
          className="hidden md:block absolute left-0 right-0 h-0.5 bg-black z-0"
          style={{ top: desktopLineVerticalPosition, transform: 'translateY(-50%)' }}
        ></div>

        {/* --- Contenedor de Items --- */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start relative z-10 space-y-12 md:space-y-0">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="flex items-start md:flex-col md:items-center md:w-1/5 px-2 relative"
            >
              {/* --- Línea Vertical (Mobile) --- */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-black md:hidden z-0">
                {index === 0 && <div className="absolute top-0 left-0 w-full h-8 bg-gray-50"></div>}
                {index === timelineData.length - 1 && <div className="absolute bottom-0 left-0 w-full h-full top-8 bg-gray-50"></div>}
              </div>

              {/* --- Contenedor Punto & Icono (Desktop) --- */}
              <div className="flex-shrink-0 md:flex-col md:items-center relative z-10">
                 {/* Icon Container (Desktop) - Usando Next/Image */}
                 <div className="hidden md:flex h-25 w-25 items-center justify-center mb-2 relative"> {/* Añadido w-12 y relative */}
                    {/* Reemplazado SVG con Image */}
                    <Image
                        src={item.icon}
                        alt={item.event} // Alt text descriptivo
                        width={100} // Ancho deseado en píxeles
                        height={100} // Alto deseado en píxeles
                        className="object-contain" // Ajusta cómo se escala la imagen si no es cuadrada
                    />
                 </div>
                 {/* Dot */}
                 <div className="w-3 h-3 bg-black rounded-full mt-6 md:mt-0 md:mb-2 flex-shrink-0 translate-x-[1.125rem] md:translate-x-10"></div> {/* Ajustaste md:translate-x-3, lo dejo así */}
              </div>



              {/* --- Contenido (Icono Mobile, Texto) --- */}
              <div className="ml-8 md:ml-0 md:text-center flex-grow">
                {/* Icon (Mobile) - Usando Next/Image */}
                <div className="flex md:hidden items-center justify-start mb-1 h-10 w-10 relative"> {/* Añadido w-10 y relative */}
                     {/* Reemplazado SVG con Image */}
                     <Image
                         src={item.icon}
                         alt={item.event}
                         width={32} // Ancho deseado en píxeles (más pequeño para móvil)
                         height={32} // Alto deseado en píxeles
                         className="object-contain"
                     />
                </div>

                {/* Time */}
                <div className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">{item.time}</div>

                {/* Event Name */}
                <div className="text-sm md:text-base font-medium text-gray-800 mt-1 tracking-wide">
                  {item.event}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingTimelineResponsive;
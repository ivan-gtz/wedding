import React from 'react';
import Image from 'next/image';
import { goodFont, tangFont, titleFont } from '@/config/fonts';

interface TimelineEvent {
  time: string;
  event: string;
  icon: string;
}

const timelineData: TimelineEvent[] = [
    { time: "11:00 AM", event: "Consejo bíblico", icon: "/icons/bible.png" },
    { time: "02:00 PM", event: "Recepción", icon: "/icons/reception.png" },
    { time: "03:00 PM", event: "Vals", icon: "/icons/vals3.png" },
    { time: "03:30 PM", event: "Cena", icon: "/icons/dinner.png" },
    { time: "05:00 PM", event: "Fiesta", icon: "/icons/party.png" },
    { time: "10:00 PM", event: "Nos despedimos", icon: "/icons/theEnd.png" },
];

const WeddingTimelineResponsive: React.FC = () => {
  // Recalculado basado en h-[100px] (100px) + mb-2 (8px) + h-3/2 (6px) = 114px
  const desktopLineVerticalPosition = '114px';

  return (
    <div className="w-full mx-auto py-12 px-4 bg-gray-50 font-sans">
      <p className={`${tangFont.className} text-6xl text-center mb-10`}>Itinerario</p>
      <div className="relative md:block mx-20">

        {/* Línea horizontal para desktop */}
        <div
          className="hidden md:block absolute h-px bg-black z-0"
          style={{
            left: '8%',
            right: '9%',
            top: desktopLineVerticalPosition,
            transform: 'translateY(-50%)',
          }}
        ></div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-start relative z-10 space-y-8 md:space-y-0">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="flex items-start md:flex-col md:items-center md:w-1/5 px-2 relative"
            >
              {/* Líneas verticales para móvil */}
              {index < timelineData.length - 1 && (
                <div
                  className="absolute w-px bg-black md:hidden z-0"
                  style={{
                    left: '6rem', // Ajustado para alinear con nuevo layout
                    top: '1rem',
                    bottom: '-3rem',
                  }}
                ></div>
              )}

              {/* Contenedor principal móvil */}
              <div className="flex md:contents">
                {/* Icono móvil */}
                <div className="flex md:hidden items-center h-[90px] w-[90px]">
                  <Image
                    src={item.icon}
                    alt={item.event}
                    width={100}
                    height={100}
                  />
                </div>

                {/* Punto y contenido */}
                <div className="flex flex-col md:flex-col md:items-center w-full">
                  <div className="flex-shrink-0 md:flex-col md:items-center relative z-10">
                    {/* Icono desktop */}
                    <div className="hidden md:flex h-[100px] w-[100px] items-center justify-center mb-2 relative">
                      <Image
                        src={item.icon}
                        alt={item.event}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                    
                    {/* Punto del timeline */}
                    <div className="w-3 h-3 bg-black rounded-full mt-2 md:mt-0 md:mb-2 translate-x-[1.28rem] md:translate-x-10"></div>
                  </div>

                  {/* Contenido */}
                  <div className="ml-15 md:ml-0 md:text-center flex-grow">
                    <div className="text-xs md:text-sm text-gray-600 md:mt-2">{item.time}</div>
                    <div className={`${titleFont.className} text-sm md:text-base font-medium text-gray-800 tracking-wide`}>
                      {item.event}
                    </div>
                  </div>
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
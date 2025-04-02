import CountdownTimer from "@/components/CoutDownTimer";
import Image from "next/image";
import styles from './Image.module.css';
import { goodFont, loraFont, nameFont, titleFont } from "@/config/fonts";
import DateDisplay from "@/components/DataDisplay";
import StyledCalendar from "@/components/StyledCalendar";
import WeddingTimeline from "@/components/WeddingTimeline";
export default function HomePage() {
  // ¡¡IMPORTANTE!! Establece la fecha de tu boda aquí
  // Formato: 'YYYY-MM-DDTHH:MM:SS'
  const weddingDate: string = '2025-06-09T17:00:00'; // Se puede añadir el tipo string explícitamente
  return (
    <div className="mx-2 sm:mx-10 mt-5"> 
      <div className={`${goodFont.className}`}>
        <h1 className="text-8xl text-stone-600">Oscar <p className={`${titleFont.className} `}>&Oscar & Liceth</p> Liceth</h1>
      </div>
      <div>
        <p className={`${titleFont.className} tracking-wide`}>Tenemos el honor de invitarte a nuestra boda</p>
      </div>
      <div className="flex justify-center items-center bg-gray-50"> {/* Ejemplo de contenedor */}
        <DateDisplay
          dayOfWeek="LUNES"
          month="JUNIO"
          dayNumber="09"
          year="2025"
          time="11:00 AM"
        />
      </div>
      <div>
        <p className={`${goodFont.className} text-6xl text-center text-stone-400`}>Faltan</p>
        <CountdownTimer targetDate={weddingDate} />
      </div>
      <div className="flex flex-col gap-4 p-4 max-w-4xl mx-auto"> {/* Ajusta max-w-* según necesites */}

        {/* Imagen 1 */}
        {/* No siempre necesitas un wrapper extra si el contenedor flex ya lo maneja */}
        <Image
          src="/imgs/boda1.jpg"
          alt="imagen de la boda 4"
          width={1920} // Dimensiones originales o deseadas
          height={1080}
          // Clases de Tailwind para responsividad y estilo
          className="w-full h-auto object-cover rounded-lg shadow-sm" // block es opcional pero bueno tenerlo
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 600px" // ¡Ajusta sizes!
        />

        {/* Imagen 2 */}
        <Image
          src="/imgs/boda2.jpg"
          alt="imagen de la boda 1"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover rounded-lg shadow-sm"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 600px"
        />

        {/* Imagen 3 */}
        <Image
          src="/imgs/boda3.jpg"
          alt="imagen de la boda 2"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover rounded-lg shadow-sm"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 600px"
        />

        {/* Imagen 4 */}
        <Image
          src="/imgs/boda4.jpg"
          alt="imagen de la boda 3"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover rounded-lg shadow-sm"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 600px"
        />
      </div>
      <div className="p-10 bg-white"> {/* Contenedor para la página */}
        <StyledCalendar highlightDay={9} />
     </div>
     <div>
     <WeddingTimeline />
     </div>
    </div>
  );
}
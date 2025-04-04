"use client"
import { tangFont, testFont, titleFont } from '@/config/fonts';
import React from 'react';
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const addressLines = [
  "Jalta Cotacachi",

];
const addressJW = [
  "Salón del reino de los Tesgos de Johová",
  
];

const OurParents: React.FC = () => {
  // Define base styles for reusability
  const cardStyle = "border border-stone-300 rounded-lg p-6 md:p-8 flex flex-col items-center text-center shadow-lg";
  const iconStyle = "h-12 w-12 text-slate-500 mb-5"; // Adjusted size and margin
  const titleStyle = "text-xl md:text-2xl text-slate-500 mb-3 uppercase tracking-wide";
  const textStyle = "text-sm md:text-base text-stone-700 font-serif max-w-xs"; // Constrain text width slightly

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

        {/* Card 1: Código de Vestimenta */}
        <div className={cardStyle}>
          <div className={iconStyle}>
            <IoIosPeople size={50}/>
          </div>
          <h2 className={`${titleStyle} ${titleFont.className} font-medium`}> 
            Nuestros padres
          </h2>
          <p className={`${tangFont.className} text-4xl`}>Del Novio</p>
          <p className={`${textStyle} font-serif`}>
            Guillermo Basilio Amador
          </p>
          <p className={`${textStyle} font-serif mb-4`}>
            Natividad Felix De Basilio
          </p>
          <p className={`${tangFont.className} text-4xl`}>De la Novia</p>
          <p className={`${textStyle} font-serif`}>
            Daniel Ramirez Lluzco
          </p>
          <p className={`${textStyle} font-serif`}>
            Florinda Vargas De Ramirez
          </p>
        </div>


        {/* Card 2: Recomendaciones */}
        <div className={cardStyle}>
          <div className={iconStyle}>
            {/* Applying fill directly as this SVG uses fill */}
            <FaMapMarkedAlt size={50}/>
          </div>
          <h2 className={`${titleStyle} ${titleFont.className} font-medium`}>
            Recepción
          </h2>
          <div className="font-serif text-sm md:text-base text-brand-text-body leading-normal mb-6"> {/* Estilo de la dirección */}
            {addressLines.map((line, index) => (
              // Renderiza cada línea de la dirección en un párrafo separado
              <p key={index}>{line}</p>
            ))}
          </div>
          {/* Botón */}
          <a
            href={`https://www.google.com/maps/place/17%C2%B027'12.2%22S+66%C2%B010'19.8%22W/@-17.453394,-66.1747299,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-17.453394!4d-66.172155?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D`}
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


        {/* Card 3: Lluvia de Sobres */}
        <div className={cardStyle}>
          <div className={iconStyle}>
            {/* Applying fill directly as this SVG uses fill */}
            <FaMapMarkerAlt size={50}/>
          </div>
          <h2 className={`${titleStyle} ${titleFont.className} font-medium`}>
            Consejo bíblico
          </h2>
          <div className="font-serif text-sm md:text-base text-brand-text-body leading-normal mb-6"> {/* Estilo de la dirección */}
            {addressJW.map((line, index) => (
              // Renderiza cada línea de la dirección en un párrafo separado
              <p key={index}>{line}</p>
            ))}
          </div>
          {/* Botón */}
          <a
            href={'https://www.google.com/maps/place/Salon+Del+Reino/@-17.4422536,-66.1175844,17z/data=!3m1!4b1!4m6!3m5!1s0x93e371bd5eaca22d:0xa55c717c551c7f49!8m2!3d-17.4422536!4d-66.1175844!16s%2Fg%2F11f29xq_39?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D'}
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
          <p className="text-sm italic font-serif text-gray-600 mt-5 max-w-md">
            Luego del consejo bíblico rogamos encarecidamente que puedan pasar directamente al salón de evento ya que se servirá un aperitivo y acto seguido la recepción
          </p>
        </div>

      </div>
    </div>
  );
};

export default OurParents;
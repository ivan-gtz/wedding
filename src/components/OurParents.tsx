import React from 'react';

// Simple SVG placeholders - Replace these with your actual SVG icons or components
const DressCodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    {/* Basic representation */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    {/* Dress part (approximation) */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16.143l-2.5 3.857h-5L7 16.143" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16.143c0-2.5-2-4.5-5-4.5s-5 2-5 4.5" />
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    {/* Little heart inside */}
    <path fillRule="evenodd" d="M10.293 11.293a1 1 0 011.414 0l.293.293a.5.5 0 00.707-.707l-.293-.293a1 1 0 010-1.414l2-2a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-.293-.293a.5.5 0 00-.707.707l.293.293a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414l2-2z" clipRule="evenodd" transform="scale(0.4) translate(15, 16)" fill="#FFFFFF" />
  </svg>
);
const addressLines = [
  "Salón de Fiestas 'El Encanto'",
  "Avenida Los Álamos 456",
  "Ciudad Ejemplo, Provincia",
  "País"
];

const OurParents: React.FC = () => {
  // Define base styles for reusability
  const cardStyle = "bg-stone-100 border border-stone-300 rounded-lg p-6 md:p-8 flex flex-col items-center text-center shadow-sm";
  const iconStyle = "h-12 w-12 text-amber-800 mb-5"; // Adjusted size and margin
  const titleStyle = "text-xl md:text-2xl font-serif text-amber-800 mb-3 uppercase tracking-wide";
  const textStyle = "text-sm md:text-base text-stone-700 font-serif max-w-xs"; // Constrain text width slightly

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

        {/* Card 1: Código de Vestimenta */}
        <div className={cardStyle}>
          <div className={iconStyle}>
            <DressCodeIcon />
          </div>
          <h2 className={titleStyle}>
            Nuestros padres
          </h2>
          <p>Del Novio</p>
          <p className={textStyle}>
            Guillermo Basilio Amador
          </p>
          <p className={textStyle}>
            Natividad Felix De Basilio
          </p>
          <p>De la Novia</p>
          <p className={textStyle}>
            Daniel Ramirez Lluzco
          </p>
          <p className={textStyle}>
            Florinda Vargas De Ramirez
          </p>
        </div>


        {/* Card 2: Recomendaciones */}
        <div className={cardStyle}>
          <div className={iconStyle}>
            {/* Applying fill directly as this SVG uses fill */}
            <HeartIcon />
          </div>
          <h2 className={titleStyle}>
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
            href={'/'}
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
            <EnvelopeIcon />
          </div>
          <h2 className={titleStyle}>
            Consejo bíblico
          </h2>
          <div className="font-serif text-sm md:text-base text-brand-text-body leading-normal mb-6"> {/* Estilo de la dirección */}
            {addressLines.map((line, index) => (
              // Renderiza cada línea de la dirección en un párrafo separado
              <p key={index}>{line}</p>
            ))}
          </div>
          {/* Botón */}
          <a
            href={'/'}
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
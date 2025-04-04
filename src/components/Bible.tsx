import { loraFont, tangFont, titleFont } from '@/config/fonts'
import { motion } from 'framer-motion'
// import { Cross1Icon } from '@radix-ui/react-icons' // o cualquier icono de cruz

export const Bible = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative max-w-2xl mx-auto p-8 bg-ivory-50 rounded-xl shadow-lg border border-gray-100 
                 backdrop-blur-sm bg-opacity-80 hover:bg-opacity-100 transition-all duration-300
                 hover:shadow-xl group"
    >


      {/* Contenido principal */}
      <div className="space-y-6 text-center">
        <h3 className="text-4xl md:text-5xl italic font-medium text-black leading-tight">

          <span className={`${ tangFont.className } block`}>
          Mejor son dos que uno solo, porque tienen un mayor beneficio por su duro trabajo. Y es que, si uno de ellos cae, el otro puede ayudar a su compañero a levantarse.
          </span>
        </h3>

        {/* Referencia bíblica */}
        <p className={`${titleFont.className} text-sm md:text-base font-sans uppercase tracking-wide text-gray-900 font-bold`}>
          (Eclesiastés 4:9-10)
        </p>
      </div>

      {/* Efecto de fondo decorativo */}
      <div className="absolute inset-0 -z-10 bg-[url('/noise.png')] opacity-10 mix-blend-multiply" />
    </motion.div>
  )
}
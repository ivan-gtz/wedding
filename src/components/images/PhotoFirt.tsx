import { motion } from "framer-motion"
import { tangFont } from "@/config/fonts";
import Image from "next/image";

export const PhotoFirst = () => {

    return (
        <motion.div 
            className="backdrop-contrast-125 md:backdrop-contrast-150 h-[40vh] md:h-auto overflow-hidden"
        >
            <motion.div
                initial={{ scale: 1.16 }}
                animate={{ scale: 1 }}
                transition={{
                    duration: 4,
                    ease: [0.16, 0.77, 0.47, 0.97],
                    // delay: 0.1
                }}
                className="w-full h-full"
            >
                <Image
                    src="/imgs/boda1.JPG"
                    alt="imagen de la boda 4"
                    priority={true}
                    width={1920}
                    height={1080}
                    className="w-full h-full md:h-auto object-cover -scale-x-100"
                    sizes="(max-width: 768px) 100vw, 100vw"
                    style={{
                        objectPosition: '90% center',
                    }}
                />
            </motion.div>
            
            <motion.div 
                className="absolute right-10 md:right-8 top-1/5 -translate-y-1/2 z-10 text-right"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } },
                    hidden: {}
                }}
            >
                <motion.p
                    className={`${tangFont.className} text-6xl md:text-3xl text-black`}
                    variants={{
                        hidden: { opacity: 0.5, translateY: "100%" },
                        visible: { opacity: 1, translateY: "0%" }
                    }}
                    transition={{
                        duration: 2,       
                        ease: [0.16, 0.77, 0.47, 0.97], 
                        delay: 0         
                    }}
                >
                    O & L
                </motion.p>
            </motion.div>
        </motion.div>
    );
}
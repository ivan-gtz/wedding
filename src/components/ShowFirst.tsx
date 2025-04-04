"use cliente"
import { ariFont, tangFont, titleFont } from "@/config/fonts"
import { motion } from "framer-motion"
import DateDisplay from "./DataDisplay"
import MusicPlayer from "./MusicPlayer"


export const ShowFirst = () => {

    const songUrl = '/audio/wedding.mpeg';

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {}
            }}
        >
            <div className="mt-5">
                <motion.p
                    className={`${titleFont.className} tracking-wide text-center text-xl mx-4`}
                    variants={{
                        hidden: { opacity: 0.5, translateY: "100%" },
                        visible: { opacity: 1, translateY: "0%" }
                    }}
                    transition={{
                        duration: 2,
                        ease: [0.16, 0.77, 0.47, 0.97],
                        delay: 0
                    }}
                >Tenemos el honor de invitarte a nuestra boda</motion.p>
            </div>
            <motion.p
                variants={{
                    hidden: { opacity: 0.5, translateY: "100%" },
                    visible: { opacity: 1, translateY: "0%" }
                }}
                transition={{
                    duration: 2,
                    ease: [0.16, 0.77, 0.47, 0.97],
                    delay: 0
                }}
                className={`${ariFont.className} text-[65px] text-stone-600 text-center mt-5 mr-1`}
            >
                Oscar & Liceth
            </motion.p>
            <motion.div 
                className="flex justify-center items-center mt-5"
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
                <DateDisplay
                    dayOfWeek="LUNES"
                    month="JUNIO"
                    dayNumber="09"
                    year="2025"
                    time="11:00 AM"
                />
            </motion.div>
            <motion.div 
                className="max-w-40 mx-auto mt-8"
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
                <h1 className={`${tangFont.className} text-5xl text-center text-stone-400 mb-2`}>Dale play</h1>
                <MusicPlayer audioSrc={songUrl} />
            </motion.div>
        </motion.div>
    )
}
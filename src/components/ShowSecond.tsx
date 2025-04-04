import { tangFont, titleFont } from "@/config/fonts"
import CountdownTimer from "./CoutDownTimer";
import StyledCalendar from "./StyledCalendar";


export const Showsecond = () => {
    const weddingDate: string = '2025-06-09T17:00:00';
    return (
        <div>

            <div>
                <p className={`${tangFont.className} text-6xl text-center text-stone-400 mt-10`}>Solo Faltan</p>
                <CountdownTimer targetDate={weddingDate} />
                <p className={`${tangFont.className} text-5xl text-center mt-8`}>El gran Día</p>
                <p className={`${titleFont.className} text-lg text-center mt-5`}>junio</p>
                <div className="p-5 bg-white"> {/* Contenedor para la página */}
                    <StyledCalendar highlightDay={9} />
                </div>
            </div>
        </div>
    )
}
import Image from "next/image"
import { Bible } from "../Bible"

export const PhotoThird = () => {

    return (
        <div>
            <Bible />
            <Image
                src="/imgs/boda3.jpg"
                alt="imagen de la boda 3"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover rounded-lg shadow-sm mt-5"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 600px"
            />
        </div>
    )
}
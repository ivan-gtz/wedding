import Image from "next/image"

export const PhotoSecond = () => {

    return (
        <div className="mb-5">
            <Image
                src="/imgs/boda2.jpg"
                alt="imagen de la boda 2"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover rounded-lg shadow-sm"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 600px"
            />
        </div>
    )
}
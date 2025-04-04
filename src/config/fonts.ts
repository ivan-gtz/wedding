import { Inter, Montserrat_Alternates, Cinzel, Great_Vibes, Alex_Brush, Lora, Italianno, Tangerine } from "next/font/google";


export const inter = Inter({ subsets: ["latin"] });

export const testFont = Montserrat_Alternates({
    subsets: ['latin'],
    weight: ['500', '700'], 
});
export const titleFont = Cinzel({
    subsets: ['latin'],
    weight: ['400', '500', '700']
})

export const nameFont = Great_Vibes({
    subsets: ['latin'],
    weight: ['400']
})
export const goodFont = Alex_Brush({
    subsets: ['latin'],
    weight: ['400']
})
export const loraFont = Lora({
    subsets: ['latin'],
    weight: ['400', '500', '700']
})

export const italoFont = Italianno({
    subsets: ['latin'],
    weight: ['400']
})

export const tangFont = Tangerine({
    subsets: ['latin'],
    weight: ['400']
})
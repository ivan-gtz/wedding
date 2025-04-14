import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Oscar & Liceth",
  description: "Tenemos el honor de invitarte a nuestra boda",
  openGraph: {
    title: "Oscar & Liceth",
    description: "Tenemos el honor de invitarte a nuestra boda",
    url: 'https://nuestraboda-oyl.vercel.app/imgs/linkboda.png',
    images: [
      {
        url: `https://nuestraboda-oyl.vercel.app/imgs/linkboda.png`, // Ruta corregida
        width: 1200,
        height: 630,
        alt: 'Invitación de boda Óscar y Liceth',
      }
    ],
    type: 'website',
    siteName: 'Boda Oscar & Liceth',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Oscar & Liceth",
  description: "Tenemos el honor de invitarte a nuestra boda",
  openGraph: {
    title: "Oscar & Liceth",
    description: "Tenemos el honor de invitarte a nuestra boda",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/public/imgs/boda1.JPG`]
  }
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

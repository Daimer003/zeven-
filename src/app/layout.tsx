import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/lib/provider";
import { register } from 'swiper/element/bundle';
import "../styles/swiper.css"


export const metadata: Metadata = {
  title: "Zeven",
  description: "Únete a Zeven y empieza a invertir de manera inteligente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  register();
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

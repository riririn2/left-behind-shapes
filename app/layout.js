'use client';
import { Faustina } from "next/font/google";
import "./globals.css";
import { ParallaxProvider } from "react-scroll-parallax";

const font = Faustina({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <ParallaxProvider>    
      <html lang="en">
    <body className={font.className}>{children}</body>
  </html>
  </ParallaxProvider>

  );
}

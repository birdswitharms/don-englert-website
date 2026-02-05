import { Playfair_Display, Lora } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata = {
  title: "Don Englert • Jazz Musician",
  description: "Created by Andrew Segal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable}`}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <body>
        <Analytics />
        <Header />
        {children}
      </body>
    </html>
  );
}

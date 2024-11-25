import Header from "../components/Header";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Don Englert • Jazz Musician",
  description: "Created by Andrew Segal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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

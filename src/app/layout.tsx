import type { Metadata } from "next";
import { Bricolage_Grotesque, Cormorant } from "next/font/google";
import "./globals.css";
import Footer from "./(landing)/_components/footer";
import { Toaster } from "sonner";
import Navbar from "./(landing)/_components/navbar";
const geistSans = Bricolage_Grotesque({
  variable: "--font-paragraph",
  subsets: ["latin"],
});

const heading = Cormorant({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "The Modelling Club - KNUST",
  description: "Providing local solutions through the use of Computer Aided Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#2C323E" />
      <body className={`${geistSans.variable} ${heading.variable} antialiased`}>
        <Toaster richColors position="top-right" closeButton className=" font-paragraph" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Bricolage_Grotesque, Cormorant } from "next/font/google";

import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

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
  description:
    "Providing local solutions through the use of Computer Aided Engineering",
};

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

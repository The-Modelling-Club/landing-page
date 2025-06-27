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
  title: "The Modeling Club - KNUST | Computer-Aided Engineering",
  description:
    "The Modeling Club at KNUST empowers students with Computer-Aided Engineering skills through hands-on training in MATLAB, Aspen Plus, AutoCad, and CFD with Ansys. Join us to solve real-world engineering challenges.",
  keywords: "Computer-Aided Engineering, CAE, MATLAB, Aspen Plus, AutoCad, CFD, Ansys, KNUST, engineering students, modeling, simulation",
  authors: [{ name: "The Modeling Club - KNUST" }],
  creator: "The Modeling Club - KNUST",
  publisher: "The Modeling Club - KNUST",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://themodelingclub.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://themodelingclub.com",
    title: "The Modeling Club - KNUST | Computer-Aided Engineering",
    description: "Empowering students with Computer-Aided Engineering skills through hands-on training and real-world projects.",
    siteName: "The Modeling Club - KNUST",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Modeling Club - KNUST",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Modeling Club - KNUST | Computer-Aided Engineering",
    description: "Empowering students with Computer-Aided Engineering skills through hands-on training and real-world projects.",
    images: ["/og-image.jpg"],
  },
};

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <div className="lg:pt-20">{children}</div>
      <Footer />
    </main>
  );
}

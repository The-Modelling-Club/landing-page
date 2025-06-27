import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | The Modeling Club - KNUST",
  description:
    "Explore our engineering projects including Virtual Catalytic Reactor, Gas Turbine Simulator, ChemCost, Wastewater Treatment Plant Simulator, and Bioenergy Optimization Tool. Real-world solutions using computer-aided design.",
  keywords:
    "engineering projects, virtual catalytic reactor, gas turbine simulator, chemcost, wastewater treatment, bioenergy optimization, CAE projects, MATLAB projects",
  openGraph: {
    title: "Our Projects | The Modeling Club - KNUST",
    description: "Explore our innovative engineering projects and simulations",
    url: "https://themodelingclub.com/projects",
    type: "website",
    images: [
      {
        url: "/projects-og.jpg",
        width: 1200,
        height: 630,
        alt: "Engineering Projects - The Modeling Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects | The Modeling Club - KNUST",
    description: "Explore our innovative engineering projects and simulations",
    images: ["/projects-og.jpg"],
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import Image from "next/image";
import ImageOne from "@/app/assets/images/IMG_0347.jpg";
import Executives from "./_components/executives";
import SlotCounter from "react-slot-counter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | The Modeling Club - KNUST",
  description:
    "Learn about The Modeling Club at KNUST - a student-led organization advancing Computer-Aided Engineering education. Meet our team of 300+ active members and discover our mission to empower engineering students.",
  keywords: "about The Modeling Club, KNUST engineering club, CAE education, engineering team, student organization, computer-aided engineering",
  openGraph: {
    title: "About Us | The Modeling Club - KNUST",
    description: "Learn about our mission to advance Computer-Aided Engineering education",
    url: "https://themodelingclub.com/team",
    type: "website",
    images: [
      {
        url: "/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About The Modeling Club - KNUST",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | The Modeling Club - KNUST",
    description: "Learn about our mission to advance Computer-Aided Engineering education",
    images: ["/about-og.jpg"],
  },
  alternates: {
    canonical: "/team",
  },
};

export default function AboutPage() {
  return (
    <div>
      <section className="  grid md:grid-cols-2 gap-4 place-content-center p-6">
        <div className=" w-full  lg:w-4/5 h-[20rem] md:h-[30rem] rounded-xl  overflow-hidden mx-auto">
          <Image src={ImageOne} alt="about" width={2000} height={2000} className=" object-cover  object-top h-full w-full " />
        </div>
        <div className=" lg:p-6">
          <h3 className=" mb-4 text-3xl font-semibold text-primary-500">About Us</h3>
          <p className=" text-justify">
            The Modeling Club at KNUST is a student-led organization dedicated to advancing Computer-Aided Engineering (CAE) education and practical skills
            development. Our club brings together students from various engineering disciplines who share a passion for modeling, simulation, and computational
            analysis.
          </p>
          <br />
          <p className=" text-justify">
            We focus on providing hands-on training with industry-standard software tools including MATLAB, Aspen Plus, AutoCad, VBA in Excel, and CFD with
            Ansys. Our approach combines theoretical knowledge with practical application, ensuring students develop the skills needed for real-world
            engineering challenges.
          </p>
          <br />
          <p className=" text-justify">
            The Modeling Club has successfully trained over 250 students and completed numerous projects across process engineering fields including wastewater
            treatment, green hydrogen production, oil and gas exploration, and bioenergy optimization. We continue to expand our capabilities and partnerships
            to provide the best learning experience for our members.
          </p>
        </div>
      </section>
      <div className=" p-6 flex flex-col lg:flex-row justify-evenly text-center bg-primary text-white ">
        <div>
          <h1 className=" text-[96px] text-secondary">
            <SlotCounter value="300" animateOnVisible={{ triggerOnce: false, rootMargin: "0px 0px -100px 0px" }} />+
          </h1>
          <p className=" ">Active Members</p>
        </div>
        <div>
          <h1 className=" text-[96px] text-secondary">
            <SlotCounter value="4" animateOnVisible={{ triggerOnce: false, rootMargin: "0px 0px -100px 0px" }} />+
          </h1>
          <p className="">Active Projects</p>
        </div>
        <div>
          <h1 className=" text-[96px] text-secondary">
            <SlotCounter value="250" animateOnVisible={{ triggerOnce: false, rootMargin: "0px 0px -100px 0px" }} />+
          </h1>
          <p className="">Students trained</p>
        </div>
      </div>
      <Executives />
      <section className="  grid lg:grid-cols-2 mb-10 gap-4 p-6">
        <article className="bg-gray-100 rounded-xl p-6 w-full h-full">
          <h3 className="text-primary mb-3 text-lg font-semibold">Our Vision</h3>
          <p className=" text-slate-900">
            {" "}
            Our vision is to improve the students' skills in Computer Aided Chemical Engineering and provide local solutions through the aid of Computer Aided
            Chemical Engineering.
          </p>
        </article>
        <article className=" bg-gray-100 rounded-xl p-6 w-full h-full">
          <h3 className=" text-primary mb-3 text-lg font-semibold">Our Mission</h3>
          <p className=" text-slate-900">
            Our mission is to empower students by enhancing their proficiency in Computer Aided Chemical Engineering, equipping them with the tools and
            knowledge to innovate and develop localized, sustainable solutions. communities and beyond
          </p>
          <br />
          <p className=" text-slate-900">
            Through education, practical application, and collaboration, we aim to bridge the gap between theoretical knowledge and real-world challenges,
            nurturing a generation of skilled engineers capable of driving progress in their
          </p>
        </article>
      </section>
    </div>
  );
}

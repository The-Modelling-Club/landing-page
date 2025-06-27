import React from "react";
import Image from "next/image";
import Line3 from "@/app/assets/images/line-3.png";
import Line4 from "@/app/assets/images/line-4.png";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {};

export default function WhyJoinUs({}: Props) {
  return (
    <section className="relative bg-primary py-12 lg:p-24">
      <Image src={Line3} alt="line-1" className="absolute grayscale -top-2 md:-top-44 opacity-20 " />
      <div className="container mx-auto px-4">
        <div className=" mx-auto text-center text-white mb-20 w-fit">
          <h1 className=" text-2xl text-white font-extrabold tracking-tight sm:text-4xl md:text-5xl">Why Join Us</h1>
          <p className=" mt-2 mb-8">Gain Practical Engineering Skills and Industry Experience</p>
        </div>

        {/* Grid Section */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 text-white">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-500 opacity-25"></div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Placeholder for Icon */}
            <div className="w-12 h-12 bg-secondary rounded-full mb-4 grid place-content-center">
              <Icon icon={"solar:code-bold-duotone"} className=" size-8 text-primary " />
            </div>
            <h3 className="text-xl text-accent font-bold mb-2">Practical Skills Training</h3>
            <p className="text-gray-300">
              Learn industry-standard tools like MATLAB, Aspen Plus, AutoCad, and Ansys through hands-on projects and real-world applications.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Placeholder for Icon */}
            <div className="w-12 h-12 bg-secondary rounded-full mb-4 grid place-content-center">
              <Icon icon={"solar:rocket-bold-duotone"} className=" size-8 text-primary " />
            </div>
            <h3 className="text-xl text-accent font-bold mb-2">Project Experience</h3>
            <p className="text-gray-300">
              Work on real engineering projects including virtual catalytic reactors, gas turbine simulators, and wastewater treatment systems.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Placeholder for Icon */}
            <div className="w-12 h-12 bg-secondary rounded-full mb-4 grid place-content-center">
              <Icon icon={"solar:users-group-rounded-bold-duotone"} className=" size-8 text-primary " />
            </div>
            <h3 className="text-xl text-accent font-bold mb-2">Industry Connections</h3>
            <p className="text-gray-300">
              Connect with professionals in the engineering field and build a network that can help launch your career in Computer-Aided Engineering.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Placeholder for Icon */}
            <div className="w-12 h-12 bg-secondary rounded-full mb-4 grid place-content-center">
              <Icon icon={"solar:case-bold-duotone"} className=" size-8 text-primary " />
            </div>
            <h3 className="text-xl text-accent font-bold mb-2">Career Preparation</h3>
            <p className="text-gray-300">
              Develop the skills and portfolio needed to stand out in the competitive engineering job market with practical CAE experience.
            </p>
          </div>
        </div>
      </div>
      <Image src={Line4} alt="line-1" className="absolute bottom-0 grayscale -right-28 z-auto  opacity-20" />
    </section>
  );
}

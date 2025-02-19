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
          <p className=" mt-2 mb-8">Addressing Mental Health Challenges Head-On</p>
        </div>

        {/* Grid Section */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 text-white">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-500 opacity-25"></div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Placeholder for Icon */}
            <div className="w-12 h-12 bg-white rounded-full mb-4 grid place-content-center">
              <Icon icon={"solar:chat-round-like-bold-duotone"} className=" size-8 text-primary " />
            </div>
            <h3 className="text-xl font-bold mb-2">Counseling Services</h3>
            <p className="text-gray-300">
              We provide free access to professional counseling for issues such as academic stress, mental health, personal relationships, and more.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Placeholder for Icon */}
            <div className="w-12 h-12 bg-white rounded-full mb-4 grid place-content-center">
              <Icon icon={"solar:tv-bold-duotone"} className=" size-8 text-primary " />
            </div>
            <h3 className="text-xl font-bold mb-2">Talk Shows & Workshops</h3>
            <p className="text-gray-300">
              We host regular talk shows featuring mental health experts, experienced students, and guest speakers to discuss real-life campus challenges and
              how to tackle them.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Placeholder for Icon */}
            <div className="w-12 h-12 bg-white rounded-full mb-4 grid place-content-center">
              <Icon icon={"solar:users-group-rounded-bold-duotone"} className=" size-8 text-primary " />
            </div>
            <h3 className="text-xl font-bold mb-2">Community Support</h3>
            <p className="text-gray-300">
              Through our platform, students and staff can share their stories openly or anonymously, fostering a sense of community and shared experiences.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Placeholder for Icon */}
            <div className="w-12 h-12 bg-white rounded-full mb-4 grid place-content-center">
              <Icon icon={"solar:refresh-circle-bold-duotone"} className=" size-8 text-primary " />
            </div>
            <h3 className="text-xl font-bold mb-2">Referral Services</h3>
            <p className="text-gray-300">
              For those in need of specialized care, we connect students and staff with the appropriate counseling units within their institutions.
            </p>
          </div>
        </div>
      </div>
      <Image src={Line4} alt="line-1" className="absolute bottom-0 grayscale -right-28 z-auto  opacity-20" />
    </section>
  );
}

"use client";
import ImageUrl from "@/app/assets/images/IMG_0338.jpg";
import { FadeText } from "@/components/ui/fadetext";
import { useRouter } from "next/navigation";

export default function HeroAbout() {
  const router = useRouter();
  return (
    <div className="relative w-full">
      {/* Background image */}
      <div className="absolute bg-statistic inset-0 bg-cover bg-top bg-no-repeat" />

      {/* Gradient overlay - black to transparent */}
      <div
        className="absolute bg-center inset-0"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <FadeText className="text-2xl text-white font-extrabold tracking-tight sm:text-4xl md:text-5xl" text="About The Modelling Club" />
          <br />
          <FadeText
            className=" w-full mx-auto text-white"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.3, duration: 0.5 } },
            }}
            text="The Modeling Club at KNUST is dedicated to empowering students with Computer-Aided Engineering (CAE) skills through hands-on projects and real-world applications."
          />
          <br />
          <FadeText
            className=" w-full mx-auto text-white"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.5, duration: 0.5 } },
            }}
            text="We've trained over 250 students in modeling and simulation techniques, helping them develop practical skills for the engineering industry."
          />
          <br />
          <FadeText
            className=" w-full mx-auto text-white"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.7, duration: 0.5 } },
            }}
            text="Our projects range from virtual catalytic reactors to gas turbine simulators, providing students with experience in solving complex engineering challenges."
          />
          <br />
        </div>
      </div>
    </div>
  );
}

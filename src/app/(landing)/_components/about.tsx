"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
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
        className="absolute inset-0"
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
            text="Only 9% of church leaders receive training on mental health, leaving many unequipped to address these critical issues. (Kintsugi, 2023)"
          />
          <br />
          <FadeText
            className=" w-full mx-auto text-white"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.5, duration: 0.5 } },
            }}
            text="Pastors face overwhelming workloads, with 90% working 55-75 hours per week. (Gitnux, 2023)"
          />
          <br />
          <FadeText
            className=" w-full mx-auto text-white"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.7, duration: 0.5 } },
            }}
            text="Depression and anxiety not only affect individuals but also reduce church attendance and engagement in spiritual practices. (Dougherty et al., Baylor Religion Survey, 2011)"
          />
          <br />
        </div>
      </div>
    </div>
  );
}

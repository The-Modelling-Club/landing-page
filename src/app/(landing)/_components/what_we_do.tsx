"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FadeText } from "@/components/ui/fadetext";
import { slideInFromLeft, slideInFromRight } from "@/lib/constants";
import ImageOne from "@/app/assets/images/eddie_chrysler.jpg";
import ImageTwo from "@/app/assets/images/jro_rich.jpg";
import ImageThree from "@/app/assets/images/yaw_one.jpg";

export default function WhatWeDo() {
  return (
    <div className="mt-20 ">
      <div className=" mx-auto text-center w-fit">
        <h1 className=" tet-4xl md:text-6xl">What We Do</h1>
        <p className=" mt-2 mb-8">Addressing Mental Health Challenges Head-On</p>
      </div>
      <section className="relative space-y-4  lg:grid grid-cols-3  gap-4 lg:gap-8 p-4 lg:p-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideInFromLeft}
          viewport={{ once: true, amount: 0.4 }}
          className=" overflow-hidden group relative w-full h-[20rem] md:h-[30rem] rounded-lg"
        >
          <div className="absolute inset-0">
            <Image
              src={ImageOne}
              width={2000}
              height={2000}
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              alt="hero image"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
          </div>
          <div className="relative flex h-full flex-col justify-end p-6 text-white transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
            <FadeText
              className="text-xl lg:text-3xl my-4 font-semibold"
              text="Prioritising Mental Health
"
            />
            <div className="pt-2">
              <FadeText
                className=" w-full mx-auto"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.3, duration: 0.5 } },
                }}
                text="Built on the Rock empowers church communities by training mental health advocates to deliver effective, free support."
              />
            </div>
          </div>
        </motion.div>
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={slideInFromRight}
          viewport={{ once: true, amount: 0.4 }}
          className=" overflow-hidden group relative w-full mt-4 lg:!mt-0 h-[20rem] md:h-[30rem] rounded-lg "
        >
          <div className="absolute inset-0">
            <Image
              src={ImageTwo}
              width={2000}
              height={2000}
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              alt="hero image"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
          </div>
          <div className="relative flex h-full flex-col justify-end p-6 text-white transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
            <FadeText
              framerProps={{
                show: { transition: { delay: 0.3, duration: 0.5 } },
              }}
              className="text-xl lg:text-3xl font-semibold"
              text="Breaking the Stigma
"
            />
            <div className="pt-2">
              <FadeText
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.5, duration: 0.5 } },
                }}
                text="By partnering with churches, we ensure that mental health support is both accessible and seamlessly integrated into daily church life."
              />
            </div>
          </div>
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={slideInFromLeft}
          viewport={{ once: true, amount: 0.7 }}
          className="overflow-hidden group relative w-full mt-4 lg:!mt-0 h-[20rem] md:h-[30rem] rounded-lg"
        >
          <div className="absolute inset-0">
            <Image
              src={ImageThree}
              width={2000}
              height={2000}
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              alt="hero image"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
          </div>
          <div className="relative flex h-full flex-col justify-end p-6 text-white transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
            <FadeText
              framerProps={{
                show: { transition: { delay: 0.3, duration: 0.5 } },
              }}
              className="text-xl lg:text-3xl my-4 font-semibold"
              text=" Bridging the Gap"
            />
            <div className=" max-w-xl pt-2">
              <FadeText
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.5, duration: 0.5 } },
                }}
                text="Our certified clinicians combine biblical wisdom with clinical expertise, offering a unique approach to mental health care"
              />
            </div>
          </div>
        </motion.section>
      </section>
    </div>
  );
}

"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { HeroCarousel } from "./_components/hero_carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import WhatWeDo from "./_components/what_we_do";
import WhyJoinUs from "./_components/why_join";
import FAQS from "./_components/faqs";
import HeroAbout from "./_components/about";

export default function Home() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 w-full h-screen max-h-[38rem] ">
        <div className=" w-full h-full">
          <section className="p-4 grid gap-4 place-content-center  w-full h-full">
            <Link
              href={"/"}
              className="border group flex items-center text-sm mb-4 hover:bg-slate-100 hover:text-primary transition-colors  rounded-full w-fit px-4 py-1 gap-4"
            >
              <span className=" ">📣 Launching Official Website: The Modelling Club website launch</span>
              <Icon icon={"solar:alt-arrow-right-outline"} className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <h1 className=" text-5xl text-primary font-bold">
              Empowering innovation and <mark>solving real-world </mark> challenges
            </h1>
            <p>
              The Modeling Club - KNUST is dedicated to providing local solutions through the transformative power of Computer-Aided Engineering (CAE). We bring
              together a community of forward-thinking students and professionals passionate about harnessing cutting-edge modeling and simulation tools to
              address pressing issues in Ghana and beyond.
            </p>
            <div className=" flex gap-4">
              <Button className="">
                Become a member <Icon icon={"solar:alt-arrow-right-outline"} className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              {/* <Button variant={"outline"}>
                Donate
                <Icon icon={"solar:alt-arrow-right-outline"} className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button> */}
            </div>
          </section>
        </div>
        <section className=" w-full h-full">
          <HeroCarousel />
        </section>
      </div>
      <div className=" p-6 text-center bg-primary text-white ">
        <h3 className=" font-semibold mb-4">Request the UK’s 2024 report on the mental health crisis</h3>
        <p>Access key insights on religious referral rates and the crucial role your church can play in this crisis.</p>
        <Button
          onClick={() => {
            // router.push("/get-started");
          }}
          className=" mx-auto bg-white text-primary hover:bg-white/90 mt-4 w-fit"
        >
          Donate to support us
          <Icon icon={"solar:alt-arrow-right-outline"} className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
      <HeroAbout />

      <section className="">
        <WhatWeDo />
      </section>
      <section className=" w-full overflow-x-hidden">
        <WhyJoinUs />
      </section>
      <section>
        <FAQS />
      </section>
    </div>
  );
}

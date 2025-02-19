"use client";

import ImageOne from "@/app/assets/images/dr_jude.jpg";
import Image from "next/image";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { EXECUTIVES } from "../constants/executives_data";
import { useState } from "react";

const years = ["2024", "2025"];

export default function Executives() {
  const [activeYear, setActiveYear] = useState(years[0]);
  const executives = EXECUTIVES[activeYear as keyof typeof EXECUTIVES];
  return (
    <div className=" p-6 mt-12">
      <section className=" mb-12 flex items-center flex-col justify-between">
        <h1 className=" text-5xl mb-3 font-semibold ">Executives</h1>
        <Select onValueChange={(value) => setActiveYear(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a year" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Academic Years</SelectLabel>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>
      <section className="p-6 mb-6 scroll-mt-20" id="executives">
        <section className=" grid place-content-center">
          <div className=" w-64 aspect-square rounded-full overflow-hidden">
            <Image src={ImageOne} alt="patron" className="h-full w-full object-cover object-center" />
          </div>
          <div className=" mt-2 text-center">
            <h4 className=" text-lg font-semibold">Dr. Jude Bonsu</h4>
            <p>Founder, Patron.</p>
          </div>
        </section>

        <div className=" grid md:grid-cols-3 lg:grid-cols-4 p-6 place-content-center mt-6 gap-4 gap-y-10 lg:gap-y-20">
          {executives.map((item) => {
            return (
              <div key={item.name}>
                <p className=" capitalize text-sm font-normal text-slate-900 border bg-slate-100 w-fit mx-auto px-3 py-2 mb-4 rounded-full">{item.portfolio}</p>
                <div className=" w-44 aspect-square rounded-full mx-auto overflow-hidden">
                  <Image src={item.image} alt={item.portfolio} className="h-full w-full object-cover object-center" />
                </div>
                <div className=" mt-2 text-center">
                  <h4 className=" text-lg font-semibold">{item.name}</h4>
                  <span className=" capitalize">{item.programme} Eng.</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

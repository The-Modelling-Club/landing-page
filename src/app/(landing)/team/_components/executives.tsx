"use client";

import ImageOne from "@/app/assets/images/dr_jude.jpg";
import Image from "next/image";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { findExecutives } from "@/utils/sanity-queries";
import { client } from "@/client";
import { ExecutivesInterface, PortfolioEntry } from "@/types/executives.interface";
import { Loader2 } from "lucide-react";

const years = ["2023", "2024", "2025"];

export default function Executives() {
  const [activeYear, setActiveYear] = useState(years[years.length - 1]);
  const [executives, setExecutives] = useState<ExecutivesInterface>();
  const [isLoading, setIsLoading] = useState(false);

  async function getExecutives() {
    setIsLoading(true);
    try {
      const data = await client.fetch(findExecutives, { activeYear });
      setExecutives(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getExecutives();
  }, [activeYear]);

  return (
    <div className=" p-6 mt-12">
      <section className=" mb-12 flex items-center flex-col justify-between">
        <h1 className=" text-5xl mb-3 font-semibold ">Executives</h1>
        <Select onValueChange={(value) => setActiveYear(value)}>
          <SelectTrigger className="w-[180px]">
            {/*you can change it to suit your needs*/}
            <div>{activeYear || "Select a year"}</div>
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

        {isLoading ? (
          <div className=" flex items-center justify-center text-center text-2xl font-semibold mt-5">
            <Loader2 size={24} className="animate-spin" />
          </div>
        ) : (
          <div className=" grid md:grid-cols-3 lg:grid-cols-4 p-6 place-content-center mt-6 gap-4 gap-y-10 lg:gap-y-20">
            {executives?.portfolio_entries?.map((item: PortfolioEntry) => {
              return (
                <div key={item.name}>
                  <p className=" capitalize text-sm font-normal text-slate-900 border bg-slate-100 w-fit mx-auto px-3 py-2 mb-4 rounded-full">
                    {item.portfolio}
                  </p>
                  <div className=" w-44 aspect-square rounded-full mx-auto overflow-hidden">
                    <Image src={item.image} alt={item.portfolio} className="h-full w-full object-cover object-center" priority width={2000} height={2000} />
                  </div>
                  <div className=" mt-2 text-center">
                    <h4 className=" text-lg font-semibold">{item.name}</h4>
                    <span className=" capitalize">{item.programme} Eng.</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

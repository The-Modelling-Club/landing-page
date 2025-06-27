"use client";

import { Button } from "@/components/ui/button";
import { projects } from "./_constants/projects";
import Image from "next/image";
import { useRouter } from "next/navigation";
import GT from "@/app/assets/images/GT.png";
import VCR from "@/app/assets/images/VCR.png";

export default function ServicesPage() {
  const router = useRouter();
  return (
    <div className=" py-12 p-4">
      <section className=" mt-20 lg:mt-0 max-w-screen-md mx-auto text-center">
        <h1 className="  text-4xl lg:text-6xl font-semibold mb-3 ">Our Projects</h1>
        <p>Here, you'll find a collection of cool tools and simulations we've built to solve real-world problems using computer-aided design.</p>
      </section>
      <section className=" max-w-screen-lg mt-8 py-6 mx-auto">
        {projects.map((s, i) => {
          return (
            <section key={s.id} id={s.name.toLocaleLowerCase().replaceAll(" ", "-")} className="grid scroll-m-24 md:grid-cols-2 mb-20  gap-6">
              <div className=" h-72 rounded-lg overflow-hidden">
                <Image src={s.imageUrl} width={1000} height={1000} alt="service" className=" h-full object-cover w-full " />
              </div>
              <div>
                <h3 className=" text-primary font-bold text-2xl mb-6">
                  {i + 1}. {s.name}
                </h3>
                <p className=" whitespace-pre-wrap ">{s.descriptionOne}</p>
              </div>
              <div className="border whitespace-pre-wrap  bg-stone-50 p-4 rounded-lg">
                <h6 className="mb-4 text-accent font-semibold">Description</h6>
                <p>{s.descriptionTwo}</p>
              </div>
              <ul className="flex border flex-col gap-2 bg-stone-50 rounded-lg p-4">
                {s.details.map((d, i) => (
                  <li key={i} className={`${i === 0 ? "mb-4 text-accent list-none font-semibold" : "list-disc list-inside"} `}>
                    {d}
                  </li>
                ))}
              </ul>
              {/* <Button
                onClick={() => router.push(`/contact?prefill=${s.name.toLowerCase().replaceAll(" ", "-")}#service`)}
                className=" md:col-span-2 w-fit mx-auto px-20 hover:bg-primary-950"
              >
                Book service
              </Button> */}
            </section>
          );
        })}
      </section>
    </div>
  );
}

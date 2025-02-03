"use client";

import * as React from "react";
import AutoPlay from "embla-carousel-autoplay";
import ImageOne from "@/app/assets/images/yaw_one.jpg";
import ImageTwo from "@/app/assets/images/maspolic_one.jpg";
import ImageThree from "@/app/assets/images/eddie_chrysler.jpg";
import ImageFour from "@/app/assets/images/dr_jude.jpg";
import ImageFive from "@/app/assets/images/jro_rich.jpg";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function HeroCarousel() {
  const items = [
    {
      title: "The Support Hub",
      type: "support",
      description: "Empowers leaders and advocates with tools and resources",
      image: ImageOne,
    },
    {
      title: "The Member App",
      type: "member",
      description: "Provides church members with on-the-go access to support and resources",
      image: ImageTwo,
    },
    {
      title: "Core Bundle",
      type: "core",
      description: "Your Complete Solution for Church Mental Health",
      image: ImageThree,
    },
    {
      title: "Core Bundle",
      type: "core",
      description: "Your Complete Solution for Church Mental Health",
      image: ImageFour,
    },
    {
      title: "Core Bundle",
      type: "core",
      description: "Your Complete Solution for Church Mental Health",
      image: ImageFive,
    },
  ];

  return (
    <div className="space-y-4  h-full p-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          AutoPlay({
            delay: 3000,
          }),
        ]}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4 h-full">
          {items.map((item, index) => (
            <CarouselItem key={index} className="h-[35rem]">
              <Card className={`relative border-none h-full overflow-hidden`}>
                <CardContent className="p-0  h-full">
                  <div className="relative h-full ">
                    <Image src={item.image} alt={item.title} className="w-full h-full object-center object-cover" />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </div>
  );
}

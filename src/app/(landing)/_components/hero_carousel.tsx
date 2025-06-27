"use client";

import * as React from "react";
import AutoPlay from "embla-carousel-autoplay";
import ImageOne from "@/app/assets/images/yaw_one.jpg";
import ImageTwo from "@/app/assets/images/maspolic_one.jpg";
import ImageThree from "@/app/assets/images/eddie_chrysler.jpg";
import ImageFour from "@/app/assets/images/dr_jude.jpg";
import ImageFive from "@/app/assets/images/jro_rich.jpg";
import ImageSix from "@/app/assets/images/IMG_0338.jpg";
import ImageSeven from "@/app/assets/images/otieku.jpg";
import ImageNine from "@/app/assets/images/IMG_0358.jpg";
import ImageTen from "@/app/assets/images/dr jude.jpg";
import ImageEight from "@/app/assets/images/martin.jpg";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function HeroCarousel() {
  const items = [
    {
      image: ImageOne,
    },
    {
      image: ImageTwo,
    },
    {
      image: ImageThree,
    },
    {
      image: ImageFour,
    },
    {
      image: ImageFive,
    },
    {
      image: ImageSix,
    },
    {
      image: ImageSeven,
    },
    {
      image: ImageNine,
    },
    {
      image: ImageEight,
    },
    {
      image: ImageTen,
    },
  ];

  return (
    <div className="space-y-4 h-full p-4">
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
            <CarouselItem key={index} className=" h-[25rem] lg:h-[35rem]">
              <Card className={`relative border-none h-full overflow-hidden`}>
                <CardContent className="p-0  h-full">
                  <div className="relative h-full ">
                    <Image src={item.image} alt={"hero"} className="w-full h-full object-center object-cover" />
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

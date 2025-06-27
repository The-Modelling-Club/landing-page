import { Share2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { format, parseISO } from "date-fns";
import { AllEventInterface } from "@/types/event.interface";

export default function EventCard({ status, title, image, date, start_time, description }: Readonly<AllEventInterface>) {
  const statusColor =
    status === "upcoming"
      ? "bg-tertiary text-white"
      : status === "ongoing"
        ? "bg-green-500 text-white"
        : status === "completed"
          ? "bg-gray-500 text-white"
          : "bg-red-500 text-white";

  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-lg border bg-white">
      <div className="relative">
        <div className="h-72 w-full rounded-lg bg-gray-300">
          <Image
            src={image}
            alt={`${title}'s thumbnail`}
            width={2000}
            height={100}
            unoptimized
            className="h-full w-full rounded-t-lg object-cover object-top"
          />
          {/* Gradient backdrop for title */}
          <div className="absolute bottom-0 p-4 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            {/* <p className={`w-fit rounded-lg px-3 py-1 capitalize ${statusColor} mb-2 text-sm font-normal`}>{status}</p> */}
            <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
            <p className="mb-4 text-sm text-white">
              {format(parseISO(date), "PPPP")}, {start_time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

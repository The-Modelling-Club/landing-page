import { Share2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { format, parseISO } from "date-fns";
import { AllEvent } from "@/types/event.interface";

export default function EventCard({
  status,
  title,
  image,
  date,
  start_time,
  description,
}: Readonly<AllEvent>) {
  const statusColor =
    status === "ongoing" ? "bg-green-500 text-green-100" : "text-red-500";

  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-3xl border bg-white">
      <div className="relative">
        <div className="h-52 w-full rounded-3xl bg-gray-300">
          <Image
            src={image}
            alt={`${title}'s thumbnail`}
            width={2000}
            height={100}
            unoptimized
            className="h-full w-full rounded-t-3xl object-cover object-top"
          />
        </div>
        <button className="absolute -bottom-4 right-5 rounded-full bg-white p-2 shadow">
          <Share2 size={20} className="text-primary" />
        </button>
      </div>

      <div className="p-4">
        <p
          className={`w-fit rounded-lg px-4 capitalize ${
            status === "upcoming" ? "bg-tertiary text-white" : statusColor
          } mb-2 text-sm font-normal`}
        >
          {status}
        </p>

        <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mb-4 text-sm text-gray-500">
          {format(parseISO(date), "PPPP")}, {start_time}
        </p>
        <p className="line-clamp-2 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

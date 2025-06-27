import { format, parseISO } from "date-fns";
import { Calendar, MapPin } from "lucide-react";
import React from "react";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/components/text-editor";
import { urlFor } from "@/lib/url-for";
import { Metadata } from "next";
import { EventInterface } from "@/types/event.interface";
import ShareEventPost from "./components/share-event";
import Image from "next/image";
import { client } from "@/client";
import { findEvent, findEvents } from "@/utils/sanity-queries";
import BackButton from "@/components/back-button";

export async function generateStaticParams() {
  const articles: EventInterface[] = await client.fetch(findEvents);
  const slugRoutes = articles.map((article: EventInterface) => article.slug);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  readonly params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data: EventInterface = await client.fetch(findEvent, {
    slug,
  });

  return {
    title: data?.title,
    description: data?.description,
    openGraph: {
      images: [
        {
          url: data?.event_img,
          alt: `${data?.title}'s image`,
        },
      ],
    },
  };
}
export const revalidate = 0;

export default async function SingleEvent({
  params,
}: {
  readonly params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await client.fetch(findEvent, { slug });

  return (
    <section className="py-18 mx-auto mb-12 w-[90%] md:w-[50rem] lg:my-16">
      <BackButton />
      <div className="flex w-full justify-center md:h-[20rem]">
        <Image
          src={urlFor(event.event_img).url()}
          alt="event"
          width={2000}
          height={2000}
          className="h-full w-full rounded-3xl object-cover"
        />
      </div>
      <div className="mt-10 text-left">
        <h1 className="text-4xl font-bold">{event.title}</h1>
      </div>
      <div className="mt-5 flex flex-col items-start border-y py-4 text-left md:flex-row md:items-center">
        <div className="flex flex-1 flex-col items-start gap-4 md:flex-row md:items-center md:gap-x-6">
          <div className="flex items-center gap-5">
            <Calendar size={20} className="text-gray-500" />
            <p className="text-lg text-gray-600">
              {format(parseISO(event.date), "PPP")}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <MapPin size={20} className="text-gray-500" />
            <p className="text-lg text-gray-600">{event.location}</p>
          </div>
        </div>
        <ShareEventPost title={event.title} />
      </div>
      <PortableText value={event.body} components={RichText} />

      <div className="mt-10 flex items-center justify-between border-y py-4">
        <ShareEventPost title={event.title}>Share</ShareEventPost>
      </div>
    </section>
  );
}

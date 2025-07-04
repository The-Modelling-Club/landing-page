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

export async function generateMetadata({ params }: { readonly params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data: EventInterface = await client.fetch(findEvent, {
    slug,
  });

  if (!data) {
    return {
      title: "Event Not Found | The Modeling Club - KNUST",
      description: "The requested event could not be found.",
    };
  }

  return {
    title: `${data.title} | The Modeling Club - KNUST`,
    description: data.description || `Join us for ${data.title} - an exciting engineering event hosted by The Modeling Club.`,
    keywords: `engineering event, ${data.title.toLowerCase()}, CAE, KNUST, ${data.location || "engineering workshop"}`,
    openGraph: {
      title: data.title,
      description: data.description || `Join us for ${data.title} - an exciting engineering event hosted by The Modeling Club.`,
      url: `https://themodelingclub.com/events/${data.slug}`,
      type: "website",
      images: data.event_img
        ? [
            {
              url: data.event_img,
              alt: `${data.title}'s event image`,
              width: 1200,
              height: 630,
            },
          ]
        : [],
      siteName: "The Modeling Club - KNUST",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description || `Join us for ${data.title} - an exciting engineering event hosted by The Modeling Club.`,
      images: data.event_img ? [data.event_img] : [],
    },
    alternates: {
      canonical: `/events/${data.slug}`,
    },
  };
}
export const revalidate = 0;

export default async function SingleEvent({ params }: { readonly params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await client.fetch(findEvent, { slug });

  return (
    <section className="py-18 mx-auto mb-12 w-[90%] md:w-[50rem] lg:my-16">
      <BackButton />
      <div className="flex w-full justify-center md:h-[20rem]">
        <Image src={urlFor(event.event_img).url()} alt="event" width={2000} height={2000} className="h-full w-full rounded-3xl object-cover" />
      </div>
      <div className="mt-10 text-left">
        <h1 className="text-4xl font-bold">{event.title}</h1>
      </div>
      <div className="mt-5 flex flex-col items-start border-b py-4 text-left md:flex-row md:items-center">
        <div className="flex flex-1 items-start gap-4 flex-row md:items-center md:gap-x-6">
          <div className="flex items-center gap-5">
            <Calendar size={14} className="text-gray-500" />
            <p className="text-sm text-gray-600">{format(parseISO(event.date), "PPP")}</p>
          </div>
          <div className="flex items-center gap-5">
            <MapPin size={14} className="text-gray-500" />
            <p className="text-sm text-gray-600">{event.location}</p>
          </div>
        </div>
        {/* <ShareEventPost title={event.title} /> */}
      </div>
      <PortableText value={event.body} components={RichText} />
    </section>
  );
}

import React from "react";
import EventCard from "./components/event-card";
import EventRoute from "./components/event-route";
import { client } from "@/client";
import { findEvents } from "@/utils/sanity-queries";
import type { EventInterface } from "@/types/event.interface";
import { Metadata } from "next";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Events | The Modeling Club - KNUST",
  description:
    "Join The Modeling Club events including training sessions, workshops, webinars, and networking opportunities. Register for upcoming events and learn about past activities.",
  keywords: "engineering events, CAE training, MATLAB workshops, CFD seminars, engineering webinars, KNUST events",
  openGraph: {
    title: "Events | The Modeling Club - KNUST",
    description: "Join our engineering events, training sessions, and workshops",
    url: "https://themodelingclub.com/events",
    type: "website",
    images: [
      {
        url: "/events-og.jpg",
        width: 1200,
        height: 630,
        alt: "Engineering Events - The Modeling Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Events | The Modeling Club - KNUST",
    description: "Join our engineering events, training sessions, and workshops",
    images: ["/events-og.jpg"],
  },
  alternates: {
    canonical: "/events",
  },
};

export default async function Event() {
  const events: EventInterface[] = await client.fetch(findEvents);

  return (
    <React.Fragment>
      <div className="max-w-screen-md py-6 md:py-12 text-center mx-auto ">
        <h1 className="text-4xl lg:text-6xl font-semibold mb-3">All Events</h1>
        <p>Register for an upcoming event, join us for an ongoing event and read about past events here, like and share your thoughts on them.</p>
      </div>
      <div className="container mx-auto px-2  mb-28 grid grid-cols-1 md:grid-cols-3 w-screen place-content-center gap-8">
        {/* Card */}
        {events.map((event: EventInterface) => (
          <EventRoute to={`/events/${event.slug}`} key={event.slug}>
            <EventCard
              _id={event._id}
              status={event.status}
              image={event.event_img}
              title={event.title}
              date={event.date}
              start_time={event.start_time}
              description={event.description}
            />
          </EventRoute>
        ))}
      </div>
    </React.Fragment>
  );
}

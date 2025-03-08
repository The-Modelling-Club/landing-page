import React from "react";
import EventCard from "./components/event-card";
import EventRoute from "./components/event-route";
import { client } from "@/client";
import { findEvents } from "@/utils/sanity-queries";
import type { EventInterface } from "@/types/event.interface";

export const revalidate = 0;

export default async function Event() {
  const events: EventInterface[] = await client.fetch(findEvents);

  return (
    <React.Fragment>
      <div className="text-center py-10 md:w-[40rem] mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          All Events
        </h1>
        <p>
          Register for an upcoming event, join us for an ongoing event and read
          about past events here, like and share your thoughts on them.
        </p>
      </div>
      <div className="container mx-auto px-8  mb-28 grid grid-cols-1 md:grid-cols-3 w-screen place-content-center gap-8">
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

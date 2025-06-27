import { StaticImageData } from "next/image";

interface EventInterface {
  _id: string;
  title: string;
  slug: string;
  description: string;
  event_img: string;
  status: string;
  start_time: string;
  end_time: string;
  date: string;
  location: string;
}

interface AllEventInterface {
  _id: string;
  image: StaticImageData | string;
  status: string;
  title: string;
  date: string;
  start_time: string;
  description: string;
}

export type { EventInterface, AllEventInterface };

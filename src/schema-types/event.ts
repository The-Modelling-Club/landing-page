import { defineField, defineType } from "sanity";

export default defineType({
  name: "events",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) =>
        rule.required().max(40).warning("Shorter titles are usually better"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required().error("Slug is required"),
    }),
    defineField({
      name: "description",
      title: "Event Description",
      type: "text",
      validation: (rule) =>
        rule
          .required()
          .error("Description is required")
          .max(25)
          .warning("Shorter descriptions are usually better"),
      description: "What is the event about?",
    }),
    defineField({
      name: "event_image",
      title: "Event image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required().error("Image is required"),
    }),
    defineField({
      name: "date",
      title: "Date of Event",
      type: "datetime",
      validation: (rule) => rule.required().error("Date is required"),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "Where the event will take place?",
      validation: (rule) => rule.required().error("Location is required"),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Ongoing", value: "ongoing" },
          { title: "Upcoming", value: "upcoming" },
          { title: "Ended", value: "ended" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required().error("Status is required"),
    }),
    defineField({
      name: "start_time",
      title: "Start Time",
      type: "string",
      description: "When the event will start?",
      validation: (rule) => rule.required().error("Start time is required"),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],
});

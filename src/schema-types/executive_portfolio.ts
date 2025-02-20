import { defineField, defineType } from "sanity";

export default defineType({
  name: "executive_portfolio",
  title: "Executive Portfolio",
  type: "document",
  fields: [
    defineField({
      name: "portfolio",
      title: "Portfolio",
      type: "string",
      validation: (rule) => rule.required().error("Portfolio is required"),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required().error("Name is required"),
    }),
    defineField({
      name: "programme",
      title: "Programme",
      type: "string",
      validation: (rule) => rule.required().error("Programme is required"),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required().error("Image is required"),
    }),
  ],
});

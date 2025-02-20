import { defineField, defineType } from "sanity";

export default defineType({
  name: "articles",
  title: "Article",
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
      title: "Article Description",
      type: "text",
      validation: (rule) =>
        rule
          .required()
          .error("Description is required")
          .max(25)
          .warning("Shorter descriptions are usually better"),
      description: "What is the article about?",
    }),
    defineField({
      name: "image_url",
      title: "Article image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required().error("Image is required"),
    }),
    defineField({
      name: "authors",
      title: "Authors",
      type: "array",
      of: [{ type: "reference", to: { type: "authors" } }],
      validation: (rule) => rule.required().error("Authors are required"),
    }),
    defineField({
      name: "content",
      title: "Body",
      type: "blockContent",
      validation: (rule) => rule.required().error("Body is required"),
      description: "The main content of the article",
    }),
  ],
});

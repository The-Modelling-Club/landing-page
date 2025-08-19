import { defineField, defineType } from "sanity";

export default defineType({
  name: "manuscript",
  title: "Manuscript",
  description: "A document representing a/your research manuscript or paper.",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) =>
        rule.required().max(50).warning("Shorter titles are usually better"),
    }),
    defineField({
      name: "image_url",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required().error("Image is required"),
    }),
    defineField({
      name: "pdfFile",
      type: "file",
      options: {
        accept: "application/pdf",
      },
      validation: (rule) => rule.required().assetRequired(),
    }),
    defineField({
      name: "is_downloadable",
      title: "Can download?",
      description: "If enabled, users can download the manuscript PDF.",
      type: "boolean",
      options: {
        layout: "switch",
      },
    }),
    defineField({
      name: "description",
      title: "Manuscript Description",
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
      name: "authors",
      title: "Authors",
      type: "array",
      of: [{ type: "reference", to: { type: "authors" } }],
      validation: (rule) => rule.required().error("Authors are required"),
    }),
  ],
});

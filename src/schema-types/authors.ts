import { defineField, defineType } from "sanity";

export default defineType({
  name: "authors",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "author_name",
      title: "Author's Full Name",
      type: "string",
      validation: (rule) => rule.required().error("Name is required"),
    }),
  ],
});

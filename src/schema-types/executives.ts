import { defineField, defineType } from "sanity";

export default defineType({
  name: "executives",
  title: "Executives",
  type: "document",
  fields: [
    defineField({
      name: "academic_year",
      title: "Academic Year",
      type: "string",
      validation: (rule) => rule.required().error("Academic year is required"),
    }),
    defineField({
      name: "portofolio_entries",
      title: "Portfolio Entries",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "executive_portfolio" }],
        },
      ],
    }),
  ],
});

import { defineType, defineField } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string"
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "string"
    })
  ]
});

import { validation } from "sanity";

export default {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title of blog article",
      validation: (rule) => [rule.required()],
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug of our blog article",
      options: {
        source: "title",
      },
      validation: (rule) => [rule.required()],
    },
    {
      name: "author",
      type: "reference",
      title: "Author",
      to: [
        {
          type: "author",
        },
      ],
      validation: (rule) => [rule.required()],
    },
    {
      name: "titleImage",
      type: "image",
      title: "Title Image",
      validation: (rule) => [rule.required()],
    },
    {
      name: "smallDescription",
      type: "text",
      title: "Small Description",
      validation: (rule) => [rule.required()],
    },
    {
      name: "content",
      type: "array",
      title: "Content",

      validation: (rule) => [rule.required()],
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
    },
  ],
};

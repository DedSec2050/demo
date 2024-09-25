export default {
  name: "article",
  type: "document",
  title: "Article",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title of Article",
      validation: (rule) => rule.required(),
    },
    {
      title: "Seo",
      name: "seo",
      type: "seoMetaFields",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug of the Article",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "author",
      type: "reference",
      title: "Author",
      to: [{ type: "author" }],
      validation: (rule) => rule.required(),
    },
    {
      name: "readingTime",
      type: "number",
      title: "Reading Time (in minutes)",
    },
    {
      name: "titleImage",
      type: "image",
      title: "Title Image",
      validation: (rule) => rule.required(),
    },
    {
      name: "smallDescription",
      type: "text",
      title: "Small Description",
      validation: (rule) => rule.required(),
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      validation: (rule) => rule.required(),
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
      description: "Date and time of publication",
    },
  ],
};

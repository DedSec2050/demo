export const author = {
  name: "author",
  type: "document",
  title: "Author",
  fields: [
    {
      name: "name",
      type: "string",
      title: "AuthorName",
      validation: (rule) => [rule.required()],
    },
    {
      name: "bio",
      type: "text",
      title: "Bio",
      validation: (rule) => [rule.required()],
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      validation: (rule) => [rule.required()],
      options: {
        hotspot: true,
      },
    },
  ],
};

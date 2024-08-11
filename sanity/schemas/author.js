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
      validation: (rule) => [
        rule
          .required()
          .max(60)
          .error("Please enter BIO of at most 60 characters"),
      ],
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

export default {
  name: "notes",
  type: "document",
  title: "Notes",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title of Notes",
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
      title: "Slug of the Notes",
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
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                name: "link",
                title: "Link",
                type: "object",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    name: "target",
                    title: "Target",
                    type: "string",
                    options: {
                      list: [
                        { title: "Same Tab", value: "_self" },
                        { title: "New Tab", value: "_blank" },
                      ],
                    },
                  },
                  {
                    name: "rel",
                    title: "Rel Attribute (Optional)",
                    type: "string",
                    description: "Example: nofollow",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt text",
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
      description: "Date and time of publication",
    },
  ],
};

import type { CollectionConfig } from "payload";

export const Experiences: CollectionConfig = {
  slug: "experiences",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: false,
    },
    {
      name: "items",
      type: "array",
      fields: [
        {
          name: "itemTitle",
          type: "text",
          required: true,
        },
        {
          name: "itemImage",
          type: "upload",
          relationTo: "media",
          required: false,
        },
      ],
      required: true,
    },
  ],
};

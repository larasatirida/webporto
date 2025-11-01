import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
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
      name: "link",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media", 
      required: false,
    },
    {
      name: "tags",
      type: "array",
      fields: [{ name: "tag", type: "text" }],
      required: false,
    },
  ],
};
